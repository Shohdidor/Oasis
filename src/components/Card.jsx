import React from 'react'

function Card( {img , h1 , p } ) {
  return (
    <>
    <div className='hover:bg-gray-400 ease-in duration-100 cursor-pointer text-white hover:text-orange-600'>
        <img className='w-[450px] shadow-2xl' src={img} alt="sneakers" />
        <div className='flex justify-around font-black items-center'>
            <h1 className='text-[250%] pb-[5px]'>
                {h1}
            </h1>
            <p className='text-[150%]'>
                {p}
            </p>
        </div>
    </div>
    </>
  )
}

export default Card




function Card2( {img , h1 , p } ) {
    return (
      <>
      <div className='hover:bg-gray-500 ease-in duration-100 cursor-pointer text-black hover:text-amber-500'>
          <img className='w-[450px] shadow-2xl' src={img} alt="sneakers" />
          <div className='flex justify-around font-black items-center'>
              <h1 className='text-[250%] pb-[5px]'>
                  {h1}
              </h1>
              <p className='text-[150%]'>
                  {p}
              </p>
          </div>
      </div>
      </>
    )
  }
  
  export {Card2}  