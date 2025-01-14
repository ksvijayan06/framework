<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Mentions\Notification;

use Flarum\Database\AbstractModel;
use Flarum\Locale\TranslatorInterface;
use Flarum\Notification\AlertableInterface;
use Flarum\Notification\Blueprint\BlueprintInterface;
use Flarum\Notification\MailableInterface;
use Flarum\Post\Post;
use Flarum\User\User;

class UserMentionedBlueprint implements BlueprintInterface, AlertableInterface, MailableInterface
{
    public function __construct(
        public Post $post
    ) {
    }

    public function getSubject(): ?AbstractModel
    {
        return $this->post;
    }

    public function getFromUser(): ?User
    {
        return $this->post->user;
    }

    public function getData(): mixed
    {
        return null;
    }

    public function getEmailViews(): array
    {
        return [
            'text' => 'flarum-mentions::emails.plain.userMentioned',
            'html' => 'flarum-mentions::emails.html.userMentioned'
        ];
    }

    public function getEmailSubject(TranslatorInterface $translator): string
    {
        return $translator->trans('flarum-mentions.email.user_mentioned.subject', [
            '{mentioner_display_name}' => $this->post->user->display_name,
            '{title}' => $this->post->discussion->title
        ]);
    }

    public static function getType(): string
    {
        return 'userMentioned';
    }

    public static function getSubjectModel(): string
    {
        return Post::class;
    }
}
