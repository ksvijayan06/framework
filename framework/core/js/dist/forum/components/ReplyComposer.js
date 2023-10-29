"use strict";(self.webpackChunkflarum_core=self.webpackChunkflarum_core||[]).push([[630],{2140:(s,e,t)=>{t.d(e,{Z:()=>h});var o=t(2190),r=t(5226);class i extends o.Z{handler(){return this.attrs.when()||void 0}oncreate(s){super.oncreate(s),this.boundHandler=this.handler.bind(this),$(window).on("beforeunload",this.boundHandler)}onremove(s){super.onremove(s),$(window).off("beforeunload",this.boundHandler)}view(s){return m("[",null,s.children)}}flarum.reg.add("core","common/components/ConfirmDocumentUnload",i);var n=t(4944),a=t(1268),c=t(4041),l=t(3344),d=t(7323);class h extends o.Z{oninit(s){super.oninit(s),this.composer=this.attrs.composer,this.loading=!1,this.attrs.confirmExit&&this.composer.preventClosingWhen((()=>this.hasChanges()),this.attrs.confirmExit),this.composer.fields.content(this.attrs.originalContent||"")}view(){var s;return m(i,{when:this.hasChanges.bind(this)},m("div",{className:(0,l.Z)("ComposerBody",this.attrs.className)},m(d.Z,{user:this.attrs.user,className:"ComposerBody-avatar"}),m("div",{className:"ComposerBody-content"},m("ul",{className:"ComposerBody-header"},(0,a.Z)(this.headerItems().toArray())),m("div",{className:"ComposerBody-editor"},m(n.Z,{submitLabel:this.attrs.submitLabel,placeholder:this.attrs.placeholder,disabled:this.loading||this.attrs.disabled,composer:this.composer,preview:null==(s=this.jumpToPreview)?void 0:s.bind(this),onchange:this.composer.fields.content,onsubmit:this.onsubmit.bind(this),value:this.composer.fields.content()}))),m(r.Z,{display:"unset",containerClassName:(0,l.Z)("ComposerBody-loading",this.loading&&"active"),size:"large"})))}hasChanges(){const s=this.composer.fields.content();return s&&s!==this.attrs.originalContent}headerItems(){return new c.Z}onsubmit(){}loaded(){this.loading=!1,m.redraw()}}flarum.reg.add("core","forum/components/ComposerBody",h)},2925:(s,e,t)=>{t.r(e),t.d(e,{default:()=>d});var o=t(6789),r=t(2140),i=t(7202),n=t(6597),a=t(1552),c=t(9133);function l(s){o.Z.composer.isFullScreen()&&(o.Z.composer.minimize(),s.stopPropagation())}class d extends r.Z{static initAttrs(s){super.initAttrs(s),s.placeholder=s.placeholder||(0,a.Z)(o.Z.translator.trans("core.forum.composer_reply.body_placeholder")),s.submitLabel=s.submitLabel||o.Z.translator.trans("core.forum.composer_reply.submit_button"),s.confirmExit=s.confirmExit||(0,a.Z)(o.Z.translator.trans("core.forum.composer_reply.discard_confirmation"))}headerItems(){const s=super.headerItems(),e=this.attrs.discussion;return s.add("title",m("h3",null,m(c.Z,{name:"fas fa-reply"})," ",m(n.Z,{href:o.Z.route.discussion(e),onclick:l},e.title()))),s}jumpToPreview(s){l(s),m.route.set(o.Z.route.discussion(this.attrs.discussion,"reply"))}data(){return{content:this.composer.fields.content(),relationships:{discussion:this.attrs.discussion}}}onsubmit(){const s=this.attrs.discussion;this.loading=!0,m.redraw();const e=this.data();o.Z.store.createRecord("posts").save(e).then((e=>{if(o.Z.viewingDiscussion(s)){const s=o.Z.current.get("stream");s.update().then((()=>s.goToNumber(e.number())))}else{let s;const t=m(i.Z,{className:"Button Button--link",onclick:()=>{m.route.set(o.Z.route.post(e)),o.Z.alerts.dismiss(s)}},o.Z.translator.trans("core.forum.composer_reply.view_button"));s=o.Z.alerts.show({type:"success",controls:[t]},o.Z.translator.trans("core.forum.composer_reply.posted_message"))}this.composer.hide()}),this.loaded.bind(this))}}flarum.reg.add("core","forum/components/ReplyComposer",d)}}]);
//# sourceMappingURL=ReplyComposer.js.map