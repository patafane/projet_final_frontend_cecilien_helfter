'use client'
import "./categories.sass"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import Link from "next/link"
let Page = ()=>{
    const data = useSelector((state)=>state.bikes.categories)
    // useEffect(()=>{
    //     fetch('https://api.escuelajs.co/api/v1/categories')
    //     .then((response)=>response.json())
    //     .then((response)=>setData(response))
    //     .catch((error)=>console.log(error))
    // },[])
    // console.log(data);
    return(
        <div className="categories">
            <div className="content">
                {data.map((element,index)=>(
                    <Link href={"/categories/"+element.name} key={index}>
                        <div className="categorie">
                            <div className="imgContainer">
                                <img src={element.image} alt="" />
                            </div>
                            <div className="truc">
                                <h3>{element.name}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default Page