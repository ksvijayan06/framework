"use strict";(self.webpackChunkflarum_core=self.webpackChunkflarum_core||[]).push([[298],{1612:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var a=s(8805),o=s(3554),r=s(3420),n=s(6064),i=s(1868),l=s(7880),c=s(592),d=s(5710),h=s(5215),u=s(7479);class g extends d.A{oninit(e){super.oninit(e),this.methods=this.notificationMethods().toArray(),this.loading={},this.types=this.notificationTypes().toArray()}view(){const e=this.attrs.user.preferences();return m("table",{className:"NotificationGrid"},m("thead",null,m("tr",null,m("td",null),this.methods.map((e=>m("th",{className:"NotificationGrid-groupToggle",onclick:this.toggleMethod.bind(this,e.name)},m(u.A,{name:e.icon})," ",e.label))))),m("tbody",null,this.types.map((t=>m("tr",null,m("td",{className:"NotificationGrid-groupToggle",onclick:this.toggleType.bind(this,t.name)},m(u.A,{name:t.icon})," ",t.label),this.methods.map((s=>{const a=this.preferenceKey(t.name,s.name);return m("td",{className:"NotificationGrid-checkbox"},m(h.A,{state:!!e[a],loading:this.loading[a],disabled:!(a in e),onchange:this.toggle.bind(this,[a])},m("span",{className:"sr-only"},o.A.translator.trans("core.forum.settings.notification_checkbox_a11y_label_template",{description:t.label,method:s.label}))))})))))))}oncreate(e){super.oncreate(e),this.$("thead .NotificationGrid-groupToggle").bind("mouseenter mouseleave",(function(e){const t=parseInt($(this).index(),10)+1;$(this).parents("table").find("td:nth-child("+t+")").toggleClass("highlighted","mouseenter"===e.type)})),this.$("tbody .NotificationGrid-groupToggle").bind("mouseenter mouseleave",(function(e){$(this).parent().find("td").toggleClass("highlighted","mouseenter"===e.type)}))}toggle(e){const t=this.attrs.user,s=t.preferences(),a=!s[e[0]];e.forEach((e=>{this.loading[e]=!0,s[e]=a})),m.redraw(),t.save({preferences:s}).then((()=>{e.forEach((e=>this.loading[e]=!1)),m.redraw()}))}toggleMethod(e){const t=this.types.map((t=>this.preferenceKey(t.name,e))).filter((e=>e in this.attrs.user.preferences()));this.toggle(t)}toggleType(e){const t=this.methods.map((t=>this.preferenceKey(e,t.name))).filter((e=>e in this.attrs.user.preferences()));this.toggle(t)}preferenceKey(e,t){return"notify_"+e+"_"+t}notificationMethods(){const e=new n.A;return e.add("alert",{name:"alert",icon:"fas fa-bell",label:o.A.translator.trans("core.forum.settings.notify_by_web_heading")}),e.add("email",{name:"email",icon:"far fa-envelope",label:o.A.translator.trans("core.forum.settings.notify_by_email_heading")}),e}notificationTypes(){const e=new n.A;return e.add("discussionRenamed",{name:"discussionRenamed",icon:"fas fa-pencil-alt",label:o.A.translator.trans("core.forum.settings.notify_discussion_renamed_label")}),e}}flarum.reg.add("core","forum/components/NotificationGrid",g);var p=s(2855),f=s(374);class A extends p.A{className(){return"ChangePasswordModal Modal--small"}title(){return o.A.translator.trans("core.forum.change_password.title")}content(){return m("div",{className:"Modal-body"},m(f.A,{className:"Form--centered"},this.fields().toArray()))}fields(){const e=new n.A;return e.add("help",m("p",{className:"helpText"},o.A.translator.trans("core.forum.change_password.text"))),e.add("submit",m("div",{className:"Form-group Form-controls"},m(l.A,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},o.A.translator.trans("core.forum.change_password.send_button")))),e}onsubmit(e){e.preventDefault(),this.loading=!0,o.A.request({method:"POST",url:o.A.forum.attribute("apiUrl")+"/forgot",body:this.requestBody()}).then(this.hide.bind(this),this.loaded.bind(this))}requestBody(){return{email:o.A.session.user.email()}}}flarum.reg.add("core","forum/components/ChangePasswordModal",A);var b=s(4311);class _ extends p.A{constructor(){super(...arguments),(0,a.A)(this,"email",void 0),(0,a.A)(this,"password",void 0),(0,a.A)(this,"success",!1)}oninit(e){super.oninit(e),this.email=(0,b.A)(o.A.session.user.email()||""),this.password=(0,b.A)("")}className(){return"ChangeEmailModal Modal--small"}title(){return o.A.translator.trans("core.forum.change_email.title")}content(){return m("div",{className:"Modal-body"},m(f.A,{className:"Form--centered"},this.fields().toArray()))}fields(){const e=new n.A;return this.success?(e.add("help",m("p",{className:"helpText"},o.A.translator.trans("core.forum.change_email.confirmation_message",{email:m("strong",null,this.email())}))),e.add("dismiss",m("div",{className:"Form-group"},m(l.A,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},o.A.translator.trans("core.forum.change_email.dismiss_button"))))):(e.add("email",m("div",{className:"Form-group"},m("input",{type:"email",name:"email",className:"FormControl",placeholder:o.A.session.user.email(),bidi:this.email,disabled:this.loading}))),e.add("password",m("div",{className:"Form-group"},m("input",{type:"password",name:"password",className:"FormControl",autocomplete:"current-password",placeholder:o.A.translator.trans("core.forum.change_email.confirm_password_placeholder"),bidi:this.password,disabled:this.loading}))),e.add("submit",m("div",{className:"Form-group Form-controls"},m(l.A,{className:"Button Button--primary Button--block",type:"submit",loading:this.loading},o.A.translator.trans("core.forum.change_email.submit_button"))))),e}onsubmit(e){e.preventDefault(),this.email()!==o.A.session.user.email()?(this.loading=!0,this.alertAttrs=null,o.A.session.user.save(this.requestAttributes(),{errorHandler:this.onerror.bind(this),meta:{password:this.password()}}).then((()=>{this.success=!0})).catch((()=>{})).then(this.loaded.bind(this))):this.hide()}requestAttributes(){return{email:this.email()}}onerror(e){401===e.status&&e.alert&&(e.alert.content=o.A.translator.trans("core.forum.change_email.incorrect_password_message")),super.onerror(e)}}flarum.reg.add("core","forum/components/ChangeEmailModal",_);var y=s(5673),w=s(117),N=s(4268),v=s(2188),S=s(7734);class k extends r.A{constructor(){super(...arguments),(0,a.A)(this,"discloseOnlineLoading",void 0),(0,a.A)(this,"colorSchemeLoading",void 0)}oninit(e){super.oninit(e),this.show(o.A.session.user),o.A.setTitle((0,w.A)(o.A.translator.trans("core.forum.settings.title")))}content(){return m("div",{className:"SettingsPage"},m("ul",null,(0,y.A)(this.settingsItems().toArray())))}sectionProps(){return{account:{className:"FieldSet--col"},colorScheme:{className:"FieldSet--col",visible:()=>o.A.allowUserColorScheme}}}settingsItems(){const e=new n.A;return["account","notifications","privacy","colorScheme"].forEach(((t,s)=>{const a="".concat(t,"Items"),{className:r,visible:n,...i}=this.sectionProps()[t]||{};n&&!1===n()||e.add(t,m(c.A,Object.assign({className:(0,N.A)("Settings-".concat(t," FieldSet--min"),r||""),label:o.A.translator.trans("core.forum.settings.".concat((0,S.OQ)(t),"_heading"))},i),this[a]().toArray()),100-10*s)})),e}accountItems(){const e=new n.A;return e.add("changePassword",m(l.A,{className:"Button",onclick:()=>o.A.modal.show(A)},o.A.translator.trans("core.forum.settings.change_password_button")),100),e.add("changeEmail",m(l.A,{className:"Button",onclick:()=>o.A.modal.show(_)},o.A.translator.trans("core.forum.settings.change_email_button")),90),e}notificationsItems(){const e=new n.A;return e.add("notificationGrid",m(g,{user:this.user}),100),e}privacyItems(){var e;const t=new n.A;return t.add("discloseOnline",m(i.A,{state:null==(e=this.user.preferences())?void 0:e.discloseOnline,onchange:e=>{this.discloseOnlineLoading=!0,this.user.savePreferences({discloseOnline:e}).then((()=>{this.discloseOnlineLoading=!1,m.redraw()}))},loading:this.discloseOnlineLoading},o.A.translator.trans("core.forum.settings.privacy_disclose_online_label")),100),t}colorSchemeItems(){const e=new n.A;return v.A.colorSchemes.forEach((t=>{var s;e.add(t.id,m(v.A,{mode:t.id,label:t.label||o.A.translator.trans("core.forum.settings.color_schemes."+t.id.replace("-","_")+"_mode_label"),selected:(null==(s=this.user.preferences())?void 0:s.colorScheme)===t.id,loading:this.colorSchemeLoading,onclick:()=>{this.colorSchemeLoading=!0,this.user.savePreferences({colorScheme:t.id}).then((()=>{this.colorSchemeLoading=!1,o.A.setColorScheme(t.id),m.redraw()}))}}),100)})),e}}flarum.reg.add("core","forum/components/SettingsPage",k)}}]);
//# sourceMappingURL=SettingsPage.js.map