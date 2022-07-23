import { useState } from "react";
import { createContext } from "react";

export const Cartcontext=createContext();

export const CartProvider=({children})=>{
    const [cartitem,setcartitem]=useState([]);
   return <Cartcontext.Provider  value={{cartitem,setcartitem}}>{children}</Cartcontext.Provider>
}