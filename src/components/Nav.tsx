import {useLocation} from "react-router-dom";
import { AnimatePresence,motion } from "framer-motion";
import {useState} from "react";
import { Link } from "react-router-dom";
import {FaAlignJustify } from "react-icons/fa6";
export default function Nav({navName}:{navName:{pathname:string,name:string}[]}){
    const [open,setOpen]=useState(false);
    const parentVariant={
        closed:{
            width:0
        },
        opened:{
            width:"50vw"
        }
    }

    const childVariant={
        before:{
            x:-10,
            opacity:0
        },
        after:{
            x:0,
            opacity:1
        }
    }
    const location= useLocation();
    const pathname = location.pathname;
    return(
        <>
        <nav>
<section>
    <h2 className="logo">Logo</h2>
</section>
<ul>
{navName.map((name)=>{
    return <li key={name.pathname} > <Link style={{color:`${pathname === name.pathname ?"red" : "black"}`}} className="link" to={`${name.pathname}`}>{name.name}</Link></li>
})}
</ul>
    <FaAlignJustify className="hamburger" style={{color:`${open ? "white" : "black"}`}} onClick={()=>setOpen(!open)}/>
   
        </nav>
        <AnimatePresence>
        {open &&  <motion.ul variants={parentVariant} className="smallNav" initial="closed" animate="opened" exit="closed">
         { navName.map((name,index)=>{
             return <motion.li variants={childVariant} initial="before" animate="after"   transition={{type:"spring", stiffness: 500, // Adjust stiffness for smoothness
             damping: 30, // Adjust damping to control oscillations
             delay: index * 0.3,}}  key={name.pathname} > <Link style={{color:`${pathname === name.pathname ? "red" : "white"}`}} className="link" to={`${name.pathname}`}>{name.name}</Link></motion.li>
         })}
         </motion.ul>}
         </AnimatePresence>
         </>
    )
}