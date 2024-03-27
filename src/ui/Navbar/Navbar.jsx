
"use client"
import "./Navbar.sass"
import Link from "next/link"
import Image from "next/image";
import logo from "./logo.svg"
import { usePathname } from "next/navigation";
import { useSelector,useDispatch } from "react-redux";
import { CiUser } from "react-icons/ci";
import { setConnectFalse,setConnectTrue } from "@/app/lib/features/ConnectSlice";
let Navbar = ()=>{
    const pathName = usePathname()
    const connect = useSelector((state)=>state.connect.value)
    const dispatch = useDispatch()
    console.log(connect);
    return(
        <nav>
            <div className="logo">
            <Link href={"/"}>
                <Image src={logo}
                    width={60}
                    height={60}
                    alt=""
                />
            </Link>
            </div>
            <div className="links">
                <Link href="/" className={pathName === "/" ? "active" : "" }>
                    Home
                </Link>
                <Link href="/categories" className={pathName === "/categeories" ? "active" : ""}>
                    Categories
                </Link>
                <Link href="/products" className={pathName === "/preoducts" ? "active" : ""}>
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
                    <button className="login" onClick={()=>dispatch(setConnectTrue())}>login</button>
                </div>}
            </div>
        </nav>
    )
}
export default Navbar