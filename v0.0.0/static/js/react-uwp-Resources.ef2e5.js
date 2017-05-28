webpackJsonp([8],{160:function(t,e,o){"use strict";function n(t){var e=t.context.theme,o=t.props.style;return{root:(0,e.prepareStyles)(i({position:"relative",padding:"20px 40px"},o))}}var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},l=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&(o[n[r]]=t[n[r]]);return o},s=o(0),c=o(3),a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e.handleMouseEnter=function(t){e.setState({hovered:!0})},e.handleMouseLeave=function(t){e.setState({hovered:!1})},e}return r(e,t),e.prototype.render=function(){var t=this.props,e=t.children,o=t.leftTopStart,r=t.dotSize,c=t.borderWidth,a=t.hoveredBorderWidth,p=l(t,["children","leftTopStart","dotSize","borderWidth","hoveredBorderWidth"]),d=this.state.hovered,f=this.context.theme,h=n(this),u=d?0:r,y=d?"100%":"50%",b=d?"100%":"25%",g="all .125s ease-in-out",v=o?{left:0}:{right:0},m=o?{right:0}:{left:0},O=d?a:c;return s.createElement("div",i({},p,{style:h.root,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave}),s.createElement("div",{style:f.prepareStyles(i({position:"absolute",top:0},v,{height:y,width:b,borderLeft:o?O+" solid "+f.accent:void 0,borderRight:o?void 0:O+" solid "+f.accent,borderTop:O+" solid "+f.accent,transition:g}))},s.createElement("div",{style:i({position:"absolute",top:0},v,{height:u,width:u,background:f.accent,transition:g})})),e,s.createElement("div",{style:i({position:"absolute",bottom:0},m,{height:y,width:b,borderLeft:o?void 0:O+" solid "+f.accent,borderRight:o?O+" solid "+f.accent:void 0,borderBottom:O+" solid "+f.accent,transition:g})},s.createElement("div",{style:i({position:"absolute",bottom:0},m,{height:u,width:u,background:f.accent,transition:g})})))},e}(s.Component);a.defaultProps={dotSize:16,borderWidth:"2px",hoveredBorderWidth:"4px"},a.contextTypes={theme:c.object},Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},161:function(t,e,o){"use strict";function n(t){var e=t.context.theme,o=t.props.style;return{root:(0,e.prepareStyles)(i({display:"flex",flexDirection:"column",alignItems:"center",fontWeight:"lighter",color:e.accent,textAlign:"center"},o)),title:{fontSize:64,lineHeight:1,fontWeight:"lighter"},description:{fontSize:14,margin:10}}}var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},l=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&(o[n[r]]=t[n[r]]);return o},s=o(0),c=o(3),a=o(160),p=o(162),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this.props,e=t.title,o=t.description,r=t.links,c=t.leftTopStart,d=t.dotSize,f=t.borderWidth,h=t.hoveredBorderWidth,u=l(t,["title","description","links","leftTopStart","dotSize","borderWidth","hoveredBorderWidth"]),y=(this.context.theme,n(this));return s.createElement("div",i({},u,{style:y.root}),e&&s.createElement(a.default,i({},{leftTopStart:c,dotSize:d,borderWidth:f,hoveredBorderWidth:h}),s.createElement("h5",{style:y.title},e)),o?s.createElement("p",{style:y.description},o):null,s.createElement("div",{style:{margin:10}},r&&r.map(function(t,e){return s.createElement(p.default,i({style:{margin:4}},t,{key:""+e}))})))},e}(s.Component);d.defaultProps={},d.contextTypes={theme:c.object},Object.defineProperty(e,"__esModule",{value:!0}),e.default=d},162:function(t,e,o){"use strict";function n(t){var e=t.context.theme,o=t.props.style;return{root:(0,e.prepareStyles)(i({display:"inline-block",fontSize:12,color:e.accent,fontWeight:"lighter",padding:"4px 20px",border:"1px solid "+e.accent,textDecoration:"none",cursor:"pointer"},o)),button:{color:e.accent,fontWeight:"lighter",fontSize:"inherit",border:"none",outline:"none",background:"none",cursor:"pointer"}}}var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},l=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&(o[n[r]]=t[n[r]]);return o},s=o(0),c=o(3),a=o(4),p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this.props,e=t.link,o=t.title,r=l(t,["link","title"]),c=(this.context.theme,n(this));return s.createElement("a",i({},r,{href:e,style:c.root}),s.createElement("button",{style:c.button},o),s.createElement(a.default,{style:{marginLeft:4}},"Download"))},e}(s.Component);p.defaultProps={},p.contextTypes={theme:c.object},Object.defineProperty(e,"__esModule",{value:!0}),e.default=p},87:function(t,e,o){"use strict";function n(t){var e=t.context.theme,o=t.props.style;return{root:(0,e.prepareStyles)(i({padding:20,height:"100%",display:"flex"},p.default(4,a(e.baseHigh).setAlpha(.025).toRgbString(),"transparent"),{flexDirection:"column",alignItems:"center",justifyContent:"center"},o)),category:{margin:"80px 0"}}}var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__assign||Object.assign||function(t){for(var e,o=1,n=arguments.length;o<n;o++){e=arguments[o];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},l=this&&this.__rest||function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&(o[n[r]]=t[n[r]]);return o},s=o(0),c=o(3),a=o(21),p=o(22),d=o(161),f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.render=function(){var t=this.props,e=(t.renderContentHeight,l(t,["renderContentHeight"]),this.context.theme,n(this));return s.createElement("div",{style:e.root},s.createElement(d.default,{style:e.category,title:"DSIGN TOOLKITS",description:"These toolkits provide controls and layout templates for designing UWP apps.",links:[{title:"Adobe XD toolkit",link:"http://download.microsoft.com/download/1/3/C/13CE5C92-024E-40C8-A867-83D891CC4D39/Adobe%20XD%20design%20toolkit%20for%20UWP%20apps%20v1705.zip"},{title:"Adobe Illustrator toolkit",link:"http://download.microsoft.com/download/C/C/4/CC478BD5-6469-450D-80EF-52D27EEAD4C4/Adobe%20Illustrator%20design%20toolkit%20for%20UWP%20apps%20v1705.zip"},{title:"Adobe Photoshop toolkit",link:"http://download.microsoft.com/download/C/D/A/CDA7FC2B-D5EA-48A4-906D-C6F4A4B311BB/Adobe%20Photoshop%20design%20toolkit%20for%20UWP%20apps%20v1705.zip"},{title:"Framer toolkit (on GitHub)",link:"https://github.com/Microsoft/windows-framer-toolkit"},{title:"Sketch toolkit",link:"http://download.microsoft.com/download/B/4/C/B4C6B0B9-C8BC-4CE2-A833-DCE89399060E/Sketch%20design%20toolkit%20for%20UWP%20apps%20v1705.zip"}]}),s.createElement(d.default,{style:e.category,leftTopStart:!0,title:"FONTS",links:[{title:"Segoe UI and MDL2 icon fonts",link:"http://download.microsoft.com/download/1/B/C/1BCF071A-78EE-4968-ACBE-15461C274B61/Segoe%20fonts%20v1705.2.zip"},{title:"Hololens icon font",link:"http://download.microsoft.com/download/3/8/D/38D659E2-4B9C-413A-B2E7-1956181DC427/Hololens-font-v1705.zip"}]}),s.createElement(d.default,{style:e.category,title:"TOOLS",description:"Tile and icon generator for Adobe Photoshop",links:[{title:"Download the tile and icon generator",link:"http://go.microsoft.com/fwlink/p/?LinkId=760394"}]}))},e}(s.Component);f.defaultProps={},f.contextTypes={theme:c.object},Object.defineProperty(e,"__esModule",{value:!0}),e.default=f}});