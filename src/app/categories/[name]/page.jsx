'use client'
import Card from "@/ui/Card/Card"
import "./SingleCat.sass"
import { useParams } from "next/navigation"
import { useState,useEffect } from "react"
let Page = ()=>{
    const catName = useParams()
    const [data,setData] = useState([])
    const [dataCat,setDataCat] = useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response)=>response.json())
        .then((response)=>setData(response))
        .catch((error)=>console.log(error))
    },[])
    useEffect(()=>{
        setDataCat(data.filter(element=>element.category.name === catName.name))
    },[data])
    return(
        <div className="singleCat">
            <div className="content">
                <h1>{"All "+catName.name}</h1>
                    <div className="shop">
                    {dataCat.map((element,index)=>(
                        <Card article={element} key={index}/>
                    ))}
                    </div>
            </div>
        </div>
    )
}
export default Page