"use client";
import { useRouter } from "next/navigation"

export default function OrderProduct(){
const router=useRouter();
    const handleClick=()=>{
        alert("Order Placed Successfully");
        router.push("/")
        // router.replace("/")  
        //replace is used to replace the history
    }
    return <><h1>Ordr Product</h1>

    <button onClick={handleClick}>Place Order</button>
    </>
}