(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),o=n.n(s),i=(n(15),n(5)),r=n(6),d=n(7),b=n(10),l=n(9),u=(n(16),n(8)),j=n.n(u),h=n(0);function v(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{className:j.a.title,children:t}),n]})}var p=v;v.defaultProps={title:"Title of section"};var O=n(3),f=n.n(O);var x=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{className:f.a.buttons,children:t.map((function(e,t){return Object(h.jsx)("button",{type:"button",className:f.a.button,onClick:function(){return n(e)},children:e},t)}))})};var k=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,s=e.positivePercentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Good:",Object(h.jsxs)("span",{children:[" ",t]})]}),Object(h.jsxs)("p",{children:["Neutral:",Object(h.jsxs)("span",{children:[" ",n]})]}),Object(h.jsxs)("p",{children:["Bad:",Object(h.jsxs)("span",{children:[" ",c]})]}),Object(h.jsxs)("p",{children:["Total:",Object(h.jsxs)("span",{children:[" ",a]})]}),Object(h.jsxs)("p",{children:["Positive feeedback:",Object(h.jsxs)("span",{children:[" ",s,"%"]})]})]})};var g=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},F=function(e){Object(b.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(i.a)({},t,e[t]+1)}))},e}return Object(d.a)(n,[{key:"countTotalFeedback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.good,n=e.neutral,c=e.bad;return t+n+c}},{key:"countPositiveFeedbackPercentage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.good;return Math.round(t/this.countTotalFeedback()*100)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(x,{options:Object.keys(this.state),onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(p,{title:"Statistics",children:t>0||n>0||c>0?Object(h.jsx)(k,{good:t,neutral:n,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(g,{message:"No feedback given"})})]})}}]),n}(c.Component),m=F;o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={buttons:"FeedbackOptions_buttons__1J6BZ",button:"FeedbackOptions_button__J04yo"}},8:function(e,t,n){e.exports={title:"Section_title__tpDtn"}}},[[18,1,2]]]);
//# sourceMappingURL=main.564506d7.chunk.js.map