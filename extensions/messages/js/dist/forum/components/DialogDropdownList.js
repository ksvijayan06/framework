"use strict";(self.webpackChunkmodule_exports=self.webpackChunkmodule_exports||[]).push([[172],{790:(t,a,s)=>{s.r(a),s.d(a,{default:()=>N});var e=s(892),i=s.n(e),o=s(433),r=s.n(o),n=s(889),l=s.n(n),u=s(292),d=s(7),c=s.n(d),g=s(960),f=s.n(g),h=s(547),p=s.n(h),v=s(645),_=s.n(v);class N extends(r()){oninit(t){super.oninit(t)}view(){const t=this.attrs.state;return m(l(),{className:"DialogDropdownList",title:i().translator.trans("flarum-messages.forum.dialog_list.title"),controls:this.controlItems(),hasItems:t.hasItems(),loading:t.isLoading(),emptyText:i().translator.trans("flarum-messages.forum.messages_page.empty_text"),loadMore:()=>t.hasNext()&&!t.isLoadingNext()&&t.loadNext(),footer:()=>m("h4",null,m(c(),{href:i().route("messages"),className:"Button Button--link",icon:"fas fa-inbox"},i().translator.trans("flarum-messages.forum.dialog_list.view_all")))},m("div",{className:"HeaderListGroup-content"},this.content()))}controlItems(){const t=new(f()),a=this.attrs.state;return i().session.user.attribute("messageCount")>0&&t.add("mark_all_as_read",m(p(),{text:i().translator.trans("flarum-messages.forum.messages_page.mark_all_as_read_tooltip")},m(_(),{className:"Button Button--link","data-container":".DialogDropdownList",icon:"fas fa-check",title:i().translator.trans("flarum-messages.forum.messages_page.mark_all_as_read_tooltip"),onclick:a.markAllAsRead.bind(a)})),70),t}content(){return m(u.Z,{state:this.attrs.state,hideMore:!0,itemActions:!0})}}flarum.reg.add("flarum-messages","forum/components/DialogDropdownList",N)},292:(t,a,s)=>{s.d(a,{Z:()=>I});var e=s(892),i=s.n(e),o=s(433),r=s.n(o),n=s(645),l=s.n(n),u=s(836),d=s.n(u),c=s(678),g=s.n(c),f=s(343),h=s.n(f),p=s(479),v=s.n(p),_=s(491),N=s.n(_),D=s(960),L=s.n(D);class k extends(r()){view(t){var a;const s=this.attrs.dialog,e=s.recipient(),o=s.lastMessage();return m("li",{className:d()("DialogListItem",{"DialogListItem--unread":s.unreadCount(),active:this.attrs.active})},m(g(),{href:i().route.dialog(s),className:d()("DialogListItem-button",{active:this.attrs.active})},m("div",{className:"DialogListItem-avatar"},m(h(),{user:e}),!!s.unreadCount()&&m("div",{className:"Bubble Bubble--primary"},s.unreadCount())),m("div",{className:"DialogListItem-content"},m("div",{className:"DialogListItem-title"},v()(e),N()(s.lastMessageAt()),this.attrs.actions&&m("div",{className:"DialogListItem-actions"},this.actionItems().toArray())),m("div",{className:"DialogListItem-lastMessage"},o?null==(a=o.contentPlain())?void 0:a.slice(0,80):""))))}actionItems(){const t=new(L());return t.add("markAsRead",m(l(),{className:"Notification-action Button Button--link",icon:"fas fa-check","aria-label":i().translator.trans("flarum-messages.forum.dialog_list.mark_as_read_tooltip"),onclick:t=>{var a;t.preventDefault(),t.stopPropagation(),this.attrs.dialog.save({lastReadMessageId:(null==(a=this.attrs.dialog.data.relationships)?void 0:a.lastMessage.data).id}).finally((()=>{var t;0===this.attrs.dialog.unreadCount()&&i().session.user.pushAttributes({messageCount:(null!=(t=i().session.user.attribute("messageCount"))?t:1)-1}),m.redraw()}))}}),100),t}}flarum.reg.add("flarum-messages","forum/components/DialogListItem",k);class I extends(r()){oninit(t){super.oninit(t)}oncreate(t){super.oncreate(t)}onupdate(t){super.onupdate(t)}view(){return m("div",{className:"DialogList"},m("ul",{className:"DialogList-list"},this.attrs.state.getAllItems().map((t=>{var a;return m(k,{dialog:t,active:(null==(a=this.attrs.activeDialog)?void 0:a.id())===t.id(),actions:this.attrs.itemActions})}))),this.attrs.state.hasNext()&&!this.attrs.hideMore&&m("div",{className:"DialogList-loadMore"},m(l(),{className:"Button",onclick:this.attrs.state.loadNext.bind(this.attrs.state)},i().translator.trans("flarum-messages.forum.dialog_list.load_more_button"))))}}flarum.reg.add("flarum-messages","forum/components/DialogList",I)}}]);
//# sourceMappingURL=DialogDropdownList.js.map