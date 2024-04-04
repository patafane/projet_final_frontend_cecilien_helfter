"use client"
import "./Card.sass"
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addCart } from "@/app/lib/features/cartSlice";
import { useSelector } from "react-redux";
let Card = (props)=>{
    const dispatch = useDispatch()
    const connect = useSelector((state)=>state.connect.value)
    return(
        <div className="card">
            <div className="imgContainer">
                <img src={props.article.image} alt="" />
                <div className={"truc"+" "+props.article.category}>
                    <Link href={"/products/"+props.article.id}><FaSearch/></Link>
                </div>
            </div>
            <div className="title">
                <h2>{props.article.name}</h2>
                <div className="infos">
                    <span className="priceTag">{props.article.price}€</span>
                    <button className="addCart" onClick={connect ? ()=>dispatch(addCart(props.article)): ()=>alert("you must be connected to do that")}>add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Card