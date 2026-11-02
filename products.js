const products = [
  {
    "id": "p19",
    "name": "Floral apron",
    "price": 45,
    "sold": true,
    "category": "Clothing",
    "images": [
      "Images/floral-apron.webp"
    ],
    "description": "Blue floral apron with a Japanese bonsai print pocket. 90% cotton, 10% elastane.",
    "size": "Length 90 cm"
  },
  {
    "id": "p35",
    "name": "Denim apron",
    "price": 45,
    "category": "Clothing",
    "images": [
      "Images/denim-apron.webp"
    ],
    "description": "100% cotton denim apron with a Japanese print pocket.",
    "size": "Length 92 cm"
  },
  {
    "id": "p36",
    "name": "Jinbei top",
    "price": 70,
    "salePrice": 50,
    "category": "Clothing",
    "images": [
      "Images/jinbei-top.webp",
      "Images/jinbei-front.jpg",
      "Images/jinbei-collar.webp"
    ],
    "description": "Navy jinbei top with a Japanese print collar. Top only.",
    "size": "Shoulder width approx. 55 cm · Sleeve length approx. 30 cm (measured from the shoulder seam to the sleeve opening)"
  },
  {
    "id": "p37",
    "name": "3way Pebble Sling Bag",
    "price": 65,
    "salePrice": 55,
    "category": "Bags",
    "images": [
      "Images/3way-7.webp",
      "Images/3way-8.webp",
      "Images/3way-9.webp",
      "Images/3way-10.webp",
      "Images/3way-11.webp",
      "Images/3way-12.webp",
      "Images/3way-13.webp",
      "Images/3way-14.webp",
      "Images/3way-15.webp"
    ],
    "description": "Wear as a backpack, shoulder bag or crossbody bag. Choose your pattern.",
    "size": "Strap length 127 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-p37.webp", "wearCaption": "Backpack · Shoulder bag · Crossbody", "kind": "3-Way Bag", "style": "crossbody", "shape": "square", "width": 17.8, "height": 22.9, "depth": 6.4, "depthBase": true, "strap": 127},
    "variants": [
      {"name": "Hydrangea", "image": "Images/3way-7.webp", "images": ["Images/3way-7.webp", "Images/3way-8.webp", "Images/3way-9.webp", "Images/3way-10.webp"]},
      {"name": "Floral Check", "image": "Images/3way-11.webp", "images": ["Images/3way-11.webp", "Images/3way-12.webp", "Images/3way-13.webp", "Images/3way-14.webp", "Images/3way-15.webp"]}
    ]
  },
  {
    "id": "p38",
    "name": "Baguette bag",
    "price": 30,
    "category": "Bags",
    "images": [
      "Images/added-bag-1.webp",
      "Images/added-bag-4.webp",
      "Images/added-bag-3.webp",
      "Images/added-bag-9.webp"
    ],
    "description": "Handmade baguette bag with a drawstring opening. Choose your pattern.",
    "size": "Height 70 cm · Width 20 cm · Depth 10 cm",
    "variants": [
      {"name": "Emerald Green Fan Pattern", "image": "Images/added-bag-1.webp", "images": ["Images/added-bag-1.webp"], "size": "Height 70 cm · Width 20 cm · Depth 10 cm", "sizeGuide": {"wearImage": "Images/size/wear-baguette.webp", "wearCaption": "Crossbody · Shoulder bag", "kind": "Baguette Bag", "form": "Drawstring", "shape": "square", "width": 20, "height": 70, "depth": 10}},
      {"name": "White with Red & Pink Fan Pattern", "image": "Images/added-bag-4.webp", "images": ["Images/added-bag-4.webp", "Images/added-bag-3.webp", "Images/added-bag-9.webp"], "size": "Height 60 cm · Width 20 cm · Depth 10 cm", "sizeGuide": {"wearImage": "Images/size/wear-baguette.webp", "wearCaption": "Crossbody · Shoulder bag", "kind": "Baguette Bag", "form": "Drawstring", "shape": "square", "width": 20, "height": 60, "depth": 10}}
    ]
  },
  {
    "id": "p39",
    "name": "Japanese print sling bag",
    "price": 65,
    "salePrice": 50,
    "category": "Bags",
    "images": [
      "Images/added-bag-0.webp",
      "Images/added-bag-6.webp",
      "Images/added-bag-7.webp",
      "Images/beauty_1790953174269.webp"
    ],
    "description": "Colourful Japanese print sling bag with a front zip pocket and adjustable shoulder strap.",
    "size": "Width 18 cm · Height 32.5 cm · Depth 8 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-sling.webp", "style": "crossbody", "shape": "teardrop", "width": 18, "height": 32.5, "depth": 8, "features": ["Compact, lightweight one-shoulder sling bag", "Front zip pocket for small items", "Worn across the body, so your hands stay free"], "capacity": [{"icon": "phone", "label": "Phone"}, {"icon": "wallet", "label": "Wallet"}, {"icon": "pouch", "label": "Pouch"}, {"icon": "handkerchief", "label": "Handkerchief"}, {"icon": "bottle", "label": "Small bottle"}]}
  },
  {
    "id": "p40",
    "name": "Navy Asanoha sling bag",
    "price": 65,
    "salePrice": 50,
    "category": "Bags",
    "images": [
      "Images/added-bag-5.webp",
      "Images/added-bag-5.webp"
    ],
    "description": "Navy Japanese geometric fabric with a front zip pocket and cream shoulder strap.",
    "size": "Width 18 cm · Height 32.5 cm · Depth 8 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-sling.webp", "style": "crossbody", "shape": "teardrop", "width": 18, "height": 32.5, "depth": 8}
  },
  {
    "id": "p41",
    "name": "Mint Asanoha sling bag",
    "price": 65,
    "salePrice": 50,
    "category": "Bags",
    "images": [
      "Images/added-bag-8.webp"
    ],
    "description": "Mint Japanese geometric fabric with a front zip pocket and grey shoulder strap.",
    "size": "Width 18 cm · Height 32.5 cm · Depth 8 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-sling.webp", "style": "crossbody", "shape": "teardrop", "width": 18, "height": 32.5, "depth": 8}
  },
  {
    "id": "p01",
    "name": "Japanese shoulder strap",
    "price": 15,
    "category": "Others",
    "images": [
      "Images/01-00.webp",
      "Images/01-01.webp",
      "Images/01-03.webp",
      "Images/01-04.webp"
    ],
    "description": "A versatile strap that can be used to carry or attach compatible accessories. The length is measured when fully extended. Bonsai key charm included.",
    "howto": {"image": "Images/size/howto-p01.webp", "alt": "A woman wearing her phone across the body on the strap, with a close-up of the TPU pad and clip", "points": ["Wear your phone across the body and keep both hands free.", "Adjust the length with the buckle on the strap.", "Place the TPU pad inside your phone case, then clip the strap onto it."]},
    "size": "Width 1.5 cm · Length 145 cm (fully extended)",
    "variants": [
      {"name": "Crimson", "image": "Images/01-00.webp"},
      {"name": "Mustard", "image": "Images/01-03.webp"},
      {"name": "Blue & Black", "image": "Images/01-04.webp"},
      {"name": "Green", "image": "Images/01-01.webp"}
    ]
  },
  {
    "id": "p02",
    "name": "Retractable neck strap",
    "price": 15,
    "category": "Others",
    "images": [
      "Images/02-06.webp",
      "Images/02-07.webp",
      "Images/02-08.webp",
      "Images/02-09.webp"
    ],
    "description": "A convenient retractable strap that keeps small essentials within easy reach. The cord extends up to 33 cm, making it practical for everyday use. Retractable reel and cherry blossom charm.",
    "howto": {"image": "Images/size/howto-p02.webp", "alt": "A woman wearing the neck strap with a phone, with a badge, and with both, plus close-ups of the adjuster, the retractable reel and the TPU pad", "points": ["Carry your phone around your neck.", "Use it as a badge reel lanyard for an ID or access card.", "Attach your phone and a badge together.", "Adjust the length with the adjuster at the back of the neck.", "Retractable reel: pull out the cord when you need it.", "TPU pad included: place it inside your phone case, then clip the strap onto it."]},
    "size": "Retractable cord: up to 33 cm · Strap: 96 cm circumference × 8 mm width",
    "variants": [
      {"name": "Blue", "image": "Images/02-06.webp", "images": ["Images/02-06.webp", "Images/02-07.webp"]},
      {"name": "Purple", "image": "Images/02-08.webp", "images": ["Images/02-08.webp", "Images/02-09.webp"]}
    ]
  },
  {
    "id": "p03",
    "name": "Japanese fabric bracelet",
    "price": 10,
    "category": "Others",
    "images": [
      "Images/03-14.webp",
      "Images/03-11.webp",
      "Images/03-12.webp",
      "Images/03-13.webp"
    ],
    "description": "A simple bracelet-style accessory that can be worn around the wrist. Lightweight and easy to wear. Fabric bracelet with metal charm.",
    "size": "24 cm circumference × 8 mm width",
    "variants": [
      {"name": "Red Glass Bead", "image": "Images/03-11.webp", "images": ["Images/03-11.webp", "Images/03-12.webp", "Images/03-14.webp"]},
      {"name": "Clear Glass Bead with Red Floral", "image": "Images/03-13.webp", "images": ["Images/03-13.webp", "Images/03-14.webp"]}
    ]
  },
  {
    "id": "p04",
    "name": "Dog waste bag holder",
    "price": 18,
    "category": "Others",
    "images": [
      "Images/04-15.webp",
      "Images/04-16.webp"
    ],
    "description": "A practical pouch for carrying dog waste bags, with an additional holder for attaching a used waste bag. Handy for dog walks and everyday outings. Floral fabric case with holder.",
    "howto": {"image": "Images/size/howto-p04.webp", "alt": "A woman walking her pug with the waste bag pouch on her bag, the steps for using it, and the pouch with its retractable reel", "points": ["Pull out the retractable reel to bring the pouch close to the poop, so you don't have to bend down.", "Take a bag out of the pouch with one hand.", "Pick up the poop with the bag, then tuck the used bag into the holder.", "The holder keeps the used bag in place, so you can carry it neatly.", "The set: a pouch that stores the bags, plus a retractable reel."]},
    "size": "Width 12 cm · Height 7 cm · Depth 5 cm",
    "sizeGuide": {"width": 12, "height": 7, "depth": 5},
    "variants": [
      {"name": "Purple Floral", "image": "Images/04-15.webp"},
      {"name": "Black Floral", "image": "Images/04-16.webp"}
    ]
  },
  {
    "id": "p05",
    "name": "Triangle pouch",
    "price": 8,
    "sold": true,
    "category": "Pouches",
    "images": [
      "Images/05-17.webp",
      "Images/05-18.jpg"
    ],
    "description": "Leather cord detail.",
    "size": ""
  },
  {
    "id": "p06",
    "name": "Mini handled bag",
    "price": 10,
    "category": "Outlet",
    "images": [
      "Images/06-19.webp",
      "Images/06-20.webp"
    ],
    "description": "Red checks with a yellow opening.",
    "size": ""
  },
  {
    "id": "p07",
    "name": "Bottle holder",
    "price": 10,
    "category": "Outlet",
    "images": [
      "Images/07-21.webp",
      "Images/07-22.webp"
    ],
    "description": "Yellow floral fabric, striped lining and drawstring opening.",
    "size": ""
  },
  {
    "id": "p08",
    "name": "4 way Mobile phone case",
    "price": 45,
    "salePrice": 38,
    "category": "Pouches",
    "images": [
      "Images/08-23.webp",
      "Images/08-24.webp",
      "Images/08-25.webp",
      "Images/08-26.webp",
      "Images/08-27.webp",
      "Images/08-28.webp",
      "Images/08-33.webp",
      "Images/08-grey.webp"
    ],
    "description": "A versatile mobile phone holder designed for four different ways of use. The leather strap is available in a choice of colours. Wear on a belt, across the body or at the wrist. Accessories included.",
    "size": "Height 20 cm · Width 11 cm · Depth 4 cm · Strap 114 cm × 1 cm (faux leather or cotton)",
    "strapOptions": {"image": "Images/straps-numbered.webp", "note": "Choose from 6 straps (114 cm long, 1 cm wide): 4 faux leather and 2 cotton. The strap is included in the price.", "groups": [{"name": "Faux leather", "items": ["A-1", "A-2", "A-3", "A-4"]}, {"name": "Cotton", "items": ["B-1", "B-2"]}]},
    "sizeGuide": {"width": 11, "height": 20, "depth": 4, "extra": ["Strap 114 cm × 1 cm (faux leather or cotton)"]},
    "variants": [
      {"name": "Light Blue Floral", "image": "Images/08-23.webp", "images": ["Images/08-23.webp", "Images/08-24.webp", "Images/08-25.webp", "Images/08-26.webp", "Images/08-27.webp", "Images/08-28.webp"]},
      {"name": "Dark Green", "image": "Images/08-33.webp"},
      {"name": "Grey", "image": "Images/08-grey.webp"}
    ]
  },
  {
    "id": "p09",
    "name": "Pencil case",
    "price": 10,
    "sold": true,
    "category": "Pouches",
    "images": [
      "Images/09-35.webp",
      "Images/09-34.webp"
    ],
    "description": "A compact case for keeping pens and other small stationery items neatly together. Easy to slip into a handbag or backpack. Light blue floral fabric with a cream detail.",
    "size": "Width 18 cm · Height 5 cm · Depth 3 cm",
    "sizeGuide": {"width": 18, "height": 5, "depth": 3}
  },
  {
    "id": "p10",
    "name": "Patchwork drawstring bag",
    "price": 10,
    "category": "Outlet",
    "images": [
      "Images/10-36.webp"
    ],
    "description": "Red and cream patchwork with lace.",
    "size": ""
  },
  {
    "id": "p11",
    "name": "Furoshiki",
    "price": 20,
    "category": "Others",
    "images": [
      "Images/11-37.webp",
      "Images/ChatGPT Image Oct 8, 2026, 01_50_26 PM.webp"
    ],
    "description": "Japanese wrapping cloth.",
    "howto": {"image": "Images/size/howto-p11.webp", "alt": "A plastic bottle wrapped in a furoshiki, and six ways to use a furoshiki: bag, gift wrapping, bottle wrap, lunch box wrap, carrying things and cover", "points": ["As a bag.", "As gift wrapping.", "To wrap a bottle (see the photo: a plastic bottle wrapped in a furoshiki).", "To wrap a lunch box.", "To carry your things.", "As a cover for a basket or a box."]},
    "size": "70 × 70 cm",
    "variants": [
      {"name": "Blue Sakura", "image": "Images/11-37.webp"},
      {"name": "Pink Sakura", "image": "Images/11-37.webp"},
      {"name": "Mustard Masks", "image": "Images/11-37.webp"},
      {"name": "Beige Masks", "image": "Images/11-37.webp", "images": ["Images/11-37.webp", "Images/ChatGPT Image Oct 8, 2026, 01_50_26 PM.webp"]}
    ]
  },
  {
    "id": "p12",
    "name": "Double zip pouch",
    "price": 20,
    "salePrice": 15,
    "category": "Pouches",
    "images": [
      "Images/12-40.webp",
      "Images/12-39.webp",
      "Images/12-41.webp",
      "Images/12-42.webp"
    ],
    "description": "A practical double-zip pouch with six interior pockets to help organise cards, small accessories and everyday essentials. Green floral fabric, wrist handle and front pocket.",
    "size": "Width 21 cm · Height 14 cm · Depth 2 cm · Interior: 6 pockets",
    "sizeGuide": {"width": 21, "height": 14, "depth": 2, "extra": ["Interior: 6 pockets"]}
  },
  {
    "id": "p13",
    "name": "4-way Japanese Smartphone Pouch",
    "price": 45,
    "salePrice": 40,
    "category": "Pouches",
    "images": [
      "Images/13-48.webp",
      "Images/13-49.webp",
      "Images/13-43.webp",
      "Images/13-44.webp",
      "Images/13-45.webp",
      "Images/13-46.webp",
      "Images/13-47.webp"
    ],
    "description": "A versatile accessory designed to be used in four different ways. Its compact shape makes it convenient for everyday use. Leather flap, shoulder and wrist straps, and belt attachment.",
    "size": "Height 20 cm · Width 13 cm",
    "sizeGuide": {"width": 13, "height": 20},
    "variants": [
      {"name": "Brown & Floral", "image": "Images/13-48.webp", "images": ["Images/13-48.webp", "Images/13-49.webp"]},
      {"name": "Green & Floral", "image": "Images/13-43.webp", "images": ["Images/13-43.webp", "Images/13-44.webp", "Images/13-45.webp", "Images/13-46.webp", "Images/13-47.webp"]}
    ]
  },
  {
    "id": "p14",
    "name": "Tool bag",
    "price": 15,
    "category": "Bags",
    "images": [
      "Images/14-50.webp",
      "Images/14-51.webp",
      "Images/14-52.webp"
    ],
    "description": "A practical organiser with multiple pockets on the front, back and inside. Ideal for keeping tools and small accessories neatly organised and easy to find. Cream fabric with blue leaves. Divided pockets inside and outside.",
    "size": "Width 26 cm · Height 13 cm · Depth 8 cm · Front: 5 pockets · Back: 5 pockets · Interior: 6 pockets on each side",
    "sizeGuide": {"width": 26, "height": 13, "depth": 8, "extra": ["Front: 5 pockets", "Back: 5 pockets", "Interior: 6 pockets on each side"]}
  },
  {
    "id": "p15",
    "name": "Japanese fabric Bodycross bag",
    "price": 60,
    "salePrice": 50,
    "category": "Bags",
    "images": [
      "Images/15-53.webp",
      "Images/15-54.webp",
      "Images/15-55.webp",
      "Images/beauty_1765650653470.webp"
    ],
    "description": "Fabric shoulder strap.",
    "size": "Width 52 cm · Height 18 cm · Depth 12 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-bodycross.webp", "style": "crossbody", "shape": "crescent", "width": 52, "height": 18, "depth": 12}
  },
  {
    "id": "p16",
    "name": "Insulated shopping basket bag",
    "price": 55,
    "salePrice": 50,
    "category": "Bags",
    "images": [
      "Images/16-56.webp",
      "Images/16-57.webp"
    ],
    "description": "Insulated lining.",
    "size": "Width 40 cm · Height 23 cm · Depth 33 cm",
    "sizeGuide": {"width": 40, "height": 23, "depth": 33}
  },
  {
    "id": "p17",
    "name": "Koi Bodycross bag",
    "price": 65,
    "salePrice": 58,
    "category": "Bags",
    "images": [
      "Images/17-58.webp",
      "Images/17-59.webp",
      "Images/17-60.webp",
      "Images/beauty_1766071035280.webp"
    ],
    "description": "Front pocket, back zip pocket and bonsai key charm.",
    "size": "Width 36 cm · Height 20 cm · Depth 10 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-bodycross.webp", "style": "crossbody", "shape": "crescent", "width": 36, "height": 20, "depth": 10}
  },
  {
    "id": "p18",
    "name": "Crane Bodycross bag",
    "price": 65,
    "salePrice": 58,
    "category": "Bags",
    "images": [
      "Images/18-61.webp",
      "Images/18-62.webp",
      "Images/18-63.webp"
    ],
    "description": "Front pocket, back zip pocket and bonsai key charm.",
    "size": "Width 36 cm · Height 20 cm · Depth 10 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-bodycross.webp", "style": "crossbody", "shape": "crescent", "width": 36, "height": 20, "depth": 10}
  },
  {
    "id": "p20",
    "name": "Bird Bodycross bag",
    "price": 60,
    "category": "Bags",
    "images": [
      "Images/20-67.webp",
      "Images/20-68.webp",
      "Images/beauty_1765650653470.webp",
      "Images/beauty_1765650669159.webp"
    ],
    "description": "Brown bird fabric and fabric shoulder strap.",
    "size": "Width 52 cm · Height 18 cm · Depth 12 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-bodycross.webp", "style": "crossbody", "shape": "crescent", "width": 52, "height": 18, "depth": 12}
  },
  {
    "id": "p21",
    "name": "Checkbook case",
    "price": 25,
    "salePrice": 20,
    "category": "Pouches",
    "images": [
      "Images/IMG_6464.webp",
      "Images/beauty_1765056892265.webp",
      "Images/CheckbookJPEG.webp",
      "Images/beauty_1765057233554.webp"
    ],
    "description": "A convenient holder for keeping a checkbook and cards together. Two zippered compartments and two card pockets help keep everything organised. Cord fastening and charm. Choose your colour.",
    "size": "Width 22 cm · Height 12 cm · Closure: 2 zippers · 2 card pockets",
    "sizeGuide": {"width": 22, "height": 12, "extra": ["Closure: 2 zippers", "2 card pockets"]},
    "variants": [
      {"name": "Light Blue", "image": "Images/IMG_6464.webp", "images": ["Images/IMG_6464.webp", "Images/beauty_1765056892265.webp", "Images/CheckbookJPEG.webp", "Images/beauty_1765057233554.webp"]},
      {"name": "Pink", "image": "Images/IMG_6464.webp", "images": ["Images/IMG_6464.webp", "Images/beauty_1765057233554.webp", "Images/beauty_1765056892265.webp", "Images/CheckbookJPEG.webp"]}
    ]
  },
  {
    "id": "p22",
    "name": "Flap shoulder bag",
    "price": 40,
    "salePrice": 35,
    "category": "Bags",
    "images": [
      "Images/beauty_1765230819282 (1)のコピー.webp",
      "Images/beauty_1765230890906のコピー.webp",
      "Images/beauty_1765230832164.webp"
    ],
    "description": "A compact shoulder bag with a flap closure, ideal for carrying everyday essentials. The 10 cm depth provides useful space for your belongings. Flap shoulder bag with shoulder strap and charm. Choose your colour.",
    "size": "Width 25 cm · Height 15 cm · Depth 10 cm · Strap length 98 cm",
    "sizeGuide": {"wearImage": "Images/size/wear-flap.webp", "wearCaption": "Shoulder bag", "kind": "Flap Shoulder Bag", "form": "Flap", "shape": "square", "width": 25, "height": 15, "depth": 10, "extra": ["Strap length 98 cm"]},
    "variants": [
      {"name": "Beige", "image": "Images/beauty_1765230819282 (1)のコピー.webp", "images": ["Images/beauty_1765230819282 (1)のコピー.webp", "Images/beauty_1765230890906のコピー.webp", "Images/beauty_1765230832164.webp"]},
      {"name": "Mustard", "image": "Images/beauty_1765230819282 (1)のコピー.webp", "images": ["Images/beauty_1765230819282 (1)のコピー.webp", "Images/beauty_1765230832164.webp"]}
    ]
  },
  {
    "id": "p23",
    "name": "Mini Zabuton",
    "price": 10,
    "category": "Others",
    "images": [
      "Images/zabuton-no1.webp",
      "Images/zabuton-no2.webp",
      "Images/zabuton-no3.webp",
      "Images/zabuton-no4.webp",
      "Images/zabuton-no5.webp",
      "Images/zabuton-no6.webp",
      "Images/23-oct3-07.webp",
      "Images/23-oct3-08.webp",
      "Images/23-oct3-35.webp"
    ],
    "description": "A small Japanese-style cushion, perfect for adding a touch of comfort to a chair or other seating area. Small handmade zabuton cushion. Set of three: €28. Choose a group, then write the cushion number (e.g. 3-2) in your message.",
    "size": "Width 18 cm · Height 18 cm · Thickness 3.5 cm",
    "variants": [
      {"name": "No.1", "image": "Images/zabuton-no1.webp"},
      {"name": "No.2", "image": "Images/zabuton-no2.webp"},
      {"name": "No.3", "image": "Images/zabuton-no3.webp"},
      {"name": "No.4", "image": "Images/zabuton-no4.webp"},
      {"name": "No.5", "image": "Images/zabuton-no5.webp"},
      {"name": "No.6", "image": "Images/zabuton-no6.webp"}
    ]
  },
  {
    "id": "p25",
    "name": "Neck warmer",
    "price": 7,
    "category": "Outlet",
    "images": [
      "Images/ChatGPT Image Oct 8, 2026, 02_25_03 PM.webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_25_10 PM.webp"
    ],
    "description": "A cosy neck warmer designed to help keep you warm in colder weather. Available in two sizes to suit different preferences. Check and fleece variations. Choose your number.",
    "size": "Size 1: Height 33 cm × Half-circumference 40 cm · Size 2: Height 20 cm × Half-circumference 30 cm",
    "variants": [
      {"name": "No.1", "size": "Size 1: Height 33 cm × Half-circumference 40 cm", "image": "Images/ChatGPT Image Oct 8, 2026, 02_25_03 PM.webp"},
      {"name": "No.2", "size": "Size 2: Height 20 cm × Half-circumference 30 cm", "image": "Images/ChatGPT Image Oct 8, 2026, 02_25_10 PM.webp"}
    ]
  },
  {
    "id": "p26",
    "name": "Check bag",
    "price": 10,
    "category": "Outlet",
    "images": [
      "Images/IMG_6495.webp",
      "Images/IMG_6459.webp"
    ],
    "description": "Blue checks and green geometric variations. Choose your pattern.",
    "size": "Width 24 cm · Height 24 cm · Depth 13 cm",
    "sizeGuide": {"width": 24, "height": 24, "depth": 13},
    "variants": [
      {"name": "Blue Check", "image": "Images/IMG_6495.webp"},
      {"name": "Green Diamond", "image": "Images/IMG_6459.webp"}
    ]
  },
  {
    "id": "p28",
    "name": "Floral bag",
    "price": 10,
    "category": "Outlet",
    "images": [
      "Images/28-oct3-49.webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_23_33 PM.webp"
    ],
    "description": "Front pocket with lace.",
    "size": "Width 28 cm · Height 30 cm · Depth 7 cm · Handle length 54 cm",
    "sizeGuide": {"width": 28, "height": 30, "depth": 7, "extra": ["Handle length 54 cm"]}
  },
  {
    "id": "p42",
    "name": "Goldfish tote bag",
    "price": 45,
    "salePrice": 38,
    "category": "Bags",
    "images": [
      "Images/19-64.webp",
      "Images/19-65.webp"
    ],
    "description": "Goldfish print tote bag with an interior bottle holder and key hook.",
    "size": "Width 42 cm · Height 39 cm · Depth 18 cm · Handle length 55 cm",
    "sizeGuide": {"width": 42, "height": 39, "depth": 18, "extra": ["Handle length 55 cm"]}
  },
  {
    "id": "p43",
    "name": "Ikebana/Bonsai Tools Roll Case",
    "price": 30,
    "category": "Others",
    "images": [
      "Images/21-oct3-01.webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_28_39 PM.webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_28_41 PM.webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_28_31 PM.webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_29_01 PM (1).webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_29_11 PM.webp"
    ],
    "description": "Roll case for ikebana and bonsai tools with 10 pockets. Pocket widths from left: 5, 5, 5, 5, 5, 5, 10, 8, 5, 5 cm. Choose your pattern.",
    "size": "60 cm × 27 cm",
    "variants": [
      {"name": "Denim & Wave Print", "image": "Images/21-oct3-01.webp", "images": ["Images/21-oct3-01.webp", "Images/ChatGPT Image Oct 8, 2026, 02_28_39 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_28_41 PM.webp"]},
      {"name": "Denim & White Print", "image": "Images/ChatGPT Image Oct 8, 2026, 02_28_31 PM.webp", "images": ["Images/ChatGPT Image Oct 8, 2026, 02_28_31 PM.webp"]},
      {"name": "Grey Floral", "image": "Images/ChatGPT Image Oct 8, 2026, 02_29_01 PM (1).webp", "images": ["Images/ChatGPT Image Oct 8, 2026, 02_29_01 PM (1).webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_11 PM.webp"]}
    ]
  },
  {
    "id": "p44",
    "name": "Drawstring Bag",
    "price": 15,
    "salePrice": 12,
    "category": "Bags",
    "images": ["Images/IMG_6471.webp", "Images/IMG_6473.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_49 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_31 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_22 PM (1).webp", "Images/IMG_6474.webp"],
    "description": "Handbag with a drawstring opening. Choose your pattern.",
    "size": "Width 25 cm · Height 18 cm · Handle length 25 cm",
    "sizeGuide": {"width": 25, "height": 18, "extra": ["Handle length 25 cm"]},
    "variants": [
      {"name": "Yellow with Pink Polka Dots", "image": "Images/IMG_6471.webp", "images": ["Images/IMG_6471.webp", "Images/IMG_6473.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_49 PM.webp", "Images/IMG_6474.webp"]},
      {"name": "Navy Denim Blue with White Floral Pattern", "image": "Images/ChatGPT Image Oct 8, 2026, 02_29_31 PM.webp", "images": ["Images/ChatGPT Image Oct 8, 2026, 02_29_31 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_22 PM (1).webp", "Images/IMG_6471.webp", "Images/IMG_6474.webp"]}
    ]
  },
  {
    "id": "p45",
    "name": "Light Pink Japanese Chrysanthemum Tote Bag",
    "price": 40,
    "salePrice": 35,
    "category": "Bags",
    "images": ["Images/IMG_6409.webp", "Images/ChatGPT Image Oct 8, 2026, 02_30_55 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_30_48 PM.webp"],
    "description": "Tote bag in light pink fabric with a Japanese chrysanthemum print.",
    "size": "Width 53 cm · Height 43 cm · Depth 10 cm",
    "sizeGuide": {"width": 53, "height": 43, "depth": 10}
  },
  {
    "id": "p46",
    "name": "Hip Hang Scissor Case",
    "price": 45,
    "category": "Bags",
    "images": ["Images/IMG_6465 Copy.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_22 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_17 PM.webp", "Images/IMG_6467 Copy.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_53 PM (1).webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_03 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_10 PM.webp"],
    "description": "Hip bag for scissors and tools with 3 pockets and 1 zip pocket. Adjustable strap. Choose your pattern.",
    "size": "Width 48 cm · Height 26 cm · Pocket depth 4 cm · Strap 58–89 cm",
    "sizeGuide": {"width": 48, "height": 26, "extra": ["Pocket depth 4 cm", "Strap 58–89 cm"]},
    "variants": [
      {"name": "Light Purple with Bird", "image": "Images/IMG_6465 Copy.webp", "images": ["Images/IMG_6465 Copy.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_22 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_17 PM.webp"]},
      {"name": "Navy with Gold Pattern", "image": "Images/IMG_6467 Copy.webp", "images": ["Images/IMG_6467 Copy.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_53 PM (1).webp"]},
      {"name": "Black with Floral Pattern", "image": "Images/ChatGPT Image Oct 8, 2026, 02_31_03 PM.webp", "images": ["Images/ChatGPT Image Oct 8, 2026, 02_31_03 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_10 PM.webp"]}
    ]
  },
  {
    "id": "p47",
    "name": "One Shoulder Bag",
    "price": 45,
    "salePrice": 35,
    "category": "Bags",
    "images": ["Images/beauty_1764930926064.webp", "Images/beauty_1764931461165.webp", "Images/beauty_1764789523711.webp", "Images/beauty_1764789570866 (1).webp", "Images/beauty_1764789587234.webp"],
    "description": "Rounded one-shoulder bag in Japanese floral fabric. Choose your pattern.",
    "size": "Width 30 cm · Height 32 cm · Depth 7 cm · Handle length 42 cm",
    "sizeGuide": {"width": 30, "height": 32, "depth": 7, "extra": ["Handle length 42 cm"]},
    "variants": [
      {"name": "Silver with Purple Floral", "image": "Images/beauty_1764930926064.webp", "images": ["Images/beauty_1764930926064.webp", "Images/beauty_1764931461165.webp"]},
      {"name": "Emerald Green with Floral", "image": "Images/beauty_1764789523711.webp", "images": ["Images/beauty_1764789523711.webp", "Images/beauty_1764789570866 (1).webp", "Images/beauty_1764789587234.webp"]}
    ]
  },
  {
    "id": "p48",
    "name": "Mini Leather Boot Necklace",
    "price": 7,
    "category": "Outlet",
    "images": ["Images/IMG_6475 (1).webp"],
    "description": "Necklace with a handmade mini leather boot.",
    "size": "",
    "variants": [
      {"name": "Dark Brown", "image": "Images/IMG_6475 (1).webp"},
      {"name": "Tan", "image": "Images/IMG_6475 (1).webp"}
    ]
  },
  {
    "id": "p50",
    "name": "Glasses / Smartphone Case",
    "price": 15,
    "sold": true,
    "category": "Others",
    "images": ["Images/IMG_6478.webp", "Images/IMG_6479.webp"],
    "description": "Japanese fabric case for glasses or a smartphone.",
    "size": "Width 9 cm · Height 19 cm",
    "sizeGuide": {"width": 9, "height": 19}
  },
  {
    "id": "p51",
    "name": "Tartan Faux Fur Handbag",
    "price": 10,
    "category": "Outlet",
    "images": [
      "Images/IMG_6460.webp"
    ],
    "description": "Tartan handbag with a faux fur trim and leather handles.",
    "size": "Width 33 cm · Height 20 cm · Depth 10 cm · Leather handle length 32 cm",
    "sizeGuide": {"width": 33, "height": 20, "depth": 10, "extra": ["Leather handle length 32 cm"]}
  },
  {
    "id": "p52",
    "name": "Fluffy Smartphone Case / Pouch",
    "price": 7,
    "category": "Outlet",
    "images": ["Images/IMG_6491.webp", "Images/IMG_6490.webp"],
    "description": "Floral smartphone case or pouch with a fluffy lining and wrist strap. Choose your pattern.",
    "size": "Width 9 cm · Height 10 cm · Depth 2 cm",
    "sizeGuide": {"width": 9, "height": 10, "depth": 2},
    "variants": [
      {"name": "Pink with Floral Pattern", "image": "Images/IMG_6491.webp"},
      {"name": "Emerald Green with Red Floral Pattern", "image": "Images/IMG_6490.webp"}
    ]
  }
];
