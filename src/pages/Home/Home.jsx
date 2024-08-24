import { useState } from "react"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"


const Home = () => {
  const [selecetdmeal, setSelectedMeal]= useState("all"); 
  console.log(selecetdmeal)
  return (
    <div className="m-auto w-[80%]">
    <Navbar/>
    <Hero/>
    <ExploreMenu selecetdmeal={selecetdmeal} setSelectedMeal={setSelectedMeal} />
    </div>
  )
}

export default Home