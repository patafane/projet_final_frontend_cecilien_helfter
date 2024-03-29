'use client'
import "./SingleProduct.sass"
import { useParams } from "next/navigation"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
let Page = ()=>{
    const indexParams = useParams()
    const data = useSelector((state)=>state.bikes.value)
    const [dataCheck,setDataCheck] = useState(false)
    // useEffect(()=>{
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //     .then((response)=>response.json())
    //     .then((response)=>setData(response))
    //     .then(setDataCheck(true))
    //     .catch((error)=>console.log(error))
    // },[])
    return(
        <div className="singleProduct">
            <div className="content">
                    <h1>{data[indexParams.id].name}</h1>
                    <div className="article">
                        <div className="imgContainer">
                            <img src={data[indexParams.id].image} alt="" />
                        </div>
                        <div className="infos">
                            <p>{data[indexParams.id].description}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Page