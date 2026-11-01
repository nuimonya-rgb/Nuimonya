#!/usr/bin/env python3
"""商品詳細ページ（items/<商品ID>/index.html）を products.js から自動で作る道具。

使い方（リポジトリのいちばん上のフォルダで）:
    python3 tools/build-items.py

- 商品データは products.js の1か所だけ。このページには、検索や Pinterest 用の
  タイトル・説明・写真の設定と、共通のヘッダー・フッターだけを書き出す。
- products.js にあるすべての商品のページを作る。
- products.js から消えた商品のフォルダが残っていたら知らせる（自動では消さない）。
- ヘッダーとフッターは index.html からそのまま写すので、デザインがずれない。
- Google 用のサイトマップ（sitemap.xml：トップページ＋全商品ページ）もいっしょに作る。
"""
import html, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = "https://nuimonya.com"


def read(name):
    with open(os.path.join(ROOT, name), encoding="utf-8") as f:
        return f.read()


def load_products():
    s = read("products.js")
    return json.loads(s[s.index("["):s.rindex("]") + 1])


def site_parts():
    idx = read("index.html")
    header = re.search(r"<header>.*?</header>", idx, re.S).group(0)
    footer = re.search(r"<footer>.*?</footer>", idx, re.S).group(0)
    analytics = re.search(r"<!-- Cloudflare Web Analytics -->.*?<!-- End Cloudflare Web Analytics -->", idx, re.S)
    # 詳細ページは items/<ID>/ の中にあるので、リンクと画像をサイトの先頭からの道にする
    header = header.replace('href="#', 'href="/#').replace('src="Images/', 'src="/Images/')
    return header, footer, analytics.group(0) if analytics else ""


def first_image(p):
    v = (p.get("variants") or [None])[0]
    imgs = (v.get("images") or [v.get("image")]) if v else p.get("images") or []
    return imgs[0] if imgs else None


def page(p, header, footer, analytics):
    e = lambda s: html.escape(str(s or ""), quote=True)
    url = f"{SITE}/items/{p['id']}/"
    title = f"{p['name']} | ぬいもん屋 – Japanese handmade in France"
    desc = p.get("description") or "Handmade with Japanese fabrics in France."
    if p.get("variants"):
        desc += " Patterns: " + ", ".join(v["name"] for v in p["variants"]) + "."
    img = first_image(p)
    og_img = f'<meta property="og:image" content="{SITE}/{e(img)}">' if img else ""
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="product"><meta property="og:site_name" content="ぬいもん屋">
<meta property="og:title" content="{e(p['name'])}"><meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{url}">{og_img}
<link rel="stylesheet" href="/style.css"></head><body class="itempage" data-item="{e(p['id'])}">
{header}
<main id="item"><noscript><h1>{e(p['name'])}</h1><p>{e(p.get('description'))}</p><p><a href="/#collection">Back to the collection</a></p></noscript></main>
{footer}
<script src="/products.js"></script><script src="/shop.js"></script><script src="/item.js"></script>
<script>const mb=document.querySelector(".menu"),hd=document.querySelector("header");if(mb){{mb.addEventListener("click",()=>{{let o=hd.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.textContent=o?"×":"☰"}});sitenav.addEventListener("click",e=>{{if(e.target.closest("a")){{hd.classList.remove("open");mb.setAttribute("aria-expanded",false);mb.textContent="☰"}}}})}}</script>{analytics}</body></html>
"""


def sitemap(products):
    """Google Search Console に送る sitemap.xml。商品ページには代表の写真も書いておく（Google 画像検索用）。"""
    e = lambda s: html.escape(str(s), quote=True)
    rows = [f"  <url>\n    <loc>{SITE}/</loc>\n  </url>"]
    for p in products:
        img = first_image(p)
        im = (f"\n    <image:image>\n      <image:loc>{SITE}/{e(img)}</image:loc>\n    </image:image>" if img else "")
        rows.append(f"  <url>\n    <loc>{SITE}/items/{e(p['id'])}/</loc>{im}\n  </url>")
    return ('<?xml version="1.0" encoding="UTF-8"?>\n'
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
            'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
            + "\n".join(rows) + "\n</urlset>\n")


def main():
    products = {p["id"]: p for p in load_products()}
    header, footer, analytics = site_parts()
    ids = list(products)
    for i in ids:
        d = os.path.join(ROOT, "items", i)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, "index.html"), "w", encoding="utf-8") as f:
            f.write(page(products[i], header, footer, analytics))
    print(f"作成: {len(ids)} ページ（items/商品ID/index.html）")
    with open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(sitemap(list(products.values())))
    print(f"作成: sitemap.xml（{len(ids) + 1} ページ）")
    d = os.path.join(ROOT, "items")
    stale = sorted(x for x in os.listdir(d) if os.path.isdir(os.path.join(d, x)) and x not in products)
    if stale:
        print("products.js にない古いページ（確認して不要なら削除）:", stale)


if __name__ == "__main__":
    main()
