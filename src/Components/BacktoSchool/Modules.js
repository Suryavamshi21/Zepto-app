import React from 'react'
import './Modules.css'
import { Link } from 'react-router-dom'
function Modules() {
  return (
   <div >
   <p>
      <img src="https://cdn.zeptonow.com/production///tr:w-0.98,h-0.98,f-webp/cms/sub_category/9357ec61-5ac8-4868-bd39-9b4305383219-Untitled_design_-_2023-05-18T135017.627-removebg-preview.png" alt="" />
      <Link to='/MilkDrinksandJuices'>MilkDrinksandJuices</Link>
   </p>
   <p>
      <img src="https://cdn.zeptonow.com/production///tr:w-0.98,h-0.98,f-webp/cms/sub_category/f39ee831-de80-4e14-bba5-3d8c09a387ce-image_file.png" alt="" />
      <Link to='/NoodlesandPasta'>Noodles & Pasta</Link>
   </p> 
   <p>
      <img src="https://cdn.zeptonow.com/production///tr:w-0.98,h-0.98,f-webp/cms/sub_category/471318d9-66fc-4758-8327-3d0a8b3f94c0-Untitled_design__89_-removebg-preview.png" alt="" /> 
      <Link to='/ChipsandMunchies'> Chips & Munchies</Link>
  </p> 
   <p>
      <img src="https://cdn.zeptonow.com/production///tr:w-0.98,h-0.98,f-webp/cms/sub_category/Save_your_job__78_-removebg-preview.png" alt="" /> 
      <Link to='/BottlesandLunchboxes'>Bottles & Lunchboxes</Link>
  </p>
   <p>
      <img src="https://cdn.zeptonow.com/production///tr:w-0.98,h-0.98,f-webp/cms/sub_category/Save_your_job__77_-removebg-preview.png" alt="" />
      <Link to='/FruitsandSalads'>Fruits & Salads</Link>
   </p> 
   <p>
      <img src="https://cdn.zeptonow.com/production///tr:w-0.98,h-0.98,f-webp/cms/sub_category/5f868c09-bf3e-46d7-a589-4ef10b768648-Chocolates_&_Candies.png" alt="" /> 
      <Link to='/ChocolatesandCakes'>Chocolates & Cakes</Link>
  </p>
</div>
  )
}

export default Modules