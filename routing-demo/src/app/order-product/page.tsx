"use client";
import { useRouter } from "next/navigation"

export default function OrderProduct(){
const router=useRouter();
    const handleClick=()=>{
        alert("Order Placed Successfully");
        router.push("/")
    }
    return <><h1>Ordr Product</h1>

    <button onClick={handleClick}>Place Order</button>
    </>
}