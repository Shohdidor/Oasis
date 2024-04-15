import React, { useEffect } from 'react'

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';


// VIDEO 
import TEAM from "/src/assets/video/Office Video _ People Working As A Team _ Group Meeting _ Business _ Free Stock Footage.mp4"


// IMG 
import TEAMSTYLE from "/src/assets/images/TEAM STILL.jpg"
import Colego from "/src/assets/images/Colego.jpg"
import BusinessMan from "/src/assets/images/Busines Man.jpg"
import AfroGirl from "/src/assets/images/Afro Girl.jpg"


function About() {
 
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <> 
    <div className='overflow-hidden'>

    <h1 className='pl-[62px] dark:text-white font-semibold py-[30px] text-[40px]'>
      About Us 
    </h1>
    <div data-aos="zoom-in" className='flex gap-[20px] px-[10px]'>
     <span className='text-[13px] dark:text-white'>
     Our Team Press 
      </span>
      
      <div>
      <p className='pb-[25px] text-[13px] text-gray-500 dark:font-bold dark:text-black'>
      Teamwork is the synergy of individual talents, efforts, and ideas towards a common goal. It's like a well-oiled machine where each part plays a crucial role in driving success. A team isn't just a collection of people; it's a cohesive unit where members support, motivate, and challenge each other to achieve greatness.
      </p>
      <p className='text-[13px] pb-[30px] text-gray-500 dark:font-bold dark:text-black'>
      In a team, diversity isn't just welcomed; it's celebrated. Different backgrounds, perspectives, and skill sets enrich the collective wisdom of the group, enabling it to tackle complex problems from multiple angles. When individuals come together, each bringing their unique strengths to the table, the possibilities become endless.
      </p>
      </div>

    </div>

    <video src={TEAM} autoPlay muted ></video>


<div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className='flex items-center px-[10px] py-[80px]'>

    <h1 className='font-medium'>
      <span className='font-extrabold'>
      «
      </span>  Our work does make sense only if it a faithful witness of his time  <span className='font-extrabold'>
        »
      </span>
    </h1>

    <img src={TEAMSTYLE} alt="Team Style"  className='w-[220px]'/>
</div>


    <div>
      <div className='grid grid-cols-2 gap-[25px] px-[15px]'>
      <img data-aos="fade-right" src={BusinessMan} alt="Coleg" />
      <img data-aos="fade-left" src={AfroGirl} alt="Coleg" className='pt-[170px]' />
      <img data-aos="fade-right" src={Colego} alt="Coleg" className='mt-[-70px]' />
      </div>

      <div  data-aos="zoom-in-up">
        <h1 className='dark:text-white font-semibold text-center text-[40px] py-[25px]'>
          THE TEAM 
        </h1>
        <div className='px-[15px]'>
        <p className='pb-[25px] text-[13px] text-gray-500 dark:font-bold dark:text-black'>
      Teamwork is the synergy of individual talents, efforts, and ideas towards a common goal. It's like a well-oiled machine where each part plays a crucial role in driving success. A team isn't just a collection of people; it's a cohesive unit where members support, motivate, and challenge each other to achieve greatness.
      </p>
      <p className='text-[13px] pb-[30px] text-gray-500 dark:font-bold dark:text-black'>
      In a team, diversity isn't just welcomed; it's celebrated. Different backgrounds, perspectives, and skill sets enrich the collective wisdom of the group, enabling it to tackle complex problems from multiple angles. When individuals come together, each bringing their unique strengths to the table, the possibilities become endless.
      </p>
     
        </div>
      </div>

    </div>

    </div>
    </>
  )
}

export default About