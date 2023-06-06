import React from 'react'
const NewProducts=[
    {image:"https://cdn.zeptonow.com/production///tr:w-372,ar-372-372,pr-true,f-webp,q-80/inventory/banner/a74829ee-4f4c-4941-b144-472cc48890b1-Super-Saver-Combos.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-282,ar-282-354,pr-true,f-webp,q-80/inventory/banner/420e08b5-09a7-4143-b186-08226face17f-NC_Fit.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-282,ar-282-354,pr-true,f-webp,q-80/inventory/banner/6c5cfd45-5e0d-444f-ab20-441e29b2001a-NC_Gift.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-282,ar-282-354,pr-true,f-webp,q-80/inventory/banner/c91e8ffd-5521-4368-949b-5fef296130f6-NC_Pet.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-282,ar-282-354,pr-true,f-webp,q-80/inventory/banner/394e60aa-460f-4679-aabc-69d9adb24134-NC_Beauty.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-282,ar-282-354,pr-true,f-webp,q-80/inventory/banner/4e0dfedb-0a78-4e95-9a84-b0b4bcdee4af-NC_Baby.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-282,ar-282-354,pr-true,f-webp,q-80/inventory/banner/9a357434-6a7f-465e-9b6b-bc41bf302a96-NC_Org.png"},
    {image:"https://cdn.zeptonow.com/production///tr:w-282,ar-282-354,pr-true,f-webp,q-80/inventory/banner/4569615f-baf4-4eda-83bf-0745996f6771-NC_Party.png"},
]
function ExploreNewCategories() {
  return (
    <div>
    <h2>Explore New Categories</h2>
            <section style={{display:"flex" ,flexWrap:'wrap'}}>
            {
                NewProducts.map((Prop)=>{
                    return(
                        <div>
                            <img src={Prop.image} alt='ExploreNewCategories' />
                        </div>
                    )
                })
            }
            </section>
    </div>
  )
}
export default ExploreNewCategories