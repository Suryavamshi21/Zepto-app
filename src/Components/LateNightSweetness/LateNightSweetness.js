import React from 'react'
const NewProducts =[
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-884,pr-true,f-webp,q-80/inventory/product/7ca0fa61-fcb3-40bd-ae8d-3898dd73fdb3-1eMg-MJsLmAbiax6xflLfcMK952jXDc96.jpeg",Head:'Snickers Miniatures Peanut Chocolate Bar',weight:'180g',Delprice:'₹199',Price:'₹172'},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-630-841,pr-true,f-webp,q-80/inventory/product/11d0173b-97fe-45f7-8f8d-808f2942b96e-1WgM6OkDTxuaFDntBpJprEbZ02VvLzOoH.jpeg",Head:'Mars Miniatures Chocolate With Caramel',weight:'130g',Delprice:'₹170',Price:'₹150'},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/be56a198-8f35-4920-a236-e05827b5b876-1b4lXsNBo2EO5HS0UO44Cuypue-sztrOn.jpeg",Head:'Cadbury Dairy Milk SIlk Minis Chocolate',weight:'18 x 9 g',Delprice:'₹200',Price:'₹176'},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-817-1100,pr-true,f-webp,q-80/inventory/product/efa41c0d-5cf8-4ece-9729-36bffc9ce1b9-1fCCicAiy4-1V3rnnveiRnzaaM5uBD-Wf.jpeg",Head:'Bounty Miniatures Milk Chocolate - Coconut Filled',weight:'170 g',Delprice:'₹199',Price:'₹184'},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-8334-8334,pr-true,f-webp,q-80/inventory/product/55ec090b-5ccc-4b37-ad5f-b4a790c55962-1vYttFzxInU9k_NF2PdOgbCnI7L3lvKMN.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/e23cf5ac-ae00-4b3b-9e5f-4d5f33cbcf86-1m7z1MBNjJkcLcfYzOuc3C6qawMpDqoWI.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1100-1100,pr-true,f-webp,q-80/inventory/product/88bd9841-2ae6-4dd9-81f5-7f3da988e878-image_file.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-795-1000,pr-true,f-webp,q-80/inventory/product/b13e93c9-9e50-4513-af13-b7aefb5d3732-1HCsLYaW9PYnhW2qW7Czvc4CEODTWfnzQ.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-576-706,pr-true,f-webp,q-80/inventory/product/220471bd-e1e8-468e-a8c9-1799b69debd5-14GSwtXrUjUBo2msOj8P8pmxaToDyZ7Qy.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-424-535,pr-true,f-webp,q-80/inventory/product/2de35321-ae83-4944-93a2-e7a6fb24860c-1mzxlXZ27dO6R8tQoVphg8YXCo4xuh-yM.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-900-900,pr-true,f-webp,q-80/inventory/product/fc18bf0e-5e24-4cf7-9bc2-954037efb25b-tmp/0811d5ab-fbe0-4924-b5af-c5ae81b2e829.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/4060a550-2583-401d-b041-3b3909dd482a-1E-FAs9zfoaerI7Ck7l3tzJ6tXPz8CnJk.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-600-620,pr-true,f-webp,q-80/inventory/product/ce13a22a-2680-4abe-b796-c6566ff79972-18kbmFo32boyEcUEu0YNg9til9d_oCwlc.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    {image:"https://cdn.zeptonow.com/production///tr:w-200,ar-463-264,pr-true,f-webp,q-80/inventory/product/1fea4b84-6c7e-4f90-99ae-a26047097c2e-14DMq116kLRTjjoERzc4Ov1QuqGCApgGW.jpeg",Head:'',weight:'',Delprice:'',Price:''},
    ]
function LateNightSweetness() {
  return (
    <div>
     <h2>Late Night Sweetness</h2>
     <section style={{display:'flex' , flexWrap:"wrap",gap:'2rem', padding:'15px',}}>
        {
            NewProducts.map((prop)=>{
                return(
                    <div>
                        <div>
                        <img src={prop.image} alt=''/>
                        </div>
                        <h2>{prop.Head}</h2>
                        <p>{prop.weight}</p>
                        <div >
                            <div>
                                <del>{prop.Delprice}</del>
                                <p>{prop.Price}</p>
                            </div>
                        </div>
                         <button>Add</button>
                    </div>
                )
            }
            )
        }
     </section>
    </div>
  )
}

export default LateNightSweetness