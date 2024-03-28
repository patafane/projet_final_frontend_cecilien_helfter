'use client'
import Card from "@/ui/Card/Card";
import "./home.sass"
import { useEffect,useState } from "react";
import Carrousel from "@/ui/Carrousel/Carrousel";
import { useDispatch } from "react-redux";
import { fillValue,fillRandom } from "./lib/features/randomCarrouSlice";
export default function Home() {
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  const [dataFilter,setDataFilter] = useState([])
  const [dataCheck,setDataCheck] = useState(false)
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response)=>response.json())
    .then((response)=>setData(response))
    .then(setDataCheck(true))
    .catch((error)=>console.log(error))
  },[])
  useEffect(()=>{
      dispatch(fillValue(data))
      dispatch(fillRandom())
  },[data])
  console.log(data);
  return (
    <div className="home">
      <div className="content">
          <div className="carrouWrapper">
            <h2>Discover some of our products</h2>
            <Carrousel data={data}/>
          </div>
          <div className="bestSellers">
            <h2 className="bestSellers">Best sellers</h2>
            <div className="products">
              {data.map((element,index)=>(
                element.price<=23 && element.title.includes("Drive")===false && element.title.includes("212")===false && element.title.includes("New") === false && element.title.includes("fghjm")===false && element.title.includes("addidas")===false ?
                <Card article={element} key={index}/>:""
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}
