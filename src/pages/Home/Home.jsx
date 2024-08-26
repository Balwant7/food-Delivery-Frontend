import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [selecetdmeal, setSelectedMeal] = useState("all");
  console.log(selecetdmeal);
  return (
    <>
      <div className="m-auto w-[85%]">
        <Navbar />
        <Hero />
        <ExploreMenu
          selecetdmeal={selecetdmeal}
          setSelectedMeal={setSelectedMeal}
        />
        <FoodDisplay selecetdmeal={selecetdmeal} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
