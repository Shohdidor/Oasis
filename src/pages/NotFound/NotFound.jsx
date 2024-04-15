import React from 'react'
import Error404 from "/src/assets/images/error 404.gif"

function NotFound() {
  return (
    <> 
    <div className='py-[75px]'>
    <img src={Error404} alt="404" />
    </div>
    </>
  )
}

export default NotFound