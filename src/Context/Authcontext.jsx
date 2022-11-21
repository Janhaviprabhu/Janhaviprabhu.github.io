import { useState } from "react";
import { createContext } from "react";

export const AppContex= createContext()

export const AppContextProvider=({children})=>{
    const [theme,setTheme]=useState("light")
    const ToggleTheme=()=>{
        setTheme(theme==="light"?"dark":"light")
        console.log("clicked");
    }
    return(
        <>
        <AppContex.Provider  value={{theme,setTheme,ToggleTheme}}>
            {children}
        </AppContex.Provider>
        </>
    )
}