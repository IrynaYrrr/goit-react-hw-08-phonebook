"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{3153:function(e,n,t){t.r(n),t.d(n,{default:function(){return q}});var r=t(2791),a=t(9434),u=t(4270),o=t(3634),c="NOT_FOUND";var i=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,a=void 0===r?i:r,u=t.maxSize,o=void 0===u?1:u,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,a=0;a<r;a++)if(!e(n[a],t[a]))return!1;return!0}}(a),f=1===o?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:c},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return c}return{get:r,put:function(n,a){r(n)===c&&(t.unshift({key:n,value:a}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,l);function p(){var n=f.get(arguments);if(n===c){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];var u,o=0,c={memoizeOptions:void 0},i=r.pop();if("object"===typeof i&&(c=i,i=r.pop()),"function"!==typeof i)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof i+"]");var s=c,f=s.memoizeOptions,p=void 0===f?t:f,m=Array.isArray(p)?p:[p],d=l(r),v=e.apply(void 0,[function(){return o++,i.apply(null,arguments)}].concat(m)),h=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return u=v.apply(null,e)}));return Object.assign(h,{resultFunc:i,memoizedResultFunc:v,dependencies:d,lastResult:function(){return u},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return a}var p=f(s),m=function(e){return e.contacts},d=function(e){return e.isLoading},v=p([m,function(e){return e.filter}],(function(e,n){var t=e.contacts,r=n.filter;return t.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))})),h="ContactList_contactsWrap__h2z38",y="ContactList_contactItem__ppNQ5",_="ContactList_btnDelete__Eeo9v",b=t(184),x=function(){var e=(0,a.I0)(),n=(0,a.v9)(v);return(0,b.jsx)("div",{className:h,children:(0,b.jsx)("ul",{children:n.map((function(n){var t=n.id,r=n.number,a=n.name;return(0,b.jsxs)("li",{className:y,children:[(0,b.jsxs)("div",{children:[a,": \xa0\xa0\xa0\xa0\xa0",r]}),(0,b.jsx)("div",{children:(0,b.jsx)("button",{className:_,onClick:function(){return function(n){return e((0,o.GK)(n))}(t)},children:"Delete"})})]},t)}))})})},g=t(9439),j="ContactForm_form__dhl+T",C="ContactForm_formDiv__quSq+",N="ContactForm_inputName__a8jFO",w="ContactForm_inputNumber__DBiVZ",k="ContactForm_buttonAdd__Mr+ls",F="ContactForm_label__-cVXI",E=function(){var e=(0,r.useState)(""),n=(0,g.Z)(e,2),t=n[0],u=n[1],c=(0,r.useState)(""),i=(0,g.Z)(c,2),s=i[0],l=i[1],f=(0,a.v9)(m).contacts,p=(0,a.I0)(),d=function(){u(""),l("")};return(0,b.jsxs)("form",{className:j,onSubmit:function(e){e.preventDefault(),f.find((function(e){return e.name.toLowerCase()===t.toLowerCase()}))?alert("".concat(t," is already in contacts")):(p((0,o.uK)({name:t,number:s})),d())},children:[(0,b.jsxs)("div",{className:C,children:[(0,b.jsxs)("label",{className:F,children:["Name",(0,b.jsx)("input",{className:N,type:"text",name:"name",placeholder:"Enter name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:t,onChange:function(e){u(e.target.value)},required:!0})]}),(0,b.jsxs)("label",{className:F,children:["Number",(0,b.jsx)("input",{className:w,type:"tel",name:"number",placeholder:"Enter number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:s,onChange:function(e){l(e.target.value)},required:!0})]})]}),(0,b.jsx)("button",{className:k,type:"submit",children:"add contact"})]})};function q(){var e=(0,a.I0)(),n=(0,a.v9)(d);return(0,r.useEffect)((function(){e((0,o.yF)())}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(u.q,{children:(0,b.jsx)("title",{children:"Your contacts"})}),(0,b.jsx)(E,{}),(0,b.jsx)("div",{children:n&&"Request in progress..."}),(0,b.jsx)(x,{})]})}}}]);
//# sourceMappingURL=153.eec62a8f.chunk.js.map