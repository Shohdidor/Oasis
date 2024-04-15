import { Login } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'


import Switcher from '../components/Switcher'

// MUI ICON
import MicIcon from '@mui/icons-material/Mic';
import ArticleIcon from '@mui/icons-material/Article';
import MicOffIcon from '@mui/icons-material/MicOff';

// MUI 

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


// IMG 
import Adidas from "/src/assets/images/pngwing.com.png"
import Nike from "/src/assets/images/pngwing.com (2).png"
import LogOut from "/src/assets/images/pngwing.com (1).png"


// MUI Modal 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#c78853',
  borderRadius : "5px",
  border: '2px solid #131b23',
  boxShadow: 24,
  p: 4,
};



// MUI Acardion
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { totalProductsGet } from '../api/Cart/Cart'


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));




function Layout() {


  const [ cnt , setCnt ] = useState (false)

  const {pathname} = useLocation()

  let ar = window.localStorage.getItem("img")


  // MUI Modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // MUI Acardion 
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };


  const dispatch = useDispatch ()
  const data = useSelector ((state ) => state.Cart.getObjCart)

  console.log(data);

  useEffect(()=>{
    dispatch ( totalProductsGet ())
  },[dispatch])
  return (
    <>
    <div>
      <div className='flex justify-between pt-[20px]'>

      {
        pathname == "/login" ?
        <ArticleIcon />
        :
        <ArticleIcon onClick={handleOpen} className='cursor-pointer pt-[5px]' sx={{ width: "17%" , height:"6vh"}} />
      }
      
      

      </div>

      <div className='pb-[10px]'>
        <div className='pt-[5px] pl-[17.4px]'>
          <h1 className='font-bold text-[25px]'> 
            Salam Aleykum 🖐🏻
          </h1>
          <p className='text-[#7e7878] text-[19px] dark:text-white'>
            Welcome to Oasis
          </p>
        </div>
      </div>

      <div className='flex gap-[33px] items-center justify-center'>
        <input type="search" className='bg-[#e0e4f5] dark:bg-[#bfc3d4] p-[10.5px] px-[40px] rounded-[4px] placeholder:text-[gray] font-semibold' placeholder='⁐   Search...' />
      
        <MicIcon onClick={()=> setCnt(true)} style={{ width:"80px" , height:"4.7vh" , display: !cnt  ? "flex" : "none" }} className='bg-[#9775FA] dark:bg-[#585364] text-[white] p-[5px] rounded-[5px]' />
        <MicOffIcon onClick={()=>setCnt(false)} style={{ width:"80px" , height:"4.7vh" , display: cnt  ? "flex" : "none" }} className='bg-[#513d8d] dark:bg-[#242229] text-[white] p-[5px] rounded-[5px]' />
     
      </div>

      <div className='flex justify-between items-center pt-[20px] px-[25px]'>
        <h1 className='font-bold text-[18px]'>
        Choose Brand
        </h1>
        <p className='text-gray-500 dark:text-white'>
        View All
        </p>
      </div>


    <ul className='flex dark:bg-[#242229] bg-[#9775FA] items-center gap-[4px] py-[10px] text-[20px] pl-[40px]'>
      {
        pathname == "/login" ? 
        <Link to="/" className='hidden'>
      <li className='hover:text-[white] ease-in duration-200'>
        Home
      </li>
      </Link>
      :
      <Link to="/">
      <li className='hidden'>
        Home
      </li>
      </Link>
      }{
        pathname == "/login" ?
        <Link to="/about" className=' hidden'>
        <img src={LogOut} alt="log out" />
        </Link>
        :
        <Link to="/login">
          <div className='bg-[#f5e2e2] p-[4px] rounded-[5px]'>
          <img className='w-[35px]' src={LogOut} alt="log out" />
          </div>
        </Link>
      }
     
      {
        pathname == "/login" ?
        <Link to="/about" className=' hidden'>
        <img src={Adidas} alt="Adidas" />
        </Link>
        :
        <Link to="/login/productId">
          <div className='flex gap-2 ml-[2px] rounded-[5px] pr-[10px] bg-[#f5e2e2] items-center'>
         <img className='w-[57.5px]' src={Adidas} alt="Adidas" />
         <h1 className='font-bold'>
          Adidads
         </h1>
          </div>
        </Link>
      }
      
     
      {
        pathname == "/login" ?
        <Link to="/productId" className='shadow-none hidden'>
          <img src={Nike} alt="Adidas" />
        </Link>
        :
        <Link to="/login/about">
          <div className='flex gap-2 p-[6.5px] rounded-[5px] px-[20px] bg-[#f5e2e2] items-center'>
        <h1 className='font-bold'>
          About
        </h1>
        
        </div>
         </Link>
      }


    </ul>
    
    </div>

    <div>
      <Outlet>

      </Outlet>
    </div>
    <div>
    {
        pathname == "/login" ?
        <h1 className=' hidden text-[70px] font-light'>
      Footer
      </h1>
      :
      <div>
  <Accordion className="dark:bg-[#423535]" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary className="dark:bg-[#423535] dark:text-white" aria-controls="panel1d-content" id="panel1d-header">
          <Typography>When did the online store open?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          1 April 2024 in Dushanbe
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="dark:bg-[#423535] dark:text-white" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What benefits does this store bring?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          It helps people find what they are looking for
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className="dark:bg-[#423535] dark:text-white" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Where can we find you?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Telegram : @Usarzif <br />
            Instagram : spidey.01_
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      </div>
      }

    </div>

    {/* MUI  */}

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="dark:bg-[#d4bda1] flex items-center justify-between" sx={style}>
          <Typography id="modal-modal-title" className='flex' variant="h6" component="h2">
            <h1>
              {
                data?.map (( elem ) => {
                  return ( 
                    <>
                    <h1 className='relative bg-[white] dark:bg-[#dbb475] font-bold mt-[-20px] text-black shadow-[black] shadow-inner rounded-[10px] px-[25px] ml-[70px]'>
                    {elem.totalProducts}
                    </h1>
                    </>
                  )
                })
              }
            </h1>
          {
        pathname == "/login" ?
        <Link to="/cart" className='hidden'>
        </Link>
        :
        <Link to="/login/cart">
          <div className='inline-block rounded-[5px] p-[5px] ml-[-120px] px-[20px] bg-[#f5e2e2] dark:bg-[#a3947e]'>
         <h1 className='font-bold'>
          Cart
         </h1>
          </div>
        </Link>
      }
          </Typography>
          <Typography id="modal-modal-description">
            <Switcher />
          </Typography>
        </Box>
      </Modal>

     

    </>
  )
}

export default Layout