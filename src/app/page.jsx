'use client'
import Card from "@/ui/Card/Card";
import "./home.sass"
import { useEffect,useState } from "react";
import Carrousel from "@/ui/Carrousel/Carrousel";
import { useDispatch,useSelector } from "react-redux";
import { fillRandom } from "./lib/features/bikesSlice";
export default function Home() {
  const dispatch = useDispatch()
  const [data,setData] = useState([])
  const [dataFilter,setDataFilter] = useState([])
  const [dataCheck,setDataCheck] = useState(false)
  const random = useSelector((state)=>state.bikes.random)
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
      dispatch(fillRandom())
  },[])
  console.log(data);
  console.log(random);
  return (
    <div className={darkMode ? "home dark" : "home"}>
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
