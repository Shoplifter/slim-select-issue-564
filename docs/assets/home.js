import{d as c,S as t,_ as n,r as a,o as r,c as d,a as e,b as h,w as m,e as p,f as i}from"./index.js";const u=c({name:"Home",data(){return{single:null,multiple:null}},mounted(){this.single=new t({select:this.$refs.slimSingle}),this.multiple=new t({select:this.$refs.slimMulti}),setTimeout(()=>{this.single&&this.single.open(),setTimeout(()=>{this.single&&this.single.setSelected("best")},500),setTimeout(()=>{this.single&&this.single.setSelected("select")},1e3),setTimeout(()=>{this.single&&this.single.setSelected("ever")},1500),setTimeout(()=>{this.single&&this.single.close()},2e3),this.multiple&&this.multiple.open(),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best"])},500),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best","select"])},1e3),setTimeout(()=>{this.multiple&&this.multiple.setSelected(["best","select","ever"])},1500),setTimeout(()=>{this.multiple&&this.multiple.close()},2e3)},500)},unmounted(){this.single&&this.single.destroy(),this.multiple&&this.multiple.destroy()},methods:{handleClick(){window.dispatchEvent(new Event("nav-updated"))}}}),s="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='45.701px'%20height='45.7px'%20viewBox='0%200%2045.701%2045.7'%20style='enable-background:new%200%200%2045.701%2045.7;'%20xml:space='preserve'%3e%3cpath%20fill='%235897fb'%20d='M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504%20c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0%20c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z'/%3e%3c/svg%3e",_={id:"home",class:"content"},g={class:"samples row"},f={class:"single"},v=e("h2",{id:"sample-select-header"},"Single Select",-1),b={ref:"slimSingle","aria-labelledby":"sample-select-header"},w=e("option",{"data-placeholder":"true"},null,-1),S=e("option",{value:"best"},"Best",-1),k=e("option",{value:"select"},"Select",-1),x=e("option",{value:"ever"},"Ever",-1),y=[w,S,k,x],C={class:"multi"},T=e("h2",null,"Multi Select",-1),L={ref:"slimMulti",multiple:""},B=e("option",{value:"best"},"Best",-1),M=e("option",{value:"select"},"Select",-1),E=e("option",{value:"ever"},"Ever",-1),H=[B,M,E],$=p('<br><div class="support"><h2 class="header">Support</h2><p>Help support creators that make development easier!</p><div class="links"><iframe class="github-sponsor" src="https://github.com/sponsors/brianvoe/button" title="Sponsor brianvoe"></iframe><a class="buycoffee" href="https://www.buymeacoffee.com/brianvoe" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png" alt="Buy Me A Coffee"></a></div></div><br><div class="separator"></div><br><div class="features"><h2 class="header">Features</h2><div class="row"><ul class="list"><li><img src="'+s+'"> No Dependencies</li><li><img src="'+s+'"> ~30kb - ~5kb gzip</li><li><img src="'+s+'"> Single Select</li><li><img src="'+s+'"> Multiple Select</li><li><img src="'+s+'"> Addable Options</li><li><img src="'+s+'"> Html Options</li><li><img src="'+s+'"> Settable Data</li><li><img src="'+s+'"> Callback Events</li><li><img src="'+s+'"> Placeholders</li></ul><ul class="list"><li><img src="'+s+'"> Advanced Search</li><li><img src="'+s+'"> Tabbable</li><li><img src="'+s+'"> Disable Options</li><li><img src="'+s+'"> Light Css</li><li><img src="'+s+'"> Light Color Scheme</li><li><img src="'+s+'"> Style Inheritance</li><li><img src="'+s+'"> Clean Animations</li><li><img src="'+s+'"> Performant</li><li><img src="'+s+'"> Typescript</li></ul></div></div><br><div class="separator"></div><br>',9),N={class:"frameworks"},z=e("h2",{class:"header"},"Frameworks",-1),A=e("p",null,[i(" SlimSelect is in the process of adding a few framework integrations."),e("br"),i(" If you are an expert in any specific framework and would like to help out, please reach out! ")],-1),V={class:"framework-items"},D=e("svg",{viewBox:"0 0 128 128",width:"100",height:"100"},[e("path",{fill:"#42b883",d:"M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"}),e("path",{fill:"#35495e",d:"M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"})],-1);function O(l,F,I,P,j,q){const o=a("router-link");return r(),d("div",_,[e("div",g,[e("div",f,[v,e("select",b,y,512)]),e("div",C,[T,e("select",L,H,512)])]),$,e("div",N,[z,A,e("div",V,[h(o,{to:"/vue",onClick:l.handleClick},{default:m(()=>[D]),_:1},8,["onClick"])])])])}const J=n(u,[["render",O]]);export{J as default};
