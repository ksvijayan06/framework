(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)o.o(n,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t),o.d(t,{extend:()=>Q});const n=flarum.reg.get("core","common/extend"),r=flarum.reg.get("core","forum/app");var s=o.n(r);const e=flarum.reg.get("core","common/models/Discussion");var i=o.n(e);const a=flarum.reg.get("core","common/components/Badge");var l=o.n(a);const u=flarum.reg.get("core","common/components/Button");var c=o.n(u);const f=flarum.reg.get("core","forum/components/DiscussionPage");var p=o.n(f);const b=flarum.reg.get("core","forum/utils/DiscussionControls");var g=o.n(b);function d(o){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},d(o)}function _(o,t,n){return(t=function(o){var t=function(o,t){if("object"!==d(o)||null===o)return o;var n=o[Symbol.toPrimitive];if(void 0!==n){var r=n.call(o,t);if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(o)}(o,"string");return"symbol"===d(t)?t:String(t)}(t))in o?Object.defineProperty(o,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):o[t]=n,o}const y=flarum.reg.get("core","common/components/Dropdown");var w=o.n(y);const v=flarum.reg.get("core","common/utils/extractText");var h=o.n(v);const S=flarum.reg.get("core","common/components/DetailedDropdownItem");var x=o.n(S);const P=flarum.reg.get("core","common/components/SplitDropdown");var A=o.n(P);class k extends(w()){constructor(){super(...arguments),_(this,"options",[{subscription:null,icon:"far fa-star",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.not_following_button"),description:s().translator.trans("flarum-subscriptions.forum.sub_controls.not_following_text")},{subscription:"follow",icon:"fas fa-star",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.following_button"),description:s().translator.trans("flarum-subscriptions.forum.sub_controls.following_text")},{subscription:"ignore",icon:"far fa-eye-slash",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button"),description:s().translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_text")}]),_(this,"possibleButtonAttrs",{null:{icon:"far fa-star",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.follow_button")},follow:{icon:"fas fa-star",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.following_button")},ignore:{icon:"far fa-eye-slash",label:s().translator.trans("flarum-subscriptions.forum.sub_controls.ignoring_button")}})}view(){const o=this.attrs.discussion,t=o.subscription(),n=this.possibleButtonAttrs[t],r=s().session.user.preferences(),e=r.notify_newPost_email,i=r.notify_newPost_alert,a=h()(s().translator.trans(e?"flarum-subscriptions.forum.sub_controls.notify_email_tooltip":"flarum-subscriptions.forum.sub_controls.notify_alert_tooltip")),l=(e||i)&&null===t;return m(A(),{className:"SubscriptionMenu",buttonClassName:"SubscriptionMenu-button--".concat(t),tooltip:l?a:null,mainAction:m(c(),{className:"SubscriptionMenu-button",icon:n.icon,onclick:this.saveSubscription.bind(this,o,-1!==["follow","ignore"].indexOf(t)?null:"follow")},n.label)},this.options.map((n=>m(x(),Object.assign({},n,{onclick:this.saveSubscription.bind(this,o,n.subscription),active:t===n.subscription})))))}saveSubscription(o,t){o.save({subscription:t}),this.$(".SubscriptionMenu-button").tooltip("hide")}}flarum.reg.add("flarum-subscriptions","forum/components/SubscriptionMenu",k);const N=flarum.reg.get("core","common/components/LinkButton");var j=o.n(N);const M=flarum.reg.get("core","forum/components/IndexPage");var D=o.n(M);const F=flarum.reg.get("core","forum/components/IndexSidebar");var L=o.n(F);const O=flarum.reg.get("core","forum/states/DiscussionListState");var I=o.n(O);const R=flarum.reg.get("core","forum/states/GlobalSearchState");var T=o.n(R);const B=flarum.reg.get("core","common/components/Switch");var G=o.n(B);const C=flarum.reg.get("core","forum/components/Notification");var q=o.n(C);class K extends(q()){icon(){return"fas fa-star"}href(){const o=this.attrs.notification,t=o.subject(),n=o.content()||{};return s().route.discussion(t,n.postNumber)}content(){return s().translator.trans("flarum-subscriptions.forum.notifications.new_post_text",{user:this.attrs.notification.fromUser()})}excerpt(){return null}}flarum.reg.add("flarum-subscriptions","forum/components/NewPostNotification",K);const z=flarum.reg.get("core","common/extenders");var E=o.n(z);const U=flarum.reg.get("core","common/app");var $=o.n(U);const H=flarum.reg.get("core","common/query/IGambit");class J extends H.BooleanGambit{key(){return[$().translator.trans("flarum-subscriptions.lib.gambits.discussions.subscription.following_key",{},!0),$().translator.trans("flarum-subscriptions.lib.gambits.discussions.subscription.ignoring_key",{},!0)]}toFilter(o,t){return{[(t?"-":"")+this.filterKey()]:o[1]}}filterKey(){return"subscription"}fromFilter(o,t){return"".concat(t?"-":"","is:").concat(o)}enabled(){return!!$().session.user}}flarum.reg.add("flarum-subscriptions","common/query/discussions/SubscriptionGambit",J);const Q=[(new(E().Search)).gambit("discussions",J),(new(E().Routes)).add("following","/following",D()),new(E().Model)(i()).attribute("subscription")];s().initializers.add("subscriptions",(function(){s().notificationComponents.newPost=K,(0,n.extend)(i().prototype,"badges",(function(o){let t;switch(this.subscription()){case"follow":t=m(l(),{label:s().translator.trans("flarum-subscriptions.forum.badge.following_tooltip"),icon:"fas fa-star",type:"following"});break;case"ignore":t=m(l(),{label:s().translator.trans("flarum-subscriptions.forum.badge.ignoring_tooltip"),icon:"far fa-eye-slash",type:"ignoring"})}t&&o.add("subscription",t)})),(0,n.extend)(g(),"userControls",(function(o,t,n){if(s().session.user&&!(n instanceof p())){const n={none:{label:s().translator.trans("flarum-subscriptions.forum.discussion_controls.follow_button"),icon:"fas fa-star",save:"follow"},follow:{label:s().translator.trans("flarum-subscriptions.forum.discussion_controls.unfollow_button"),icon:"far fa-star",save:null},ignore:{label:s().translator.trans("flarum-subscriptions.forum.discussion_controls.unignore_button"),icon:"fas fa-eye",save:null}},r=t.subscription()||"none";o.add("subscription",m(c(),{icon:n[r].icon,onclick:t.save.bind(t,{subscription:n[r].save})},n[r].label))}})),(0,n.extend)(p().prototype,"sidebarItems",(function(o){if(s().session.user){const t=this.discussion;o.add("subscription",m(k,{discussion:t}),80)}})),(0,n.extend)(L().prototype,"navItems",(function(o){if(s().session.user){const t=s().search.state.stickyParams();o.add("following",m(j(),{href:s().route("following",t),icon:"fas fa-star"},s().translator.trans("flarum-subscriptions.forum.index.following_link")),50)}})),(0,n.extend)(D().prototype,"setTitle",(function(){"following"===s().current.get("routeName")&&s().setTitle(s().translator.trans("flarum-subscriptions.forum.following.meta_title_text"))})),(0,n.extend)(T().prototype,"params",(function(o){o.onFollowing="following"===s().current.get("routeName")})),(0,n.extend)(I().prototype,"requestParams",(function(o){this.params.onFollowing&&(o.filter||(o.filter={}),o.filter.subscription="following")})),(0,n.extend)("flarum/forum/components/SettingsPage","notificationsItems",(function(o){var t;o.add("followAfterReply",m(G(),{state:this.user.preferences().followAfterReply,onchange:o=>{this.followAfterReplyLoading=!0,this.user.savePreferences({followAfterReply:o}).then((()=>{this.followAfterReplyLoading=!1,m.redraw()}))},loading:this.followAfterReplyLoading},s().translator.trans("flarum-subscriptions.forum.settings.follow_after_reply_label"))),o.add("notifyForAllPosts",m(G(),{id:"flarum_subscriptions__notify_for_all_posts",state:!(null==(t=this.user.preferences())||!t["flarum-subscriptions.notify_for_all_posts"]),onchange:o=>{this.notifyForAllPostsLoading=!0,this.user.savePreferences({"flarum-subscriptions.notify_for_all_posts":o}).then((()=>{this.notifyForAllPostsLoading=!1,m.redraw()}))},loading:this.notifyForAllPostsLoading},s().translator.trans("flarum-subscriptions.forum.settings.notify_for_all_posts_label")))})),(0,n.extend)("flarum/forum/components/NotificationGrid","notificationTypes",(function(o){o.add("newPost",{name:"newPost",icon:"fas fa-star",label:s().translator.trans("flarum-subscriptions.forum.settings.notify_new_post_label")})}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map