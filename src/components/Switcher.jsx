import useDarkSide from "../hooks/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";

export default function Switcher () {
    const [ colorTheme , setTheme ] = useDarkSide ()
    const [ darkSide ,setDarkSide ] = useState (
        colorTheme === "light" ? true : false 
    )
    const toggleDarkMode = ( checked ) => {
        setTheme ( colorTheme )
        setDarkSide ( checked )
    }
    const [ cnt , setCnt ] = useState ( false )
    return (
        <>
        <div className = "bg-[white] ease-in-out duration-200 hover:bg-[#8a8a8a] dark:bg-[#412f26] w-max p-[11px] rounded-[50px]">
            <DarkModeSwitch 
            checked = { darkSide }
            onChange = { toggleDarkMode }
            size = { 30 }
            />
        </div>
        </>
    )
}