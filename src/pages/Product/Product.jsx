import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { setObjProduct } from '../../reducers/Product/Product';

import { postCart } from '../../api/Cart/Cart';

// MUI 
import CartClick  from '@mui/icons-material/AddShoppingCart';

// React Quil 

import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function Product() {

  function Click ( user ) {
    dispatch ( 
      setObjProduct ({
        id : user.id ,
        image : user.image,
        productName : user.productName,
        price : user.price,
        discountPrice : user.discountPrice
      })
    )
  }


  const data = useSelector (( state ) => state . Product . obj )
  console.log(data);

  const ProductObj = useSelector ((state) => state . Product . ProductObj )
  console.log(ProductObj);

  
  const dispatch = useDispatch ()

  // React Quil 

  const toolbarOptions = [ ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  ['link', 'image', 'video', 'formula'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
];
  const module = {
    toolbar : toolbarOptions
  }


  useEffect(() => {
    postCart()
  },[dispatch])


  // React Quil 

  const [value, setValue] = useState('');


  return (
    <>
    {
      ProductObj.map ( ( elem ) => {
        return (
          <>
          <div className='flex justify-center'>
          <img
          className="w-[250px] cursor-pointer py-[15px]"
          src={`${import.meta.env.VITE_APP_FILES_URL}${elem.image}`}
          alt="product"
          />
         
          </div>
          <div className='text-center'>
            <div className='flex justify-around items-center py-[10px] pb-[20px]'>
            <h1 className='font-medium bg-[#9775FA] dark:bg-[#bfb4b4] dark:text-black rounded-[3px] text-white p-[10px]'>
              Model : {elem.productName.slice(0,18)}
            </h1>
          <button onClick={()=> dispatch(postCart(elem.id))}>
            <CartClick style={{width:"100px" , height:"3.2vh"}} className='dark:text-white' />
          </button>
            </div>
            <div className='gap-[10px] pb-[35px]'>

            <h1 className='font-bold flex gap-[4px] ease-in duration-100 hover:bg-[#6c6a6a7f] dark:bg-[#e0b0b099] border-[black] dark:border-[white] shadow-black dark:hover:bg-[#ff00002c] border-b-2 bg-[#3433331e] pl-[30px] py-[10px]'>
              Price : <p className='font-medium'>
                {elem.price} $
                </p>
            </h1>
            <h1 className='font-bold flex gap-[4px] ease-in duration-100 hover:bg-[#6c6a6a7f] dark:bg-[#e0b0b099]  border-[black] dark:border-[white] shadow-black dark:hover:bg-[#ff00002c] border-b-2 bg-[#3433331e] pl-[30px] py-[10px]'>
              City : <p className='font-medium'>
                Dushanbe
                </p>
            </h1>
            <h1 className='font-bold flex gap-[4px] ease-in duration-100 hover:bg-[#6c6a6a7f] dark:bg-[#e0b0b099] border-[black] dark:border-[white] border-b-2 dark:hover:bg-[#ff00002c] bg-[#3433331e] pl-[30px] py-[10px]'>
              Street : <p className='font-medium'>
                Profsayouz
                </p>
            </h1>
            </div>
            
            <div className='grid grid-cols-2 items-center gap-[20px]'>

            {data.products.map (( el ) => {
              return (
                <>
                <Link to={"/login/product"}>
                  <img
                    className="w-[250px] hover:bg-[#00000035] ease-in duration-100 cursor-pointer pb-[10px] py-[10px]"
                    onClick={()=> Click ( el ) }
                    src={`${import.meta.env.VITE_APP_FILES_URL}${el.image}`}
                    alt="product"
                    />
                    </Link>
                </>
              )
            })}

            </div>


          </div>


          </> 
        )
      })
    }

    <div className='bg-[#9775FA] dark:bg-[#c1b298] font-bold mt-[40px] pb-[15px]'>

    <ReactQuill modules={module} theme="snow" value={value} onChange={setValue} />
   
    </div>    
    
    </>
  )
}

export default Product