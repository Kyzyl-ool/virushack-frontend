(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{I8Z2:function(t,n,r){"use strict";r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return w})),r.d(n,"c",(function(){return g}));var e,o=r("q1tI"),i=r.n(o),s=r("17x9"),u=r.n(s),c=u.a.shape({subscribe:u.a.func.isRequired,setState:u.a.func.isRequired,getState:u.a.func.isRequired}),p=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(t,n)},function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),a=Object(o.createContext)(null),f=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return p(n,t),n.prototype.render=function(){return i.a.createElement(a.Provider,{value:this.props.store},this.props.children)},n.propTypes={store:c.isRequired},n}(o.Component),b=r("Gytx"),h=r.n(b),l=r("2mql"),d=r.n(l),y=r("VCL8"),v=function(){var t=function(n,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])})(n,r)};return function(n,r){function e(){this.constructor=n}t(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}}(),m=function(){return(m=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};var O=function(){return{}};function w(t,n){void 0===n&&(n={});var r=!!t,e=t||O;return function(s){var u=function(n){function o(t,r){var o=n.call(this,t,r)||this;return o.unsubscribe=null,o.handleChange=function(){if(o.unsubscribe){var t=e(o.store.getState(),o.props);o.setState({subscribed:t})}},o.store=o.context,o.state={subscribed:e(o.store.getState(),t),store:o.store,props:t},o}return v(o,n),o.getDerivedStateFromProps=function(n,r){return t&&2===t.length&&n!==r.props?{subscribed:e(r.store.getState(),n),props:n}:{props:n}},o.prototype.componentDidMount=function(){this.trySubscribe()},o.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},o.prototype.shouldComponentUpdate=function(t,n){return!h()(this.props,t)||!h()(this.state.subscribed,n.subscribed)},o.prototype.trySubscribe=function(){r&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},o.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},o.prototype.render=function(){var t=m(m(m({},this.props),this.state.subscribed),{store:this.store});return i.a.createElement(s,m({},t,{ref:this.props.miniStoreForwardedRef}))},o.displayName="Connect("+function(t){return t.displayName||t.name||"Component"}(s)+")",o.contextType=a,o}(o.Component);if(Object(y.a)(u),n.forwardRef){var c=i.a.forwardRef((function(t,n){return i.a.createElement(u,m({},t,{miniStoreForwardedRef:n}))}));return d()(c,s)}return d()(u,s)}}var _=function(){return(_=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var o in n=arguments[r])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};function g(t){var n=t,r=[];return{setState:function(t){n=_(_({},n),t);for(var e=0;e<r.length;e++)r[e]()},getState:function(){return n},subscribe:function(t){return r.push(t),function(){var n=r.indexOf(t);r.splice(n,1)}}}}}}]);