(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{uciX:function(e,t,n){"use strict";var o=n("q1tI"),i=n.n(o),r=n("i8i4"),s=n.n(r),a=n("l4aY"),u=n("m+aA"),p=n("c+Xe"),l=n("zT1h"),c=n("QC+M"),f=n("TSYQ"),h=n.n(f);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function v(e,t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e[t]||{},{},n)}var y=n("xEkU"),g=n.n(y),O=n("9mu1"),w=n("lCnp"),M=i.a.forwardRef((function(e,t){var n=e.prefixCls,o=e.className,r=e.visible,s=e.style,a=e.children,u=e.onMouseEnter,p=e.onMouseLeave,l=e.onMouseDown,c=e.onTouchStart,f=a;return i.a.Children.count(a)>1&&(f=i.a.createElement("div",{className:"".concat(n,"-content")},a)),i.a.createElement("div",{ref:t,className:h()(o,!r&&"".concat(e.hiddenClassName)),onMouseEnter:u,onMouseLeave:p,onMouseDown:l,onTouchStart:c,style:s},f)}));M.displayName="PopupInner";var P=M;function T(e){var t=e.prefixCls,n=e.motion,o=e.animation,i=e.transitionName;return n||(o?{motionName:"".concat(t,"-").concat(o)}:i?{motionName:i}:null)}function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(n,!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=w.b;function V(e){return e&&e.motionName}var F=function(e){function t(){var e;return E(this,t),(e=N(this,H(t).apply(this,arguments))).state={targetWidth:void 0,targetHeight:void 0,status:null,prevVisible:null,alignClassName:null},e.popupRef=i.a.createRef(),e.alignRef=i.a.createRef(),e.nextFrameState=null,e.nextFrameId=null,e.onAlign=function(t,n){var o=e.state.status,i=e.props,r=i.getClassNameFromAlign,s=i.onAlign,a=r(n);"align"===o?e.setState({alignClassName:a,status:"aligned"},(function(){e.alignRef.current.forceAlign()})):"aligned"===o?(e.setState({alignClassName:a,status:"afterAlign"}),s(t,n)):e.setState({alignClassName:a})},e.onMotionEnd=function(){var t=e.props.visible;e.setState({status:t?"AfterMotion":"stable"})},e.setStateOnNextFrame=function(t){e.cancelFrameState(),e.nextFrameState=D({},e.nextFrameState,{},t),e.nextFrameId=g()((function(){var t=D({},e.nextFrameState);e.nextFrameState=null,e.setState(t)}))},e.getMotion=function(){return D({},T(e.props))},e.getAlignTarget=function(){var t=e.props,n=t.point,o=t.getRootDomNode;return n||o},e.cancelFrameState=function(){g.a.cancel(e.nextFrameId)},e.renderPopupElement=function(){var t=e.state,n=t.status,o=t.targetHeight,r=t.targetWidth,s=t.alignClassName,a=e.props,u=a.prefixCls,l=a.className,c=a.style,f=a.stretch,m=a.visible,d=a.align,b=a.destroyPopupOnHide,v=a.onMouseEnter,y=a.onMouseLeave,g=a.onMouseDown,w=a.onTouchStart,M=a.children,T=h()(u,l,s),C="".concat(u,"-hidden"),k={};f&&(-1!==f.indexOf("height")?k.height=o:-1!==f.indexOf("minHeight")&&(k.minHeight=o),-1!==f.indexOf("width")?k.width=r:-1!==f.indexOf("minWidth")&&(k.minWidth=r));var x=D({},k,{},e.getZIndexStyle(),{},c,{opacity:"stable"!==n&&m?0:void 0}),S=e.getMotion(),E=m;m&&"beforeMotion"!==n&&"motion"!==n&&"stable"!==n&&(S.motionAppear=!1,S.motionEnter=!1,S.motionLeave=!1),"afterAlign"!==n&&"beforeMotion"!==n||(E=!1);var j=!m||"align"!==n&&"aligned"!==n&&"stable"!==n,N=!0;return"stable"===n&&(N=m),b&&!N?null:i.a.createElement(R,Object.assign({visible:E},S,{removeOnLeave:!1,onEnterEnd:e.onMotionEnd,onLeaveEnd:e.onMotionEnd}),(function(t,n){var o=t.style,r=t.className;return i.a.createElement(O.a,{target:e.getAlignTarget(),key:"popup",ref:e.alignRef,monitorWindowResize:!0,disabled:j,align:d,onAlign:e.onAlign},i.a.createElement(P,{prefixCls:u,visible:N,hiddenClassName:C,className:h()(T,r),ref:Object(p.a)(n,e.popupRef),onMouseEnter:v,onMouseLeave:y,onMouseDown:g,onTouchStart:w,style:D({},x,{},o)},M))}))},e.renderMaskElement=function(){var t=e.props,n=t.mask,o=t.maskMotion,r=t.maskTransitionName,s=t.maskAnimation,a=t.prefixCls,u=t.visible;if(!n)return null;var p={};return o&&o.motionName&&(p=D({motionAppear:!0},T({motion:o,prefixCls:a,transitionName:r,animation:s}))),i.a.createElement(R,Object.assign({},p,{visible:u,removeOnLeave:!0}),(function(t){var n=t.className;return i.a.createElement("div",{style:e.getZIndexStyle(),key:"mask",className:h()("".concat(a,"-mask"),n)})}))},e}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,r=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.visible,o=k(e,["visible"]),i=t.prevVisible,r=t.status,s={prevVisible:n,status:r},a=T(o);return null===i&&!1===n?s.status="stable":n!==i&&(n||V(a)&&["motion","AfterMotion","stable"].includes(r)?s.status=null:s.status="stable",n&&(s.alignClassName=null)),s}}],(o=[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this.state.status,t=this.props,n=t.getRootDomNode,o=t.visible,i=t.stretch;if(this.cancelFrameState(),o&&"stable"!==e)switch(e){case null:this.setStateOnNextFrame({status:i?"measure":"align"});break;case"afterAlign":this.setStateOnNextFrame({status:V(this.getMotion())?"beforeMotion":"stable"});break;case"AfterMotion":this.setStateOnNextFrame({status:"stable"});break;default:var r=["measure","align",null,"beforeMotion","motion"],s=r.indexOf(e),a=r[s+1];-1!==s&&a&&this.setStateOnNextFrame({status:a})}if("measure"===e){var u=n();u&&this.setStateOnNextFrame({targetHeight:u.offsetHeight,targetWidth:u.offsetWidth})}}},{key:"componentWillUnmount",value:function(){this.cancelFrameState()}},{key:"getZIndexStyle",value:function(){return{zIndex:this.props.zIndex}}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderMaskElement(),this.renderPopupElement())}}])&&j(n.prototype,o),r&&j(n,r),t}(o.Component),L=i.a.createContext(null);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function W(e){return(W=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(){}function Z(){return""}function J(){return window.document}var Q=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];var q,G;t.a=(q=c.a,(G=function(e){function t(e){var n,o,r,p;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,r=W(t).call(this,e),(n=!r||"object"!==_(r)&&"function"!=typeof r?z(o):r).popupRef=i.a.createRef(),n.triggerRef=i.a.createRef(),n.onMouseEnter=function(e){var t=n.props.mouseEnterDelay;n.fireEvents("onMouseEnter",e),n.delaySetPopupVisible(!0,t,t?null:e)},n.onMouseMove=function(e){n.fireEvents("onMouseMove",e),n.setPoint(e)},n.onMouseLeave=function(e){n.fireEvents("onMouseLeave",e),n.delaySetPopupVisible(!1,n.props.mouseLeaveDelay)},n.onPopupMouseEnter=function(){n.clearDelayTimer()},n.onPopupMouseLeave=function(e){e.relatedTarget&&!e.relatedTarget.setTimeout&&n.popupRef.current&&n.popupRef.current.popupRef.current&&Object(a.a)(n.popupRef.current.popupRef.current,e.relatedTarget)||n.delaySetPopupVisible(!1,n.props.mouseLeaveDelay)},n.onFocus=function(e){n.fireEvents("onFocus",e),n.clearDelayTimer(),n.isFocusToShow()&&(n.focusTime=Date.now(),n.delaySetPopupVisible(!0,n.props.focusDelay))},n.onMouseDown=function(e){n.fireEvents("onMouseDown",e),n.preClickTime=Date.now()},n.onTouchStart=function(e){n.fireEvents("onTouchStart",e),n.preTouchTime=Date.now()},n.onBlur=function(e){n.fireEvents("onBlur",e),n.clearDelayTimer(),n.isBlurToHide()&&n.delaySetPopupVisible(!1,n.props.blurDelay)},n.onContextMenu=function(e){e.preventDefault(),n.fireEvents("onContextMenu",e),n.setPopupVisible(!0,e)},n.onContextMenuClose=function(){n.isContextMenuToShow()&&n.close()},n.onClick=function(e){if(n.fireEvents("onClick",e),n.focusTime){var t;if(n.preClickTime&&n.preTouchTime?t=Math.min(n.preClickTime,n.preTouchTime):n.preClickTime?t=n.preClickTime:n.preTouchTime&&(t=n.preTouchTime),Math.abs(t-n.focusTime)<20)return;n.focusTime=0}n.preClickTime=0,n.preTouchTime=0,n.isClickToShow()&&(n.isClickToHide()||n.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault();var o=!n.state.popupVisible;(n.isClickToHide()&&!o||o&&n.isClickToShow())&&n.setPopupVisible(!n.state.popupVisible,e)},n.onPopupMouseDown=function(){var e;n.hasPopupMouseDown=!0,clearTimeout(n.mouseDownTimeout),n.mouseDownTimeout=window.setTimeout((function(){n.hasPopupMouseDown=!1}),0),n.context&&(e=n.context).onPopupMouseDown.apply(e,arguments)},n.onDocumentClick=function(e){if(!n.props.mask||n.props.maskClosable){var t=e.target,o=n.getRootDomNode(),i=n.getPopupDomNode();Object(a.a)(o,t)||Object(a.a)(i,t)||n.hasPopupMouseDown||n.close()}},n.getRootDomNode=function(){var e=n.props.getTriggerDOMNode;if(e)return e(n.triggerRef.current);try{var t=Object(u.a)(n.triggerRef.current);if(t)return t}catch(e){}return s.a.findDOMNode(z(n))},n.getPopupClassNameFromAlign=function(e){var t=[],o=n.props,i=o.popupPlacement,r=o.builtinPlacements,s=o.prefixCls,a=o.alignPoint,u=o.getPopupClassNameFromAlign;return i&&r&&t.push(function(e,t,n,o){for(var i=n.points,r=Object.keys(e),s=0;s<r.length;s+=1){var a=r[s];if(b(e[a].points,i,o))return"".concat(t,"-placement-").concat(a)}return""}(r,s,e,a)),u&&t.push(u(e)),t.join(" ")},n.getComponent=function(){var e=n.props,t=e.prefixCls,o=e.destroyPopupOnHide,r=e.popupClassName,s=e.onPopupAlign,a=e.popupMotion,u=e.popupAnimation,p=e.popupTransitionName,l=e.popupStyle,c=e.mask,f=e.maskAnimation,h=e.maskTransitionName,m=e.maskMotion,d=e.zIndex,b=e.popup,v=e.stretch,y=e.alignPoint,g=n.state,O=g.popupVisible,w=g.point,M=n.getPopupAlign(),P={};return n.isMouseEnterToShow()&&(P.onMouseEnter=n.onPopupMouseEnter),n.isMouseLeaveToHide()&&(P.onMouseLeave=n.onPopupMouseLeave),P.onMouseDown=n.onPopupMouseDown,P.onTouchStart=n.onPopupMouseDown,i.a.createElement(F,Object.assign({prefixCls:t,destroyPopupOnHide:o,visible:O,point:y&&w,className:r,align:M,onAlign:s,animation:u,getClassNameFromAlign:n.getPopupClassNameFromAlign},P,{stretch:v,getRootDomNode:n.getRootDomNode,style:l,mask:c,zIndex:d,transitionName:p,maskAnimation:f,maskTransitionName:h,maskMotion:m,ref:n.popupRef,motion:a}),"function"==typeof b?b():b)},n.getContainer=function(){var e=z(n).props,t=document.createElement("div");return t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="100%",(e.getPopupContainer?e.getPopupContainer(n.getRootDomNode()):e.getDocument().body).appendChild(t),t},n.setPoint=function(e){n.props.alignPoint&&e&&n.setState({point:{pageX:e.pageX,pageY:e.pageY}})},n.handlePortalUpdate=function(){n.state.prevPopupVisible!==n.state.popupVisible&&n.props.afterPopupVisibleChange(n.state.popupVisible)},p="popupVisible"in e?!!e.popupVisible:!!e.defaultPopupVisible,n.state={prevPopupVisible:p,popupVisible:p},Q.forEach((function(e){n["fire".concat(e)]=function(t){n.fireEvents(e,t)}})),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,e),n=t,r=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.popupVisible,o={};return void 0!==n&&t.popupVisible!==n&&(o.popupVisible=n,o.prevPopupVisible=t.popupVisible),o}}],(o=[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e,t=this.props;if(this.state.popupVisible)return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(e=t.getDocument(),this.clickOutsideHandler=Object(l.a)(e,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(e=e||t.getDocument(),this.touchOutsideHandler=Object(l.a)(e,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(e=e||t.getDocument(),this.contextMenuOutsideHandler1=Object(l.a)(e,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=Object(l.a)(window,"blur",this.onContextMenuClose)));this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout)}},{key:"getPopupDomNode",value:function(){return this.popupRef.current&&this.popupRef.current.popupRef.current?this.popupRef.current.popupRef.current:null}},{key:"getPopupAlign",value:function(){var e=this.props,t=e.popupPlacement,n=e.popupAlign,o=e.builtinPlacements;return t&&o?v(o,t,n):n}},{key:"setPopupVisible",value:function(e,t){var n=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),n&&t&&this.setPoint(t)}},{key:"delaySetPopupVisible",value:function(e,t,n){var o=this,i=1e3*t;if(this.clearDelayTimer(),i){var r=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=window.setTimeout((function(){o.setPopupVisible(e,r),o.clearDelayTimer()}),i)}else this.setPopupVisible(e,n)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var t=this.props.children.props,n=this.props;return t[e]&&n[e]?this["fire".concat(e)]:t[e]||n[e]}},{key:"isClickToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")}},{key:"isContextMenuToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("contextMenu")||-1!==n.indexOf("contextMenu")}},{key:"isClickToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("click")||-1!==n.indexOf("click")}},{key:"isMouseEnterToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseEnter")}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("hover")||-1!==n.indexOf("mouseLeave")}},{key:"isFocusToShow",value:function(){var e=this.props,t=e.action,n=e.showAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("focus")}},{key:"isBlurToHide",value:function(){var e=this.props,t=e.action,n=e.hideAction;return-1!==t.indexOf("focus")||-1!==n.indexOf("blur")}},{key:"forcePopupAlign",value:function(){this.state.popupVisible&&this.popupRef.current&&this.popupRef.current.alignRef.current&&this.popupRef.current.alignRef.current.forceAlign()}},{key:"fireEvents",value:function(e,t){var n=this.props.children.props[e];n&&n(t);var o=this.props[e];o&&o(t)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,t=this.props,n=t.children,o=t.forceRender,r=t.alignPoint,s=t.className,a=i.a.Children.only(n),u={key:"trigger"};this.isContextMenuToShow()?u.onContextMenu=this.onContextMenu:u.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(u.onClick=this.onClick,u.onMouseDown=this.onMouseDown,u.onTouchStart=this.onTouchStart):(u.onClick=this.createTwoChains("onClick"),u.onMouseDown=this.createTwoChains("onMouseDown"),u.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(u.onMouseEnter=this.onMouseEnter,r&&(u.onMouseMove=this.onMouseMove)):u.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?u.onMouseLeave=this.onMouseLeave:u.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(u.onFocus=this.onFocus,u.onBlur=this.onBlur):(u.onFocus=this.createTwoChains("onFocus"),u.onBlur=this.createTwoChains("onBlur"));var l=h()(a&&a.props&&a.props.className,s);l&&(u.className=l);var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);Object(p.b)(a)&&(c.ref=Object(p.a)(this.triggerRef,a.ref));var f,m=i.a.cloneElement(a,c);return(e||this.popupRef.current||o)&&(f=i.a.createElement(q,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),i.a.createElement(L.Provider,{value:{onPopupMouseDown:this.onPopupMouseDown}},m,f)}}])&&U(n.prototype,o),r&&U(n,r),t}(i.a.Component)).contextType=L,G.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:Z,getDocument:J,onPopupVisibleChange:Y,afterPopupVisibleChange:Y,onPopupAlign:Y,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[]},G)}}]);