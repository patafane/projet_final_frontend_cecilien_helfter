'use client'
import "./login.sass"
import { setConnectTrue } from "../lib/features/ConnectSlice"
import { useSelector,useDispatch } from "react-redux"
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
let Page = ()=>{
    const connect = useSelector((state)=>state.connect.value)
    const router = useRouter()
    const dispatch = useDispatch()
    let handleGoogleLogin = ()=>{
        router.push("/")
        dispatch(setConnectTrue())
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
                            {/* <label htmlFor="nom">User name : </label> */}
                            <input type="text" name="nom" id="nom" placeholder="Username"/>
                        </div>
                        <div className="passInpt">
                            {/* <label htmlFor="password">Password : </label> */}
                            <input type="password" name="password" id="password" placeholder="Password"/>
                        </div>
                        <div className="btns">
                            <button className="loginBtn">login</button>
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