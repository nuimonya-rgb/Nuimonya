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
    "category": "Clothing",
    "images": [
      "Images/jinbei-top.webp",
      "Images/jinbei-front.jpg",
      "Images/jinbei-collar.webp"
    ],
    "description": "Navy jinbei top with a Japanese print collar. Top only.",
    "size": ""
  },
  {
    "id": "p37",
    "name": "3way Pebble Sling Bag",
    "price": 65,
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
      {"name": "Emerald Green Fan Pattern", "image": "Images/added-bag-1.webp", "images": ["Images/added-bag-1.webp"], "size": "Height 70 cm · Width 20 cm · Depth 10 cm"},
      {"name": "White with Red & Pink Fan Pattern", "image": "Images/added-bag-4.webp", "images": ["Images/added-bag-4.webp", "Images/added-bag-3.webp", "Images/added-bag-9.webp"], "size": "Height 60 cm · Width 20 cm · Depth 10 cm"}
    ]
  },
  {
    "id": "p39",
    "name": "Japanese print sling bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/added-bag-0.webp",
      "Images/added-bag-6.webp",
      "Images/added-bag-7.webp",
      "Images/beauty_1790953174269.webp"
    ],
    "description": "Colourful Japanese print sling bag with a front zip pocket and adjustable shoulder strap.",
    "size": ""
  },
  {
    "id": "p40",
    "name": "Navy Asanoha sling bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/added-bag-5.webp",
      "Images/added-bag-5.webp"
    ],
    "description": "Navy Japanese geometric fabric with a front zip pocket and cream shoulder strap.",
    "size": ""
  },
  {
    "id": "p41",
    "name": "Mint Asanoha sling bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/added-bag-8.webp"
    ],
    "description": "Mint Japanese geometric fabric with a front zip pocket and grey shoulder strap.",
    "size": ""
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
    "description": "Bonsai key charm included.",
    "size": "",
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
    "description": "Retractable reel and cherry blossom charm.",
    "size": "",
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
    "description": "Fabric bracelet with metal charm.",
    "size": "",
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
    "description": "Floral fabric case with holder.",
    "size": "",
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
    "price": 15,
    "category": "Bags",
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
    "price": 15,
    "category": "Others",
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
    "description": "Wear on a belt, across the body or at the wrist. Accessories included.",
    "size": "",
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
    "description": "Light blue floral fabric with a cream detail.",
    "size": ""
  },
  {
    "id": "p10",
    "name": "Patchwork drawstring bag",
    "price": 12,
    "category": "Pouches",
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
    "category": "Pouches",
    "images": [
      "Images/12-40.webp",
      "Images/12-39.webp",
      "Images/12-41.webp",
      "Images/12-42.webp"
    ],
    "description": "Green floral fabric, wrist handle and front pocket.",
    "size": ""
  },
  {
    "id": "p13",
    "name": "4-way Japanese pouch",
    "price": 45,
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
    "description": "Leather flap, shoulder and wrist straps, and belt attachment.",
    "size": "",
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
    "description": "Cream fabric with blue leaves. Divided pockets inside and outside.",
    "size": ""
  },
  {
    "id": "p15",
    "name": "Japanese fabric Bodycross bag",
    "price": 60,
    "category": "Bags",
    "images": [
      "Images/15-53.webp",
      "Images/15-54.webp",
      "Images/15-55.webp",
      "Images/beauty_1765650653470.webp"
    ],
    "description": "Fabric shoulder strap.",
    "size": "Width 52 cm · Height 18 cm · Depth 12 cm"
  },
  {
    "id": "p16",
    "name": "Insulated shopping basket bag",
    "price": 55,
    "category": "Bags",
    "images": [
      "Images/16-56.webp",
      "Images/16-57.webp"
    ],
    "description": "Insulated lining.",
    "size": "Width 40 cm · Height 23 cm · Depth 33 cm"
  },
  {
    "id": "p17",
    "name": "Koi Bodycross bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/17-58.webp",
      "Images/17-59.webp",
      "Images/17-60.webp",
      "Images/beauty_1766071035280.webp"
    ],
    "description": "Front pocket, back zip pocket and bonsai key charm.",
    "size": "Width 36 cm · Height 20 cm · Depth 10 cm"
  },
  {
    "id": "p18",
    "name": "Crane Bodycross bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/18-61.webp",
      "Images/18-62.webp",
      "Images/18-63.webp"
    ],
    "description": "Front pocket, back zip pocket and bonsai key charm.",
    "size": "Width 36 cm · Height 20 cm · Depth 10 cm"
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
    "size": "Width 52 cm · Height 18 cm · Depth 12 cm"
  },
  {
    "id": "p21",
    "name": "Checkbook case",
    "price": 25,
    "category": "Pouches",
    "images": [
      "Images/IMG_6464.webp",
      "Images/beauty_1765056892265.webp",
      "Images/CheckbookJPEG.webp",
      "Images/beauty_1765057233554.webp"
    ],
    "description": "Cord fastening and charm. Choose your colour.",
    "size": "",
    "variants": [
      {"name": "Light Blue", "image": "Images/IMG_6464.webp", "images": ["Images/IMG_6464.webp", "Images/beauty_1765056892265.webp", "Images/CheckbookJPEG.webp", "Images/beauty_1765057233554.webp"]},
      {"name": "Pink", "image": "Images/IMG_6464.webp", "images": ["Images/IMG_6464.webp", "Images/beauty_1765057233554.webp", "Images/beauty_1765056892265.webp", "Images/CheckbookJPEG.webp"]}
    ]
  },
  {
    "id": "p22",
    "name": "Flap shoulder bag",
    "price": 40,
    "category": "Bags",
    "images": [
      "Images/beauty_1765230819282 (1)のコピー.webp",
      "Images/beauty_1765230890906のコピー.webp",
      "Images/beauty_1765230832164.webp"
    ],
    "description": "Flap shoulder bag with shoulder strap and charm. Choose your colour.",
    "size": "",
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
    "description": "Small handmade zabuton cushion. Set of three: €28. Choose a group, then write the cushion number (e.g. 3-2) in your message.",
    "size": "",
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
    "description": "Check and fleece variations. Choose your number.",
    "size": "",
    "variants": [
      {"name": "No.1", "image": "Images/ChatGPT Image Oct 8, 2026, 02_25_03 PM.webp"},
      {"name": "No.2", "image": "Images/ChatGPT Image Oct 8, 2026, 02_25_10 PM.webp"}
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
    "variants": [
      {"name": "Blue Check", "image": "Images/IMG_6495.webp"},
      {"name": "Green Diamond", "image": "Images/IMG_6459.webp"}
    ]
  },
  {
    "id": "p28",
    "name": "Floral bag",
    "price": 12,
    "category": "Outlet",
    "images": [
      "Images/28-oct3-49.webp",
      "Images/ChatGPT Image Oct 8, 2026, 02_23_33 PM.webp"
    ],
    "description": "Front pocket with lace.",
    "size": "Width 28 cm · Height 30 cm · Depth 7 cm · Handle length 54 cm"
  },
  {
    "id": "p42",
    "name": "Goldfish tote bag",
    "price": 45,
    "category": "Bags",
    "images": [
      "Images/19-64.webp",
      "Images/19-65.webp"
    ],
    "description": "Goldfish print tote bag with an interior bottle holder and key hook.",
    "size": "Width 42 cm · Height 39 cm · Depth 18 cm · Handle length 55 cm"
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
    "category": "Bags",
    "images": ["Images/IMG_6471.webp", "Images/IMG_6473.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_49 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_31 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_22 PM (1).webp", "Images/IMG_6474.webp"],
    "description": "Handbag with a drawstring opening. Choose your pattern.",
    "size": "Width 25 cm · Height 18 cm · Handle length 25 cm",
    "variants": [
      {"name": "Yellow with Pink Polka Dots", "image": "Images/IMG_6471.webp", "images": ["Images/IMG_6471.webp", "Images/IMG_6473.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_49 PM.webp", "Images/IMG_6474.webp"]},
      {"name": "Navy Denim Blue with White Floral Pattern", "image": "Images/ChatGPT Image Oct 8, 2026, 02_29_31 PM.webp", "images": ["Images/ChatGPT Image Oct 8, 2026, 02_29_31 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_29_22 PM (1).webp", "Images/IMG_6471.webp", "Images/IMG_6474.webp"]}
    ]
  },
  {
    "id": "p45",
    "name": "Light Pink Japanese Chrysanthemum Tote Bag",
    "price": 40,
    "category": "Bags",
    "images": ["Images/IMG_6409.webp", "Images/ChatGPT Image Oct 8, 2026, 02_30_55 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_30_48 PM.webp"],
    "description": "Tote bag in light pink fabric with a Japanese chrysanthemum print.",
    "size": "Width 53 cm · Height 43 cm · Depth 10 cm"
  },
  {
    "id": "p46",
    "name": "Hip Hang Scissor Case",
    "price": 45,
    "category": "Bags",
    "images": ["Images/IMG_6465 Copy.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_22 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_17 PM.webp", "Images/IMG_6467 Copy.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_53 PM (1).webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_03 PM.webp", "Images/ChatGPT Image Oct 8, 2026, 02_31_10 PM.webp"],
    "description": "Hip bag for scissors and tools with 3 pockets and 1 zip pocket. Adjustable strap. Choose your pattern.",
    "size": "Width 48 cm · Height 26 cm · Pocket depth 4 cm · Strap 58–89 cm",
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
    "category": "Bags",
    "images": ["Images/beauty_1764930926064.webp", "Images/beauty_1764931461165.webp", "Images/beauty_1764789523711.webp", "Images/beauty_1764789570866 (1).webp", "Images/beauty_1764789587234.webp"],
    "description": "Rounded one-shoulder bag in Japanese floral fabric. Choose your pattern.",
    "size": "Width 30 cm · Height 32 cm · Depth 7 cm · Handle length 42 cm",
    "variants": [
      {"name": "Silver with Purple Floral", "image": "Images/beauty_1764930926064.webp", "images": ["Images/beauty_1764930926064.webp", "Images/beauty_1764931461165.webp"]},
      {"name": "Emerald Green with Floral", "image": "Images/beauty_1764789523711.webp", "images": ["Images/beauty_1764789523711.webp", "Images/beauty_1764789570866 (1).webp", "Images/beauty_1764789587234.webp"]}
    ]
  },
  {
    "id": "p48",
    "name": "Mini Leather Boot Necklace",
    "price": 7,
    "category": "Others",
    "images": ["Images/IMG_6475 (1).webp"],
    "description": "Necklace with a handmade mini leather boot.",
    "size": "",
    "variants": [
      {"name": "Dark Brown", "image": "Images/IMG_6475 (1).webp"},
      {"name": "Tan", "image": "Images/IMG_6475 (1).webp"}
    ]
  },
  {
    "id": "p49",
    "name": "Faux Leather Strap",
    "price": 15,
    "category": "Others",
    "images": ["Images/straps-numbered.webp"],
    "description": "Faux leather bag shoulder strap with antique gold hardware. Choose your number (see photo).",
    "size": "",
    "variants": [
      {"name": "A-1", "image": "Images/straps-numbered.webp"},
      {"name": "A-2", "image": "Images/straps-numbered.webp"},
      {"name": "A-3", "image": "Images/straps-numbered.webp"},
      {"name": "A-4", "image": "Images/straps-numbered.webp"}
    ]
  },
  {
    "id": "p53",
    "name": "Cotton Strap",
    "price": 10,
    "category": "Others",
    "images": ["Images/straps-numbered.webp"],
    "description": "Cotton bag shoulder strap with antique gold hardware. Choose your number (see photo).",
    "size": "",
    "variants": [
      {"name": "B-1", "image": "Images/straps-numbered.webp"},
      {"name": "B-2", "image": "Images/straps-numbered.webp"}
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
    "size": "Width 9 cm · Height 19 cm"
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
    "size": "Width 33 cm · Height 20 cm · Depth 10 cm · Leather handle length 32 cm"
  },
  {
    "id": "p52",
    "name": "Fluffy Smartphone Case / Pouch",
    "price": 7,
    "category": "Outlet",
    "images": ["Images/IMG_6491.webp", "Images/IMG_6490.webp"],
    "description": "Floral smartphone case or pouch with a fluffy lining and wrist strap. Choose your pattern.",
    "size": "Width 9 cm · Height 10 cm · Depth 2 cm",
    "variants": [
      {"name": "Pink with Floral Pattern", "image": "Images/IMG_6491.webp"},
      {"name": "Emerald Green with Red Floral Pattern", "image": "Images/IMG_6490.webp"}
    ]
  }
];
