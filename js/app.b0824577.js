(function(){"use strict";var t={2064:function(t,e,n){var i=n(9963),a=n(6252);function l(t,e,n,l,o,s){const r=(0,a.up)("Navbar"),d=(0,a.up)("Content"),A=(0,a.up)("Modal"),c=(0,a.up)("AddBtn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(r,{onGetSearch:e[0]||(e[0]=t=>o.search=t),lang:o.lang,onChangeLang:s.changeLang},null,8,["lang","onChangeLang"]),(0,a.Wm)(d,{itemList:s.filterItemList,onChangeItem:s.changeItem,onDeleteItem:s.deleteItem,lang:o.lang},null,8,["itemList","onChangeItem","onDeleteItem","lang"]),(0,a.wy)((0,a.Wm)(A,{onModalClose:s.modalClose,onAddItem:s.addItem,currentId:o.currentId,edit:o.edit,itemObj:o.itemObj,onEditItem:s.editItem,lang:o.lang},null,8,["onModalClose","onAddItem","currentId","edit","itemObj","onEditItem","lang"]),[[i.F8,o.modalOpenOrClose]]),(0,a.Wm)(c,{onModalOpen:s.modalOpen},null,8,["onModalOpen"])],64)}n(7658);var o=n(3577),s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ0SURBVHgBtZa9ctNAEMd3z3jGQ+UnAEESgivME6CAw8gZPpQnwHR0tHQ4b2CeIHJJJ3sYohmbiahok84ZTFBL5w4Y29rcybJ01th3csb5N9KddvW7u/2QEBQyTbtcKk5tILwrxohsRDQ59/pffLiGcNmkVbNNRPooeCu8AgRqh4w5nucGcB2Y2MntIjQJ6H1O72BCeNjruWd5zAvyoLKz+4NfbHmOCHwOd/mth4AjDijx+3L8uMwA3m1vV4Lhr8E5aNcW62Dfbsk7Cola/yfsyPfdUdbJevqygQUmjtmIp0ZUwMe6I41gcYxO091Q0+t3j1SOlmkbWIx8jHjKP+l19lQ+LCLOkmEGAnB0ICHPdwMa4x5f7XznplV7YSphlmUbIGfdGLWgBSCSA8lC2WuVPcMxVBNjngziBbCGKGSd9GVoq2wZYfgoXRnlSmFZpQnIPobKlskD6fxzy12SrSthogWlNDRgTfGSqUpDJZjxOCXFiJmCzqMQFmKuDAPz+q4vHV9Zl75ZyWXDaY7KNopZSNhKnFnhOC4HrQ6e202eVXPbAKbsuxbGM+pTZBytDgwM6VQHFCDeadJmEPKu4+doV0LZlhU/dEKatv9Nbp2JHjlrUcALl0Rszazt117nbS6YUP2ZbSOjY0q7+lrSARc+McPfg8HWncpnfrhVRHWBiqQKgT4gwR+eJfOMrD7Yemj8vLzorPBZrvr+4ROCsIGz1K4mAJ7e/Ljdv2PWnn9+6rVXDge+0e1wJWxd5QEWYEMaXl64O/d376mOdGOwPMCNwnTAjcUsq2wMedE3GNyQTvrdBu+V7QgkfjW+ddtw0xJ/YvP7K0STFMy9Vh19AAAAAElFTkSuQmCC",r=n.p+"img/back.a1821e6b.svg",d=n.p+"img/clear.e9281049.svg";const A={class:"navbar"},c={key:0,class:"navbar-nav container"},g={class:"navbar-nav__title"},m=(0,a._)("img",{src:s,alt:""},null,-1),h=[m],u={key:1,class:"navbar-search container"},b=(0,a._)("img",{src:r,alt:""},null,-1),w=[b],p=["placeholder"],C=(0,a._)("img",{src:d,alt:""},null,-1),v=[C];function I(t,e,n,l,s,r){return(0,a.wg)(),(0,a.iD)("nav",A,[s.navbar?((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("button",{class:"btn-back navbar-btn",onClick:e[3]||(e[3]=t=>s.navbar=!s.navbar)},w),(0,a.wy)((0,a._)("input",{type:"text",placeholder:r.words.navbarSearch[n.lang],class:"navbar-search__input","onUpdate:modelValue":e[4]||(e[4]=t=>s.search=t)},null,8,p),[[i.nr,s.search]]),(0,a._)("button",{class:"btn-clear navbar-btn",onClick:e[5]||(e[5]=t=>s.search="")},v)])):((0,a.wg)(),(0,a.iD)("div",c,["en"==n.lang?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn-lang navbar-btn",onClick:e[0]||(e[0]=(...t)=>r.changeLang&&r.changeLang(...t))},"Ru")):((0,a.wg)(),(0,a.iD)("button",{key:1,class:"btn-lang navbar-btn",onClick:e[1]||(e[1]=(...t)=>r.changeLang&&r.changeLang(...t))},"En")),(0,a._)("h1",g,(0,o.zw)(r.words.navbarTitle[n.lang]),1),(0,a._)("button",{class:"btn-search navbar-btn",onClick:e[2]||(e[2]=t=>(s.navbar=!s.navbar,s.search=""))},h)]))])}var f={props:["lang"],inject:["words"],data(){return{navbar:!1,search:""}},watch:{search(t){this.$emit("getSearch",t),console.log(t)}},methods:{changeLang(){this.$emit("changeLang","ru"==this.lang?"en":"ru")}}},B=n(3744);const O=(0,B.Z)(f,[["render",I]]);var L=O,S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACqSURBVHgB7ZQxCgIxEEX/jGvvEeKNcgALbTStJ3BvoKVWgizY7o3MDbQXHXeEYAqL1aRY2H1Nhh/+Z8iHkLOn+RO8JWCCJMgzpGTBaJMepoh5ALtCh3c+7tN9vfDhemUr0fNQzyi2fdOdPRrB+KKLcRDjsF+JvYzMZA+k8Ca5yL5hEYY2bbbRu1/K0PKHHrTs7NngT2IvLW11zfPBKuKZQWsdkEjTyK3JKl+0wUgXrcQmvQAAAABJRU5ErkJggg==",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABTSURBVHgB7ZDBDQAQDEVbk7CRuwHMZAB3G+kmBJHohUocvUub5vfn56O3MQMUDR2kkJzhNwlIij/M/cZk6BU8oiWixZn4lHKr34C/7AO/bAnPyq62pUKvZgzQ3QAAAABJRU5ErkJggg==";const D={class:"content container"},_={class:"content-top"},E={class:"content-top__title"},U={key:0,src:S,alt:""},Q={key:1,src:k,alt:""};function y(t,e,n,i,l,s){const r=(0,a.up)("Item");return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",_,[(0,a._)("h3",E,(0,o.zw)(s.words.contentTitle[n.lang]),1),(0,a._)("button",{class:"content-top__toggle",onClick:e[0]||(e[0]=t=>l.grid=!l.grid)},[l.grid?((0,a.wg)(),(0,a.iD)("img",U)):((0,a.wg)(),(0,a.iD)("img",Q)),(0,a._)("span",null,(0,o.zw)(l.grid?s.words.grid[n.lang]:s.words.list[n.lang]),1)])]),(0,a._)("div",{class:(0,o.C_)(["content-items",l.grid?"flex":"grid"])},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.itemList,((e,i)=>((0,a.wg)(),(0,a.j4)(r,{key:i,item:e,onChangeItem:n=>t.$emit("changeItem",e.id),onDeleteItem:n=>t.$emit("deleteItem",e.id),grid:l.grid,lang:n.lang},null,8,["item","onChangeItem","onDeleteItem","grid","lang"])))),128))],2)])}var j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAYAAAC5DOVpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgBrdNBDoIwEAXQmXIBj+BR5AZ1aTAxbkRXXoWlxoUYSdxyA6/AEVi69AJaOzWFADUylL8gk0n7MrQpwoDE8poA4F6XBUIwP+SLkvoIzGxklupNq7qDJYIICRTASBeiqKmC15mq3pgbqjLrjVlIATx/LEnoE3AgBRgKwIed5BtMj/ly93eyNnTKo0JvudQTEhSt7XrBgbbypg/7fdf9SRsyNBei23NBTmwo1MF8oAbmC1XYGJDBxoIowj4RX8hgtvCFzG/GMlOONhtqTOYLUT67D71lmyJdtQAAAABJRU5ErkJggg==",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAASCAYAAABrXO8xAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7ZI9DoAgDIVbI7s7S6/AETySN/BmHoErdGFnZ6gQQ0QHfxgcDN/QNE3b94aHUGCJCEJYYktwhEGp0TBzHqDVWqCCDr4GU3lr1ziH1Vb786er5dJZtWI7/MfhlhxEDyLDo8yK8K4oMuXBDT6KzKlZAe2CIMkv5ZkKAAAAAElFTkSuQmCC";const R={class:"item"},T={class:"item-top__title"},M={class:"item-top__date"},J={class:"item-text"},K={class:"item-btns"},Y=(0,a._)("img",{src:j,alt:""},null,-1),z=(0,a._)("img",{src:N,alt:""},null,-1);function x(t,e,n,i,l,s){return(0,a.wg)(),(0,a.iD)("div",R,[(0,a._)("div",{class:(0,o.C_)(["item-top",n.grid?"row":""])},[(0,a._)("h3",T,(0,o.zw)(n.item.title),1),(0,a._)("span",M,(0,o.zw)(n.item.date),1)],2),(0,a._)("p",J,(0,o.zw)(n.item.desc),1),(0,a._)("div",K,[(0,a._)("button",{class:"item-btn btn-edit",onClick:e[0]||(e[0]=e=>t.$emit("changeItem",n.item.id))},[Y,(0,a._)("span",null,(0,o.zw)(s.words.editBtn[n.lang]),1)]),(0,a._)("button",{class:"item-btn btn-delete",onClick:e[1]||(e[1]=e=>t.$emit("deleteItem",n.item.id))},[z,(0,a._)("span",null,(0,o.zw)(s.words.deleteBtn[n.lang]),1)])])])}var V={props:["item","grid","lang"],inject:["words"]};const X=(0,B.Z)(V,[["render",x]]);var W=X,Z={props:["itemList","lang"],inject:["words"],components:{Item:W},data(){return{grid:!1}}};const H=(0,B.Z)(Z,[["render",y]]);var G=H;const P={key:0,class:"modal-item__title"},q={key:1,class:"modal-item__title"},F={class:"modal-item__input"},$=(0,a._)("span",null,"Title",-1),tt={class:"modal-item__input"},et=(0,a._)("span",null,"Content",-1),nt={class:"modal-item__btns"};function it(t,e,n,l,s,r){return(0,a.wg)(),(0,a.j4)(i.uT,{name:"scale"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:"modal",onClick:e[6]||(e[6]=(...t)=>r.modalClose&&r.modalClose(...t))},[(0,a._)("div",{class:"modal-item",onClick:e[5]||(e[5]=(0,i.iM)((()=>{}),["stop"]))},[n.edit?((0,a.wg)(),(0,a.iD)("h3",q,(0,o.zw)(r.words.modalTitleEdit[n.lang]),1)):((0,a.wg)(),(0,a.iD)("h3",P,(0,o.zw)(r.words.modalTitle[n.lang]),1)),(0,a.Uk)(" "+(0,o.zw)(r.editinfo)+" ",1),(0,a._)("label",F,[$,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Tile","onUpdate:modelValue":e[0]||(e[0]=t=>s.title=t)},null,512),[[i.nr,s.title]])]),(0,a._)("label",tt,[et,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Content","onUpdate:modelValue":e[1]||(e[1]=t=>s.desc=t)},null,512),[[i.nr,s.desc]])]),(0,a._)("div",nt,[(0,a._)("button",{class:"modal-btn btn-cancel",onClick:e[2]||(e[2]=(...t)=>r.modalClose&&r.modalClose(...t))},(0,o.zw)(r.words.cancelBtn[n.lang]),1),n.edit?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"modal-btn btn-add",onClick:e[4]||(e[4]=(...t)=>r.editItem&&r.editItem(...t))},(0,o.zw)(r.words.changeBtn[n.lang]),1)):((0,a.wg)(),(0,a.iD)("button",{key:0,class:"modal-btn btn-add",onClick:e[3]||(e[3]=(...t)=>r.addItem&&r.addItem(...t))},(0,o.zw)(r.words.addBtn[n.lang]),1))])])])])),_:1})}var at={props:["currentId","edit","itemObj","lang"],inject:["words"],data(){return{title:"",desc:"",id:this.currentId}},computed:{editinfo(){this.edit?(this.title=this.itemObj.title,this.desc=this.itemObj.desc):(this.title="",this.desc="")}},methods:{modalClose(){this.$emit("modalClose",!0),this.title="",this.desc=""},addItem(){if(""!=this.title&&""!=this.desc){localStorage.itemId=this.id;const t={id:this.id++,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("addItem",t),this.title="",this.desc="",this.modalClose()}},editItem(){if(""!=this.title&&""!=this.desc){const t={id:this.itemObj.id,title:this.title,desc:this.desc,date:(new Date).toLocaleDateString()};this.$emit("editItem",t),this.modalClose()}}}};const lt=(0,B.Z)(at,[["render",it]]);var ot=lt;const st=(0,a._)("img",{src:j,alt:""},null,-1),rt=[st];function dt(t,e,n,i,l,o){return(0,a.wg)(),(0,a.iD)("button",{class:"add-btn",onClick:e[0]||(e[0]=e=>t.$emit("modalOpen",!0))},rt)}var At={};const ct=(0,B.Z)(At,[["render",dt]]);var gt=ct;const mt={navbarTitle:{ru:"Заметки",en:"Notes"},navbarSearch:{ru:"Поиск",en:"Search"},list:{ru:"Список",en:"List"},grid:{ru:"Сетка",en:"Grid"},contentTitle:{ru:"Все заметки",en:"All notes"},modalTitle:{ru:"Добавить заметку",en:"Add notes"},modalTitleEdit:{ru:"Изменить заметку",en:"Change notes"},changeBtn:{ru:"Изменить",en:"Change"},editBtn:{ru:"Редактировать",en:"Edit"},deleteBtn:{ru:"Удалить",en:"Delete"},addBtn:{ru:"Добавить",en:"Add"},cancelBtn:{ru:"Отмена",en:"Cancel"}};var ht=mt,ut={components:{Navbar:L,Content:G,Modal:ot,AddBtn:gt},data(){return{modalOpenOrClose:!1,itemList:[],currentId:1,edit:!1,itemObj:{},search:"",lang:"ru",langsWord:{}}},computed:{filterItemList(){return this.search?this.itemList.filter((t=>t.title.toLowerCase().includes(this.search.toLowerCase()))):this.itemList}},methods:{changeLang(t){this.lang=localStorage.lang=t},modalOpen(t){this.modalOpenOrClose=t,this.edit=!1},modalClose(t){this.edit=this.modalOpenOrClose=!t},addItem(t){this.itemList.push(t)},getLocalList(){const t=localStorage.itemList;t&&(this.itemList=JSON.parse(t),this.currentId=localStorage.itemId,this.currentId++)},changeItem(t){this.edit=this.modalOpenOrClose=!0;let e=this.itemList.find((e=>e.id==t));this.itemObj=e},deleteItem(t){this.itemList=this.itemList.filter((e=>e.id!=t))},editItem(t){this.itemList.forEach((e=>{e.id==t.id&&(e.title=t.title,e.desc=t.desc,e.date=t.date)}))}},created(){this.getLocalList(),localStorage.lang=localStorage.lang||"ru",this.lang=localStorage.lang||"ru",this.langsWord=ht,localStorage.words=JSON.stringify(this.langsWord)},provide(){return{words:JSON.parse(localStorage.words)}},watch:{itemList:{handler(t){console.log(t),localStorage.setItem("itemList",JSON.stringify(this.itemList))},deep:!0}}};const bt=(0,B.Z)(ut,[["render",l]]);var wt=bt;(0,i.ri)(wt).mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var l=e[i]={exports:{}};return t[i](l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,l){if(!i){var o=1/0;for(A=0;A<t.length;A++){i=t[A][0],a=t[A][1],l=t[A][2];for(var s=!0,r=0;r<i.length;r++)(!1&l||o>=l)&&Object.keys(n.O).every((function(t){return n.O[t](i[r])}))?i.splice(r--,1):(s=!1,l<o&&(o=l));if(s){t.splice(A--,1);var d=a();void 0!==d&&(e=d)}}return e}l=l||0;for(var A=t.length;A>0&&t[A-1][2]>l;A--)t[A]=t[A-1];t[A]=[i,a,l]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/to-do-vue3/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,l,o=i[0],s=i[1],r=i[2],d=0;if(o.some((function(e){return 0!==t[e]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(r)var A=r(n)}for(e&&e(i);d<o.length;d++)l=o[d],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(A)},i=self["webpackChunktemplate"]=self["webpackChunktemplate"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2064)}));i=n.O(i)})();
//# sourceMappingURL=app.b0824577.js.map