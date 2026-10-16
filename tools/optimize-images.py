"""Convert product photos to WebP for the shop site.

Default (A): long side 1600px, quality 82.
Detail photos (B): long side 2048px, quality 90 -> add the file name to HQ below.
Run from the repo root:  python3 tools/optimize-images.py
It converts every photo listed in products.js (+ the hero image), rewrites the
paths in products.js / index.html to .webp, and removes the converted originals.
Originals are kept on the backup branch on GitHub.
"""
import os, re, sys
from PIL import Image, ImageOps

HQ = set([
    # "IMG_6409.jpeg",
])
A = (1600, 82)
B = (2048, 90)
HERO = {}  # hero (Osaka-castle.jpg) stays JPEG: WebP was not smaller

def convert(src, size, q):
    dst = re.sub(r"\.[^.]+$", ".webp", src)
    im = Image.open(src)
    icc = im.info.get("icc_profile")
    im = ImageOps.exif_transpose(im)
    im = im.convert("RGBA" if im.mode in ("RGBA", "LA", "P") and "transparency" in im.info or im.mode == "RGBA" else "RGB")
    im.thumbnail((size, size), Image.LANCZOS)
    kw = dict(quality=q, method=6)
    if icc: kw["icc_profile"] = icc
    im.save(dst, "WEBP", **kw)
    return dst

def main():
    js = open("products.js", encoding="utf-8").read()
    html = open("index.html", encoding="utf-8").read()
    paths = sorted(set(re.findall(r'"(Images/[^"]+\.(?:jpe?g|png))"', js, re.I)))
    done = {}
    for p in paths:
        if not os.path.exists(p):
            print("missing (left as is):", p); continue
        size, q = B if os.path.basename(p) in HQ else A
        done[p] = convert(p, size, q)
    for p, (size, q) in HERO.items():
        if os.path.exists(p) and p in html:
            done[p] = convert(p, size, q)
    for old, new in done.items():
        js = js.replace(f'"{old}"', f'"{new}"')
        html = html.replace(old, new)
    open("products.js", "w", encoding="utf-8").write(js)
    open("index.html", "w", encoding="utf-8").write(html)
    for old in done: os.remove(old)
    print("converted", len(done))

if __name__ == "__main__":
    main()
