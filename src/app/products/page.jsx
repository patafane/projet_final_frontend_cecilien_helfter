'use client'
import "./Products.sass"
import { useState,useEffect } from "react"
import Card from "@/ui/Card/Card"
let Page = ()=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response)=>response.json())
        .then((response)=>setData(response))
        .catch((error)=>console.log(error))
    },[])
    return(
        <div className="allProducts">
            <div className="content">
                <h1>All our products</h1>
                <div className="shop">
                    {data.map((element,index)=>(
                        element.title.includes("Drive")===false && element.title.includes("212")===false && element.title.includes("New") === false && element.title.includes("fghjm")===false && element.title.includes("addidas")===false?
                        <Card article={element} key={index}/>
                        :""
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Page