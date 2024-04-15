import React, { useState } from 'react';
import Logo from "/src/assets/images/Splash.png";
import { Link } from 'react-router-dom';

function Home() {
  const [cnt, setCnt] = useState(false);
  const [logOccurred, setLogOccurred] = useState(false);

  const handleOk = () => {
    setCnt(true);
  };

  // useEffect to log cnt after it's updated, only if it's true and log hasn't occurred yet
  React.useEffect(() => {
    if (cnt && !logOccurred) {
      setLogOccurred(true);
      console.log(cnt); // Log cnt after it's updated
      window.localStorage.setItem("img",cnt)
    }
  }, [cnt, logOccurred]);

  return (
    <>
      <div className=' w-[100%] bg-[#9775FA]'>
        <Link to={"/login"}>
         <img  onClick={handleOk} src={Logo} alt="error" className='m-auto w-[1000px] h-[100vh]' />
        </Link>
      </div>
    </>
  );
}

export default Home;
