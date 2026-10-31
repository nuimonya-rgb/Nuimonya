/* ===== 一覧ページと商品詳細ページで共通の部品 ===== */
const fb="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="#eee9df"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="28" fill="#777">Photo being matched</text></svg>');
/* ===== 期間限定SALE（フランス時間）。期間が終わると自動で元の価格に戻る ===== */
const SALE={start:"2026-11-07",end:"2026-12-13"};
const today=new URLSearchParams(location.search).get("sale-preview")||new Intl.DateTimeFormat("en-CA",{timeZone:"Europe/Paris"}).format(new Date());
const onSale=p=>p.salePrice!=null&&!p.sold&&today>=SALE.start&&today<=SALE.end;
function priceHTML(p,v){let base=v?.price??p.price;if(!onSale(p))return "€"+base;let off=Math.round((1-p.salePrice/base)*100);return `<s class="was">€${base}</s><span class="now">€${p.salePrice}</span><span class="off">-${off}%</span>`}
function mail(p,v){let n=p.name+(v?" – "+v.name:""),pr=onSale(p)?p.salePrice:(v?.price??p.price);return "mailto:handmade.emiys@gmail.com?subject="+encodeURIComponent("Nuimonya enquiry: "+n)+"&body="+encodeURIComponent("Hello Emi,\n\nI am interested in: "+n+" (€"+pr+").\nCould you please confirm availability?\n\nThank you.")}
const bad=new Set();
function list(p,vi){let v=p.variants?.[vi];let l=v?(v.images||[v.image]):(p.images||[]);l=[...new Set(l)].filter(f=>!bad.has(f));return l.length?l:[fb]}
/* ===== 商品詳細ページ =====
   ここに商品IDを入れた商品だけ、一覧から詳細ページへ移動する（試作中は p37 だけ） */
const ITEM_PAGES=new Set(["p37"]);
const itemURL=p=>ITEM_PAGES.has(p.id)?"items/"+p.id+"/":null;
