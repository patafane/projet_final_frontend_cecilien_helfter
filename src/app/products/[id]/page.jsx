'use client'
import "./SingleProduct.sass"
import { useParams } from "next/navigation"
import { useState,useEffect } from "react"
import { useSelector } from "react-redux"
let Page = ()=>{
    const indexParams = useParams()
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
    console.log(data);
    return(
        <div className="singleProduct">
            {data[indexParams.id] ? 
                <div className="content">
                        <div className="article">
                            <div className="imgContainer">
                                <img src={data[indexParams.id].image} alt="" />
                            </div>
                            <div className="infos">
                                <h1>{data[indexParams.id].name}</h1>
                                <p>{data[indexParams.id].description}</p>
                                <h3>Specs:</h3>
                            </div>
                        </div>
                </div>
                :
                <h1>Loading</h1>
            }
        </div>
    )
}
export default Page