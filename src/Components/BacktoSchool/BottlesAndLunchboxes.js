import React from 'react'
import BottlesAndLunchboxesprop from './BottlesAndLunchboxesprop'
const NewProducts=[
    {
        id:1,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/73b053dd-d85e-4813-93fe-2f66119cc49a-df6e5c00-0b0f-40fb-af85-33adebe94a28.jpeg",
        ItemName:'Fresh wrapp 9 meter Hindalco Aluminium Foil',
        Weight:'1 Piece',
        DelName:'₹130',
        Price:'₹105'
    },
    {
        id:2,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1280-850,pr-true,f-webp,q-80/inventory/product/33f0a786-c860-4458-93d0-230bbb6f52b1-1_QQUiJxatF5YOViPE0CvU5UOZRsA2CFG.jpeg",
        ItemName:'Zep Aluminium Foil 9 Meter 1 PIECE ',
        Weight:'75 g',
        DelName:'₹110',
        Price:'₹89'
    },
    {
        id:3,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-481-221,pr-true,f-webp,q-80/inventory/product/dbd19913-69a3-4cde-959d-2627b2d9c4f8-37598429.jpeg",
        ItemName:'Fresh wrapp 72 meter Hindalco Aluminium Foil',
        Weight:'1 piece',
        DelName:'₹650',
        Price:'₹499'
    },
    {
        id:4,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-800-800,pr-true,f-webp,q-80/inventory/product/512c8ac6-27d4-43bc-89ac-52e7aa8923fe-16ATb737L-QQzqpH6H7UumHQxvcLnxdmt.jpeg",
        ItemName:'Fresh wrapp Hindalco Aluminium Foil 33G+17G(Pack of 2)',
        Weight:'1 piece',
        DelName:'₹125',
        Price:'₹115'
    },
    {
        id:5,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/994e9907-ac1a-4889-8600-14bd736d820d-Photo.jpeg",
        ItemName:'Magnus Olive 3 Container Lunch Box',
        Weight:'1 Unit',
        DelName:'₹655',
        Price:'₹524'
    },
    {
        id:6,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-2000-2000,pr-true,f-webp,q-80/inventory/product/bed9da35-820c-4e7a-a66e-5096f25d3239-Photo.jpeg",
        ItemName:'Magnus Klip Lock Avanza 3 Container Lunch Box',
        Weight:'1 Unit',
        DelName:'₹690',
        Price:'₹552'
    },
    {
        id:7,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-612-408,pr-true,f-webp,q-80/inventory/product/cc7fdfed-f0ef-4d55-80ad-a134dbd6caae-1mqGNtnN_-gZsaTqFPEcz3ADLxZh2fTwP.jpeg",
        ItemName:'Steelo Apsara Bottles - 900 Ml (Pack Of 4) -Assorted Colours',
        Weight:'1 piece',
        DelName:'₹198',
        Price:'₹109'
    },
    {
        id:8,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/a8022c93-08eb-402d-acca-cfad2ca6f29d-13IkXdTxmCSUH1r_ag7JWylat9gNlTmOB.jpeg",
        ItemName:'Dynamic Airseal Container Assorted - 3 Pcs',
        Weight:'3 Pcs',
        DelName:'₹210',
        Price:'₹129'
    },
    {
        id:9,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/f73c946c-1195-44c1-bf7e-300bbb32bc1a-Photo.jpeg",
        ItemName:'Magnus Bolt Dlx Steel Leakproof Lunch Box - 800Ml+150Ml',
        Weight:'1 Unit',
        DelName:'₹799',
        Price:'₹639'
    },
    {
        id:10,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-2339-1654,pr-true,f-webp,q-80/inventory/product/2f0ec992-35bd-48f9-a025-3a8eaee0dd28-02863168-775d-4683-af42-2ae18ee7f999.jpeg",
        ItemName:'Asian Cool Splash Water Bottle-Assorted (Blue /Orange /Green /Red)-800ML',
        Weight:'1 piece',
        DelName:'₹216',
        Price:'₹129'
    },
    {
        id:11,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-3024-4000,pr-true,f-webp,q-80/inventory/product/4932db0c-879b-4144-83b9-7dd6cdae3703-/tmp/20230320-1257471.jpeg",
        ItemName:'Steelo Silky Bottle - 1 Lt (Assorted Colours)',
        Weight:'1 piece',
        DelName:'₹131',
        Price:'₹79'
    },
    {
        id:12,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-3114-4000,pr-true,f-webp,q-80/inventory/product/15d42d95-8c6f-458b-9d59-d787daf534e5-/tmp/20230320-1257171.jpeg",
        ItemName:'Steelo Jade Bottle - 1 Lt (Assorted Colours)',
        Weight:'1 piece',
        DelName:'₹160',
        Price:'₹89'
    },
    {
        id:13,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/dc9d5cac-5ab0-408b-a230-249386b5e313-/tmp/20230207-0828281.jpeg",
        ItemName:'Magnus Microwave Steam Lock Medium Container - Blue/Black',
        Weight:'450 ml',
        DelName:'₹249',
        Price:'₹199'
    },
    {
        id:14,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/fc35f943-c652-4d96-803b-7389ef2d4bc3-Photo.jpeg",
        ItemName:'Magnus Klip Lock Stainless Steel Container- 450 Ml',
        Weight:'1 piece',
        DelName:'₹249',
        Price:'₹199'
    },
    {
        id:15,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-4287-1746,pr-true,f-webp,q-80/inventory/product/21b38021-f7a2-4594-9052-edcfa131af83-15V83lYi6t15e_F3MVVEON6V5Vbyr_Jzn.jpeg",
        ItemName:'Zepwrap Food Wrapping Paper 25 mtr',
        Weight:'260 g',
        DelName:'₹235',
        Price:'₹199'
    },
    {
        id:16,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/909fcf8b-d6a9-4293-a179-d7f7c514ef77-/tmp/20230207-0828321.jpeg",
        ItemName:'Magnus Microwave Steam Lock Medium Container - Blue/Black',
        Weight:'300 ml',
        DelName:'₹199',
        Price:'₹159'
    },
    {
        id:17,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1464-1463,pr-true,f-webp,q-80/inventory/product/fb9c8d64-ee5f-4f26-bd17-ac52a6f54eb6-1Or2QhIQYedBMsLSShr3JSdPwimAI8ZZZ.jpeg",
        ItemName:'Asian Family Home Pet Water Bottle -Assorted (Blue / Transparent / Green)- 1000 ML',
        Weight:'1 piece',
        DelName:'₹99',
        Price:'₹79'
    },
    {
        id:18,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-680-3036,pr-true,f-webp,q-80/inventory/product/6bb04d96-3c08-40dd-9235-3d6e1a661366-1shbFSsnM9kg7gt8GIpzbMInV_19oHHmb.jpeg",
        ItemName:'Gebi Sparkle Plus Bottle Brush With Sponge',
        Weight:'1 piece',
        DelName:'₹79',
        Price:'₹65'
    },
    {
        id:19,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-2787-4317,pr-true,f-webp,q-80/inventory/product/0d8e0d3d-9ee9-442d-837d-6a25bd2b7189-/tmp/20230320-1256291.jpeg",
        ItemName:'Steelo Tiny Bottle - 600 Ml (Assorted Colours)',
        Weight:'1 piece',
        DelName:'₹104',
        Price:'₹79'
    },
    {
        id:20,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-4200-1486,pr-true,f-webp,q-80/inventory/product/d47a8bc9-a755-4959-ab3b-63ad55ae09ab-1pdcAj4uLIwBMlq5D7nPAuottvN6VlLpk.jpeg",
        ItemName:'Zepwrap Food Wrapping Paper 9mtr',
        Weight:'100 g',
        DelName:'₹110',
        Price:'₹95'
    },
    {
        id:21,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/64fa30c2-79fa-4baf-840f-64e720898d7f-Photo.jpeg",
        ItemName:'Magnus Klip Lock Stainless Steel Container- 300 Ml',
        Weight:'1 piece',
        DelName:'₹199',
        Price:'₹159'
    },
    {
        id:22,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-2456-3866,pr-true,f-webp,q-80/inventory/product/657828be-8b33-4ad4-8704-ef042d592cc1-/tmp/20230320-1257491.jpeg",
        ItemName:'Steelo Tritan My Bottle - 600 Ml (Assorted Colours)',
        Weight:'1 piece',
        DelName:'₹270',
        Price:'₹199'
    },
    {
        id:23,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1280-853,pr-true,f-webp,q-80/inventory/product/6661f76d-77dd-460e-9238-186f22f3b428-98e070fc-392e-46ec-a170-749c4871b7b8.jpeg",
        ItemName:'Super Wrapp Hindalco Aluminium Foil(20G + 10G)(Pack of 3)',
        Weight:'3 pcs',
        DelName:'₹120',
        Price:'₹115'
    },
    {
        id:24,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/63e48edd-257d-4e6e-8360-707a38e3511a-1E2WippaYGDBIeJXlOGZV1X2RMY_3lF6H.jpeg",
        ItemName:'Dynamic Leakproof Assorted Containers - Set of 4',
        Weight:'4 Unit',
        DelName:'₹172',
        Price:'₹99'
    },
    {
        id:25,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-2755-4088,pr-true,f-webp,q-80/inventory/product/fdbb1b6a-1757-4f20-9565-3fbf7ca657cd-1KA2INXjxG5PJetrTWsvvXEO9jgnpwGNM.jpeg",
        ItemName:'Steelo Mini Squarish Bottle - 500 Ml (Assorted Colours)',
        Weight:'1 piece',
        DelName:'₹84',
        Price:'₹59'
    },
    {
        id:26,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1280-850,pr-true,f-webp,q-80/inventory/product/b5d55f82-3bcf-4922-9a54-ef4463d6fdd8-133yaa9YLQyyqUNU2mTnOJCvMFi-wBylY.jpeg",
        ItemName:'Zep Aluminium foil 72 Meter 1 PIECE',
        Weight:'600 g',
        DelName:'₹550',
        Price:'₹479'
    },
    {
        id:27,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-824,pr-true,f-webp,q-80/inventory/product/a961e3d1-8416-4f8e-b0d8-08e815b6c1b2-1L3zzufATtMszpi24e606TYzHe3hfwtx4.jpeg",
        ItemName:'Foil Container + Lid 750 ml',
        Weight:'10 piece',
        DelName:'₹89',
        Price:'₹85'
    },
    {
        id:28,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/3b2ad79a-fa03-4bb9-9fdb-27d02eb25a79-image_file.jpeg",
        ItemName:'Ezee Aluminium Foil 9 Mtr',
        Weight:'1 piece',
        DelName:'₹162',
        Price:'₹115'
    },
    {
        id:29,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-679-679,pr-true,f-webp,q-80/inventory/product/4c7baca6-c419-416f-a9c9-eb7047ee1c4f-1Qhyk6VaGN9-tfSiY0h25CBZERNTgol1E.jpeg",
        ItemName:'Scotch-Brite Plastic Bottle Cleaner Brush (Pink and White)',
        Weight:'1 piece',
        DelName:'₹190',
        Price:'₹181'
    },
    {
        id:30,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-788-651,pr-true,f-webp,q-80/inventory/product/f607e3ce-4a3f-4d3e-8e13-f705e63bef93-1V6q8oQb3EzRMY28u86TznwbigKfqhFbu.jpeg",
        ItemName:'Foil Container + Lid 450 ml',
        Weight:'10 piece',
        DelName:'₹65',
        Price:'₹59'
    },
    {
        id:31,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-2364-2364,pr-true,f-webp,q-80/inventory/product/94e355bd-b4f5-48fd-b71e-efac72573375-1RGSZqJ76rJEO4xGgbcrjPFGabZIRLUc4.jpeg",
        ItemName:'Asian Blue Diet Meal Hot Lunch Box',
        Weight:'489 g 1',
        DelName:'₹459',
        Price:'₹299'
    },
    {
        id:32,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/f08beae1-b84b-4d78-8912-3d5eac69a9f3-Photo.jpeg",
        ItemName:'Magnus Klip Lock Stainless Steel Container- 100 Ml',
        Weight:'1 piece',
        DelName:'₹156',
        Price:'₹125'
    },
    {
        id:33,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-225-225,pr-true,f-webp,q-80/inventory/product/4862fed7-f41f-4423-bb53-726aafcca469-image_file.jpeg",
        ItemName:'Foil Container + lid 600 ml',
        Weight:'10 piece',
        DelName:'₹85',
        Price:'₹79'
    },
    {
        id:34,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/c8944220-7238-4b2b-b366-8befd36ac075-/tmp/20230207-0828181.jpeg",
        ItemName:'Magnus Microwave Steam Lock Small Container -Blue/Black',
        Weight:'150 ml',
        DelName:'₹169',
        Price:'₹135'
    },
    {
        id:35,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-450-450,pr-true,f-webp,q-80/inventory/product/a6e8e501-d2b7-4fe9-be16-b821bd4f4994-Photo.jpeg",
        ItemName:'Zeal Pet Plain Bottle 1000 ml (Assorted Colours)',
        Weight:'91 g',
        DelName:'₹99',
        Price:'₹59'
    },
    {
        id:36,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/655338cc-6c3d-487d-a9f1-01ef29dd3600-18F9EW56e1dXGrxN-yi5jUcyz86u1uoKv.jpeg",
        ItemName:'Mini Meal Hot Lunch Box- Assorted',
        Weight:'1 Unit',
        DelName:'₹189',
        Price:'₹129'
    },
    {
        id:37,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-2004-1500,pr-true,f-webp,q-80/inventory/product/c01da8e5-093c-414e-b11a-5fd0d0994c03-1C5nkp6K8J7JhF5Vn-fAu2BuSY6mRnlUt.jpeg",
        ItemName:'Reusable Square Tub Container 500 ml',
        Weight:'(Pack Of 10)',
        DelName:'₹109',
        Price:'₹99'
    },
    
]
function BottlesAndLunchboxes() {
  return (
    <div>
 <BottlesAndLunchboxesprop totalItems={NewProducts}></BottlesAndLunchboxesprop>
    </div>
  )
}

export default BottlesAndLunchboxes