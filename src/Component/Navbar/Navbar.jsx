import React,{useState} from "react";
import "./Navbar.css";
import photo from "../../assets/photo.jpg";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { PiFarm } from "react-icons/pi";
import { MdOutlinePool } from "react-icons/md";
import { LuTentTree } from "react-icons/lu";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaTreeCity } from "react-icons/fa6";
import {Link ,NavLink} from "react-router-dom";

function Navbar() {
  let[visible, setvisible]= useState(false)
  return (
     
    <div id="Navbar">
       {visible?<div className="hamburger">
        
        <Link  to={"/login"}><div className="ham1">Login</div></Link>
          <Link  to={"/signup"}><div className="ham1"> Signup</div></Link>
         <Link  to={"/listing"}><div className="ham1"> List your home</div></Link>
         <Link  to={"/contact"}><div className="ham1"> Help center </div></Link>
       </div>: <div></div>
       }

      <div className="nav1">
       <Link  to={"/"}><div className="logo">
          <img src={photo} alt="" width="50px" />
          <h1> Private Property Rental</h1>
        </div></Link>

        <div className="search">
          <input type="text" placeholder="search destination" />
          <button> search <CiSearch /></button>
        </div>

        
        <div className="ham">

         <Link  to={"/listing"}><button id="btn1"> List Your Home</button></Link> 
          <button id="btn2" onClick={()=>{
            setvisible(prev=>!prev)
            }}>
            <GiHamburgerMenu id="svg1" />
            <CgProfile id="svg2" />
          </button>
        </div>
      </div>

      <div className="nav2">
        <NavLink to={"/trending"}><div className="svg1"><MdOutlineWhatshot/><h3>Trending </h3></div></NavLink>
         <NavLink to={"/houses"}><div className="svg1"><GiFamilyHouse /><h3>Houses</h3></div></NavLink>
        <NavLink to={"/rooms"}><div className="svg1"><MdBedroomParent /><h3>Rooms</h3></div></NavLink>
        <NavLink to={"/farm"}><div className="svg1"><PiFarm /><h3>Farm Houses</h3></div></NavLink>
        <div className="svg1"><MdOutlinePool /><h3>Pool Houses</h3></div>
        <div className="svg1"><LuTentTree /> <h3>Tent Houses</h3></div>
        <div className="svg1"><GiWoodCabin /> <h3>Cabins</h3></div>
        <div className="svg1"><SiHomeassistantcommunitystore /> <h3>Shops</h3></div>
        <div className="svg1"> <FaTreeCity /> <h3>Forset Houses</h3></div>
        
      </div>
    </div>
  );
}

export default Navbar;
