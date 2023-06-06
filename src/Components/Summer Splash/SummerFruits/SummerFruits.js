import React from 'react'
import SummerFruitsProp from './SummerFruitsProp'
const NewProducts=[
    { id:1,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-611-409,pr-true,f-webp,q-80/inventory/product/d3cfc015-f719-4a95-9cd3-24501372640d-1s7W-6CrYmgajcbnhM6lxAHjijI44mNmq.jpeg ",
      ItemName:'Mango Alphonso (Hapus)',
      Weight:'6 pcs (Approx. 1.2kg - 1.4kg)',
      DelName:'₹573',
      Price:'₹486'
    },
    { id:2,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-300-300,pr-true,f-webp,q-80/inventory/product/90d4f765-4049-4ef8-8ce0-b220b9f04847-mango_totapuri.jpeg",
      ItemName:'Mango Totapuri',
      Weight:'3 pcs (Approx. 750g - 900g)',
      DelName:'₹96',
      Price:'₹81'
    },
    { id:3,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1022,pr-true,f-webp,q-80/inventory/product/2e256ec1-4f92-4d71-b952-41f8188b9dfd-tmp/6d2288ae-a5f3-4af0-89e6-c419ea40d387.jpeg",
      ItemName:'Watermelon Kiran',
      Weight:'1 pc (Approx. 2 - 3 kg)',
      DelName:'₹93',
      Price:'₹79'
    },
    { id:4,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/30431e4d-9a4e-4524-b285-84d98bae63f6-fef19091-c0b2-449c-b235-779a056df2e1-Muskmelon.webp",
      ItemName:'Muskmelon Semi Ripe',
      Weight:'2pc',
      DelName:'₹142',
      Price:'₹118'
    },
    { id:5,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-4008-4008,pr-true,f-webp,q-80/inventory/product/f8a73d5c-53b5-4d8e-9c80-50c66f4f43ca-shutterstock_486923446.jpg",
      ItemName:'Tender Coconut (Nariyal)/Kobbari Bondam',
      Weight:'3pc',
      DelName:'₹210',
      Price:'₹168'
    },
    { id:6,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-480,pr-true,f-webp,q-80/inventory/product/3e8dfc9a-0152-4a4b-8e1e-465d39c183f6-Photo.jpeg ",
      ItemName:'Raw Mango',
      Weight:'500 g (Approx. 3pcs - 5pcs)',
      DelName:'₹55',
      Price:'₹46'
    },
    { id:7,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-4520-3613,pr-true,f-webp,q-80/inventory/product/cc9e44cc-06af-49f0-b8cd-b5ef0d73a0f0-shutterstock_1978892732.jpg",
      ItemName:'Papaya Lady Red/Poppadi Pandu/Boppas Pandu Semi Ripe',
      Weight:'1 pc (Approx. 700g - 1.2 kg)',
      DelName:'₹80',
      Price:'₹68'
    },
    { id:8,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/d193005a-7236-4fe3-b356-f653cbde0a89-Photo.jpeg",
      ItemName:'Grapes Bengalore Blue',
      Weight:'500 g',
      DelName:'₹133',
      Price:'₹113'
    },
    { id:9,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-6547-4374,pr-true,f-webp,q-80/inventory/product/9411ac28-df87-4346-a48e-10428088ffe6-image",
      ItemName:'Grapes Red Globe',
      Weight:'250 g',
      DelName:'₹242',
      Price:'₹212'
    },
    { id:10,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-800-800,pr-true,f-webp,q-80/inventory/product/7dbeaaf9-a9ba-49d2-a81e-769d854ec8f3-6173dddb-5197-4ddc-893f-5504c917c0fc.jpeg",
      ItemName:'Orange Malta',
      Weight:'4 pcs (Approx. 600g - 700g)',
      DelName:'₹170',
      Price:'₹143'
    },
    { id:11,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/4fd574a2-5374-4f0b-bbf3-b143c635b526-/tmp/20221226-061024.jpeg",
      ItemName:'Mango Dried',
      Weight:'150 g',
      DelName:'₹180',
      Price:'₹153'
    },
    { id:12,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-400,pr-true,f-webp,q-80/inventory/product/92862f70-0879-4976-b136-670dacba002a-6c06147a-7f60-4136-8e0d-97cb468dad31.jpeg",
      ItemName:'Plum Indian (Aloo Bukhara)',
      Weight:'250 g',
      DelName:'₹248',
      Price:'₹211'
    },
    { id:13,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/37815e21-604f-4868-8287-1c7a27b9ef46-tmp/27ba1e7f-4166-4362-aee2-6fda4bd3a74d.jpeg",
      ItemName:'Pomegranate',
      Weight:'2 pcs (Approx. 400g - 500g)',
      DelName:'₹195',
      Price:'₹165'
    },
    { id:14,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/4afd5fa1-f2e1-4261-8125-2d8f95025399-b936b4a3-685d-437a-825e-6b366c91e72c.jpeg",
      ItemName:'Litchi',
      Weight:'500 g',
      DelName:'₹265',
      Price:'₹199'
    },
    { id:15,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-481-500,pr-true,f-webp,q-80/inventory/product/39b74398-660f-477a-8342-71740f185914-c015be5b-c58a-4ef3-b608-9dfe53caf495.jpeg",
      ItemName:'Pineapple (Ananas) Semi Ripe',
      Weight:'1 pc (Approx. 800g - 1 kg)',
      DelName:'₹118',
      Price:'₹100'
    },
    { id:16,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-611-409,pr-true,f-webp,q-80/inventory/product/d3cfc015-f719-4a95-9cd3-24501372640d-1s7W-6CrYmgajcbnhM6lxAHjijI44mNmq.jpeg ",
      ItemName:'Mango Alphonso (Hapus)',
      Weight:'6 pcs (Approx. 1.2kg - 1.4kg)',
      DelName:'₹573',
      Price:'₹486'
    },
    { id:17,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-300-300,pr-true,f-webp,q-80/inventory/product/90d4f765-4049-4ef8-8ce0-b220b9f04847-mango_totapuri.jpeg",
      ItemName:'Mango Totapuri',
      Weight:'3 pcs (Approx. 750g - 900g)',
      DelName:'₹96',
      Price:'₹81'
    },
    { id:18,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1500-1022,pr-true,f-webp,q-80/inventory/product/2e256ec1-4f92-4d71-b952-41f8188b9dfd-tmp/6d2288ae-a5f3-4af0-89e6-c419ea40d387.jpeg",
      ItemName:'Watermelon Kiran',
      Weight:'1 pc (Approx. 2 - 3 kg)',
      DelName:'₹93',
      Price:'₹79'
    },
    { id:19,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/30431e4d-9a4e-4524-b285-84d98bae63f6-fef19091-c0b2-449c-b235-779a056df2e1-Muskmelon.webp",
      ItemName:'Muskmelon Semi Ripe',
      Weight:'2pc',
      DelName:'₹142',
      Price:'₹118'
    },
    { id:20,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-4008-4008,pr-true,f-webp,q-80/inventory/product/f8a73d5c-53b5-4d8e-9c80-50c66f4f43ca-shutterstock_486923446.jpg",
      ItemName:'Tender Coconut (Nariyal)/Kobbari Bondam',
      Weight:'3pc',
      DelName:'₹210',
      Price:'₹168'
    },
    { id:21,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-480,pr-true,f-webp,q-80/inventory/product/3e8dfc9a-0152-4a4b-8e1e-465d39c183f6-Photo.jpeg ",
      ItemName:'Raw Mango',
      Weight:'500 g (Approx. 3pcs - 5pcs)',
      DelName:'₹55',
      Price:'₹46'
    },
    { id:22,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-4520-3613,pr-true,f-webp,q-80/inventory/product/cc9e44cc-06af-49f0-b8cd-b5ef0d73a0f0-shutterstock_1978892732.jpg",
      ItemName:'Papaya Lady Red/Poppadi Pandu/Boppas Pandu Semi Ripe',
      Weight:'1 pc (Approx. 700g - 1.2 kg)',
      DelName:'₹80',
      Price:'₹68'
    },
    { id:23,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/d193005a-7236-4fe3-b356-f653cbde0a89-Photo.jpeg",
      ItemName:'Grapes Bengalore Blue',
      Weight:'500 g',
      DelName:'₹133',
      Price:'₹113'
    },
    { id:24,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-6547-4374,pr-true,f-webp,q-80/inventory/product/9411ac28-df87-4346-a48e-10428088ffe6-image",
      ItemName:'Grapes Red Globe',
      Weight:'250 g',
      DelName:'₹242',
      Price:'₹212'
    },
    { id:25,
      image:" https://cdn.zeptonow.com/production///tr:w-200,ar-800-800,pr-true,f-webp,q-80/inventory/product/7dbeaaf9-a9ba-49d2-a81e-769d854ec8f3-6173dddb-5197-4ddc-893f-5504c917c0fc.jpeg",
      ItemName:'Orange Malta',
      Weight:'4 pcs (Approx. 600g - 700g)',
      DelName:'₹170',
      Price:'₹143'
    },
    { id:26,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/4fd574a2-5374-4f0b-bbf3-b143c635b526-/tmp/20221226-061024.jpeg",
      ItemName:'Mango Dried',
      Weight:'150 g',
      DelName:'₹180',
      Price:'₹153'
    },
    { id:27,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-640-400,pr-true,f-webp,q-80/inventory/product/92862f70-0879-4976-b136-670dacba002a-6c06147a-7f60-4136-8e0d-97cb468dad31.jpeg",
      ItemName:'Plum Indian (Aloo Bukhara)',
      Weight:'250 g',
      DelName:'₹248',
      Price:'₹211'
    },
    { id:28,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/37815e21-604f-4868-8287-1c7a27b9ef46-tmp/27ba1e7f-4166-4362-aee2-6fda4bd3a74d.jpeg",
      ItemName:'Pomegranate',
      Weight:'2 pcs (Approx. 400g - 500g)',
      DelName:'₹195',
      Price:'₹165'
    },
    { id:29,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/4afd5fa1-f2e1-4261-8125-2d8f95025399-b936b4a3-685d-437a-825e-6b366c91e72c.jpeg",
      ItemName:'Litchi',
      Weight:'500 g',
      DelName:'₹265',
      Price:'₹199'
    },
    { id:30,
      image:"https://cdn.zeptonow.com/production///tr:w-200,ar-481-500,pr-true,f-webp,q-80/inventory/product/39b74398-660f-477a-8342-71740f185914-c015be5b-c58a-4ef3-b608-9dfe53caf495.jpeg",
      ItemName:'Pineapple (Ananas) Semi Ripe',
      Weight:'1 pc (Approx. 800g - 1 kg)',
      DelName:'₹118',
      Price:'₹100'
    },
]
function SummerFruits() {
  return (
    <div>
<SummerFruitsProp totalItems={NewProducts}></SummerFruitsProp>
    </div>
  )
}

export default SummerFruits