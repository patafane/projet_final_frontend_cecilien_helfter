'use client'
import "./Products.sass"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import Card from "@/ui/Card/Card"
let Page = ()=>{
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //     .then((response)=>response.json())
    //     .then((response)=>setData(response))
    //     .catch((error)=>console.log(error))
    // },[])
    const data = useSelector((state)=>state.bikes.value)
    return(
        <div className="allProducts">
            <div className="content">
                <h1>All our products</h1>
                <div className="shop">
                    {data.map((element,index)=>(
                        <Card article={element} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Page