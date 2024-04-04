"use client"
import "./user.sass"
import { useSelector } from "react-redux"
import Link from "next/link"
let Page = ()=>{
    const connect = useSelector((state)=>state.connect.value)
    const fav = useSelector((state)=>state.favorite.value)
    return(
        <div className="user">
            {connect ? 
            <div className="content">
                <h1>Welcome to your profile page</h1>
                <div className="favoris">
                    {fav.length === 0 ? <h6>No item in favorite yet</h6> :
                        fav.map((element,index)=>(
                            <Link key={index} href={"/products/"+element.id}>
                                <div className="element" key={index}>
                                    <img src={element.image} alt="" />
                                </div>
                            </Link>
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