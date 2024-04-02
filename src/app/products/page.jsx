'use client'
import "./Products.sass"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
import Card from "@/ui/Card/Card"
let Page = ()=>{
    const [data,setData] = useState([])
    const [dataCheck,setDataCheck] = useState(false)
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
    return(
        <div className="allProducts">
            {data ? 
                <div className="content">
                    <h1>All our products</h1>
                    <div className="shop">
                        {data.map((element,index)=>(
                            <Card article={element} key={index}/>
                        ))}
                    </div>
                </div>
                :
                <h1>Loading</h1>
            }
        </div>
    )
}
export default Page