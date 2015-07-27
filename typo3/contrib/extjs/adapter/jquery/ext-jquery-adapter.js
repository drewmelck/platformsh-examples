/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
window.undefined=window.undefined;Ext={version:"3.4.1.1",versionDetail:{major:3,minor:4,patch:1.1}};Ext.apply=function(d,e,b){if(b){Ext.apply(d,b)}if(d&&e&&typeof e=="object"){for(var a in e){d[a]=e[a]}}return d};(function(){var h=0,f=Object.prototype.toString,z=navigator.userAgent.toLowerCase(),o=function(e){return e.test(z)},u=document,r=u.documentMode,v=u.compatMode=="CSS1Compat",a=o(/opera/),I=o(/\bchrome\b/),A=o(/webkit/),d=!I&&o(/safari/),G=d&&o(/applewebkit\/4/),E=d&&o(/version\/3/),C=d&&o(/version\/4/),k=!a&&(o(/msie/)||o(/trident/)),H=k&&((o(/msie 7/)&&r!=8&&r!=9&&r!=10)||r==7),F=k&&((o(/msie 8/)&&r!=7&&r!=9&&r!=10)||r==8),D=k&&((o(/msie 9/)&&r!=7&&r!=8&&r!=10)||r==9),j=k&&((o(/msie 10/)&&r!=7&&r!=8&&r!=9)||r==10),g=k&&((o(/trident\/7\.0/)&&r!=7&&r!=8&&r!=9&&r!=10)||r==11),K=k&&o(/msie 6/),L=k&&(K||H||F||D),c=!A&&o(/gecko/)&&!o(/trident/),N=c&&o(/rv:1\.8/),M=c&&o(/rv:1\.9/),n=L&&!v,i=o(/windows|win32/),B=o(/macintosh|mac os x/),q=o(/adobeair/),w=o(/linux/),s=/^https/i.test(window.location.protocol),b=[],x=[],p=Ext.emptyFn,y=Ext.apply({},{constructor:p,toString:p,valueOf:p}),m=function(){var e=m.caller.caller;return e.$owner.prototype[e.$name].apply(this,arguments)};if(y.constructor!==p){x.push("constructor")}if(y.toString!==p){x.push("toString")}if(y.valueOf!==p){x.push("valueOf")}if(!x.length){x=null}function l(){}Ext.apply(l,{$isClass:true,callParent:function(e){var t;return(t=this.callParent.caller)&&(t.$previous||((t=t.$owner?t:t.caller)&&t.$owner.superclass.self[t.$name])).apply(this,e||b)}});l.prototype={constructor:function(){},callParent:function(t){var O,e=(O=this.callParent.caller)&&(O.$previous||((O=O.$owner?O:O.caller)&&O.$owner.superclass[O.$name]));return e.apply(this,t||b)}};if(K){try{u.execCommand("BackgroundImageCache",false,true)}catch(J){}}Ext.apply(Ext,{SSL_SECURE_URL:s&&k?'javascript:""':"about:blank",isStrict:v,isSecure:s,isReady:false,enableForcedBoxModel:false,enableGarbageCollector:true,enableListenerCollection:false,enableNestedListenerRemoval:false,USE_NATIVE_JSON:false,applyIf:function(t,O){if(t){for(var e in O){if(!Ext.isDefined(t[e])){t[e]=O[e]}}}return t},id:function(e,t){e=Ext.getDom(e,true)||{};if(!e.id){e.id=(t||"ext-gen")+(++h)}return e.id},extend:function(){var t=function(P){for(var O in P){this[O]=P[O]}};var e=Object.prototype.constructor;return function(T,Q,S){if(typeof Q=="object"){S=Q;Q=T;T=S.constructor!=e?S.constructor:function(){Q.apply(this,arguments)}}var P=function(){},R,O=Q.prototype;P.prototype=O;R=T.prototype=new P();R.constructor=T;T.superclass=O;if(O.constructor==e){O.constructor=Q}T.override=function(U){Ext.override(T,U)};R.superclass=R.supr=(function(){return O});R.override=t;Ext.override(T,S);T.extend=function(U){return Ext.extend(T,U)};return T}}(),global:(function(){return this})(),Base:l,namespaceCache:{},createNamespace:function(S,P){var e=Ext.namespaceCache,Q=P?S.substring(0,S.lastIndexOf(".")):S,V=e[Q],T,O,t,R,U;if(!V){V=Ext.global;if(Q){U=[];R=Q.split(".");for(T=0,O=R.length;T<O;++T){t=R[T];V=V[t]||(V[t]={});U.push(t);e[U.join(".")]=V}}}return V},getClassByName:function(O){var P=O.split("."),e=Ext.global,Q=P.length,t;for(t=0;e&&t<Q;++t){e=e[P[t]]}return e||null},addMembers:function(t,R,O,e){var Q,P,S;for(P in O){if(O.hasOwnProperty(P)){S=O[P];if(typeof S=="function"){S.$owner=t;S.$name=P}R[P]=S}}if(e&&x){for(Q=x.length;Q-->0;){P=x[Q];if(O.hasOwnProperty(P)){S=O[P];if(typeof S=="function"){S.$owner=t;S.$name=P}R[P]=S}}}},define:function(S,Q,O){var t=Q.override,U,R,e,P;if(t){delete Q.override;U=Ext.getClassByName(t);Ext.override(U,Q)}else{if(S){P=Ext.createNamespace(S,true);e=S.substring(S.lastIndexOf(".")+1)}U=function T(){this.constructor.apply(this,arguments)};if(S){U.displayName=S}U.$isClass=true;U.callParent=Ext.Base.callParent;if(typeof Q=="function"){Q=Q(U)}R=Q.extend;if(R){delete Q.extend;if(typeof R=="string"){R=Ext.getClassByName(R)}}else{R=l}Ext.extend(U,R,Q);if(U.prototype.constructor===U){delete U.prototype.constructor}if(!U.prototype.$isClass){Ext.applyIf(U.prototype,l.prototype)}U.prototype.self=U;if(Q.xtype){Ext.reg(Q.xtype,U)}U=Q.singleton?new U():U;if(S){P[e]=U}}if(O){O.call(U)}return U},override:function(Q,S){var O,R;if(S){if(Q.$isClass){R=S.statics;if(R){delete S.statics}Ext.addMembers(Q,Q.prototype,S,true);if(R){Ext.addMembers(Q,Q,R)}}else{if(typeof Q=="function"){O=Q.prototype;Ext.apply(O,S);if(Ext.isIE&&S.hasOwnProperty("toString")){O.toString=S.toString}}else{var e=Q.self,t,P;if(e&&e.$isClass){for(t in S){if(S.hasOwnProperty(t)){P=S[t];if(typeof P=="function"){if(e.$className){P.displayName=e.$className+"#"+t}P.$name=t;P.$owner=e;P.$previous=Q.hasOwnProperty(t)?Q[t]:m}Q[t]=P}}}else{Ext.apply(Q,S);if(!Q.constructor.$isClass){Q.constructor.prototype.callParent=l.prototype.callParent;Q.constructor.callParent=l.callParent}}}}}},namespace:function(){var P=arguments.length,Q=0,t,O,e,S,R,T;for(;Q<P;++Q){e=arguments[Q];S=arguments[Q].split(".");T=window[S[0]];if(T===undefined){T=window[S[0]]={}}R=S.slice(1);t=R.length;for(O=0;O<t;++O){T=T[R[O]]=T[R[O]]||{}}}return T},urlEncode:function(R,Q){var O,t=[],P=encodeURIComponent;Ext.iterate(R,function(e,S){O=Ext.isEmpty(S);Ext.each(O?e:S,function(T){t.push("&",P(e),"=",(!Ext.isEmpty(T)&&(T!=e||!O))?(Ext.isDate(T)?Ext.encode(T).replace(/"/g,""):P(T)):"")})});if(!Q){t.shift();Q=""}return Q+t.join("")},urlDecode:function(O,t){if(Ext.isEmpty(O)){return{}}var R={},Q=O.split("&"),S=decodeURIComponent,e,P;Ext.each(Q,function(T){T=T.split("=");e=S(T[0]);P=S(T[1]);R[e]=t||!R[e]?P:[].concat(R[e]).concat(P)});return R},urlAppend:function(e,t){if(!Ext.isEmpty(t)){return e+(e.indexOf("?")===-1?"?":"&")+t}return e},toArray:function(){return k?function(O,R,P,Q){Q=[];for(var t=0,e=O.length;t<e;t++){Q.push(O[t])}return Q.slice(R||0,P||Q.length)}:function(e,O,t){return Array.prototype.slice.call(e,O||0,t||e.length)}}(),isIterable:function(e){if(Ext.isArray(e)||e.callee){return true}if(/NodeList|HTMLCollection/.test(f.call(e))){return true}return((typeof e.nextNode!="undefined"||e.item)&&Ext.isNumber(e.length))},each:function(Q,P,O){if(Ext.isEmpty(Q,true)){return}if(!Ext.isIterable(Q)||Ext.isPrimitive(Q)){Q=[Q]}for(var t=0,e=Q.length;t<e;t++){if(P.call(O||Q[t],Q[t],t,Q)===false){return t}}},iterate:function(O,t,e){if(Ext.isEmpty(O)){return}if(Ext.isIterable(O)){Ext.each(O,t,e);return}else{if(typeof O=="object"){for(var P in O){if(O.hasOwnProperty(P)){if(t.call(e||O,P,O[P],O)===false){return}}}}}},getDom:function(O,t){if(!O||!u){return null}if(O.dom){return O.dom}else{if(typeof O=="string"){var P=u.getElementById(O);if(P&&k&&t){if(O==P.getAttribute("id")){return P}else{return null}}return P}else{return O}}},getBody:function(){return Ext.get(u.body||u.documentElement)},getHead:function(){var e;return function(){if(e==undefined){e=Ext.get(u.getElementsByTagName("head")[0])}return e}}(),removeNode:k&&!F?function(){var e;return function(t){if(t&&t.tagName!="BODY"){(Ext.enableNestedListenerRemoval)?Ext.EventManager.purgeElement(t,true):Ext.EventManager.removeAll(t);e=e||u.createElement("div");e.appendChild(t);e.innerHTML="";delete Ext.elCache[t.id]}}}():function(e){if(e&&e.parentNode&&e.tagName!="BODY"){(Ext.enableNestedListenerRemoval)?Ext.EventManager.purgeElement(e,true):Ext.EventManager.removeAll(e);e.parentNode.removeChild(e);delete Ext.elCache[e.id]}},isEmpty:function(t,e){return t===null||t===undefined||((Ext.isArray(t)&&!t.length))||(!e?t==="":false)},isArray:function(e){return f.apply(e)==="[object Array]"},isDate:function(e){return f.apply(e)==="[object Date]"},isObject:function(e){return !!e&&Object.prototype.toString.call(e)==="[object Object]"},isPrimitive:function(e){return Ext.isString(e)||Ext.isNumber(e)||Ext.isBoolean(e)},isFunction:function(e){return f.apply(e)==="[object Function]"},isNumber:function(e){return typeof e==="number"&&isFinite(e)},isString:function(e){return typeof e==="string"},isBoolean:function(e){return typeof e==="boolean"},isElement:function(e){return e?!!e.tagName:false},isDefined:function(e){return typeof e!=="undefined"},isOpera:a,isWebKit:A,isChrome:I,isSafari:d,isSafari3:E,isSafari4:C,isSafari2:G,isIE:k,isIE6:K,isIE7:H,isIE8:F,isIE9:D,isIE10:j,isIE11:g,isIE9m:L,isIE10p:k&&!(K||H||F||D),isIEQuirks:k&&(!v&&(K||H||F||D)),isGecko:c,isGecko2:N,isGecko3:M,isBorderBox:n,isLinux:w,isWindows:i,isMac:B,isAir:q});Ext.ns=Ext.namespace})();Ext.ns("Ext.util","Ext.lib","Ext.data","Ext.supports");Ext.elCache={};Ext.apply(Function.prototype,{createInterceptor:function(b,a){var c=this;return !Ext.isFunction(b)?this:function(){var e=this,d=arguments;b.target=e;b.method=c;return(b.apply(a||e||window,d)!==false)?c.apply(e||window,d):null}},createCallback:function(){var a=arguments,b=this;return function(){return b.apply(window,a)}},createDelegate:function(c,b,a){var d=this;return function(){var f=b||arguments;if(a===true){f=Array.prototype.slice.call(arguments,0);f=f.concat(b)}else{if(Ext.isNumber(a)){f=Array.prototype.slice.call(arguments,0);var e=[a,0].concat(b);Array.prototype.splice.apply(f,e)}}return d.apply(c||window,f)}},defer:function(c,e,b,a){var d=this.createDelegate(e,b,a);if(c>0){return setTimeout(d,c)}d();return 0}});Ext.applyIf(String,{format:function(b){var a=Ext.toArray(arguments,1);return b.replace(/\{(\d+)\}/g,function(c,d){return a[d]})}});Ext.applyIf(Array.prototype,{indexOf:function(b,c){var a=this.length;c=c||0;c+=(c<0)?a:0;for(;c<a;++c){if(this[c]===b){return c}}return -1},remove:function(b){var a=this.indexOf(b);if(a!=-1){this.splice(a,1)}return this}});Ext.util.TaskRunner=function(e){e=e||10;var f=[],a=[],b=0,g=false,d=function(){g=false;clearInterval(b);b=0},h=function(){if(!g){g=true;b=setInterval(i,e)}},c=function(j){a.push(j);if(j.onStop){j.onStop.apply(j.scope||j)}},i=function(){var l=a.length,n=new Date().getTime();if(l>0){for(var p=0;p<l;p++){f.remove(a[p])}a=[];if(f.length<1){d();return}}for(var p=0,o,k,m,j=f.length;p<j;++p){o=f[p];k=n-o.taskRunTime;if(o.interval<=k){m=o.run.apply(o.scope||o,o.args||[++o.taskRunCount]);o.taskRunTime=n;if(m===false||o.taskRunCount===o.repeat){c(o);return}}if(o.duration&&o.duration<=(n-o.taskStartTime)){c(o)}}};this.start=function(j){f.push(j);j.taskStartTime=new Date().getTime();j.taskRunTime=0;j.taskRunCount=0;h();return j};this.stop=function(j){c(j);return j};this.stopAll=function(){d();for(var k=0,j=f.length;k<j;k++){if(f[k].onStop){f[k].onStop()}}f=[];a=[]}};Ext.TaskMgr=new Ext.util.TaskRunner();if(typeof jQuery=="undefined"){throw"Unable to load Ext, jQuery not found."}(function(){var b;Ext.lib.Dom={getViewWidth:function(d){return d?Math.max(jQuery(document).width(),jQuery(window).width()):jQuery(window).width()},getViewHeight:function(d){return d?Math.max(jQuery(document).height(),jQuery(window).height()):jQuery(window).height()},isAncestor:function(e,f){var d=false;e=Ext.getDom(e);f=Ext.getDom(f);if(e&&f){if(e.contains){return e.contains(f)}else{if(e.compareDocumentPosition){return !!(e.compareDocumentPosition(f)&16)}else{while(f=f.parentNode){d=f==e||d}}}}return d},getRegion:function(d){return Ext.lib.Region.getRegion(d)},getY:function(d){return this.getXY(d)[1]},getX:function(d){return this.getXY(d)[0]},getXY:function(f){var e,j,l,m,i=(document.body||document.documentElement);f=Ext.getDom(f);if(f==i){return[0,0]}if(f.getBoundingClientRect){l=f.getBoundingClientRect();m=c(document).getScroll();return[Math.round(l.left+m.left),Math.round(l.top+m.top)]}var n=0,k=0;e=f;var d=c(f).getStyle("position")=="absolute";while(e){n+=e.offsetLeft;k+=e.offsetTop;if(!d&&c(e).getStyle("position")=="absolute"){d=true}if(Ext.isGecko){j=c(e);var o=parseInt(j.getStyle("borderTopWidth"),10)||0;var g=parseInt(j.getStyle("borderLeftWidth"),10)||0;n+=g;k+=o;if(e!=f&&j.getStyle("overflow")!="visible"){n+=g;k+=o}}e=e.offsetParent}if(Ext.isSafari&&d){n-=i.offsetLeft;k-=i.offsetTop}if(Ext.isGecko&&!d){var h=c(i);n+=parseInt(h.getStyle("borderLeftWidth"),10)||0;k+=parseInt(h.getStyle("borderTopWidth"),10)||0}e=f.parentNode;while(e&&e!=i){if(!Ext.isOpera||(e.tagName!="TR"&&c(e).getStyle("display")!="inline")){n-=e.scrollLeft;k-=e.scrollTop}e=e.parentNode}return[n,k]},setXY:function(d,e){d=Ext.fly(d,"_setXY");d.position();var f=d.translatePoints(e);if(e[0]!==false){d.dom.style.left=f.left+"px"}if(e[1]!==false){d.dom.style.top=f.top+"px"}},setX:function(e,d){this.setXY(e,[d,false])},setY:function(d,e){this.setXY(d,[false,e])}};function c(d){if(!b){b=new Ext.Element.Flyweight()}b.dom=d;return b}Ext.lib.Event={getPageX:function(d){d=d.browserEvent||d;return d.pageX},getPageY:function(d){d=d.browserEvent||d;return d.pageY},getXY:function(d){d=d.browserEvent||d;return[d.pageX,d.pageY]},getTarget:function(d){return d.target},on:function(h,d,g,f,e){jQuery(h).bind(d,g)},un:function(f,d,e){jQuery(f).unbind(d,e)},purgeElement:function(d){jQuery(d).unbind()},preventDefault:function(d){d=d.browserEvent||d;if(d.preventDefault){d.preventDefault()}else{d.returnValue=false}},stopPropagation:function(d){d=d.browserEvent||d;if(d.stopPropagation){d.stopPropagation()}else{d.cancelBubble=true}},stopEvent:function(d){this.preventDefault(d);this.stopPropagation(d)},onAvailable:function(j,e,d){var i=new Date();var g=function(){if(i.getElapsed()>10000){clearInterval(h)}var f=document.getElementById(j);if(f){clearInterval(h);e.call(d||window,f)}};var h=setInterval(g,50)},resolveTextNode:Ext.isGecko?function(e){if(!e){return}var d=HTMLElement.prototype.toString.call(e);if(d=="[xpconnect wrapped native prototype]"||d=="[object XULElement]"){return}return e.nodeType==3?e.parentNode:e}:function(d){return d&&d.nodeType==3?d.parentNode:d},getRelatedTarget:function(e){e=e.browserEvent||e;var d=e.relatedTarget;if(!d){if(e.type=="mouseout"){d=e.toElement}else{if(e.type=="mouseover"){d=e.fromElement}}}return this.resolveTextNode(d)}};Ext.lib.Ajax=function(){var d=function(f){return function(h,g){if((g=="error"||g=="timeout")&&f.failure){f.failure.call(f.scope||window,e(f,h))}else{if(f.success){f.success.call(f.scope||window,e(f,h))}}}};var e=function(f,l){var h={},j,g,i;try{j=l.getAllResponseHeaders();Ext.each(j.replace(/\r\n/g,"\n").split("\n"),function(m){g=m.indexOf(":");if(g>=0){i=m.substr(0,g).toLowerCase();if(m.charAt(g+1)==" "){++g}h[i]=m.substr(g+1)}})}catch(k){}return{responseText:l.responseText,responseXML:l.responseXML,argument:f.argument,status:l.status,statusText:l.statusText,getResponseHeader:function(m){return h[m.toLowerCase()]},getAllResponseHeaders:function(){return j}}};return{request:function(l,i,f,j,g){var k={type:l,url:i,data:j,timeout:f.timeout,complete:d(f)};if(g){var h=g.headers;if(g.xmlData){k.data=g.xmlData;k.processData=false;k.type=(l?l:(g.method?g.method:"POST"));if(!h||!h["Content-Type"]){k.contentType="text/xml"}}else{if(g.jsonData){k.data=typeof g.jsonData=="object"?Ext.encode(g.jsonData):g.jsonData;k.processData=false;k.type=(l?l:(g.method?g.method:"POST"));if(!h||!h["Content-Type"]){k.contentType="application/json"}}}if(h){k.beforeSend=function(n){for(var m in h){if(h.hasOwnProperty(m)){n.setRequestHeader(m,h[m])}}}}}jQuery.ajax(k)},formRequest:function(j,i,g,k,f,h){jQuery.ajax({type:Ext.getDom(j).method||"POST",url:i,data:jQuery(j).serialize()+(k?"&"+k:""),timeout:g.timeout,complete:d(g)})},isCallInProgress:function(f){return false},abort:function(f){return false},serializeForm:function(f){return jQuery(f.dom||f).serialize()}}}();Ext.lib.Anim=function(){var d=function(e,f){var g=true;return{stop:function(h){},isAnimated:function(){return g},proxyCallback:function(){g=false;Ext.callback(e,f)}}};return{scroll:function(h,f,j,k,e,g){var i=d(e,g);h=Ext.getDom(h);if(typeof f.scroll.to[0]=="number"){h.scrollLeft=f.scroll.to[0]}if(typeof f.scroll.to[1]=="number"){h.scrollTop=f.scroll.to[1]}i.proxyCallback();return i},motion:function(h,f,i,j,e,g){return this.run(h,f,i,j,e,g)},color:function(h,f,j,k,e,g){var i=d(e,g);i.proxyCallback();return i},run:function(g,q,j,p,h,s,r){var l=d(h,s),m=Ext.fly(g,"_animrun");var f={};for(var i in q){switch(i){case"points":var n,u;m.position();if(n=q.points.by){var t=m.getXY();u=m.translatePoints([t[0]+n[0],t[1]+n[1]])}else{u=m.translatePoints(q.points.to)}f.left=u.left;f.top=u.top;if(!parseInt(m.getStyle("left"),10)){m.setLeft(0)}if(!parseInt(m.getStyle("top"),10)){m.setTop(0)}if(q.points.from){m.setXY(q.points.from)}break;case"width":f.width=q.width.to;if(q.width.from){m.setWidth(q.width.from)}break;case"height":f.height=q.height.to;if(q.height.from){m.setHeight(q.height.from)}break;case"opacity":f.opacity=q.opacity.to;if(q.opacity.from){m.setOpacity(q.opacity.from)}break;case"left":f.left=q.left.to;if(q.left.from){m.setLeft(q.left.from)}break;case"top":f.top=q.top.to;if(q.top.from){m.setTop(q.top.from)}break;case"callback":case"scope":case"xy":break;default:f[i]=q[i].to;if(q[i].from){m.setStyle(i,q[i].from)}break}}jQuery(g).animate(f,j*1000,undefined,l.proxyCallback);return l}}}();Ext.lib.Region=function(f,g,d,e){this.top=f;this[1]=f;this.right=g;this.bottom=d;this.left=e;this[0]=e};Ext.lib.Region.prototype={contains:function(d){return(d.left>=this.left&&d.right<=this.right&&d.top>=this.top&&d.bottom<=this.bottom)},getArea:function(){return((this.bottom-this.top)*(this.right-this.left))},intersect:function(h){var f=Math.max(this.top,h.top);var g=Math.min(this.right,h.right);var d=Math.min(this.bottom,h.bottom);var e=Math.max(this.left,h.left);if(d>=f&&g>=e){return new Ext.lib.Region(f,g,d,e)}else{return null}},union:function(h){var f=Math.min(this.top,h.top);var g=Math.max(this.right,h.right);var d=Math.max(this.bottom,h.bottom);var e=Math.min(this.left,h.left);return new Ext.lib.Region(f,g,d,e)},constrainTo:function(d){this.top=this.top.constrain(d.top,d.bottom);this.bottom=this.bottom.constrain(d.top,d.bottom);this.left=this.left.constrain(d.left,d.right);this.right=this.right.constrain(d.left,d.right);return this},adjust:function(f,e,d,g){this.top+=f;this.left+=e;this.right+=g;this.bottom+=d;return this}};Ext.lib.Region.getRegion=function(g){var i=Ext.lib.Dom.getXY(g);var f=i[1];var h=i[0]+g.offsetWidth;var d=i[1]+g.offsetHeight;var e=i[0];return new Ext.lib.Region(f,h,d,e)};Ext.lib.Point=function(d,e){if(Ext.isArray(d)){e=d[1];d=d[0]}this.x=this.right=this.left=this[0]=d;this.y=this.top=this.bottom=this[1]=e};Ext.lib.Point.prototype=new Ext.lib.Region();if(Ext.isIE){function a(){var d=Function.prototype;delete d.createSequence;delete d.defer;delete d.createDelegate;delete d.createCallback;delete d.createInterceptor;window.detachEvent("onunload",a)}window.attachEvent("onunload",a)}})();