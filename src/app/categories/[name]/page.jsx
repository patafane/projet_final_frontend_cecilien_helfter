'use client'
import Card from "@/ui/Card/Card"
import "./SingleCat.sass"
import { useParams } from "next/navigation"
import { useState,useEffect } from "react"
import {  useSelector } from "react-redux"
let Page = ()=>{
    const catName = useParams()
    const [data,setData] = useState([])
    const [dataCat,setDataCat] = useState([])
    const [dataCheck,setDataCheck] = useState(false)
    const darkMode = useSelector((state)=>state.darkMode.value)
    useEffect(()=>{
        const url = 'https://api.jsonsilo.com/254364c9-0cfb-44c5-b9db-2faef50250af'
        const options = {
            method:'GET',
            headers:{
                'X-SILO-KEY': '2SVi3lulFOfA19n5XQdSi6xIgZhk9bznPQxOuShd0t',
                'Content-Type': 'application/json'
            }
        }
        fetch(url,options)
        .then((response)=>response.json())
        .then((response)=>setData(response))
        .then(setDataCheck(true))
        .catch((error)=>console.log(error))
    },[])
    useEffect(()=>{
        setDataCat(data.filter(element=>element.category === catName.name))
    },[data])
    return(
        <div className={darkMode?"singleCat dark":"singleCat"}>
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