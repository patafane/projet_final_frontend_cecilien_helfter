'use client'
import "./categories.sass"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import Link from "next/link"
let Page = ()=>{
    const data = useSelector((state)=>state.bikes.categories)
    const darkMode = useSelector((state)=>state.darkMode.value)
    return(
        <div className={darkMode ? "categories dark":"categories"}>
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