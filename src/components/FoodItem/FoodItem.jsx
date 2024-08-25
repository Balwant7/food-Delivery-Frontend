import { useState } from "react";
import { assets } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const FoodItem = ({ id, name, description, price, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div
      id="food_item"
      className="flex flex-col w-full rounded-2xl shadow-sm hover:shadow-lg p-4 transition-all duration-300 cursor-pointer"
    >
      <div id="fooditem_imagecontainer" className="relative">
        <img src={image} alt={name} className="rounded-t-2xl w-full" />
        {!itemCount ? (
          <img
            className="absolute w-9 right-3 bottom-3 cursor-pointer hover:scale-[1.1] transition-all duration-150 rounded-full"
            id="add"
            onClick={() => setItemCount(itemCount + 1)}
            src={assets.add_icon_white}
          />
        ) : (
          <div
            id="fooditem_plus_minusicon"
            className="absolute right-3 bottom-3 flex gap-2 items-center justify-center p-2 bg-white rounded-full transition-all duration-150"
          >
            <img
              className="w-9"
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p className="w-3 mx-1">{itemCount}</p>
            <img
              className="w-9"
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div id="fooditem_info">
        <div
          id="fooditem-name_rating"
          className="flex justify-between items-center my-2"
        >
          <p className="text-xl font-medium">{name}</p>
          <img className="w-[74px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-sm">{description}</p>
        <p className="text-orange-500 font-medium text-2xl mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
