"use client"
import "./Navbar.sass"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useSelector,useDispatch } from "react-redux";
import { CiUser } from "react-icons/ci";
import { setConnectFalse,setConnectTrue } from "@/app/lib/features/ConnectSlice";
import localFont from "next/font/local"
import { useRouter } from "next/navigation";
const fontTest = localFont({src:"./../../assets/fonts/Black Streamer.ttf"})
let Navbar = ()=>{
    const pathName = usePathname()
    const connect = useSelector((state)=>state.connect.value)
    const dispatch = useDispatch()
    const router = useRouter()
    return(
        <nav>
            <div className="logo">
                <div className="title">
                    <h1 className={fontTest.className}>&#60;MOLENBIKE&#62;</h1>
                </div>
                <Link href="/" className={pathName === "/" ? "active" : "" }>
                    Home
                </Link>
                <Link href="/categories" className={pathName === "/categories" ? "active" : ""}>
                    Categories
                </Link>
                <Link href="/products" className={pathName === "/products" ? "active" : ""}>
                    Products
                </Link>
            </div>
            <div className="userInfos">
                {connect ? 
                <div>
                    <Link href={"/"}>
                        <CiUser/>
                    </Link>
                    <button onClick={()=>dispatch(setConnectFalse())}>log out</button>
                </div> : <div>
                    <button className="login" onClick={()=>router.push("/login")}>login</button>
                </div>}
            </div>
        </nav>
    )
}
export default Navbar