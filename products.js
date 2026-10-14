const products = [
  {
    "id": "p19",
    "name": "Floral apron",
    "price": 45,
    "sold": true,
    "category": "Clothing",
    "images": [
      "Images/floral-apron.jpg"
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
      "Images/denim-apron.jpg"
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
      "Images/jinbei-top.jpg",
      "Images/jinbei-front.jpg",
      "Images/jinbei-collar.jpg"
    ],
    "description": "Navy jinbei top with a Japanese print collar. Top only.",
    "size": ""
  },
  {
    "id": "p37",
    "name": "3-way bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/3way-7.jpg",
      "Images/3way-8.jpg",
      "Images/3way-11.jpg",
      "Images/3way-12.jpg",
      "Images/3way-13.jpg",
      "Images/3way-14.jpg",
      "Images/3way-15.jpg",
      "Images/3way-9.jpg",
      "Images/3way-10.jpg"
    ],
    "description": "Wear as a backpack, shoulder bag or crossbody bag. Blue and cream Japanese print variations.",
    "size": "Strap length 127 cm"
  },
  {
    "id": "p38",
    "name": "Baguette bag",
    "price": 30,
    "category": "Bags",
    "images": [
      "Images/added-bag-1.jpg",
      "Images/added-bag-4.jpg",
      "Images/added-bag-3.jpg",
      "Images/added-bag-9.jpg"
    ],
    "description": "Handmade baguette bag with a drawstring opening. Choose your pattern.",
    "size": "Height 70 cm · Width 20 cm · Depth 10 cm",
    "variants": [
      {"name": "Emerald Green Fan Pattern", "image": "Images/added-bag-1.jpg", "size": "Height 70 cm · Width 20 cm · Depth 10 cm"},
      {"name": "White with Red & Pink Fan Pattern", "image": "Images/added-bag-4.jpg", "size": "Height 60 cm · Width 20 cm · Depth 10 cm"}
    ]
  },
  {
    "id": "p39",
    "name": "Japanese print sling bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/added-bag-0.jpg",
      "Images/added-bag-6.jpg",
      "Images/added-bag-7.jpg"
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
      "Images/added-bag-5.jpg",
      "Images/added-bag-5.jpg"
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
      "Images/added-bag-8.jpg"
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
      "Images/01-00.jpg",
      "Images/01-01.jpg",
      "Images/01-03.jpg",
      "Images/01-04.jpg"
    ],
    "description": "Bonsai key charm included.",
    "size": ""
  },
  {
    "id": "p02",
    "name": "Retractable neck strap",
    "price": 15,
    "category": "Others",
    "images": [
      "Images/02-06.jpg",
      "Images/02-07.jpg",
      "Images/02-08.jpg",
      "Images/02-09.jpg"
    ],
    "description": "Retractable reel and cherry blossom charm.",
    "size": ""
  },
  {
    "id": "p03",
    "name": "Japanese fabric bracelet",
    "price": 10,
    "category": "Others",
    "images": [
      "Images/03-14.jpg",
      "Images/03-11.jpg",
      "Images/03-12.jpg",
      "Images/03-13.jpg"
    ],
    "description": "Fabric bracelet with metal charm.",
    "size": ""
  },
  {
    "id": "p04",
    "name": "Dog waste bag holder",
    "price": 18,
    "category": "Others",
    "images": [
      "Images/04-15.jpg",
      "Images/04-16.jpg"
    ],
    "description": "Floral fabric case with holder.",
    "size": ""
  },
  {
    "id": "p05",
    "name": "Triangle pouch",
    "price": 8,
    "sold": true,
    "category": "Pouches",
    "images": [
      "Images/05-17.jpg",
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
      "Images/06-19.jpg",
      "Images/06-20.jpg"
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
      "Images/07-21.jpg",
      "Images/07-22.jpg"
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
      "Images/08-23.jpg",
      "Images/08-24.jpg",
      "Images/08-25.jpg",
      "Images/08-26.jpg",
      "Images/08-27.jpg",
      "Images/08-28.jpg",
      "Images/08-33.jpg"
    ],
    "description": "Wear on a belt, across the body or at the wrist. Accessories included.",
    "size": ""
  },
  {
    "id": "p09",
    "name": "Pencil case",
    "price": 10,
    "sold": true,
    "category": "Pouches",
    "images": [
      "Images/09-35.jpg",
      "Images/09-34.jpg"
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
      "Images/10-36.jpg"
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
      "Images/11-37.jpg"
    ],
    "description": "Japanese wrapping cloth.",
    "size": "70 × 70 cm"
  },
  {
    "id": "p12",
    "name": "Double zip pouch",
    "price": 20,
    "category": "Pouches",
    "images": [
      "Images/12-40.jpg",
      "Images/12-39.jpg",
      "Images/12-41.jpg",
      "Images/12-42.jpg"
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
      "Images/13-48.jpg",
      "Images/13-49.jpg",
      "Images/13-43.jpg",
      "Images/13-44.jpg",
      "Images/13-45.jpg",
      "Images/13-46.jpg",
      "Images/13-47.jpg"
    ],
    "description": "Leather flap, shoulder and wrist straps, and belt attachment.",
    "size": ""
  },
  {
    "id": "p14",
    "name": "Tool bag",
    "price": 15,
    "category": "Bags",
    "images": [
      "Images/14-50.jpg",
      "Images/14-51.jpg",
      "Images/14-52.jpg"
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
      "Images/15-53.jpg",
      "Images/15-54.jpg",
      "Images/15-55.jpg"
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
      "Images/16-56.jpg",
      "Images/16-57.jpg"
    ],
    "description": "Insulated lining.",
    "size": "Width 40 cm · Height 23 cm · Depth 33 cm"
  },
  {
    "id": "p17",
    "name": "Crane Bodycross bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/17-58.jpg",
      "Images/17-59.jpg",
      "Images/17-60.jpg"
    ],
    "description": "Front pocket, back zip pocket and bonsai key charm.",
    "size": "Width 36 cm · Height 20 cm · Depth 10 cm"
  },
  {
    "id": "p18",
    "name": "Koi Bodycross bag",
    "price": 65,
    "category": "Bags",
    "images": [
      "Images/18-61.jpg",
      "Images/18-62.jpg",
      "Images/18-63.jpg"
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
      "Images/20-67.jpg",
      "Images/20-68.jpg"
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
      "Images/CheckbookJPEG.JPEG",
      "Images/beauty_1765057233554.JPEG",
      "Images/Images_6464.JPEG",
      "Images/beauty_1765056892265.JPEG"
    ],
    "description": "Cord fastening and charm.",
    "size": ""
  },
  {
    "id": "p22",
    "name": "Flap shoulder bag",
    "price": 40,
    "category": "Bags",
    "images": [
      "Images/beauty_1765230819282 (1)のコピー.JPEG",
      "Images/beauty_1765230832164.JPEG",
      "Images/beauty_1765230890906のコピー.JPEG",
      "Images/22-oct3-02.jpg",
      "Images/22-oct3-03.jpg"
    ],
    "description": "Cream and yellow variations with shoulder strap and charm.",
    "size": ""
  },
  {
    "id": "p23",
    "name": "Mini cushion",
    "price": 10,
    "category": "Others",
    "images": [
      "Images/23-oct3-07.jpg",
      "Images/23-oct3-08.jpg",
      "Images/23-oct3-35.jpg"
    ],
    "description": "Small handmade cushion. Set of three: €28.",
    "size": ""
  },
  {
    "id": "p25",
    "name": "Neck warmer",
    "price": 7,
    "category": "Outlet",
    "images": [
      "Images/ChatGPT Image Oct 8, 2026, 02_25_03 PM.jpg",
      "Images/ChatGPT Image Oct 8, 2026, 02_25_10 PM.jpg"
    ],
    "description": "Check and fleece variations.",
    "size": ""
  },
  {
    "id": "p26",
    "name": "Check bag",
    "price": 15,
    "category": "Outlet",
    "images": [
      "Images/IMG_6495.jpeg"
      
    ],
    "description": "Blue checks and green geometric variations.",
    "size": "Width 24 cm · Height 24 cm · Depth 13 cm"
  },
  {
    "id": "p28",
    "name": "Floral bag",
    "price": 12,
    "category": "Outlet",
    "images": [
      "Images/ChatGPT Image Oct 8, 2026, 02_23_33 PM.jpg"
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
      "Images/19-64.jpg",
      "Images/19-65.jpg"
    ],
    "description": "Goldfish print tote bag with an interior bottle holder and key hook.",
    "size": "Width 42 cm · Height 39 cm · Depth 18 cm · Handle length 55 cm"
  }
];
