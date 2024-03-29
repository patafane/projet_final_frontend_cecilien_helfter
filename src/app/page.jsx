'use client'
import Card from "@/ui/Card/Card";
import "./home.sass"
import { useEffect,useState } from "react";
import Carrousel from "@/ui/Carrousel/Carrousel";
import { useDispatch,useSelector } from "react-redux";
import { fillRandom } from "./lib/features/bikesSlice";
export default function Home() {
  const dispatch = useDispatch()
  const data =useSelector((state)=>state.bikes.value)
  const random = useSelector((state)=>state.bikes.random)
  const [dataFilter,setDataFilter] = useState([])
  // const [dataCheck,setDataCheck] = useState(false)
  // useEffect(()=>{
  //   fetch('https://api.escuelajs.co/api/v1/products')
  //   .then((response)=>response.json())
  //   .then((response)=>setData(response))
  //   .then(setDataCheck(true))
  //   .catch((error)=>console.log(error))
  // },[])
  useEffect(()=>{
      dispatch(fillRandom())
  },[])
  console.log(data);
  console.log(random);
  return (
    <div className="home">
      <div className="content">
          <div className="carrouWrapper">
            <h2>Discover some of our products</h2>
            <Carrousel/>
          </div>
          <div className="bestSellers">
            <h2 className="bestSellers">Best sellers</h2>
            <div className="products">
              {data.map((element,index)=>(
                parseInt(element.price)<=10000 ?
                <Card article={element} key={index}/>:""
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}
