import "./Card.sass"
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
let Card = (props)=>{
    return(
        <div className="card">
            <div className="imgContainer">
                <img src={props.article.images[0]} alt="" />
                <div className={"truc"+" "+props.article.category.name}>
                    <Link href={"/products/"+props.article.id}><FaSearch/></Link>
                </div>
            </div>
            <div className="title">
                <h2>{props.article.title}</h2>
                <div className="infos">
                    <span className="priceTag">{props.article.price}€</span>
                    <button className="addCart">add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Card