(self.AMP=self.AMP||[]).push({n:"amp-lightbox",v:"2010010034001",f:(function(AMP,_){
'use strict';var f,aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function ba(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}ba(this);"function"===typeof Symbol&&Symbol("x");var m;
if("function"==typeof Object.setPrototypeOf)m=Object.setPrototypeOf;else{var n;a:{var ca={a:!0},p={};try{p.__proto__=ca;n=p.a;break a}catch(a){}n=!1}m=n?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=m;
function r(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(q)q(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Pa=b.prototype}var t;function u(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var da=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function v(a){var b=Object.create(null);if(!a)return b;for(var c;c=da.exec(a);){var d=u(c[1],c[1]),e=c[2]?u(c[2].replace(/\+/g," "),c[2]):"";b[d]=e}return b};var w="";
function x(a){var b=a||self;if(b.__AMP_MODE)var c=b.__AMP_MODE;else{c=v(b.location.originalHash||b.location.hash);var d=v(b.location.search);w||(w=b.AMP_CONFIG&&b.AMP_CONFIG.v?b.AMP_CONFIG.v:"012010010034001");c={localDev:!1,development:!!(0<=["1","actions","amp","amp4ads","amp4email"].indexOf(c.development)||b.AMP_DEV_MODE),examiner:"2"==c.development,esm:!1,geoOverride:c["amp-geo"],minified:!0,lite:void 0!=d.amp_lite,test:!1,log:c.log,version:"2010010034001",rtvVersion:w};c=b.__AMP_MODE=c}return c}
;function ea(a){return a?Array.prototype.slice.call(a):[]};var y=self.AMP_CONFIG||{},fa=("string"==typeof y.cdnProxyRegex?new RegExp(y.cdnProxyRegex):y.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function ha(a){if(self.document&&self.document.head&&(!self.location||!fa.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}y.cdnUrl||ha("runtime-host");y.geoApiUrl||ha("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var z=self.__AMP_LOG;function ia(){if(!z.user)throw Error("failed to call initLogConstructor");return z.user}function A(){if(z.dev)return z.dev;throw Error("failed to call initLogConstructor");};function ja(){var a,b;this.promise=new Promise(function(c,d){a=c;b=d});this.resolve=a;this.reject=b};function B(){this.o=null}f=B.prototype;f.add=function(a){var b=this;this.o||(this.o=[]);this.o.push(a);return function(){b.remove(a)}};f.remove=function(a){this.o&&(a=this.o.indexOf(a),-1<a&&this.o.splice(a,1))};f.removeAll=function(){this.o&&(this.o.length=0)};f.fire=function(a){if(this.o)for(var b=this.o,c=0;c<b.length;c++)(0,b[c])(a)};f.getHandlerCount=function(){return this.o?this.o.length:0};var ka=Object.prototype.hasOwnProperty;function C(a){return a||{}};C({c:!0,v:!0,a:!0,ad:!0});function la(a){var b="";try{"localStorage"in a&&(b=a.localStorage.getItem("amp-experiment-toggles"))}catch(e){A().warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}var c=b?b.split(/\s*,\s*/g):[];a=Object.create(null);for(var d=0;d<c.length;d++)0!=c[d].length&&("-"==c[d][0]?a[c[d].substr(1)]=!1:a[c[d]]=!0);return a};function ma(a){var b=a.ownerDocument.defaultView,c=b.__AMP_TOP||(b.__AMP_TOP=b),d=b!=c;if(c.__AMP__EXPERIMENT_TOGGLES)var e=c.__AMP__EXPERIMENT_TOGGLES;else{c.__AMP__EXPERIMENT_TOGGLES=Object.create(null);e=c.__AMP__EXPERIMENT_TOGGLES;if(c.AMP_CONFIG)for(var g in c.AMP_CONFIG){var h=c.AMP_CONFIG[g];"number"===typeof h&&0<=h&&1>=h&&(e[g]=Math.random()<h)}if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-doc-opt-in"])&&0<c.AMP_CONFIG["allow-doc-opt-in"].length&&(g=c.AMP_CONFIG["allow-doc-opt-in"],
h=c.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))){h=h.getAttribute("content").split(",");for(var k=0;k<h.length;k++)-1!=g.indexOf(h[k])&&(e[h[k]]=!0)}Object.assign(e,la(c));if(c.AMP_CONFIG&&Array.isArray(c.AMP_CONFIG["allow-url-opt-in"])&&0<c.AMP_CONFIG["allow-url-opt-in"].length)for(g=c.AMP_CONFIG["allow-url-opt-in"],c=v(c.location.originalHash||c.location.hash),h=0;h<g.length;h++)k=c["e-"+g[h]],"1"==k&&(e[g[h]]=!0),"0"==k&&(e[g[h]]=!1)}var l=!!e["ampdoc-fie"];d&&!l?a=D(b,
"action")?F(b,"action"):null:(a=G(a),a=na(a),a=D(a,"action")?F(a,"action"):null);return a}function H(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return F(a,b)}function I(a,b){var c=G(a);c=na(c);return F(c,b)}function G(a){return a.nodeType?H((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function na(a){a=G(a);return a.isSingleDoc()?a.win:a}
function F(a,b){D(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function D(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function pa(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function qa(a){return a.closest?a.closest(".i-amphtml-fie"):pa(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,".i-amphtml-fie"):!1})}function J(a){try{a.focus()}catch(b){}};function K(a){return I(a,"owners")};function L(a,b){var c=this;this.ya=H(a,"timer");this.Fa=b;this.Ea=0;this.O=-1;this.ca=0;this.ia=!1;this.Aa=function(){c.Z()}}L.prototype.isPending=function(){return-1!=this.O};L.prototype.schedule=function(a){var b=a||this.Ea;this.ia&&10>b&&(b=10);var c=Date.now()+b;return!this.isPending()||-10>c-this.ca?(this.cancel(),this.ca=c,this.O=this.ya.delay(this.Aa,b),!0):!1};L.prototype.Z=function(){this.O=-1;this.ca=0;this.ia=!0;this.Fa();this.ia=!1};
L.prototype.cancel=function(){this.isPending()&&(this.ya.cancel(this.O),this.O=-1)};function ra(a,b){for(var c=0;c<a.length;c++)if(b(a[c],c,a))return c;return-1};var M;function sa(a){if(void 0!==M)return M;M=!1;try{var b={get passive(){M=!0;return!1}};a.addEventListener("test-options",null,b);a.removeEventListener("test-options",null,b)}catch(c){}return M};function ta(a,b,c,d){this.type=a;this.data=b;this.time=c;this.event=d}
function ua(a,b,c){this.C=a;this.h=[];this.K=[];this.w=[];this.j=[];this.l=null;this.Ma=b;this.Na=c;this.$=!1;this.Z=new L(a.ownerDocument.defaultView,this.sa.bind(this));this.va=new B;this.N=Object.create(null);this.qa=this.La.bind(this);this.oa=this.Ja.bind(this);this.pa=this.Ka.bind(this);this.na=this.Ia.bind(this);var d=sa(a.ownerDocument.defaultView);this.C.addEventListener("touchstart",this.qa,d?{passive:!0}:!1);this.C.addEventListener("touchend",this.oa);this.C.addEventListener("touchmove",
this.pa,d?{passive:!0}:!1);this.C.addEventListener("touchcancel",this.na);this.ea=!1}function va(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=a.__AMP_Gestures;d||(d=new ua(a,b,c),a.__AMP_Gestures=d);return d}f=ua.prototype;f.cleanup=function(){this.C.removeEventListener("touchstart",this.qa);this.C.removeEventListener("touchend",this.oa);this.C.removeEventListener("touchmove",this.pa);this.C.removeEventListener("touchcancel",this.na);delete this.C.__AMP_Gestures;this.Z.cancel()};
f.onGesture=function(a,b){var c=new a(this),d=c.getType(),e=this.N[d];e||(this.h.push(c),e=new B,this.N[d]=e);return e.add(b)};f.removeGesture=function(a){var b=(new a(this)).getType();if(a=this.N[b]){a.removeAll();a=ra(this.h,function(a){return a.getType()==b});if(0>a)return!1;this.h.splice(a,1);this.w.splice(a,1);this.j.splice(a,1);this.K.splice(a,1);delete this.N[b];return!0}return!1};f.onPointerDown=function(a){return this.va.add(a)};
f.La=function(a){var b=Date.now();this.$=!1;this.va.fire(a);for(var c=0;c<this.h.length;c++)if(!this.w[c]&&(this.j[c]&&this.j[c]<b&&N(this,c),this.h[c].onTouchStart(a))){var d=c;this.K[d]=!0;this.j[d]=0}O(this,a)};f.Ka=function(a){for(var b=Date.now(),c=0;c<this.h.length;c++)this.K[c]&&(this.j[c]&&this.j[c]<b?N(this,c):this.h[c].onTouchMove(a)||N(this,c));O(this,a)};
f.Ja=function(a){for(var b=Date.now(),c=0;c<this.h.length;c++)if(this.K[c])if(this.j[c]&&this.j[c]<b)N(this,c);else{this.h[c].onTouchEnd(a);var d=!this.j[c],e=this.j[c]<b;this.l!=this.h[c]&&(d||e)&&N(this,c)}O(this,a)};f.Ia=function(a){for(var b=0;b<this.h.length;b++){var c=b;this.w[c]=0;N(this,c)}O(this,a)};
function O(a,b){var c=!!a.l||a.$;a.$=!1;if(!c)for(var d=Date.now(),e=0;e<a.h.length;e++)if(a.w[e]||a.j[e]&&a.j[e]>=d){c=!0;break}c?(b.stopPropagation(),a.Ma||b.preventDefault()):a.Na&&b.stopPropagation();a.ea&&(a.ea=!1,a.sa())}
f.sa=function(){for(var a=Date.now(),b=-1,c=0;c<this.h.length;c++)if(!this.w[c])this.j[c]&&this.j[c]<a&&N(this,c);else if(-1==b||this.w[c]>this.w[b])b=c;if(-1!=b){var d=0;for(c=0;c<this.h.length;c++)!this.w[c]&&this.K[c]&&(d=Math.max(d,this.j[c]-a));if(2>d){a=b;c=this.h[a];for(var e=0;e<this.h.length;e++)if(e!=a){var g=e;this.w[g]=0;N(this,g)}this.w[a]=0;this.j[a]=0;this.l=c;c.acceptStart()}else this.Z.schedule(d)}};function N(a,b){a.K[b]=!1;a.j[b]=0;a.w[b]||a.h[b].acceptCancel()}
function P(a,b){this.Oa=a;this.Y=b}f=P.prototype;f.getType=function(){return this.Oa};f.signalReady=function(a){var b=this.Y;if(b.l)this.acceptCancel();else{for(var c=Date.now(),d=0;d<b.h.length;d++)b.h[d]==this&&(b.w[d]=c+a,b.j[d]=0);b.ea=!0}};f.signalPending=function(a){var b=this.Y;if(b.l)this.acceptCancel();else for(var c=Date.now(),d=0;d<b.h.length;d++)b.h[d]==this&&(b.j[d]=c+a)};f.signalEnd=function(){var a=this.Y;a.l==this&&(a.l=null,a.$=!0)};
f.signalEmit=function(a,b){var c=this.Y.N[this.getType()];c&&c.fire(new ta(this.getType(),a,Date.now(),b))};f.acceptStart=function(){};f.acceptCancel=function(){};f.onTouchStart=function(){return!1};f.onTouchMove=function(){return!1};f.onTouchEnd=function(){};function wa(a,b,c){1>b&&(b=1);var d=.5+Math.min(b/33.34,.5);return a/b*d+c*(1-d)};function Q(a,b,c,d){P.call(this,a,b);this.ta=c;this.za=d;this.l=!1;this.ma=this.la=this.fa=this.X=this.xa=this.ha=this.ga=this.H=this.G=this.J=this.I=0}r(Q,P);f=Q.prototype;f.onTouchStart=function(a){a=a.touches;return this.l&&a&&1<a.length?!0:a&&1==a.length?(this.xa=Date.now(),this.I=a[0].clientX,this.J=a[0].clientY,!0):!1};
f.onTouchMove=function(a){var b=a.touches;if(b&&1<=b.length){var c=b[0];b=c.clientX;c=c.clientY;this.G=b;this.H=c;if(this.l)R(this,!1,!1,a);else if(a=Math.abs(b-this.I),b=Math.abs(c-this.J),this.ta&&this.za)(8<=a||8<=b)&&this.signalReady(-10);else if(this.ta)if(8<=a&&a>b)this.signalReady(-10);else{if(8<=b)return!1}else if(this.za)if(8<=b&&b>a)this.signalReady(-10);else{if(8<=a)return!1}else return!1;return!0}return!1};
f.onTouchEnd=function(a){var b=a.touches;b&&0==b.length&&this.l&&(this.l=!1,R(this,!1,!0,a),this.signalEnd())};f.acceptStart=function(){this.l=!0;this.ga=this.I;this.ha=this.J;this.fa=this.xa;this.I=this.G;this.J=this.H;R(this,!0,!1,null)};f.acceptCancel=function(){this.l=!1};
function R(a,b,c,d){a.X=Date.now();var e=a.X-a.fa;if(!c&&4<e||c&&16<e){var g=wa(a.G-a.ga,e,a.la),h=wa(a.H-a.ha,e,a.ma);if(!c||32<e||0!=g||0!=h)a.la=1E-4<Math.abs(g)?g:0,a.ma=1E-4<Math.abs(h)?h:0;a.ga=a.G;a.ha=a.H;a.fa=a.X}a.signalEmit({first:b,last:c,time:a.X,deltaX:a.G-a.I,deltaY:a.H-a.J,startX:a.I,startY:a.J,lastX:a.G,lastY:a.H,velocityX:a.la,velocityY:a.ma},d)}function xa(a){Q.call(this,"swipe-xy",a,!0,!0)}r(xa,Q);var S,ya="Webkit webkit Moz moz ms O o".split(" ");function za(a,b,c){if(2>b.length?0:0==b.lastIndexOf("--",0))return b;S||(S=Object.create(null));var d=S[b];if(!d||c){d=b;if(void 0===a[b]){var e=b.charAt(0).toUpperCase()+b.slice(1);a:{for(var g=0;g<ya.length;g++){var h=ya[g]+e;if(void 0!==a[h]){e=h;break a}}e=""}var k=e;void 0!==a[k]&&(d=k)}c||(S[b]=d)}return d}function Aa(a,b){a=a.style;for(var c in b)a.setProperty(za(a,c),b[c].toString(),"important")}
function T(a,b,c){(b=za(a.style,b,void 0))&&((2>b.length?0:0==b.lastIndexOf("--",0))?a.style.setProperty(b,c):a.style[b]=c)}function U(a,b){for(var c in b)T(a,c,b[c])}function V(a){"display"in a&&A().error("STYLE","`display` style detected in styles. You must use toggle instead.");return a}function Ba(a){var b=!0;void 0===b&&(b=a.hasAttribute("hidden"));b?a.removeAttribute("hidden"):a.setAttribute("hidden","")}function Ca(a){for(var b=["transition"],c=0;c<b.length;c++)T(a,b[c],null)};function Da(a,b){function c(){d=0;var h=500-(a.Date.now()-e);if(0<h)d=a.setTimeout(c,h);else{var k=g;g=null;b.apply(null,k)}}var d=0,e=0,g=null;return function(b){for(var h=[],l=0;l<arguments.length;++l)h[l-0]=arguments[l];e=a.Date.now();g=h;d||(d=a.setTimeout(c,500))}};var W;function Ea(a){return a.classList.contains("i-amphtml-fie")||!!qa(a)};var Fa=['<i-amphtml-ad-close-header role=button tabindex=0 aria-label="Close Ad"><div>Ad</div><i-amphtml-ad-close-button class=amp-ad-close-button></i-amphtml-ad-close-button></i-amphtml-ad-close-header>'],X={"fade-in":{openStyle:C({opacity:1}),closedStyle:C({opacity:0}),durationSeconds:.1},"fly-in-bottom":{openStyle:C({transform:"translate(0, 0)"}),closedStyle:C({transform:"translate(0, 100%)"}),durationSeconds:.2},"fly-in-top":{openStyle:C({transform:"translate(0, 0)"}),closedStyle:C({transform:"translate(0, -100%)"}),
durationSeconds:.2}};
function Y(a){var b=AMP.BaseElement.call(this,a)||this;b.ka=null;b.A=null;b.M=b.win.document;b.P=null;b.ba=-1;b.R=!1;b.U=null;b.T=null;b.W=null;b.V=null;b.da=null;b.F=!1;b.B=0;b.ua=0;b.aa=0;b.ja=null;b.S=(a.getAttribute("animate-in")||"fade-in").toLowerCase();b.m=null;b.D=null;b.L=null;var c=H(b.win,"platform");b.Ga=c.isIos();b.ra=Da(b.win,function(){var a=ia().assertElement(b.A,"E#19457 this.container_"),c=K(b.element);c.scheduleLayout(b.element,a);c.scheduleResume(b.element,a)});return b}r(Y,AMP.BaseElement);
f=Y.prototype;f.buildCallback=function(){var a=this;this.user().assert(ka.call(X,this.S),"Invalid `animate-in` value %s",this.S);this.element.classList.add("i-amphtml-overlay");this.P=ma(this.element);Ga(this);this.registerDefaultAction(function(b){return Ha(a,b.trust,b.caller)},"open");this.registerAction("close",function(b){return a.close(b.trust)});this.P.addToAllowlist("AMP-LIGHTBOX",["open","close"],["email"])};
function Ia(a){ea(a.element.getElementsByClassName("i-amphtml-element")).forEach(function(b){K(a.element).setOwner(b,a.element)})}
function Ja(a){if(!a.A){var b=a.element;a.F=b.hasAttribute("scrollable");var c=a.getRealChildren();a.A=b.ownerDocument.createElement("div");a.F||a.applyFillContent(a.A);b.appendChild(a.A);c.forEach(function(b){a.A.appendChild(b)});a.F&&(Ia(a),b.classList.add("i-amphtml-scrollable"),b.addEventListener("amp:dom-update",function(){Ia(a);Z(a,a.B,a.B)}),b.addEventListener("scroll",a.wa.bind(a)));if(!a.F)va(b).onGesture(xa,function(){});Ka(a)}}
f.layoutCallback=function(){t||(t=Promise.resolve(void 0));var a=t;return a};function Ha(a,b,c){if(!a.R){Ja(a);a.U=a.Da.bind(a);a.M.documentElement.addEventListener("keydown",a.U);a.W=a.Ha.bind(a);a.M.documentElement.addEventListener("focusin",a.W);c&&(a.da=c);var d=new ja,e=d.promise,g=d.resolve;a.getViewport().enterLightboxMode(a.element,e).then(function(){return La(a,g,b)})}}f.mutatedAttributesCallback=function(a){var b=a.open;void 0!==b&&(b?Ha(this,2,document.activeElement):this.close(2))};
function Ma(a){var b=a.A.querySelector("[autofocus]");b&&J(b)}
function La(a,b,c){function d(){a.ra();b()}var e=a.element,g=X[a.S],h=g.durationSeconds,k=g.openStyle,l=g.closedStyle,E=Object.keys(k).map(function(a){return a+" "+h+"s ease-in"}).join(",");a.aa++;a.F&&T(e,"webkitOverflowScrolling","touch");T(e,"transition",E);U(e,V(l));Ba(e);a.mutateElement(function(){e.scrollTop=0});Ma(a);a.mutateElement(function(){U(e,V(k))});g=a.A;a.F?(a.wa(),Z(a,a.B,a.B)):K(a.element).updateInViewport(a.element,g,!0);e.addEventListener("transitionend",d);e.addEventListener("animationend",
d);var oa=K(a.element);oa.scheduleLayout(a.element,g);oa.scheduleResume(a.element,g);Na(a,"lightboxOpen",c);I(a.getAmpDoc(),"history").push(a.close.bind(a)).then(function(b){a.ba=b});Oa(a);Pa(a);Qa(a);a.R=!0}function Ka(a){var b=a.element;if(null!=b.getAttribute("close-button")){var c=b.ownerDocument||b;W&&W.ownerDocument===c||(W=c.createElement("div"));c=W;c.innerHTML=Fa[0];var d=c.firstElementChild;c.removeChild(d);a.m=d;b.insertBefore(a.m,a.A)}}
function Oa(a){if(a.m){a.T=a.Ca.bind(a);a.m.addEventListener("keydown",a.T);var b;a.measureMutateElement(function(){b=a.m.getBoundingClientRect().height},function(){a.m.classList.add("amp-ad-close-header");Aa(a.A,{"margin-top":b+"px","min-height":"calc(100vh - "+(b+"px)")})})}}function Qa(a){if(a.L||a.m)a.V=a.Ba.bind(a),a.D.addEventListener("click",a.V)}function Ra(a){if(a.L||a.m)a.D.removeEventListener("click",a.V),a.V=null,a.m&&(a.m.removeEventListener("keydown",a.T),a.T=null)}f.Ba=function(){this.close(3)};
f.Da=function(a){"Escape"==a.key&&(a.preventDefault(),this.close(3))};f.Ca=function(a){"Enter"==a.key&&(a.preventDefault(),this.close(3))};f.close=function(a){var b=this;this.R&&(this.F&&T(this.element,"webkitOverflowScrolling",""),this.getViewport().leaveLightboxMode(this.element).then(function(){return Sa(b,a)}))};
function Sa(a,b){function c(){e==a.aa&&(a.collapse(),a.ra())}var d=a.element,e=++a.aa;Ta(a)?(Ca(d),c()):(d.addEventListener("transitionend",c),d.addEventListener("animationend",c));U(d,V(X[a.S].closedStyle));-1!=a.ba&&I(a.getAmpDoc(),"history").pop(a.ba);a.M.documentElement.removeEventListener("keydown",a.U);a.U=null;a.M.documentElement.removeEventListener("focusin",a.W);a.W=null;Ra(a);K(a.element).schedulePause(a.element,a.A);a.R=!1;Na(a,"lightboxClose",b);a.da&&J(a.da)}
function Ta(a){return"inabox"==x(a.win).runtime||Ea(a.element)}f.Ha=function(){this.element.contains(document.activeElement)||this.close(3)};
function Pa(a){if(!a.element.contains(document.activeElement)){a:if(a.D)var b=a.D;else if(a.m)b=a.m;else{b=a.element;for(var c=b.querySelectorAll("[on]"),d=0;d<c.length;d++){var e=c[d];if(a.P.hasResolvableActionForTarget(e,"tap",b,e.parentElement)){b=e;break a}}b=void 0}a.D=b;a.D||(b=a.element.getAttribute("data-close-button-aria-label")||"Close the modal",c=a.M.createElement("button"),c.textContent=b,c.classList.add("i-amphtml-screen-reader"),c.tabIndex=-1,a.L=c,a.element.insertBefore(a.L,a.element.firstChild),
a.D=a.L);J(a.D)}}f.wa=function(){var a=this.element.scrollTop;this.Ga&&(0==a?this.element.scrollTop=1:this.element.scrollHeight==a+this.element.offsetHeight&&(this.element.scrollTop=a-1));this.B=a;null===this.ja&&Ua(this,a)};
function Ua(a,b){a.ja=H(a.win,"timer").delay(function(){if(30>Math.abs(b-a.B)){A().fine("amp-lightbox","slow scrolling: %s - %s",b,a.B);a.ja=null;var c=a.B;A().fine("amp-lightbox","update_");Z(a,c,a.ua);a.ua=c;a.B=c}else A().fine("amp-lightbox","fast scrolling: %s - %s",b,a.B),Ua(a,a.B)},100)}
function Z(a,b,c){var d=[];Va(a,b,function(b){d.push(b);var c=K(a.element);c.updateInViewport(a.element,b,!0);c.scheduleLayout(a.element,b)});c!=b&&Va(a,c,function(b){d.includes(b)||K(a.element).updateInViewport(a.element,b,!1)})}
function Va(a,b,c){a.ka||(a.ka={width:a.element.clientWidth,height:a.element.clientHeight});for(var d=a.ka.height,e=ea(a.element.getElementsByClassName("i-amphtml-element")),g=0;g<e.length;g++){for(var h=e[g],k=0,l=h;l&&a.element.contains(l);l=l.offsetParent)k+=l.offsetTop;var E=2*d;k+h.offsetHeight>=b-E&&k<=b+E&&c(h)}}function Ga(a){var b=a.win;Ea(a.element)&&Wa(b,b.document.body)}
function Na(a,b,c){var d=a.win;var e="amp-lightbox."+b;var g=C({}),h={detail:g};Object.assign(h,void 0);"function"==typeof d.CustomEvent?e=new d.CustomEvent(e,h):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent(e,!!h.bubbles,!!h.cancelable,g),e=d);a.P.trigger(a.element,b,e,c)}
function Wa(a,b){var c={},d=H(a,"ampdoc").getAmpDoc(b);I(d,"mutator").measureMutateElement(b,function(){c.alreadyTransparent="rgba(0, 0, 0, 0)"==(a.getComputedStyle(b)||Object.create(null))["background-color"]},function(){c.alreadyTransparent||ia().warn("amp-lightbox","The background of the <body> element has been forced to transparent. If you need to set background, use an intermediate container.");Aa(b,{background:"transparent"})})}
(function(a){"inabox"==x().runtime&&Wa(window,document.body);a.registerElement("amp-lightbox",Y,"amp-lightbox{display:none;position:fixed!important;z-index:1000;top:0!important;left:0!important;bottom:0!important;right:0!important}amp-lightbox[scrollable]{overflow-y:auto!important;overflow-x:hidden!important}i-amphtml-ad-close-header{height:60px!important;display:block!important;visibility:visible!important;opacity:0;position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:1000!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:right!important;justify-content:right!important;transition:opacity 0.1s ease-in}[animate-in=fly-in-bottom]>i-amphtml-ad-close-header,[animate-in=fly-in-top]>i-amphtml-ad-close-header{transition-delay:0.2s}.amp-ad-close-header{opacity:1!important;box-sizing:border-box;padding:5px;line-height:40px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;cursor:pointer}.amp-ad-close-header>:first-child{margin-left:auto!important;pointer-events:none!important}.amp-ad-close-button{display:block!important;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23fff'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\") no-repeat;background-position:50%;width:40px;height:40px;pointer-events:none!important;border-radius:40px;margin-left:5px}.amp-ad-close-header:active>.amp-ad-close-button{background-color:hsla(0,0%,100%,0.3)}\n/*# sourceURL=/extensions/amp-lightbox/0.1/amp-lightbox.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-lightbox-0.1.js.map
