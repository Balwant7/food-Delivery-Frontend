
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div id='Navbar' className='flex items-center justify-between w-[80%] py-10 m-auto'>
        <img src={assets.logo} alt="barandlogo" />
        <ul id='navbar-menu' className='flex gap-20'>
            <li>Home</li>
            <li>Menu</li>
            <li>Mobile-app</li>
            <li>Contact us</li>
        </ul>
        <div id='navbar-right' className='flex gap-10 items-center'>
            <img src={assets.search_icon} alt="" />
            <div id='navbar-search-icon' className='relative'>
                <img src={assets.basket_icon} alt="basket icon" />
                <div className='dot absolute w-3 h-3 rounded-full bg-orange-600 top-[-5px] right-[-8px]'></div>
            </div>
            <button className='rounded-full border border-orange-600 px-6 py-2 hover:bg-orange-100 duration-300 transition-all'>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar