(window["webpackJsonpledger-webtool"]=window["webpackJsonpledger-webtool"]||[]).push([[0],{225:function(e,t,a){"use strict";(function(e){var n=a(20),r=a.n(n),s=a(66),c=a(24),i=a(25),l=a(27),u=a(26),o=a(6),h=a(28),d=a(0),b=a.n(d),p=a(226),f=a.n(p),m=a(227),g=a.n(m),v=a(228),y=a.n(v),j=a(100),O=a.n(j),k=a(99),E=a(44),S=a.n(E),w=a(236),C=a.n(w),P=a(65),x=a.n(P),M=(a(296),a(229)),A=a(230),K=a(231),T=a(233),B=a(234),L=a(235),W=function(t){function a(e){var t;return Object(c.a)(this,a),(t=Object(l.a)(this,Object(u.a)(a).call(this,e))).handlePathSelection=t.handlePathSelection.bind(Object(o.a)(t)),t.changeTransport=t.changeTransport.bind(Object(o.a)(t)),t.fetchAddresses=t.fetchAddresses.bind(Object(o.a)(t)),t.initialize=t.initialize.bind(Object(o.a)(t)),t.changePath=t.changePath.bind(Object(o.a)(t)),t.clearAddresses=t.clearAddresses.bind(Object(o.a)(t)),t.updateMessage=t.updateMessage.bind(Object(o.a)(t)),t.signMessage=t.signMessage.bind(Object(o.a)(t)),t.state={addresses:[],basePath:"44'/0'/0'",publicKey:"",selectedPath:null,transportMethod:null,btc:null,index:0,message:"",signature:null,error:null},t}return Object(h.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.changeTransport("webauthn");case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"changePath",value:function(e){var t=this;this.setState({basePath:e},(function(){t.clearAddresses()}))}},{key:"clearAddresses",value:function(){this.setState({addresses:[],index:0})}},{key:"updateMessage",value:function(e){this.setState({message:e})}},{key:"signMessage",value:function(){var t=Object(s.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.state.btc.signMessageNew(this.state.selectedPath,e.from(this.state.message).toString("hex"));case 3:n=t.sent,console.log(n),this.setState({signature:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),this.setState({error:t.t0});case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},{key:"changeTransport",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="u2f"===e.t0?3:"webauthn"===e.t0?11:"webusb"===e.t0?19:27;break;case 3:return e.t1=this,e.next=6,f.a.create();case 6:return e.t2=e.sent,e.t3={transportMethod:e.t2},e.t4=function(){a.setState({btc:new O.a(a.state.transportMethod)},(function(){a.clearAddresses()}))},e.t1.setState.call(e.t1,e.t3,e.t4),e.abrupt("break",28);case 11:return e.t5=this,e.next=14,g.a.create();case 14:return e.t6=e.sent,e.t7={transportMethod:e.t6},e.t8=function(){a.setState({btc:new O.a(a.state.transportMethod)},(function(){a.clearAddresses()}))},e.t5.setState.call(e.t5,e.t7,e.t8),e.abrupt("break",28);case 19:return e.t9=this,e.next=22,y.a.create();case 22:return e.t10=e.sent,e.t11={transportMethod:e.t10},e.t12=function(){a.setState({btc:new O.a(a.state.transportMethod)},(function(){a.clearAddresses()}))},e.t9.setState.call(e.t9,e.t11,e.t12),e.abrupt("break",28);case 27:return e.abrupt("break",28);case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handlePathSelection",value:function(e){this.setState({selectedPath:e})}},{key:"initialize",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.state.btc.getWalletPublicKey(this.state.basePath);case 2:t=e.sent,this.setState({publicKey:t},(function(){a.fetchAddresses(10)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchAddresses",value:function(){var t=Object(s.a)(r.a.mark((function t(a){var n,s,c,i,l,u,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=k.fromPublicKey(e.from(this.compressPublicKey(this.state.publicKey),"hex"),new e.from(this.state.publicKey.chainCode,"hex")),s="",c="",i=null,l=Array.from(this.state.addresses),u=this.state.index,o=0;o<a;o++)c=this.state.basePath+"/0/"+u,i=n.derivePath("0/"+u),s=e.from(i.publicKey).toString("hex"),l.push(b.a.createElement(A.a,{key:c,pubKey:s,path:c,balance:0,isSelected:this.state.selectedPath===c,onSelect:this.handlePathSelection})),u++;this.setState({index:u,addresses:l});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"compressPublicKey",value:function(e){return(parseInt(e.publicKey.charAt(129),16)%2===0?"02":"03")+e.publicKey.substring(2,66)}},{key:"render",value:function(){var e=null,t=null,a=null,n=null;return 0===this.state.addresses.length&&(a=b.a.createElement(S.a,null,b.a.createElement(B.a,{changePath:this.changePath}),b.a.createElement(T.a,{changeTransport:this.changeTransport}),b.a.createElement(x.a,{variant:"primary",onClick:this.initialize},"Start"))),this.state.addresses.length>0&&!this.state.selectedPath&&(e=b.a.createElement(K.a,{addressList:this.state.addresses,onClick:this.fetchAddresses})),this.state.selectedPath&&!this.state.signature&&(t=b.a.createElement(M.a,{value:this.state.message,onChange:this.updateMessage,onSubmit:this.signMessage})),this.state.signature&&(n=b.a.createElement(L.a,{signature:this.state.signature})),b.a.createElement(C.a,{className:"App"},b.a.createElement(S.a,null,b.a.createElement("h1",null,"Leger Signing Tool")),a,e,t,n)}}]),a}(b.a.Component);t.a=W}).call(this,a(1).Buffer)},229:function(e,t,a){"use strict";var n=a(24),r=a(25),s=a(27),c=a(26),i=a(6),l=a(28),u=a(0),o=a.n(u),h=a(29),d=a.n(h),b=a(65),p=a.n(b),f=a(64),m=a.n(f),g=a(58),v=a.n(g),y=a(44),j=a.n(y),O=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(i.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"handleSubmit",value:function(e){this.props.onSubmit(e.target.value),e.preventDefault()}},{key:"render",value:function(){return o.a.createElement(j.a,null,o.a.createElement(d.a,{onSubmit:this.handleSubmit},o.a.createElement(d.a.Group,{as:m.a},o.a.createElement(d.a.Label,{column:!0,sm:"3"},"Message"),o.a.createElement(v.a,{sm:"9"},o.a.createElement(d.a.Control,{as:"textarea",rows:"3",value:this.props.value,onChange:this.handleChange}))),o.a.createElement(p.a,{variant:"primary",type:"submit",value:"submit"},"Sign Now")))}}]),t}(o.a.Component);t.a=O},230:function(e,t,a){"use strict";(function(e){var n=a(24),r=a(25),s=a(27),c=a(26),i=a(6),l=a(28),u=a(0),o=a.n(u),h=a(67),d=a(367),b=function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).handleSelect=t.handleSelect.bind(Object(i.a)(t)),t.pubKeyToAddress=t.pubKeyToAddress.bind(Object(i.a)(t)),t.fetchBalance=t.fetchBalance.bind(Object(i.a)(t)),t.state={balance:"loading...",address:t.pubKeyToAddress()},t}return Object(l.a)(a,t),Object(r.a)(a,[{key:"fetchBalance",value:function(){var e={method:"GET",url:"https://blockchain.info/q/addressbalance/"+this.state.address},t=0;d(e,(function(e,a,n){if(e)throw new Error(e);t=n/1e8})),this.setState({balance:t})}},{key:"componentDidMount",value:function(){this.fetchBalance()}},{key:"pubKeyToAddress",value:function(){var t=this.props.pubKey.replace(/^0x/,""),a=e.from(t,"hex"),n=h.ECPair.fromPublicKey(a);switch(this.props.path.substring(0,3)){case"44'":return h.payments.p2pkh({pubkey:n.publicKey}).address;case"84'":return h.payments.p2wpkh({pubkey:n.publicKey}).address;case"49'":return h.payments.p2sh({redeem:h.payments.p2wpkh({pubkey:n.publicKey})}).address}}},{key:"handleSelect",value:function(){this.props.onSelect(this.props.path)}},{key:"render",value:function(){return o.a.createElement("tr",{onClick:this.handleSelect},o.a.createElement("td",null,this.state.address),o.a.createElement("td",null,this.props.path),o.a.createElement("td",null,this.state.balance))}}]),a}(o.a.Component);t.a=b}).call(this,a(1).Buffer)},231:function(e,t,a){"use strict";var n=a(24),r=a(25),s=a(27),c=a(26),i=a(6),l=a(28),u=a(0),o=a.n(u),h=a(232),d=a.n(h),b=a(65),p=a.n(b),f=a(44),m=a.n(f),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).loadMore=a.loadMore.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"loadMore",value:function(){this.props.onClick(10)}},{key:"render",value:function(){return 0===this.props.addressList.length?null:o.a.createElement(m.a,null,o.a.createElement("p",null,"Please select the address you wish to use from the list below:"),o.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0,size:"sm"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Address"),o.a.createElement("th",null,"Path"),o.a.createElement("th",null,"Balance"))),o.a.createElement("tbody",null,this.props.addressList)),o.a.createElement(p.a,{variant:"info",onClick:this.loadMore},"Load more"))}}]),t}(o.a.Component);t.a=g},233:function(e,t,a){"use strict";var n=a(24),r=a(25),s=a(27),c=a(26),i=a(6),l=a(28),u=a(0),o=a.n(u),h=a(29),d=a.n(h),b=a(64),p=a.n(b),f=a(58),m=a.n(f),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.props.changeTransport(e.target.value)}},{key:"render",value:function(){return o.a.createElement(d.a.Group,{as:p.a},o.a.createElement(d.a.Label,{column:!0,sm:"3"},"Transport Method"),o.a.createElement(m.a,{sm:"9"},o.a.createElement(d.a.Control,{as:"select",onChange:this.handleChange},o.a.createElement("option",{value:"webauthn"},"WebAuthN"),o.a.createElement("option",{value:"u2f"},"U2F"),o.a.createElement("option",{value:"webusb"},"WebUSB"))))}}]),t}(o.a.Component);t.a=g},234:function(e,t,a){"use strict";var n=a(24),r=a(25),s=a(27),c=a(26),i=a(6),l=a(28),u=a(0),o=a.n(u),h=a(29),d=a.n(h),b=a(64),p=a.n(b),f=a(58),m=a.n(f),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e){this.props.changePath(e.target.value)}},{key:"render",value:function(){return o.a.createElement(d.a.Group,{as:p.a},o.a.createElement(d.a.Label,{column:!0,sm:"3"},"Wallet Type"),o.a.createElement(m.a,{sm:"9"},o.a.createElement(d.a.Control,{as:"select",onChange:this.handleChange},o.a.createElement("option",{value:"44'/0'/0'"},"Legacy (44'/0'/0')"),o.a.createElement("option",{value:"49'/0'/0'"},"P2SH-Segwit (49'/0'/0')"),o.a.createElement("option",{value:"84'/0'/0'"},"Native Segwit (84'/0'/0')"))))}}]),t}(o.a.Component);t.a=g},235:function(e,t,a){"use strict";(function(e){var n=a(24),r=a(25),s=a(27),c=a(26),i=a(6),l=a(28),u=a(0),o=a.n(u),h=a(44),d=a.n(h),b=function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(s.a)(this,Object(c.a)(a).call(this,e))).generateSignature=t.generateSignature.bind(Object(i.a)(t)),t}return Object(l.a)(a,t),Object(r.a)(a,[{key:"generateSignature",value:function(){var t=this.props.signature,a=t.v+27+4;return e.from(a.toString(16)+t.r+t.s,"hex").toString("base64")}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("p",null,"Signature: ",this.generateSignature()))}}]),a}(o.a.Component);t.a=b}).call(this,a(1).Buffer)},237:function(e,t,a){e.exports=a(542)},242:function(e,t,a){},254:function(e,t){},256:function(e,t){},274:function(e,t){},276:function(e,t){},296:function(e,t,a){},424:function(e,t){},426:function(e,t){},449:function(e,t){},542:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(224),c=a.n(s),i=(a(242),a(225));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(541);c.a.render(r.a.createElement(i.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[237,1,2]]]);
//# sourceMappingURL=main.7ea28468.chunk.js.map