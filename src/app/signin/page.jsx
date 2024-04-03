"use client"
import "./signin.sass"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { addUser } from "../lib/features/usersSlice"
import { useRouter } from "next/navigation"
let Page = ()=>{
    const [emailInpt,setEmailInpt] = useState("")
    const [userNameInpt,setUserNameInpt] = useState("")
    const [passInpt,setPassInpt] = useState("")
    const [passCheckInpt,setPassCheckInpt] = useState("")
    const [newUser,setNewUser] = useState({})
    const router = useRouter()
    const dispatch = useDispatch()
    const users = useSelector((state)=>state.users.value)
    let handleSignIn = ()=>{
        if(emailInpt === ""|| userNameInpt === "" || passInpt === ""){
            alert("Please fill all values")
        }else if(passCheckInpt != passInpt){
            alert("The passwords don't match")
        }else{
            console.log({username:userNameInpt,password:passInpt});
            dispatch(addUser({username:userNameInpt,password:passInpt}))
            console.log(users);
            router.push("/login")
        }
    }
    return(
        <div className="signin">
            <div className="content">
                <div className="form">
                    <h1>Sign In</h1>
                    <div className="emailInpt">
                        <input type="email" name="mail" id="mail" placeholder="Email" onChange={(e)=>setEmailInpt(e.target.value)}/>
                    </div>
                    <div className="usernameInpt">
                        <input type="text" name="username" id="username" placeholder="Username" onChange={(e)=>setUserNameInpt(e.target.value)}/>
                    </div>
                    <div className="passwordInpt">
                        <input type="password" name="password" id="password" placeholder="Password" onChange={(e)=>setPassInpt(e.target.value)}/>
                    </div>
                    <div className="passwordCheck">
                        <input type="password" name="passwordCheck" id="passwordCheck" placeholder="Retype password" onChange={(e)=>setPassCheckInpt(e.target.value)} />
                    </div>
                    <div className="btn">
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page