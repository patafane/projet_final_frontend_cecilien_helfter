'use client'
import "./SingleProduct.sass"
import { useParams } from "next/navigation"
import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addCart } from "@/app/lib/features/cartSlice"
import { addFav } from "@/app/lib/features/favSlice"
let Page = ()=>{
    const dispatch = useDispatch()
    const connect = useSelector((state)=>state.connect.value)
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
                                <div className="specs">
                                    <div className="year">
                                        Year : {data[indexParams.id].year}
                                    </div>
                                    <div className="motor">
                                        Motor : {data[indexParams.id].motor}
                                    </div>
                                    <div className="displacement">
                                        Displacement : {data[indexParams.id].displacement}cc
                                    </div>
                                    <div className="power">
                                        Power : {data[indexParams.id].horsepower}HPS
                                    </div>
                                    <div className="fuel">
                                        Fuel tank capacity : {data[indexParams.id].fuel_capacity} 
                                    </div>
                                    <div className="weight">
                                        Weight : {data[indexParams.id].weight}
                                    </div>
                                    <div className="break">
                                        Brake system : {data[indexParams.id].brake_system}
                                    </div>
                                    <div className="price">
                                        Price : {data[indexParams.id].price}€
                                    </div>
                                </div>
                                <div className="btns">
                                    <button className="addCart" onClick={connect ? ()=>{dispatch(addCart(data[indexParams.id]))}: ""}>Add to cart</button>
                                    <button className="favBtn" onClick={()=>dispatch(addFav(data[indexParams.id]))}>Add to Favorite</button>
                                </div>
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