(self["webpackChunkmy_personal_web"]=self["webpackChunkmy_personal_web"]||[]).push([[235],{9235:function(t,a,s){"use strict";s.r(a),s.d(a,{default:function(){return u}});var i=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"main_background"},[a("video",{staticClass:"d-none d-md-block",attrs:{id:"main_background",autoplay:"",loop:"",muted:"",poster:s(830)},domProps:{muted:!0}},[a("source",{attrs:{src:s(4546)}})])]),a("nav",{staticClass:"navbar fixed-top navbar-expand-md top_nav"},[a("div",{staticClass:"container-fluid"},[a("img",{staticClass:"navbar-brand",attrs:{src:s(1057),alt:"LOGO"}}),t._m(0),a("div",{staticClass:"offcanvas offcanvas-end",attrs:{tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"}},[t._m(1),a("div",{staticClass:"offcanvas-body"},[a("ul",{staticClass:"navbar-nav justify-content-end flex-grow-1"},[t._l(t.pageArray,(function(s){return a("li",{key:s.name,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:s.router}},[t._v(t._s(s.name))])],1)})),a("li",{staticClass:"nav-item",staticStyle:{flex:"1"}}),t._m(2)],2)])])])]),a("div",{staticClass:"box_left"},[t._m(3),a("div",{staticClass:"list-group-group mt-2 mb-2"},[a("div",{staticClass:"list-group"},[a("button",{staticClass:"list-group-item list-group-item-action",attrs:{type:"button"},on:{click:function(a){return t.background_click(!0)}}},[t._v("背景: "),a("span",{style:t.background_button_span_style},[t._v(t._s(t.background?"开":"关"))])]),a("button",{staticClass:"list-group-item list-group-item-action",attrs:{type:"button"},on:{click:function(a){return t.background_click(!1)}}},[t._v("背景音乐: "),a("span",{style:t.background_music_button_span_style},[t._v(t._s(t.background_music?"开":"关"))])])]),a("hr",{staticStyle:{margin:"1px"}}),t._m(4)])]),a("audio",{ref:"audioRef",attrs:{autoplay:"",src:t.currentAudio,id:"BGaudio"}}),a("transition",{attrs:{name:"page-fade"}},[a("router-view",{attrs:{"music-list":t.musicList,"music-current-index":t.musicCurrentIndex},on:{musicindex:t.ichange}})],1),t._m(5)],1)},n=[function(){var t=this,a=t._self._c;return a("button",{staticClass:"navbar-toggler",staticStyle:{"background-color":"#c6baa9"},attrs:{type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"}},[a("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"offcanvas-header"},[a("h5",{staticClass:"offcanvas-title",attrs:{id:"offcanvasNavbarLabel"}},[t._v("导航栏")]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"}})])},function(){var t=this,a=t._self._c;return a("li",{staticClass:"nav-item",staticStyle:{"border-left":"1px solid #fff"}},[a("a",{staticClass:"nav-link",staticStyle:{color:"#fff","font-weight":"100",cursor:"alias"},attrs:{"aria-current":"page",href:"../peosonalResum",target:"_blank"}},[t._v("个人简历↗")])])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"my-profile-photo text-center"},[a("img",{attrs:{width:"100px",height:"100px",src:s(308),alt:"0.0"}})])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"list-group"},[a("button",{staticClass:"list-group-item list-group-item-action",staticStyle:{color:"#990000"},attrs:{type:"button"}},[t._v("Godot 游戏项目")]),a("button",{staticClass:"list-group-item list-group-item-action",staticStyle:{"flex-direction":"column"},attrs:{type:"button",disabled:""}},[t._v("所有内容均不参与盈利，若有侵权请联系我删除"),a("span",{staticStyle:{"font-size":"9px",cursor:"text"}},[t._v("邮箱：2495802072@qq.com")])])])},function(){var t=this,a=t._self._c;return a("footer",[a("span",[t._v("2023-11-25"),a("br"),t._v(" © 秦彦悦 All rights reserved.")])])}],e={data(){return{background:!0,background_music:!1,background_button_span_style:{color:"#b9b900"},background_music_button_span_style:{color:"#a5a5a5"},pageArray:[{name:"首页",router:"/primaryPage/home"},{name:"背景音乐",router:"/primaryPage/music"},{name:"项目列表",router:"/primaryPage/project"}],musicList:[{name:"碎镜",link:"碎镜.mp3",album:"歌曲专辑图像/碎镜.jpg"},{name:"Stuttering",link:"Stuttering.mp3"},{name:"原点",link:"原点.mp3"}],musicCurrentIndex:0,uesrs:[{userName:"顾霖轩",passwords:"qyy20021207qq",manager:!0}]}},methods:{background_click:function(t){if(t)this.background=!this.background,this.background?(this.background_button_span_style={color:"#b9b900"},console.log(this.background),document.getElementById("main_background").style.visibility="visible"):(this.background_button_span_style={color:"#a5a5a5"},console.log(this.background),document.getElementById("main_background").style.visibility="hidden");else{var a=document.getElementById("BGaudio");this.background_music=!this.background_music,this.background_music?(this.background_music_button_span_style={color:"#b9b900"},a.muted=!1):(this.background_music_button_span_style={color:"#a5a5a5"},a.muted=!0)}},ichange(t){this.musicCurrentIndex=t?(this.musicCurrentIndex+1)%this.musicList.length:(this.musicCurrentIndex+this.musicList.length-1)%this.musicList.length},handleAudioLoaded(){this.$refs.audioRef.muted=!0}},computed:{currentAudio(){return s(6015)(`./${this.musicList[this.musicCurrentIndex].link}`)}},mounted(){document.addEventListener("DOMContentLoaded",(()=>{this.$refs.audioRef.muted=!0}))}},r=e,o=s(1001),c=(0,o.Z)(r,i,n,!1,null,null,null),u=c.exports},6015:function(t,a,s){var i={"./Stuttering.mp3":3136,"./原点.mp3":1072,"./碎镜.mp3":5966};function n(t){var a=e(t);return s(a)}function e(t){if(!s.o(i,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=e,t.exports=n,n.id=6015},3136:function(t,a,s){"use strict";t.exports=s.p+"media/Stuttering.953ab0ca.mp3"},1072:function(t,a,s){"use strict";t.exports=s.p+"media/原点.c1cbb00d.mp3"},5966:function(t,a,s){"use strict";t.exports=s.p+"media/碎镜.1768b7f6.mp3"},4546:function(t,a,s){"use strict";t.exports=s.p+"media/元气-唯美科幻宇宙星球星空.e3d17fa0.mp4"}}]);
//# sourceMappingURL=235.767099f4.js.map