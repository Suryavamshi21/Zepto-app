import React from 'react'
const NewProducts=[
    {image:"https://cdn.zeptonow.com/production///tr:w-372,ar-372-372,pr-true,f-webp,q-80/inventory/banner/a74829ee-4f4c-4941-b144-472cc48890b1-Super-Saver-Combos.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-372,ar-372-372,pr-true,f-webp,q-80/inventory/banner/4523390e-84d6-49f5-ae45-b64ec242a5ba-Non-veg-ready-spices_Brand-Tile-.png"}, 
    {image:"https://cdn.zeptonow.com/production///tr:w-372,ar-372-372,pr-true,f-webp,q-80/inventory/banner/2d0181d1-e354-4ad4-a37e-979a2cf2f9a3-Brand-Tiles_baby-care_(1).jpg"},  
    {image:"https://cdn.zeptonow.com/production///tr:w-372,ar-372-372,pr-true,f-webp,q-80/inventory/banner/4b7c1256-d0f3-49f5-93ed-8a7737f26d6d-Period-Care.png"},  
    {image:"https://cdn.zeptonow.com/production///tr:w-160,ar-372-372,pr-true,f-webp,q-80/inventory/banner/c9c36a48-3530-411b-86da-531d08c1ebfc-Mango-&-Melons.png"},  
    {image:"https://cdn.zeptonow.com/production///tr:w-160,ar-372-372,pr-true,f-webp,q-80/inventory/banner/e9a52502-d68b-4a86-8d3b-ad6a5a3bb732-Powdered-Spices.png"},  
    {image:"https://cdn.zeptonow.com/production///tr:w-160,ar-372-372,pr-true,f-webp,q-80/inventory/banner/29d1e744-03b9-4c9f-b07b-3b44a8fb3e5a-Brand-Tiles_Dates-&-Seeds.png"},  
    {image:"https://cdn.zeptonow.com/production///tr:w-160,ar-372-372,pr-true,f-webp,q-80/inventory/banner/aba29ee0-397a-4b5c-906c-e30297027061-Brand-Tiles_Flours.jpg"},  
]
function CuratedForYou() {
  return (
    <div>
     <h3>Curated For You</h3>
     <p>All your favorites</p>
     <section  style={{display:"flex" ,flexWrap:'wrap'}}>
        {
            NewProducts.map((prop)=>{
             return(
                <div>
                    <div>
                        <img src={prop.image} alt="" />
                    </div>
                </div>
             )
            })
        }
     </section>
    </div>
  )
}

export default CuratedForYou