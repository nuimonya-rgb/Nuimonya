/* ===== 商品詳細ページ（items/商品ID/index.html から読み込む）=====
   商品データは products.js の1か所だけ。このファイルは表示と動きだけを担当する。 */
(function(){
const id=document.body.dataset.item;
const p=products.find(x=>x.id===id);
const box=document.getElementById("item");
if(!p){box.innerHTML='<p class="itemmissing">This item is no longer available. <a href="/#collection">Back to the collection</a></p>';return}
const abs=f=>f.startsWith("data:")||f.startsWith("/")||f.startsWith("http")?f:"/"+f;
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const CAT={Bags:"Bags",Pouches:"Pouches",Clothing:"Clothing",Others:"Others",Outlet:"Outlet"};
let vi=Math.min(Math.max(+new URLSearchParams(location.search).get("v")||0,0),(p.variants?.length||1)-1),k=0;
const photos=()=>list(p,vi).map(abs);
const back=p.category==="Outlet"?"/#outlet":"/#collection";

box.innerHTML=`
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>›</span><a href="${back}">${p.category==="Outlet"?"Outlet":"Collection"}</a><span>›</span><a href="${back}">${esc(CAT[p.category]||p.category)}</a><span>›</span><b>${esc(p.name)}</b></nav>
<div class="itemwrap">
  <div class="gallery">
    <div class="photo main" tabindex="0" aria-label="Open large photo"></div>
    <div class="thumbs" role="list"></div>
    <p class="hint">Click the photo to enlarge</p>
  </div>
  <div class="itemcopy">
    <p class="cap">${esc((CAT[p.category]||p.category).toUpperCase())}</p>
    <h1>${esc(p.name)}</h1>
    <p class="iprice"></p>
    ${p.variants?`<div class="ivars"><p class="label">Pattern: <b class="vname"></b></p><div class="vars">${p.variants.map((x,j)=>`<button type="button" data-v="${j}">${esc(x.name)}</button>`).join("")}</div></div>`:""}
    <dl class="specs">
      <div class="isize"><dt>Size</dt><dd></dd></div>
      ${p.material?`<div><dt>Material</dt><dd>${esc(p.material)}</dd></div>`:""}
    </dl>
    <p class="idesc">${esc(p.description)}</p>
    <a class="ask iask" href="#">ASK ABOUT THIS ITEM</a>
    <div class="inote"><b>AVAILABILITY & PAYMENT</b><p>Most items are one-of-a-kind and are also sold at events. Please contact me to confirm availability <b>before payment.</b> Payment: PayPal only.</p></div>
    <a class="iback" href="${back}">‹ Back to ${p.category==="Outlet"?"Outlet":"the collection"}</a>
  </div>
</div>
<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="Large photo"><button type="button" class="lbclose" aria-label="Close">×</button><div class="lbphoto"></div></div>`;

const main=box.querySelector(".gallery .main"),thumbs=box.querySelector(".thumbs"),lb=box.querySelector(".lightbox");
function nav(n){return n>1?`<button type="button" class="nav prev" aria-label="Previous photo">‹</button><button type="button" class="nav next" aria-label="Next photo">›</button><span class="count">${k+1} / ${n}</span>`:""}
function drawPhoto(){let l=photos();if(k>=l.length)k=0;
  main.innerHTML=`${p.sold?'<span class="soldtag">SOLD</span>':""}<img src="${l[k]}" alt="${esc(p.name)}${p.variants?" – "+esc(p.variants[vi].name):""}" decoding="async">${nav(l.length)}`;
  thumbs.innerHTML=l.length>1?l.map((f,j)=>`<button type="button" class="${j===k?"active":""}" data-k="${j}" aria-label="Photo ${j+1}"><img src="${f}" alt="" loading="lazy"></button>`).join(""):"";
  if(!lb.hidden)drawLB()}
function drawLB(){let l=photos();lb.querySelector(".lbphoto").innerHTML=`<img src="${l[k]}" alt="${esc(p.name)}">${nav(l.length)}`}
function drawInfo(){let v=p.variants?.[vi];
  box.querySelector(".iprice").innerHTML=priceHTML(p,v)+(p.sold?' <span class="isold">SOLD</span>':"");
  let size=v?.size||p.size;box.querySelector(".isize").hidden=!size;box.querySelector(".isize dd").textContent=size||"";
  box.querySelector(".iask").href=mail(p,v);
  if(v){box.querySelector(".vname").textContent=v.name;box.querySelectorAll(".ivars button").forEach((b,j)=>b.classList.toggle("active",j===vi))}}
function step(d){let n=photos().length;k=((k+d)%n+n)%n;drawPhoto()}
function setVar(j){vi=j;k=0;drawPhoto();drawInfo();history.replaceState(null,"",j?"?v="+j:location.pathname)}
function openLB(){lb.hidden=false;document.body.style.overflow="hidden";drawLB();lb.querySelector(".lbclose").focus()}
function closeLB(){lb.hidden=true;document.body.style.overflow="";main.focus()}

box.addEventListener("click",e=>{
  let n=e.target.closest(".nav");if(n){e.stopPropagation();step(n.classList.contains("next")?1:-1);return}
  if(e.target.closest(".lbclose")||e.target===lb){closeLB();return}
  let t=e.target.closest(".thumbs button");if(t){k=+t.dataset.k;drawPhoto();return}
  let b=e.target.closest(".ivars button");if(b){setVar(+b.dataset.v);return}
  if(e.target.closest(".gallery .main img"))openLB()});
main.addEventListener("keydown",e=>{if(e.key==="Enter")openLB()});
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1);if(e.key==="Escape"&&!lb.hidden)closeLB()});
let tx=null;box.addEventListener("touchstart",e=>{tx=e.target.closest(".main,.lbphoto")?e.touches[0].clientX:null},{passive:true});
box.addEventListener("touchend",e=>{if(tx===null)return;let dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>40)step(dx<0?1:-1)},{passive:true});

drawPhoto();drawInfo();
})();
