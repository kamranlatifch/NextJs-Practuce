import React from "react";

export default function AuthLayout({
    children,
}:{
    children:React.ReactNode;
}){
   return (
    <>
    
    <h2 style={{backgroundColor:"lightgreen"}}>Inner Layout</h2>
    {children}
    </>
   ) 
}