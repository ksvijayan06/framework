import app from '../../forum/app';
import PaginatedListState, { Page, PaginatedListParams, PaginatedListRequestParams, type SortMap } from '../../common/states/PaginatedListState';
import Discussion from '../../common/models/Discussion';
import { ApiResponsePlural } from '../../common/Store';
import EventEmitter from '../../common/utils/EventEmitter';

export interface DiscussionListParams extends PaginatedListParams {
  sort?: string;
}

const globalEventEmitter = new EventEmitter();

export default class DiscussionListState<P extends DiscussionListParams = DiscussionListParams> extends PaginatedListState<Discussion, P> {
  protected extraDiscussions: Discussion[] = [];
  protected eventEmitter: EventEmitter;

  constructor(params: P, page: number = 1) {
    super(params, page, null);

    this.eventEmitter = globalEventEmitter.on('discussion.deleted', this.deleteDiscussion.bind(this));
  }

  get type(): string {
    return 'discussions';
  }

  requestParams(): PaginatedListRequestParams {
    const params = {
      include: ['user', 'lastPostedUser'],
      filter: this.params.filter || {},
      sort: this.currentSort(),
    };

    if (this.params.q) {
      params.filter.q = this.params.q;
      params.include.push('mostRelevantPost', 'mostRelevantPost.user');
    }

    return params;
  }

  protected loadPage(page: number = 1): Promise<ApiResponsePlural<Discussion>> {
    const preloadedDiscussions = app.preloadedApiDocument<Discussion[]>();

    if (preloadedDiscussions) {
      this.initialLoading = false;
      this.pageSize = preloadedDiscussions.payload.meta?.perPage || DiscussionListState.DEFAULT_PAGE_SIZE;

      return Promise.resolve(preloadedDiscussions);
    }

    return super.loadPage(page);
  }

  clear(): void {
    super.clear();

    this.extraDiscussions = [];
  }

  /**
   * Get a map of sort keys (which appear in the URL, and are used for
   * translation) to the API sort value that they represent.
   */
  sortMap(): SortMap {
    const map: any = {};

    if (this.params.q) {
      map.relevance = '';
    }
    map.latest = '-lastPostedAt';
    map.top = '-commentCount';
    map.newest = '-createdAt';
    map.oldest = 'createdAt';

    return map;
  }

  removeDiscussion(discussion: Discussion): void {
    this.eventEmitter.emit('discussion.deleted', discussion);
  }

  deleteDiscussion(discussion: Discussion): void {
    for (const page of this.pages) {
      const index = page.items.indexOf(discussion);

      if (index !== -1) {
        page.items.splice(index, 1);
        break;
      }
    }

    const index = this.extraDiscussions.indexOf(discussion);

    if (index !== -1) {
      this.extraDiscussions.splice(index);
    }

    m.redraw();
  }

  /**
   * Add a discussion to the top of the list.
   */
  addDiscussion(discussion: Discussion): void {
    this.removeDiscussion(discussion);
    this.extraDiscussions.unshift(discussion);

    m.redraw();
  }

  protected getAllItems(): Discussion[] {
    return this.extraDiscussions.concat(super.getAllItems());
  }

  public getPages(): Page<Discussion>[] {
    const pages = super.getPages();

    if (this.extraDiscussions.length) {
      return [
        {
          number: -1,
          items: this.extraDiscussions,
        },
        ...pages,
      ];
    }

    return pages;
  }
}
