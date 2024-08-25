import { menu_list } from "../../assets/assets";

// eslint-disable-next-line react/prop-types
const ExploreMenu = ({ selecetdmeal, setSelectedMeal }) => {
  return (
    <div id="explore_menu" className="flex flex-col gap-6">
      <h1 className="text-[#262626] font-medium text-2xl">Explore the menu</h1>
      <p className="text-[#262626] font-medium max-w-[60%]">
        Choose form a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your craving and elevate your dining experience,
        one delicious meal at a time
      </p>
      <div
        id="explore_menu_list"
        className="flex justify-between items-center my-5"
      >
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center"
              onClick={() =>
                setSelectedMeal((prev) =>
                  prev === item.menu_name ? "all" : item.menu_name
                )
              }
            >
              <img
                className={selecetdmeal === item.menu_name ? "active" : null}
                src={item.menu_image}
                alt={item.menu_name}
              />
              <p className="mt-2 text-[#747474] text-lg cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="h-[2px] bg-[#e2e2e2] my-3" />
    </div>
  );
};

export default ExploreMenu;
