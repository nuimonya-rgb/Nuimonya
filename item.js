/* ===== 商品詳細ページ（items/商品ID/index.html から読み込む）=====
   商品データは products.js の1か所だけ。このファイルは表示と動きだけを担当する。 */

/* ===== サイズ比較の線画（products.js の sizeGuide の実寸を使う）=====
   1cm = 4px の縮尺。人は身長165cmの上半身（頭〜太もも上）。
   style:"crossbody" … 斜めがけで腰の位置に描く（かけ方を確認済みの商品だけ）
   それ以外          … 身につけた位置は描かず、人の横に同じ縮尺で並べる */
function sizeGuideSVG(g){
  const cross=g.style==="crossbody",S=4,cx=cross?170:95,top=12,Y=cm=>top+cm*S;           // 頭のてっぺんから cm 下の位置
  const bw=g.width*S,bh=g.height*S;
  const bx=cross?cx+18-g.width*S/2:cx+27*S;                          // 斜めがけ：体の前／それ以外：人の右横
  const moon=g.shape==="crescent",drop=g.shape==="teardrop";             // 形：三日月（ボディクロス）／しずく（スリング）／角丸の四角
  const by=cross?(moon?Y(42):drop?Y(33):Y(63)):Math.max(Y(30),Y(72)-bh/2);                    // 斜めがけ：ウエストの少し下／それ以外：腰の高さが中心
  const r=Math.min(bw,bh)*(cross?0.32:0.08),f=n=>String(n).replace(/\.0$/,"");
  const body=`
   <ellipse cx="${cx}" cy="${Y(11)}" rx="${7.5*S}" ry="${11*S}"/>
   <path d="M${cx-5.5*S} ${Y(21)} L${cx-5.5*S} ${Y(26)} Q${cx-10*S} ${Y(27.5)} ${cx-18*S} ${Y(29)} Q${cx-20.5*S} ${Y(31)} ${cx-20*S} ${Y(36)}
            L${cx-21.5*S} ${Y(58)} Q${cx-22.5*S} ${Y(72)} ${cx-21*S} ${Y(80)} Q${cx-19.5*S} ${Y(84)} ${cx-18*S} ${Y(80)} L${cx-18*S} ${Y(62)} Q${cx-18*S} ${Y(48)} ${cx-16.5*S} ${Y(36)}"/>
   <path d="M${cx+5.5*S} ${Y(21)} L${cx+5.5*S} ${Y(26)} Q${cx+10*S} ${Y(27.5)} ${cx+18*S} ${Y(29)} Q${cx+20.5*S} ${Y(31)} ${cx+20*S} ${Y(36)}
            L${cx+21.5*S} ${Y(58)} Q${cx+22.5*S} ${Y(72)} ${cx+21*S} ${Y(80)} Q${cx+19.5*S} ${Y(84)} ${cx+18*S} ${Y(80)} L${cx+18*S} ${Y(62)} Q${cx+18*S} ${Y(48)} ${cx+16.5*S} ${Y(36)}"/>
   <path d="M${cx-16.5*S} ${Y(36)} Q${cx-15*S} ${Y(50)} ${cx-13.5*S} ${Y(60)} Q${cx-17.5*S} ${Y(72)} ${cx-17*S} ${Y(90)}"/>
   <path d="M${cx+16.5*S} ${Y(36)} Q${cx+15*S} ${Y(50)} ${cx+13.5*S} ${Y(60)} Q${cx+17.5*S} ${Y(72)} ${cx+17*S} ${Y(90)}"/>
   <path d="M${cx-17*S} ${Y(90)} Q${cx} ${Y(92)} ${cx+17*S} ${Y(90)}" stroke-dasharray="2 4"/>`;
  const shapeD=moon?`M${bx} ${by} C${bx+bw*.3} ${by+bh*.55} ${bx+bw*.7} ${by+bh*.55} ${bx+bw} ${by} C${bx+bw*.85} ${by+bh*1.33} ${bx+bw*.15} ${by+bh*1.33} ${bx} ${by} Z`
    :drop?`M${bx+bw*.5} ${by} C${bx+bw*.2} ${by+bh*.3} ${bx} ${by+bh*.6} ${bx} ${by+bh*.8} Q${bx} ${by+bh} ${bx+bw*.5} ${by+bh} Q${bx+bw} ${by+bh} ${bx+bw} ${by+bh*.8} C${bx+bw} ${by+bh*.6} ${bx+bw*.8} ${by+bh*.3} ${bx+bw*.5} ${by} Z`
    :`M${bx} ${by+bh} L${bx} ${by+r} Q${bx} ${by} ${bx+r} ${by} L${bx+bw-r} ${by} Q${bx+bw} ${by} ${bx+bw} ${by+r} L${bx+bw} ${by+bh-r*.6} Q${bx+bw} ${by+bh} ${bx+bw-r*.6} ${by+bh} L${bx+r*.6} ${by+bh} Q${bx} ${by+bh} ${bx} ${by+bh-r*.6} Z`;
  const strapFrom=moon?[bx+bw,by]:[bx+bw*.5,by];
  const bag=`<path class="sgbag" d="${shapeD}"/>
   ${cross?`<path class="sgstrap" d="M${strapFrom[0]} ${strapFrom[1]} L${cx-15*S} ${Y(28.5)}"/>`:""}`;
  const ax=cross?Math.max(cx+27*S,bx+bw+16):bx+bw+16,ay=drop?Math.max(by+bh+16,Y(92)+8):by+bh+16;
  const W=cross?Math.max(cx*2+40,ax+100):Math.max(540,ax+110),H=Math.max(Y(99),ay+45);
  const dims=`
   <path class="sglead" d="M${bx+bw} ${by} H${ax+6} M${bx+bw} ${by+bh} H${ax+6}"/>
   <path class="sgdim" d="M${ax} ${by} V${by+bh} M${ax-5} ${by+6} L${ax} ${by} L${ax+5} ${by+6} M${ax-5} ${by+bh-6} L${ax} ${by+bh} L${ax+5} ${by+bh-6}"/>
   <text x="${ax+12}" y="${by+bh/2-4}">Height</text><text class="sgnum" x="${ax+12}" y="${by+bh/2+14}">${f(g.height)} cm</text>
   <path class="sgdim" d="M${bx} ${ay} H${bx+bw} M${bx+6} ${ay-5} L${bx} ${ay} L${bx+6} ${ay+5} M${bx+bw-6} ${ay-5} L${bx+bw} ${ay} L${bx+bw-6} ${ay+5}"/>
   <path class="sglead" d="M${bx} ${by+bh} V${ay+6} M${bx+bw} ${by+bh} V${ay+6}"/>
   <text class="sgnum" x="${bx+bw/2}" y="${ay+20}" text-anchor="middle">${f(g.width)} cm</text>
   <text x="${bx+bw/2}" y="${ay+35}" text-anchor="middle">Width</text>`;
  const bx0=cross?20:W-60,bar=`<path class="sgdim" d="M${bx0} ${Y(93)} H${bx0+10*S} M${bx0} ${Y(93)-5} V${Y(93)+5} M${bx0+10*S} ${Y(93)-5} V${Y(93)+5}"/><text x="${bx0+5*S}" y="${Y(93)+(cross?18:22)}" text-anchor="middle">10 cm</text>`;
  return `<svg class="sgsvg${cross&&W<=cx*2+40?"":" wide"}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Size comparison: item ${f(g.width)} by ${f(g.height)} cm next to a 165 cm tall person"><g class="sgbody">${body}</g>${bag}${dims}${bar}</svg>`;
}

/* ===== サイズガイド（後ろ姿・試作）=====
   レン君のイラストを参考にしたデザイン。数字は products.js の sizeGuide だけを使い、
   人とバッグは同じ縮尺（1cm = 4px）で描く。柄は描かない（本物は上の写真で見られる）。 */
const SG2=new Set(["p15","p39","p37"]);   // 試作中：この商品だけ新しいデザイン
const SGKIND={crescent:["Body Cross Bag","Crescent","moon"],teardrop:["Sling Bag","Teardrop","drop"],square:["Shoulder Bag","Square","square"]};
function bagPath(shape,x,y,w,h){
  if(shape==="crescent")return `M${x} ${y} C${x+w*.3} ${y+h*.55} ${x+w*.7} ${y+h*.55} ${x+w} ${y} C${x+w*.85} ${y+h*1.33} ${x+w*.15} ${y+h*1.33} ${x} ${y} Z`;
  if(shape==="teardrop")return `M${x+w*.5} ${y} C${x+w*.2} ${y+h*.3} ${x} ${y+h*.6} ${x} ${y+h*.8} Q${x} ${y+h} ${x+w*.5} ${y+h} Q${x+w} ${y+h} ${x+w} ${y+h*.8} C${x+w} ${y+h*.6} ${x+w*.8} ${y+h*.3} ${x+w*.5} ${y} Z`;
  let r=Math.min(w,h)*.18;return `M${x+r} ${y} H${x+w-r} Q${x+w} ${y} ${x+w} ${y+r} V${y+h-r} Q${x+w} ${y+h} ${x+w-r} ${y+h} H${x+r} Q${x} ${y+h} ${x} ${y+h-r} V${y+r} Q${x} ${y} ${x+r} ${y} Z`}
function sgBack(g,shape){                      // 後ろ姿の人＋身につけたバッグ（実寸）
  const S=4,cx=150,top=14,Y=cm=>top+cm*S,bw=g.width*S,bh=g.height*S;
  let bx,by,rot,strap;
  if(shape==="crescent"){bx=cx-bw/2-2*S;by=Y(46);rot=`rotate(-12 ${bx+bw/2} ${by+bh/2})`;strap=[bx+bw-4,by+6]}
  else if(shape==="teardrop"){bx=cx+4*S-bw/2;by=Y(31);rot=`rotate(28 ${bx+bw/2} ${by})`;strap=[bx+bw/2,by]}
  else{bx=cx-14*S-bw/2;by=Y(60);rot="";strap=[bx+bw/2,by]}
  // ストラップは反対側の肩（後ろ姿なので右肩）へ
  const sh=[cx+14*S,Y(27.5)];
  return `<svg class="sgback" viewBox="0 0 300 ${Y(93)}" role="img" aria-label="Back view of a 165 cm tall person wearing the bag, drawn to scale">
   <g class="sgfig">
    <path class="sghair" d="M${cx-7.6*S} ${Y(11)} Q${cx-7.8*S} ${Y(1)} ${cx} ${Y(.8)} Q${cx+7.8*S} ${Y(1)} ${cx+7.6*S} ${Y(11)} Q${cx+7*S} ${Y(19)} ${cx} ${Y(21)} Q${cx-7*S} ${Y(19)} ${cx-7.6*S} ${Y(11)} Z"/>
    <ellipse class="sghair" cx="${cx}" cy="${Y(1.5)}" rx="${4.2*S}" ry="${3.4*S}"/>
    <path d="M${cx-5*S} ${Y(19)} L${cx-5.5*S} ${Y(26)} Q${cx-10*S} ${Y(27.5)} ${cx-18*S} ${Y(29)} Q${cx-20.5*S} ${Y(31)} ${cx-20*S} ${Y(36)} L${cx-21.5*S} ${Y(58)} Q${cx-22.5*S} ${Y(72)} ${cx-21*S} ${Y(80)} Q${cx-19.5*S} ${Y(84)} ${cx-18*S} ${Y(80)} L${cx-18*S} ${Y(62)} Q${cx-18*S} ${Y(48)} ${cx-16.5*S} ${Y(36)}"/>
    <path d="M${cx+5*S} ${Y(19)} L${cx+5.5*S} ${Y(26)} Q${cx+10*S} ${Y(27.5)} ${cx+18*S} ${Y(29)} Q${cx+20.5*S} ${Y(31)} ${cx+20*S} ${Y(36)} L${cx+21.5*S} ${Y(58)} Q${cx+22.5*S} ${Y(72)} ${cx+21*S} ${Y(80)} Q${cx+19.5*S} ${Y(84)} ${cx+18*S} ${Y(80)} L${cx+18*S} ${Y(62)} Q${cx+18*S} ${Y(48)} ${cx+16.5*S} ${Y(36)}"/>
    <path d="M${cx-16.5*S} ${Y(36)} Q${cx-15*S} ${Y(50)} ${cx-13.5*S} ${Y(60)} Q${cx-17.5*S} ${Y(72)} ${cx-17*S} ${Y(90)}"/>
    <path d="M${cx+16.5*S} ${Y(36)} Q${cx+15*S} ${Y(50)} ${cx+13.5*S} ${Y(60)} Q${cx+17.5*S} ${Y(72)} ${cx+17*S} ${Y(90)}"/>
    <path d="M${cx} ${Y(30)} Q${cx+.6*S} ${Y(50)} ${cx} ${Y(64)}" stroke-dasharray="2 5"/>
    <path d="M${cx-17*S} ${Y(90)} Q${cx} ${Y(92)} ${cx+17*S} ${Y(90)}" stroke-dasharray="2 4"/>
   </g>
   <g transform="${rot}"><path class="sgbag2" d="${bagPath(shape,bx,by,bw,bh)}"/></g>
   <path class="sgstrap" d="M${sgRot(strap,rot)} L${sh[0]} ${sh[1]}"/>
  </svg>`}
function sgRot(p,rot){if(!rot)return p.join(" ");let m=rot.match(/rotate\(([-\d.]+) ([-\d.]+) ([-\d.]+)\)/),a=m[1]*Math.PI/180,ox=+m[2],oy=+m[3],dx=p[0]-ox,dy=p[1]-oy;return `${(ox+dx*Math.cos(a)-dy*Math.sin(a)).toFixed(1)} ${(oy+dx*Math.sin(a)+dy*Math.cos(a)).toFixed(1)}`}
function sgFlat(g,shape){                      // バッグ単体（正面＋マチがわかれば横から）・同じ縮尺
  const S=4,f=n=>String(n).replace(/\.0$/,""),bw=g.width*S,bh=g.height*S,x=20,y=14;
  const side=g.depth&&shape!=="crescent"?g.depth*S:0,sx=x+bw+100;
  const ax=x+bw+16,W=Math.max(300,side?sx+side+70:ax+90),H=y+bh+(shape==="crescent"?6:0)+48;
  return `<svg class="sgflat" viewBox="0 0 ${W} ${H}" role="img" aria-label="Bag ${f(g.width)} by ${f(g.height)} cm">
   <path class="sgbag2" d="${bagPath(shape,x,y,bw,bh)}"/>
   <path class="sglead" d="M${x+bw} ${y} H${ax+6} M${x+bw} ${y+bh} H${ax+6}"/>
   <path class="sgdim" d="M${ax} ${y} V${y+bh} M${ax-5} ${y+6} L${ax} ${y} L${ax+5} ${y+6} M${ax-5} ${y+bh-6} L${ax} ${y+bh} L${ax+5} ${y+bh-6}"/>
   <text class="sgnum" x="${ax+10}" y="${y+bh/2+6}">${f(g.height)} cm</text>
   <path class="sgdim" d="M${x} ${y+bh+18} H${x+bw} M${x+6} ${y+bh+13} L${x} ${y+bh+18} L${x+6} ${y+bh+23} M${x+bw-6} ${y+bh+13} L${x+bw} ${y+bh+18} L${x+bw-6} ${y+bh+23}"/>
   <text class="sgnum" x="${x+bw/2}" y="${y+bh+40}" text-anchor="middle">${f(g.width)} cm</text>
   ${side?`<path class="sgbag2" d="M${sx+3} ${y} H${sx+side-3} Q${sx+side} ${y} ${sx+side} ${y+3} V${y+bh-3} Q${sx+side} ${y+bh} ${sx+side-3} ${y+bh} H${sx+3} Q${sx} ${y+bh} ${sx} ${y+bh-3} V${y+3} Q${sx} ${y} ${sx+3} ${y} Z"/>
   <path class="sgdim" d="M${sx} ${y+bh+18} H${sx+side} M${sx+5} ${y+bh+13} L${sx} ${y+bh+18} L${sx+5} ${y+bh+23} M${sx+side-5} ${y+bh+13} L${sx+side} ${y+bh+18} L${sx+side-5} ${y+bh+23}"/>
   <text class="sgnum" x="${sx+side/2}" y="${y+bh+40}" text-anchor="middle">${f(g.depth)} cm</text>`:""}
  </svg>`}
function sgCard(g){
  const shape=g.shape||"square",[en,form,cls]=SGKIND[shape],rows=[["横幅","Width",g.width],["高さ","Height",g.height],["マチ","Depth"+(g.depthBase?" (base)":""),g.depth],["ストラップ","Strap",g.strap],["持ち手","Handle",g.handle]].filter(r=>r[2]!=null);
  return `<section class="sizeguide sg2 sg-${cls}"><div class="sghead"><p class="cap">SIZE GUIDE</p><h3>${en} <span>(${form})</span></h3></div>
   <div class="sgpanel">${sgBack(g,shape)}</div><div class="sgpanel sgflatwrap">${sgFlat(g,shape)}</div>
   <table class="sgtable">${rows.map(r=>`<tr><th>${r[1]}</th><td>${r[2]} cm</td></tr>`).join("")}${(g.extra||[]).map(x=>`<tr><td colspan="2">${x}</td></tr>`).join("")}</table>
   <p class="sgnote">Approximate sizes. The person (165 cm tall) and the bag are drawn to the same scale. Fabric pattern not shown — see the photos above.</p></section>`}
(function(){
const id=document.body.dataset.item;
const p=products.find(x=>x.id===id);
const box=document.getElementById("item");
if(!p){box.innerHTML='<p class="itemmissing">This item is no longer available. <a href="/#collection">Back to the collection</a></p>';return}
const abs=f=>f.startsWith("data:")||f.startsWith("/")||f.startsWith("http")?f:"/"+f;
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const sgHTML=g=>g?`<section class="sizeguide"><p class="cap">SIZE GUIDE</p>${sizeGuideSVG(g)}<ul class="sglist">${[["Width",g.width],["Height",g.height],["Depth"+(g.depthBase?" (base)":""),g.depth],["Strap",g.strap],["Handle",g.handle]].filter(x=>x[1]!=null).map(x=>`<li>${x[0]} <b>${esc(x[1])} cm</b></li>`).join("")}${(g.extra||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul><p class="sgnote">Approximate sizes. Drawn to scale next to a 165 cm tall person${g.style==="crossbody"?"":" (not shown as worn)"}.</p></section>`:"";   // サイズ比較（柄ごとにサイズが違う商品は柄の sizeGuide を使う）
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
      </div>
  <div class="itemcopy">
    <p class="cap">${esc((CAT[p.category]||p.category).toUpperCase())}</p>
    <h1>${esc(p.name)}</h1>
    <p class="iprice"></p>
    ${p.variants?`<div class="ivars"><p class="label">Pattern: <b class="vname"></b></p><div class="swatches">${p.variants.map((x,j)=>`<button type="button" data-v="${j}" aria-label="Pattern ${esc(x.name)}"><img src="${abs(list(p,j)[0])}" alt="" loading="lazy">${esc(x.name)}</button>`).join("")}</div></div>`:""}
    <dl class="specs">
      <div class="isize"><dt>Size</dt><dd></dd></div>
      ${p.material?`<div><dt>Material</dt><dd>${esc(p.material)}</dd></div>`:""}
    </dl>
    <p class="idesc">${esc(p.description)}</p>
    <div class="sgwrap"></div>
    <a class="ask iask" href="#">ASK ABOUT THIS ITEM</a>
    <div class="inote"><b>AVAILABILITY & PAYMENT</b><p>Most items are one-of-a-kind and are also sold at events. Please contact me to confirm availability <b>before payment.</b> Payment: PayPal only.</p></div>
    <a class="iback" href="${back}">‹ Back to ${p.category==="Outlet"?"Outlet":"the collection"}</a>
  </div>
</div>
<div class="lightbox" hidden role="dialog" aria-modal="true" aria-label="Large photo"><button type="button" class="lbclose" aria-label="Close">×</button><div class="lbphoto"></div></div>`;

const main=box.querySelector(".gallery .main"),thumbs=box.querySelector(".thumbs"),lb=box.querySelector(".lightbox");
function nav(n){return n>1?`<button type="button" class="nav prev" aria-label="Previous photo">‹</button><button type="button" class="nav next" aria-label="Next photo">›</button><span class="count">${k+1} / ${n}</span>`:""}
function drawPhoto(){let l=photos();if(k>=l.length)k=0;
  main.innerHTML=`${p.sold?'<span class="soldtag">SOLD</span>':""}<img src="${l[k]}" alt="${esc(p.name)}${p.variants?" – "+esc(p.variants[vi].name):""}" decoding="async" onerror="itemMiss(this)">${nav(l.length)}<span class="zoom">TAP TO ZOOM</span>`;
  thumbs.innerHTML=l.length>1?l.map((f,j)=>`<button type="button" class="${j===k?"active":""}" data-k="${j}" aria-label="Photo ${j+1}"><img src="${f}" alt="" loading="lazy" onerror="itemMiss(this)"></button>`).join(""):"";
  thumbs.querySelector(".active")?.scrollIntoView({block:"nearest",inline:"nearest"});if(!lb.hidden)drawLB()}
window.itemMiss=im=>{let f=im.getAttribute("src");im.onerror=null;if(f.startsWith("data:"))return;bad.add(f.replace(/^\//,""));drawPhoto();drawInfo()};   // 見つからない写真は飛ばす（一覧と同じ）
function drawLB(){let l=photos();lb.querySelector(".lbphoto").innerHTML=`<img src="${l[k]}" alt="${esc(p.name)}">${nav(l.length)}`}
function drawInfo(){let v=p.variants?.[vi];
  box.querySelector(".iprice").innerHTML=priceHTML(p,v)+(p.sold?' <span class="isold">SOLD</span>':"");
  let size=v?.size||p.size;box.querySelector(".isize").hidden=!size;box.querySelector(".isize dd").textContent=size||"";
  box.querySelector(".iask").href=mail(p,v);
  {let g=v?.sizeGuide||p.sizeGuide;box.querySelector(".sgwrap").innerHTML=g&&SG2.has(p.id)?sgCard(g):sgHTML(g)}
  if(v){box.querySelector(".vname").textContent=v.name;box.querySelectorAll(".swatches button").forEach((b,j)=>b.classList.toggle("active",j===vi))}}
function step(d){let n=photos().length;k=((k+d)%n+n)%n;drawPhoto()}
function setVar(j){vi=j;k=0;drawPhoto();drawInfo();history.replaceState(null,"",j?"?v="+j:location.pathname)}
function openLB(){lb.hidden=false;document.body.style.overflow="hidden";drawLB();lb.querySelector(".lbclose").focus()}
function closeLB(){lb.hidden=true;document.body.style.overflow="";main.focus()}

box.addEventListener("click",e=>{
  let n=e.target.closest(".nav");if(n){e.stopPropagation();step(n.classList.contains("next")?1:-1);return}
  if(e.target.closest(".lbclose")||e.target===lb){closeLB();return}
  if(e.target.closest(".lbphoto"))return;
  let t=e.target.closest(".thumbs button");if(t){k=+t.dataset.k;drawPhoto();return}
  let b=e.target.closest(".swatches button");if(b){setVar(+b.dataset.v);return}
  if(e.target.closest(".gallery .main img"))openLB()});
main.addEventListener("keydown",e=>{if(e.key==="Enter")openLB()});
document.addEventListener("keydown",e=>{if(e.key==="ArrowRight")step(1);if(e.key==="ArrowLeft")step(-1);if(e.key==="Escape"&&!lb.hidden)closeLB()});
let tx=null;box.addEventListener("touchstart",e=>{tx=e.target.closest(".main,.lbphoto")?e.touches[0].clientX:null},{passive:true});
box.addEventListener("touchend",e=>{if(tx===null)return;let dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>40)step(dx<0?1:-1)},{passive:true});

drawPhoto();drawInfo();
})();
