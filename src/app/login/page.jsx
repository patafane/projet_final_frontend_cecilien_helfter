'use client'
import "./login.sass"
import { setConnectTrue } from "../lib/features/ConnectSlice"
import { useSelector,useDispatch } from "react-redux"
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
let Page = ()=>{
    const [errorLog,setErrorLog] = useState(false)
    const [userNameValue,setUserNameValue] = useState("")
    const [passwordValue,setPasswordValue] = useState("")
    const connect = useSelector((state)=>state.connect.value)
    const users = useSelector((state)=>state.users.value)
    const router = useRouter()
    const dispatch = useDispatch()
    let handleGoogleLogin = ()=>{
        router.push("/")
        dispatch(setConnectTrue())
    }
    let handleLogin = ()=>{
        users.map((element)=>{
            if(userNameValue === element.username && passwordValue === element.password){
                dispatch(setConnectTrue())
                router.push("/")
                setErrorLog(false)
            }else{
                setErrorLog(true)
            }
        })
    }
    return(
        <div className="login">
            {
                connect ? <p>you are already connected</p>
                :
                <div className="content">
                    <div className="form">
                        <h1>Login</h1>
                        <div className="nameInpt">
                            <input type="text" name="nom" id="nom" placeholder="Username" onChange={(e)=>setUserNameValue(e.target.value)}/>
                        </div>
                        <div className="passInpt">
                            <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>setPasswordValue(e.target.value)}/>
                        </div>
                        <div className="errorLog">
                            {errorLog ? <span>invalid values</span> : ""}
                        </div>
                        <div className="signIn">
                            <span>don't have an account? <Link href={"/signin"}>sign in</Link> </span>
                        </div>
                        <div className="btns">
                            <button className="loginBtn" onClick={handleLogin}>login</button>
                            <p>or</p>
                            <button className="googleBtn" onClick={handleGoogleLogin}><FaGoogle/></button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default Page