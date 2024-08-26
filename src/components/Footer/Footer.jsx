import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="text-[#d9d9d9] bg-[#323232] flex items-center flex-col gap-5 pt-20 px-[8vw] mt-24 w-full"
    >
      <div
        id="footer_content"
        className="w-[100%] grid grid-cols-3 gap-14 justify-center items-start mb-4"
      >
        <div
          id="footer_leftmost"
          className="align-middle justify-self-center flex flex-col gap-5"
        >
          <img src={assets.logo} alt="brand logo" className="w-[10vw]" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            enim! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Numquam, deleniti.
          </p>
          <div id="footer_socialicons" className="flex gap-2">
            <img
              className="cursor-pointer"
              src={assets.facebook_icon}
              alt="tomato facebook icon"
            />
            <img
              className="cursor-pointer"
              src={assets.twitter_icon}
              alt="tomato twitter icon"
            />
            <img
              className="cursor-pointer"
              src={assets.linkedin_icon}
              alt="tomato linkedin icon"
            />
          </div>
        </div>
        <div id="footer_middle" className="align-middle justify-self-center">
          <h2 className="uppercase text-xl font-semibold mb-2">Company</h2>
          <ul className="">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div id="footer_right" className="align-middle justify-self-center">
          <h1 className="uppercase text-xl font-semibold mb-2">Get in touch</h1>
          <ul>
            <li>+1-212-456-828</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-gray-500" />
      <p>Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
