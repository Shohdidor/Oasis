import '../App.css'

// IMG 
import Logo from "/src/assets/images/Logo Oasis.png"

// MUI 
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Location from '@mui/icons-material/FmdGood';
import Person from '@mui/icons-material/Person';
import Cart from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

// IMG 
import NIKEWHITE from "/src/assets/images/NIKE WHITE.png"

// Animation 
import 'animate.css';
// animate__animated 

// Glavnya 
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  let { pathname } = useLocation();

  return (
    <>
    <div className="bg-[#F5E7C6] py-[1%] flex items-center gap-[50px]">
      <div className="pl-[40px] Navbar items-center pr-[5%] flex gap-[10%]">
      <Link to="/" className='hover:underline hover:text-red-700 ease-in duration-100'>
      <HomeIcon className='ml-[5px]' />
        <h1>
        Home
        </h1>
      </Link>
      <Link to="about" className='hover:underline hover:text-red-700 ease-in duration-100'>
      <GroupIcon className='ml-[6.2px]'/>
        <h1>
        About
        </h1>
      </Link>
      <div className='bg-gray-100 rounded-[4px] ml-[5px] flex items-center gap-[5%] pr-[15px]'>
      <TextField id="outlined-basic" sx={{width:"250px"}} label="Search" type='search' variant="outlined"/>
      <SearchIcon />
      </div>
      </div>

        <ul className='flex gap-[5px]'>
          <li className='pr-[25px] cursor-pointer hover:text-[#FF6D1F] ease-in duration-100'>
          <Location />
        <h1 className='ml-[-15px]'>
          Location
        </h1>
          </li>
          <li className='pr-[25px] cursor-pointer hover:text-[#FF6D1F] ease-in duration-100'>
          <Person />
        <h1 className='ml-[-11px]'>
          Sign in
        </h1>
          </li>
          <li className='pr-[25px] ml-[-8px] cursor-pointer hover:text-[#FF6D1F] ease-in duration-100'>
          <Cart />
        <h1 className='ml-[-3px]'>
          Cart 
        </h1>
          </li>
        </ul>


    </div>

    <Outlet>

    </Outlet>
    <div className='bg-[#F5E7C6]'>
      <div>
      <img src={NIKEWHITE} alt="LOGO" className='w-[400px] m-auto pl-[40px]' />
      <h1 className='Navbar text-[450%] text-center mt-[-90px]'>
        Nike
      </h1>
      </div>
      <div className='flex justify-center mt-[10px] mb-[10px]'>
        <ul className='flex gap-[20px]'>
          <a href="https://www.instagram.com/@spidey.01_/">
          <li className='text-center cursor-pointer text-red-800 hover:text-black ease-in duration-100 hover:underline'>
          <InstagramIcon />
          <h1 className='font-bold'>
            Instagram
          </h1>
          </li>
          </a>

          <a href="https://www.facebook.com/campaign/landing.php?campaign_id=1641457644&extra_1=s%7Cc%7C358611006685%7Ce%7Cfacebook%27%7C&placement=&creative=358611006685&keyword=facebook%27&partner_id=googlesem&extra_2=campaignid%3D1641457644%26adgroupid%3D65407979209%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-362360550869%26loc_physical_ms%3D1012754%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gad_source=1&gclid=Cj0KCQiAzoeuBhDqARIsAMdH14FVK-QSej1QYlELlfr9hQ7n9dc4lPrUVMYeEzeEJptLFIZfgIH9YRkaAnefEALw_wcB">   
          <li className='text-center cursor-pointer text-red-800 hover:text-black ease-in duration-100 hover:underline'>
          <FacebookIcon />
          <h1 className='font-bold'>
            Facebook
          </h1>
          </li>
          </a>

          <a href="https://web.whatsapp.com/">

          <li className='text-center cursor-pointer text-red-800 hover:text-black ease-in duration-100 hover:underline'>
          <WhatsAppIcon />
          <h1 className='font-bold'>
            Whats App
          </h1>
          </li>
          </a> 

          <a href="https://t.me/Usarzif">
          <li className='text-center cursor-pointer text-red-800 hover:text-black ease-in duration-100 hover:underline'>
          <TelegramIcon />
          <h1 className='font-bold'>
            Telegram
          </h1>
          </li>
          </a>
          <a href="https://twitter.com/?lang=ru">
          <li className='text-center cursor-pointer text-red-800 hover:text-black ease-in duration-100 hover:underline'>
          <TwitterIcon />
          <h1 className='font-bold'>
            Twitter
          </h1>
          </li>
          </a>

        </ul>
      </div>
      <p className='text-center text-gray-600 Navbar mt-[5px] pb-[10px]'>
      thank you for your attention
      </p>
    </div>
    </>
  );
};

export default Layout;
