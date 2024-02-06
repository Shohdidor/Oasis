import React from 'react'
import '../../App.css'

// IMG 
import Logo from "/src/assets/images/Logo Oasis 2.png"
import Nike from "/src/assets/images/Nike.png"
import Jordan from "/src/assets/images/Jordan.png"

import Sneaker1 from "/src/assets/images/Sneakers1.png"
import Sneaker2 from "/src/assets/images/Sneakers2.png"
import Sneaker3 from "/src/assets/images/Sneakers3.png"
import Sneaker4 from "/src/assets/images/Sneakers4.png"
import GOAT from "/src/assets/images/GOAT.png"
import Soft1 from "/src/assets/images/Soft1.png"
import Soft2 from "/src/assets/images/Soft2.png"

// VIDEO 
import JUSTDOIT from "/src/assets/video/Реклама Nike - Just Do It - Твои возможности 2013.mp4"

// Card 
import Card from '../../components/Card'
import { Card2 } from '../../components/Card'

function Home() {
  return (
    <>
    <div className='bg-black flex items-center justify-evenly'>
      <h1 className='animate__animated animate__fadeInTopLeft uppercase text-white TextHome1 text-[300%]'>
        Nike Jordan Esclipse
      </h1>
      <img className='animate__animated animate__flash w-[600px]' src={Logo} alt="Logo" />
    </div>
    <div className='flex items-center pb-[150px]'>
      <img src={Nike} alt="Nike" className='animate__animated animate__fadeInDown w-[650px] mt-[-160px] h-[400px]' />

      <div className='pl-[250px]'>
        <h1 className='font-bold text-[250%]'>
          Select Size 
        </h1>
      <ul className=' grid grid-cols-5 gap-[10px]'>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            38
          </h1>
        </li>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            39
          </h1>
        </li>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            40
          </h1>
        </li>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            41
          </h1>
        </li>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            42
          </h1>
        </li>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            43
          </h1>
        </li>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            44
          </h1>
        </li>
        <li className='bg-black border-[1px] text-yellow-400 border-[black] inline-block p-[15px] text-[150%] font-bold hover:bg-yellow-400 hover:text-black ease-in duration-100 cursor-pointer'>
          <h1>
            45
          </h1>
        </li>
      </ul>
      </div>
    </div>

      <div className='bg-black flex items-center justify-around py-[50px]'>
        <Card img={Sneaker1} h1={"Jordan"} p={"29.99$"}/>
        <Card img={Sneaker2} h1={"Air Jordan"} p={"30.99$"}/>
        <Card img={Sneaker1} h1={"Jordan"} p={"29.99$"}/>
      </div>
<br /><br />

      <div className='flex items-center justify-around py-[50px]'>
        <Card2 img={Soft2} h1={"Trousers"} p={"40.99$"}/>
        <Card2 img={Soft1} h1={"Cloth"} p={"35.99$"}/>
        <Card2 img={Soft2} h1={"Trousers"} p={"40.99$"}/>
      </div>

      <div className='flex items-center'>
        <div>
      <img src={Sneaker4} alt="Nike" />
        </div>
        <div className='w-[50%] py-[30px] px-[50px] rounded-[10px'>
          <h1 className='text-[350%] NikeWiki mb-[15px]'>
            Nike
          </h1>
          <p>
          Nike, Inc. (МФА: ['naɪkɪ][3], «Найки»[4][5]) — американская транснациональная компания, специализирующаяся на спортивной одежде и обуви. Штаб-квартира — в городе Бивертон (штат Орегон). <br /> <hr className='border-[white] mb-[20px] mt-[20px]' /> Почти вся продукция Nike производится сторонними компаниями-подрядчиками вне территории США (в основном в Азии), сама компания является правообладателем торговых марок, разрабатывает дизайн продукции и владеет сетью магазинов (около 1150 по всему миру), а также торговых центров NikeTown. <br /> <hr className='border-[white] mb-[20px] mt-[20px]' /> С 20 сентября 2013 года входит в Промышленный индекс Доу Джонса. Nike является самым дорогим спортивным брендом в мире (по мнению Forbes)[6].Компания, основанная 25 января 1964 года под названием Blue Ribbon Sports, официально стала Nike, Inc. в 1978 году[7][8]. <br /> <hr className='border-[white] mb-[20px] mt-[20px]' /> Nike продаёт свою продукцию под собственным брендом, а также под марками Nike Golf, Nike Pro, Nike +, Air Jordan, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding, Nike CR7, Hurley International, Converse[9]. <br /> <hr className='border-[white] mb-[20px] mt-[20px]' /> Nike является спонсором многих спортсменов и спортивных команд по всему миру. Начиная с 1990-х годов компания регулярно подвергается критике за то, что её продукция производится на фабриках, где нарушается трудовое законодательство[10].
          </p>
        </div>
      </div>

      <div className='flex justify-center items-center gap-[70px] mt-[50px] mb-[10px] bg-black py-[30px]'>
        <h1 className='text-white text-[450%] font-black'>
          Just
        </h1>
        <video className='w-[700px] bg-transparent' src={JUSTDOIT} controls></video>
        <h1 className='text-white text-[450%] font-black'>
          Do
        </h1>
      </div>
      <h1 className='text-black text-[500%] font-black mb-[10px] text-center'>
        It
      </h1>

    </>
  )
}

export default Home