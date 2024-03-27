'use client'
import "./page.module.sass"
import { useEffect,useState } from "react";
export default function Home() {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then((response)=>response.json())
    .then((response)=>setData(response))
    .catch((error)=>console.log(error))
    console.log(data);
  },[])
  console.log(data);
  return (
    <main className="home">
      {/* {data.map((element,index)=>(
        <div key={index}>
          <img src={element.images[0]} alt="" />
        </div>
      ))} */}
    </main>
  );
}
