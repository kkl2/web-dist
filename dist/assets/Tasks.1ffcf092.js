import{a as k,aW as l,b9 as s,m as F,h as r,cX as B,X as S,a4 as h,bP as P,b5 as v,S as w,cm as V,cn as j,C as i,ba as o,n as z,ck as G,G as I,e as N,k as q,ae as A,E as J}from"./index.9a0519d8.js";import{P as K}from"./Paginator.5ca7398e.js";var d;(function(e){e[e.Pending=0]="Pending",e[e.Running=1]="Running",e[e.Succeeded=2]="Succeeded",e[e.Canceling=3]="Canceling",e[e.Canceled=4]="Canceled",e[e.Errored=5]="Errored",e[e.Failing=6]="Failing",e[e.Failed=7]="Failed",e[e.WaitingRetry=8]="WaitingRetry",e[e.BeforeRetry=9]="BeforeRetry"})(d||(d={}));const O={[d.Failed]:"danger",[d.Succeeded]:"success",[d.Canceled]:"neutral"},Q=e=>{const t=k();return r(G,{get colorScheme(){var a;return(a=O[e.state])!=null?a:"info"},get children(){return t(`tasks.state.${e.state}`)}})},U=e=>{const t=k(),a=e.done==="undone"?"cancel":"delete",$=e.done==="done"&&e.state===d.Failed,[y,C]=l(()=>s.post(`/admin/task/${e.type}/${a}?tid=${e.id}`)),[c,b]=l(()=>s.post(`/admin/task/${e.type}/retry?tid=${e.id}`)),[m,f]=F(!1);return r(w,{get when(){return!m()},get children(){return r(B,{get bgColor(){return S("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[r(h,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[r(P,{size:"sm",css:{wordBreak:"break-all"},get children(){return e.name}}),r(Q,{get state(){return e.state}}),r(v,{css:{wordBreak:"break-all"},get children(){return e.status}}),r(w,{get when(){return e.error},get children(){return r(v,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return e.error}})}}),r(V,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},get children(){return r(j,{color:"$info8",rounded:"$md"})}})]}}),r(B,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return[r(w,{get when(){return e.canRetry},get children(){return r(i,{disabled:!$,display:$?"block":"none",get loading(){return c()},onClick:async()=>{const g=await b();o(g,()=>{z.info(t("tasks.retry")),f(!0)})},get children(){return t("tasks.retry")}})}}),r(i,{colorScheme:"danger",get loading(){return y()},onClick:async()=>{const g=await C();o(g,()=>{z.success(t("global.delete_success")),f(!0)})},get children(){return t(`global.${a}`)}})]}})]}})}})},Y=e=>{const t=k(),[a,$]=l(()=>s.get(`/admin/task/${e.type}/${e.done}`)),[y,C]=F([]),c=async()=>{const n=await $();o(n,u=>{var x;return C((x=u==null?void 0:u.sort((X,H)=>X.id>H.id?1:-1))!=null?x:[])})};if(c(),e.done==="undone"){const n=setInterval(c,2e3);N(()=>clearInterval(n))}const[b,m]=l(()=>s.post(`/admin/task/${e.type}/clear_done`)),[f,g]=l(()=>s.post(`/admin/task/${e.type}/clear_succeeded`)),[_,L]=l(()=>s.post(`/admin/task/${e.type}/retry_failed`)),[W,D]=F(1),R=20,M=q(()=>{const n=(W()-1)*R,u=n+R;return y().slice(n,u)});return r(h,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[r(P,{size:"lg",get children(){return t(`tasks.${e.done}`)}}),r(w,{get when(){return e.done==="done"},get children(){return r(A,{gap:"$2",flexWrap:"wrap",get children(){return[r(i,{colorScheme:"accent",get loading(){return a()},onClick:c,get children(){return t("global.refresh")}}),r(i,{get loading(){return _()},onClick:async()=>{const n=await L();o(n,()=>c())},get children(){return t("tasks.retry_failed")}}),r(i,{colorScheme:"danger",get loading(){return b()},onClick:async()=>{const n=await m();o(n,()=>c())},get children(){return t("global.clear")}}),r(i,{colorScheme:"success",get loading(){return f()},onClick:async()=>{const n=await g();o(n,()=>c())},get children(){return t("tasks.clear_succeeded")}})]}})}}),r(h,{w:"$full",spacing:"$2",get children(){return r(I,{get each(){return M()},children:n=>r(U,J(n,e))})}}),r(K,{get total(){return y().length},defaultPageSize:R,onChange:n=>{D(n)}})]}})},T=e=>{const t=k();return r(h,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[r(P,{size:"xl",get children(){return t(`tasks.${e.type}`)}}),r(h,{w:"$full",spacing:"$2",get children(){return r(I,{each:["undone","done"],children:a=>r(Y,{get type(){return e.type},done:a,get canRetry(){return e.canRetry}})})}})]}})};export{T};
