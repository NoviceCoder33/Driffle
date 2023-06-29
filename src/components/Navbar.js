import React from 'react';
import LogoImage from "../assets/driffle.png";
import styles from "./Navbar.module.css";
import {MdAccountCircle} from 'react-icons/md';
import {HiShoppingBag} from "react-icons/hi2";
import {HiHeart} from "react-icons/hi2";
import { BsGlobe } from "react-icons/bs";
import { IconContext } from 'react-icons';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
         <img className={styles.logo} src={LogoImage} alt="logo"/>
         
      <div className={styles.icons}>   
        <div className={styles.location}>
         <IconContext.Provider value={{color:"white",size:"1.4rem" }}>
           <BsGlobe/>
          </IconContext.Provider>
          India (English)- INR
        </div>
         
         <IconContext.Provider value={{color:"white",size:"1.5rem" }}>
           <HiHeart/>
          </IconContext.Provider>

        <div className={styles.bag}>
         <IconContext.Provider value={{color:"white",size:"1.5rem" }}>
           <HiShoppingBag/>
          </IconContext.Provider>
          <span className={styles.count}>2</span>
        </div>
        
          <IconContext.Provider value={{color:"white",size:"1.5rem" }}>
           <MdAccountCircle/>
          </IconContext.Provider>

         </div>
    </div>
  )
}
