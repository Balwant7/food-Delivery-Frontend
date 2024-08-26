import { useContext } from "react";
import { Storecontext } from "../../context/Storecontext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ selecetdmeal }) => {
  const { food_list } = useContext(Storecontext);
  console.log(food_list);
  return (
    <div id="food_display" className="mt-7">
      <h2 className="text-3xl font-semibold">Top foods near you</h2>
      <div id="food_display_list" className="grid grid-cols-4 gap-6">
        {food_list.map((item, index) => {
          if (selecetdmeal === "all" || selecetdmeal === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
