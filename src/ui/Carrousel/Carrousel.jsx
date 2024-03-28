import "./Carrousel.sass"
import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { fillRandom } from "@/app/lib/features/randomCarrouSlice"
import Link from "next/link"
import { FaSearch } from "react-icons/fa";
let Carrousel = ()=>{
    const randomCarrou = useSelector((state)=>state.randomCarrou.random)
    const data = useSelector((state)=>state.randomCarrou.value)
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
        {randomCarrou[10] ?
            <div className="carrouContainer" style={{transform:"translateX(-"+elementActive*100+"%)"}}>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[10].images[0]} alt="" />
                        <div className="truc">
                            <Link href={"/products/"+randomCarrou[10].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[11].images[0]} alt="" />
                        <div className="truc">
                            <Link href={"/products/"+randomCarrou[11].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[12].images[0]} alt="" />
                        <div className="truc">
                            <Link href={"/products/"+randomCarrou[12].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[13].images[0]} alt="" />
                        <div className="truc">
                            <Link href={"/products/"+randomCarrou[13].id}>
                                <FaSearch/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="carrouElement">
                    <div className="imgContainer">
                        <img src={randomCarrou[14].images[0]} alt="" />
                        <div className="truc">
                            <Link href={"/products/"+randomCarrou[14].id}>
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