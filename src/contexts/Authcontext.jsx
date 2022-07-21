import { useState } from "react";
import { createContext } from "react";

export const Authcontext=createContext();

export const AuthProvider=({children})=>{
    const [isAuth,setisAuth]=useState(false);
   return <Authcontext.Provider  value={{isAuth,setisAuth}}>{children}</Authcontext.Provider>
}