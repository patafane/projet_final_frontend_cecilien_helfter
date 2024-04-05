"use client"
import "./user.sass"
import { useSelector,useDispatch } from "react-redux"
import Link from "next/link"
import { removeFromFav } from "../lib/features/favSlice"
import { FaSearch } from "react-icons/fa";
let Page = ()=>{
    const connect = useSelector((state)=>state.connect.value)
    const fav = useSelector((state)=>state.favorite.value)
    const darkMode = useSelector((state)=>state.darkMode.value)
    const dispatch = useDispatch()
    return(
        <div className={darkMode?"user dark":"user"}>
            {connect ? 
            <div className="content">
                <h1>Here are your favorites bikes</h1>
                <div className="favoris">
                    
                    {fav.length === 0 ? <h6>No item in favorite yet</h6> :
                        fav.map((element,index)=>(
                                <div className="element" key={index}>
                                        <img src={element.image} alt="" />
                                        <div className="close">
                                            <button onClick={()=>dispatch(removeFromFav(index))}>Remove</button>
                                            <Link key={index} href={"/products/"+element.id}>
                                                <FaSearch/>
                                            </Link>
                                        </div>
                                </div>
                        ))
                    }
                </div>
            </div> : 
            <span>Please connect to have acces to your page</span>
            }
        </div>
    )
}
export default Page