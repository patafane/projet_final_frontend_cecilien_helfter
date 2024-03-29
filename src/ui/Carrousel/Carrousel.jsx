import "./Carrousel.sass"
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { fillRandom } from "@/app/lib/features/randomCarrouSlice"
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
let Carrousel = ()=>{
    const randomCarrou = useSelector((state)=>state.bikes.random)
    const [elementActive,setElementActive] = useState(0)
    useEffect(()=>{
        setTimeout(() => {
            if(elementActive===4){
                setElementActive(0)
            }else{
                setElementActive(elementActive+1)
            }
        }, 5000);
    },[elementActive])
    return(
        <div className="carrousel">
        {randomCarrou[0] ?
            <div className="carrouContainer" style={{transform:"translateX(-"+elementActive*100+"%)"}}>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[0].image} alt="" />
                        <div className="truc">
                            <h2>{randomCarrou[0].name}</h2>
                            <Link href={"/products/"+randomCarrou[0].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[1].image} alt="" />
                        <div className="truc">
                            <h2>{randomCarrou[1].name}</h2>
                            <Link href={"/products/"+randomCarrou[1].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[2].image} alt="" />
                        <div className="truc">
                            <h2>{randomCarrou[2].name}</h2>
                            <Link href={"/products/"+randomCarrou[2].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[3].image} alt="" />
                        <div className="truc">
                            <h2>{randomCarrou[3].name}</h2>
                            <Link href={"/products/"+randomCarrou[3].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[4].image} alt="" />
                        <div className="truc">
                            <h2>{randomCarrou[4].name}</h2>
                            <Link href={"/products/"+randomCarrou[4].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>:""
        }
        </div>
    )
}
export default Carrousel