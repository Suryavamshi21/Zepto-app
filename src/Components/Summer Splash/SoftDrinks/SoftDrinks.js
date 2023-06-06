import React from 'react'
import SoftDrinksProp from './SoftDrinksProp'
const NewProducts=[
    { id:1,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1366-1644,pr-true,f-webp,q-80/inventory/product/7f8ee41e-37c9-4a2a-88f1-1d6656efa7ec-1tg6QcJ7vleG8-gAqLQIZ4KZ2vSjiv3NQ.jpeg",
      ItemName:'Nestea Instant Iced Tea Lemon',
      Weight:'400 g',
      DelName:'₹200',
      Price:'₹190'
    },
    {
      id:2,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-953-1491,pr-true,f-webp,q-80/inventory/product/fed97af4-b3bb-44b4-9390-d2748ce7cdc1-1eC7_AO7pbGyVDaVOOZm8eiH1rO3PT0Jp.jpeg ",
      ItemName:'Coca-Cola Soft Drink',
      Weight:'750 ml',
      DelName:'',
      Price:'₹40'
    },
    {
      id:3,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/2253b322-82a1-4ba5-b2ac-8c47903750f4-3825.jpg ",
      ItemName:'Monster Energy Drink 350 ml Combo',
      Weight:'2 Pieces',
      DelName:'₹250',
      Price:'₹224'
    },
    {
      id:4,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-964-1469,pr-true,f-webp,q-80/inventory/product/7e9d72bc-98ea-4d0c-9147-c886c6a453ef-1PUqPvvPNLXkysDnW7dk522wHMKDH_rGM.jpeg ",
      ItemName:'Thums Up Soft Drink',
      Weight:'750 ml',
      DelName:'',
      Price:'₹40'
    },
    {
      id:5,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-751-991,pr-true,f-webp,q-80/inventory/product/bc3467aa-0762-4209-8745-b6fa01231b03-152woCOZkPXsGrn8iSmCDmU7ARAmuiWB8.jpeg",
      ItemName:'Thums Up Soft Drink Combo',
      Weight:'2 Pieces',
      DelName:'₹80',
      Price:'₹76'
    },
    {
      id:6,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/f65aa178-d0c3-432c-abae-6fedae349a47-475.jpg",
      ItemName:"Thums Up(1.25L) & Lay's West Indies Chips(50g) Combo",
      Weight:'3 Pieces',
      DelName:'',
      Price:'₹108'
    },
    {
      id:7,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/492d909f-1dda-49c4-8293-56a0a3d5784d-Pepsi_Black_Soft_Drink_(Pack_of_3).jpg",
      ItemName:'Pepsi Black Soft Drink Combo',
      Weight:'3 Pieces',
      DelName:'₹105',
      Price:'₹93'
    },
    {
      id:8,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/4133f045-feaa-49aa-a465-4c5855838204-101.png ",
      ItemName:"Thums Up Soft Drink 750 ml & Lay's American Style Cream & Onion Potato Chips 52 gms Combo",
      Weight:'2 Combo',
      DelName:'',
      Price:'₹60'
    },
    {
      id:9,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/1d502057-6f7a-46ae-863b-fb4f7e393c14-118iUF8dlXZv1-kFDONSK7gG6bvq1G38L.jpeg ",
      ItemName:'Coca Cola Combo',
      Weight:'2 Pieces',
      DelName:'₹80',
      Price:'₹76'
    },
    {
      id:10,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-179-499,pr-true,f-webp,q-80/inventory/product/700f4fba-c7f9-4ef5-bd7b-9784b41f8ccd-1MAhmIMgaJglGsAGRHviUAmrGBaSIrMJp.jpeg ",
      ItemName:'7 Up Lemon Soft Drink',
      Weight:'750 ml',
      DelName:'₹40',
      Price:'₹36'
    },
    {
      id:11,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-475-1500,pr-true,f-webp,q-80/inventory/product/7809c74d-5d4b-4e1b-a29f-621c17765d09-16cM0Ru1zikf4iP58-Xd58qHavVkNlAv4.jpeg",
      ItemName:'Pepsi Soft Drink',
      Weight:'750 ml',
      DelName:'₹40',
      Price:'₹36'
    },
    {
      id:12,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-757-1771,pr-true,f-webp,q-80/inventory/product/1bb00cdd-62a1-43f4-9ea4-8c55c550896a-1_g_n7eNOVdxRa_fwzuPxrmZGPE5zyrOn.jpeg ",
      ItemName:'Thums Up Soft Drink Can',
      Weight:'300 ml',
      DelName:'',
      Price:'₹40'
    },
    {
      id:13,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-660-1898,pr-true,f-webp,q-80/inventory/product/ceeb4c88-2fe4-4c37-9d28-e9d97fd0a726-1bj-IvaoXukDqBIIHvbYglpAkhb41FZEO.jpeg ",
      ItemName:'Thums Up Soft Drink',
      Weight:'1.25 l',
      DelName:'',
      Price:'₹68'
    },
    {
      id:14,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/09341b90-8ba1-4ccf-8dc9-e493d9707750-Mountain_Dew_Soft_Drink_Can_(Pack_of_2)_(1).jpg ",
      ItemName:'Mountain Dew Soft Drink Can Combo',
      Weight:'2 Pieces',
      DelName:'₹70',
      Price:'₹66'
    },
    {
      id:15,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/217a6060-71a6-4ec5-b592-7e1bc301a3f5-16qx2WKgQ-vIIJq7fP3_DkPEnTCZPrYOf.jpeg",
      ItemName:'Thums Up Soft Drink Can Combo',
      Weight:'3 Pieces',
      DelName:'',
      Price:'₹120'
    },
    {
      id:16,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1952-1505,pr-true,f-webp,q-80/inventory/product/8cee55a0-73ab-4301-96cc-90219adcb7e0-1FpKxBUb_ok3hxuCUCgWQrNC31rssOu4m.jpeg ",
      ItemName:'Thums Up Soft Drink',
      Weight:'8 x 250 ml',
      DelName:'',
      Price:'₹160'
    },
    {
      id:17,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-908-1447,pr-true,f-webp,q-80/inventory/product/c9c70ea3-af9c-4ff4-b7ce-4e02e9561f6e-1leKCytUOIba_hBeLIo-6twmyxdd3DCK7.jpeg ",
      ItemName:'Sprite Pet',
      Weight:'1.25 l',
      DelName:'',
      Price:'₹68'
    },
    {
      id:18,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-409-1462,pr-true,f-webp,q-80/inventory/product/a480e9a3-2980-4d96-acd1-5accfd050f06-1xFT_926yoAb4V9mjOxP-5kjhrjnq2H3f.jpeg ",
      ItemName:'Mirinda Orange Flavoured Soft Drink',
      Weight:'750 ml',
      DelName:'₹40',
      Price:'₹36'
    },
    {
      id:19,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1376-1496,pr-true,f-webp,q-80/inventory/product/32e13e77-aa1c-4b48-bd40-1ea8763a3d1e-1mF24NswC68zfkEcgcLNfPmFI0XNs9HDM.jpeg",
      ItemName:'Red Bull Energy Drink',
      Weight:'2 x 250 ml',
      DelName:'',
      Price:'₹245'
    },
    {
        id:20,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/236aa948-8caa-4538-804d-21d01a242731-1IvYSef_MptoJ6kOTtUMwV3uFR4De8zNK.jpeg",
        ItemName:"Schweppes Indian Tonic Water Combo",
        Weight:'4 Pieces',
        DelName:'',
        Price:'₹240'    
    },
    { id:21,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1366-1644,pr-true,f-webp,q-80/inventory/product/7f8ee41e-37c9-4a2a-88f1-1d6656efa7ec-1tg6QcJ7vleG8-gAqLQIZ4KZ2vSjiv3NQ.jpeg",
      ItemName:'Nestea Instant Iced Tea Lemon',
      Weight:'400 g',
      DelName:'₹200',
      Price:'₹190'
    },
    {
      id:22,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-953-1491,pr-true,f-webp,q-80/inventory/product/fed97af4-b3bb-44b4-9390-d2748ce7cdc1-1eC7_AO7pbGyVDaVOOZm8eiH1rO3PT0Jp.jpeg ",
      ItemName:'Coca-Cola Soft Drink',
      Weight:'750 ml',
      DelName:'',
      Price:'₹40'
    },
    {
      id:23,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/2253b322-82a1-4ba5-b2ac-8c47903750f4-3825.jpg ",
      ItemName:'Monster Energy Drink 350 ml Combo',
      Weight:'2 Pieces',
      DelName:'₹250',
      Price:'₹224'
    },
    {
      id:24,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-964-1469,pr-true,f-webp,q-80/inventory/product/7e9d72bc-98ea-4d0c-9147-c886c6a453ef-1PUqPvvPNLXkysDnW7dk522wHMKDH_rGM.jpeg ",
      ItemName:'Thums Up Soft Drink',
      Weight:'750 ml',
      DelName:'',
      Price:'₹40'
    },
    {
      id:25,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-751-991,pr-true,f-webp,q-80/inventory/product/bc3467aa-0762-4209-8745-b6fa01231b03-152woCOZkPXsGrn8iSmCDmU7ARAmuiWB8.jpeg",
      ItemName:'Thums Up Soft Drink Combo',
      Weight:'2 Pieces',
      DelName:'₹80',
      Price:'₹76'
    },
    {
      id:26,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/f65aa178-d0c3-432c-abae-6fedae349a47-475.jpg",
      ItemName:"Thums Up(1.25L) & Lay's West Indies Chips(50g) Combo",
      Weight:'3 Pieces',
      DelName:'',
      Price:'₹108'
    },
    {
      id:27,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/492d909f-1dda-49c4-8293-56a0a3d5784d-Pepsi_Black_Soft_Drink_(Pack_of_3).jpg",
      ItemName:'Pepsi Black Soft Drink Combo',
      Weight:'3 Pieces',
      DelName:'₹105',
      Price:'₹93'
    },
    {
      id:28,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/4133f045-feaa-49aa-a465-4c5855838204-101.png ",
      ItemName:"Thums Up Soft Drink 750 ml & Lay's American Style Cream & Onion Potato Chips 52 gms Combo",
      Weight:'2 Combo',
      DelName:'',
      Price:'₹60'
    },
    {
      id:29,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/1d502057-6f7a-46ae-863b-fb4f7e393c14-118iUF8dlXZv1-kFDONSK7gG6bvq1G38L.jpeg ",
      ItemName:'Coca Cola Combo',
      Weight:'2 Pieces',
      DelName:'₹80',
      Price:'₹76'
    },
    {
      id:30,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-179-499,pr-true,f-webp,q-80/inventory/product/700f4fba-c7f9-4ef5-bd7b-9784b41f8ccd-1MAhmIMgaJglGsAGRHviUAmrGBaSIrMJp.jpeg ",
      ItemName:'7 Up Lemon Soft Drink',
      Weight:'750 ml',
      DelName:'₹40',
      Price:'₹36'
    },
    {
      id:31,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-475-1500,pr-true,f-webp,q-80/inventory/product/7809c74d-5d4b-4e1b-a29f-621c17765d09-16cM0Ru1zikf4iP58-Xd58qHavVkNlAv4.jpeg",
      ItemName:'Pepsi Soft Drink',
      Weight:'750 ml',
      DelName:'₹40',
      Price:'₹36'
    },
    {
      id:32,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-757-1771,pr-true,f-webp,q-80/inventory/product/1bb00cdd-62a1-43f4-9ea4-8c55c550896a-1_g_n7eNOVdxRa_fwzuPxrmZGPE5zyrOn.jpeg ",
      ItemName:'Thums Up Soft Drink Can',
      Weight:'300 ml',
      DelName:'',
      Price:'₹40'
    },
    {
      id:33,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-660-1898,pr-true,f-webp,q-80/inventory/product/ceeb4c88-2fe4-4c37-9d28-e9d97fd0a726-1bj-IvaoXukDqBIIHvbYglpAkhb41FZEO.jpeg ",
      ItemName:'Thums Up Soft Drink',
      Weight:'1.25 l',
      DelName:'',
      Price:'₹68'
    },
    {
      id:34,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/09341b90-8ba1-4ccf-8dc9-e493d9707750-Mountain_Dew_Soft_Drink_Can_(Pack_of_2)_(1).jpg ",
      ItemName:'Mountain Dew Soft Drink Can Combo',
      Weight:'2 Pieces',
      DelName:'₹70',
      Price:'₹66'
    },
    {
      id:35,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/217a6060-71a6-4ec5-b592-7e1bc301a3f5-16qx2WKgQ-vIIJq7fP3_DkPEnTCZPrYOf.jpeg",
      ItemName:'Thums Up Soft Drink Can Combo',
      Weight:'3 Pieces',
      DelName:'',
      Price:'₹120'
    },
    {
      id:36,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1952-1505,pr-true,f-webp,q-80/inventory/product/8cee55a0-73ab-4301-96cc-90219adcb7e0-1FpKxBUb_ok3hxuCUCgWQrNC31rssOu4m.jpeg ",
      ItemName:'Thums Up Soft Drink',
      Weight:'8 x 250 ml',
      DelName:'',
      Price:'₹160'
    },
    {
      id:37,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-908-1447,pr-true,f-webp,q-80/inventory/product/c9c70ea3-af9c-4ff4-b7ce-4e02e9561f6e-1leKCytUOIba_hBeLIo-6twmyxdd3DCK7.jpeg ",
      ItemName:'Sprite Pet',
      Weight:'1.25 l',
      DelName:'',
      Price:'₹68'
    },
    {
      id:38,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-409-1462,pr-true,f-webp,q-80/inventory/product/a480e9a3-2980-4d96-acd1-5accfd050f06-1xFT_926yoAb4V9mjOxP-5kjhrjnq2H3f.jpeg ",
      ItemName:'Mirinda Orange Flavoured Soft Drink',
      Weight:'750 ml',
      DelName:'₹40',
      Price:'₹36'
    },
    {
      id:39,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-1376-1496,pr-true,f-webp,q-80/inventory/product/32e13e77-aa1c-4b48-bd40-1ea8763a3d1e-1mF24NswC68zfkEcgcLNfPmFI0XNs9HDM.jpeg",
      ItemName:'Red Bull Energy Drink',
      Weight:'2 x 250 ml',
      DelName:'',
      Price:'₹245'
    },
    {
        id:40,
        image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1500,pr-true,f-webp,q-80/inventory/product/236aa948-8caa-4538-804d-21d01a242731-1IvYSef_MptoJ6kOTtUMwV3uFR4De8zNK.jpeg",
        ItemName:"Schweppes Indian Tonic Water Combo",
        Weight:'4 Pieces',
        DelName:'',
        Price:'₹240'    
    },
]
function SoftDrinks() {
  return (
    <div>
 <SoftDrinksProp totalItems={NewProducts}></SoftDrinksProp>
    </div>
  )
}

export default SoftDrinks