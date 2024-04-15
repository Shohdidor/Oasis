import React from "react";
import "../../App.css";

// FUNCT
import { useNavigate } from "react-router";
import { axiosRequest } from "../../utils/axiosRequest";
import { saveToken } from "../../utils/token";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = {
      userName: event.target["email"].value,
      password: event.target["password"].value,
    };
    try {
      const { data } = await axiosRequest.post("Account/login", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(data.data);
      saveToken(data.data);
      navigate("/login/about");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="Login text-center pt-[150px]">
        <h1 className="Navbar text-[500%] text-[#ffffff8d] mb-[50px]">Login</h1>

        <form action="" onSubmit={handleSubmit}>
          <input
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="text" 
            placeholder="userName"
            className="placeholder:text-[#0000008d] placeholder:text-center py-[5px] px-[10px] bg-[#ffffff8d] text-[150%] border-b-[1px] text-black font-medium"
          />
          <br />
          <br />
          <br />
          <input
            type="password"
            placeholder="password"
            required
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
            F
            className="placeholder:text-[#0000008d] placeholder:text-center py-[5px] px-[10px] bg-[#ffffff8d] text-[150%] border-b-[1px] text-black font-medium"
          />
          <br />
          <br />
          <br />
          <button
          onClick={()=>window.localStorage.removeItem("img")}
            type="submit"
            className="text-[200%] bg-[#0000008d] rounded-[2px] hover:text-white ease-in duration-100 hover:shadow-xl hover:shadow-[#ffffff18] hover:bg-[#000000b4] py-[2px] px-[50px] Navbar text-[#ffffff8d]"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
