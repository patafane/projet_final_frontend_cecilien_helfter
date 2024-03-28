'use client'
import "./SingleProduct.sass"
import { useParams } from "next/navigation"
import { useState,useEffect } from "react"
let Page = ()=>{
    const indexParams = useParams()
    const [data,setData] = useState([])
    const [dataCheck,setDataCheck] = useState(false)
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response)=>response.json())
        .then((response)=>setData(response))
        .then(setDataCheck(true))
        .catch((error)=>console.log(error))
    },[])
    console.log(data);
    return(
        <div className="singleProduct">
            <div className="content">
            {data[indexParams.id] ? 
                <h1>{data[indexParams.id].title}</h1>
                :
                <h1>Loading</h1>
            }
            </div>
        </div>
    )
}
export default Page