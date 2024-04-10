import aboutCar from "../images/about-car.png";
import {motion} from "framer-motion";
export default function About(){
    return(
        <div className="default about">
<motion.section  animate={{y:[-80,0,-80]}} transition={{duration:2,repeat:Infinity}} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <img src={aboutCar} className="about-img"/>
</motion.section>
<section className="padding">
    <motion.h1 className="heading" initial={{x:80,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"tween"}}>About Us</motion.h1>
    <motion.p  initial={{x:80,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"tween",delay:0.3}} className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit atque aut unde eos iste id modi, magni, dolorum fugiat officia a ratione cupiditate, commodi consequatur ipsam? Aliquam, placeat nesciunt?
    </motion.p>
    <motion.div initial={{x:80,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,type:"tween",delay:0.6}} className="inherit">
    <button className="main-button ">view more</button>
    </motion.div>
</section>
        </div>
    )
}