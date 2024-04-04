"use client"
import "./Cart.sass"
import { useSelector,useDispatch } from "react-redux"
import { removeCart,removeAll,augmenteQuantite,setActiveFalse } from "@/app/lib/features/cartSlice"
import { FaTrash } from "react-icons/fa";
import { useState,useEffect } from "react";
let Cart = ()=>{
    const connect = useSelector((state)=>state.connect.value)
    const cart = useSelector((state)=>state.cart.value)
    const active = useSelector((state)=>state.cart.active)
    const dispatch = useDispatch()
    const [total,setTotal] = useState(0)
    useEffect(() => {
        let newTotal = 0;
        cart.forEach((element) => {
          newTotal += parseFloat(element.price * element.quantite);
        });
        setTotal(newTotal);
        }, [cart]);
    return(
        <div className={active ? "cart active" : "cart"}>
            <button className="close" onClick={()=>dispatch(setActiveFalse())}>X</button>
            {connect ? 
            <div className="content">
                <h2>Your cart</h2>
                {cart.length === 0 ? 
                <h6 className="empty">Cart is empty</h6>
                :
                <div className="articles">
                    {cart.map((element,index)=>(
                        <div className="element" key={index}>
                            <div className="infos">
                                <div className="quantite">
                                    {element.quantite}
                                </div>
                                <div className="img">
                                    <img src={element.image} alt="" />
                                </div>
                                <div className="name">
                                    {element.name}
                                </div>
                            </div>
                            <div className="btns">
                                <button onClick={()=>dispatch(augmenteQuantite(index))}>+1</button>
                                <button onClick={()=>dispatch(removeCart(index))}>-1</button>
                                <button onClick={()=>dispatch(removeAll(index))}><FaTrash/></button>
                            </div>
                        </div>
                    ))}
                </div>
                }
                <div className="total">
                    <h1>Total: <span>{total}€</span></h1>
                </div>
            </div>
            :
            <h2>please connect to see your shoping cart</h2>}
        </div>
    )
}
export default Cart