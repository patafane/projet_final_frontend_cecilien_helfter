'use client'
import "./SingleProduct.sass"
import { useParams } from "next/navigation"
import { useState,useEffect } from "react"
let Page = ()=>{
    const indexParams = useParams()
    const [data,setData] = useState([])
    const [dataCheck,setDataCheck] = useState(false)
    const [object,setObject] = useState([])
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
        .then((response)=>response.json())
        .then((response)=>setData(response))
        .then(setDataCheck(true))
        .catch((error)=>console.log(error))
    },[])
    useEffect(()=>{
        setObject(data.filter(element=>parseInt(element.id) === parseInt(indexParams.id)))
    },[data])
    console.log(object);
    return(
        <div className="singleProduct">
                    {object[0] ? 
                <div className="content">
                        <h1>{object[0].title}</h1>
                        <div className="article">
                            <div className="imgContainer">
                                <img src={object[0].images[0]} alt="" />
                            </div>
                            <div className="infos">
                                <p>{object[0].description}</p>
                            </div>
                        </div>
                </div>
                    : <h1>Loading</h1>}
        </div>
    )
}
export default Page