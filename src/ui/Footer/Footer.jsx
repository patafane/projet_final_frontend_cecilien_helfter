"use client"
import "./Footer.sass"
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
let Footer = ()=>{
    const darkMode = useSelector((state)=>state.darkMode.value)
    return(
        <footer className={darkMode?"dark":""}>
            <div className="molengeek">
                <h2>Project for Molengeek</h2>
                <p>10 place de la minoterie</p>
                <p>1080 Molenbeek-Saint-Jean </p>
                <p>Belgium</p>
            </div>
            <div className="patafane">
                <h2>Made by PATAFANE</h2>
                <div className="socials">
                    <p><Link href={"https://www.instagram.com/cecilienhelfter/"} target="blank"><FaInstagram/></Link></p>
                    <p><Link  href={"https://github.com/patafane"} target="blank"><FaGithub/></Link></p>
                </div>
                <div className="contacts">
                    <p><CiMail/>: cecilienhelfter@gmail.com</p>
                    <p><FaPhoneAlt/>: +33 6 95 82 76 88</p>
                    <p><FaPhoneAlt/>: +32 4 72 34 05 45</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer