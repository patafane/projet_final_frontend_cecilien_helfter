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
import { IoCartSharp } from "react-icons/io5"
import { setActiveTrue,deconect } from "@/app/lib/features/cartSlice";
import { removeAllFav } from "@/app/lib/features/favSlice";
import { setDarkModeOff,setDarkModeOn } from "@/app/lib/features/darkModeSlice";
import { MdDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
let Navbar = ()=>{
    const pathName = usePathname()
    const connect = useSelector((state)=>state.connect.value)
    const cart = useSelector((state)=>state.cart.value)
    const darkMode = useSelector((state)=>state.darkMode.value)
    const dispatch = useDispatch()
    const router = useRouter()
    const handleDeconect = ()=>{
            dispatch(deconect())
            dispatch(setConnectFalse())
            dispatch(removeAllFav())
            router.push("/")
    }
    return(
        <nav className={darkMode ? "dark": ""}>
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
                    <Link href={"/user"}>
                        <CiUser/>
                    </Link>
                    <button className="logOutBtn" onClick={handleDeconect}>log out</button>
                    <button className="cartBtn" onClick={()=>dispatch(setActiveTrue())}><IoCartSharp/> <span>{cart.length}</span></button>
                </div> : <div>
                    <button className="login" onClick={()=>router.push("/login")}>login</button>
                </div>}
                {darkMode ? 
                    <button className="darkmodOff" onClick={()=>dispatch(setDarkModeOff())}><FiSun/></button>
                    :
                    <button className="darkmodOn" onClick={()=>dispatch(setDarkModeOn())}><MdDarkMode/></button>
                }
            </div>
        </nav>
    )
}
export default Navbar