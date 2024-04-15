import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteCart, getCart } from '../../api/Cart/Cart'


// MUI 

import Button from '@mui/material/Button';
import Empty from "/src/assets/images/Empty State Animation.gif"


function Cart() {
    
    const data = useSelector ((state) => state.Cart.getObj)
    const dispatch = useDispatch ()

    console.log(data);
    useEffect ( ()=> {
        dispatch ( getCart ())
        dispatch ( deleteCart ( ))
    },[] )

  return (
    <div className='py-[76px]'>
    
    <img src={Empty} alt="Empty" style={{display : data == 0 ? "block" : "none" }} />
    
    
    { 
        data?.map (( elem ) => {

            return (
            <>
         
            <div className='flex py-[10px] justify-center'>
                
                <div>


            <img
          className="w-[250px] cursor-pointer py-[20px]"
          src={`${import.meta.env.VITE_APP_FILES_URL}${elem.product.image}`}
          alt="product"
          />

         <h1 className='font-semibold flex gap-[10px] dark:text-white'>
            <p className='text-gray-700 font-normal dark:text-gray-200'>
                Model :
            </p>
          {elem.product.productName}
         </h1>

         <h1 className='flex gap-[10px] pb-[10px] text-red-500 dark:text-black font-semibold'>
            <p>
            Price :
            </p>
          {elem.product.price}
         </h1>
         
          <Button onClick={()=> dispatch(deleteCart ( elem.id ))} variant="outlined" color='inherit'>
            Delete
          </Button>

          </div>


          </div>
          

            </>    
            )
        })
    }
    </div>
  )
}

export default Cart