import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import { Link } from "react-router-dom";
const Footer = ()=>{
    return (<>
        <div className="footer fixed bottom-0 left-0 h-[120px] mt-8  w-screen px-[50px] bg-[#f4f4f4] flex items-center justify-between">
        <h3 className="text-2xl ">Keep <span className="text-[#578DF7]"> Notes</span> </h3>

        <div className="text-center text-[gray]">
            <p>Designed By <span className="sp-text"> MD Shahnawaz</span></p>
            <p>Copy Right 2024 All Right Reserved</p>
        </div>
        <div className="text-gray">
            <p className="font-bold  px-2">Social</p>
            <div className="flex items-center gap-1">
          <Link to={"https://x.com/Ahankhan474"} className="p-[5px] bg-[#fff] cursor-pointer  text-[20px]"><i ><FaXTwitter /></i></Link> 
           <Link to={"https://www.instagram.com/ahankhan474/"} className="p-[5px] bg-[#fff] cursor-pointer text-[20px]"> <i ><FaInstagram /></i></Link>
           <Link to={"https://github.com/MdShahnawaz474"} className="p-[5px] bg-[#fff] cursor-pointer text-[20px] "> <i><FaGithub /></i></Link>
            </div>
        </div>
        </div>
    </>)
}

export default Footer;