'use client'
import "./home.sass"
import { useEffect,useState } from "react";
export default function Home() {
  const [data,setData] = useState([])
  const [dataFilter,setDataFilter] = useState([])
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response)=>response.json())
    .then((response)=>setData(response))
    .catch((error)=>console.log(error))
  },[])
  console.log(data);
  console.log(dataFilter);
  return (
    <div className="home">
      {data.map((element,index)=>(
        index>0 &&index<37?
        <div key={index} className="testCard">
        <h2>{element.title}</h2>
          <img src={element.images[0]} alt="" />
        </div>
        :""
      ))}
    </div>
  );
}
