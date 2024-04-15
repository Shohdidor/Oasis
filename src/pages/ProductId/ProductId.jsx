import React from 'react'

/// MUI 
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// ASYNCK 
import { getProduct } from '../../api/Product/AdidasPro';


// Hook 
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


// GIF 
import Hidden from "/src/assets/images/Digital Conversation.gif"

// Reducer 

import { setObjProduct } from '../../reducers/Product/Product';
import { Link } from 'react-router-dom';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];



function ProductId() {
  // function 
  
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

    /// MUI 
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const dispatch = useDispatch ()

  const data = useSelector (( store ) => store . Product . obj )


  const [ hidden , setHidden ] = useState ( false )



  useEffect(() => {
    dispatch(getProduct())
  },[dispatch])

  return (
    <>
      <div className='flex justify-between items-center pt-[20px] px-[25px]'>
        <h1 className='font-bold text-[18px]'>
        New Arraival
        </h1>
        <p onClick={()=>setHidden(!hidden)} className='text-gray-500 dark:text-white'>
        View All
        </p>
      </div>

      <div style={{display : !hidden? "grid" : "none"}} className='grid-cols-2 items-center gap-[15px] p-[15px]'>

    {
        data?.products?.map ((elem)=>{
            return(
                <>

                <div key={elem.id} className='bg-[#F2F2F2] ease-out text-center duration-150 hover:bg-[#d6cfcf]'>


                  <Link to={"/login/product"}>
                  <img
                    className="w-[250px] cursor-pointer pb-[10px] py-[10px]"
                    onClick={()=> Click ( elem ) }
                    src={`${import.meta.env.VITE_APP_FILES_URL}${elem.image}`}
                    alt="product"
                    />
                    </Link>


                  <h1 className='font-bold'>
                    Model :
                    {` `+ elem.productName.slice(0,18) }
                  </h1>
                  
                </div>
                </>
            )
        })
    }
          </div>
      
      <img className='py-[11.8%] ' src={Hidden} alt="Empty" style={{display: !hidden ? "none" : "block" }} />

    </>
  )
}

export default ProductId