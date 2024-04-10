import mainCar from "../images/main-car.png";
import {motion} from "framer-motion";
// import { useEffect } from "react";
// import {animate,stagger} from "framer-motion/dom";
export default function BestSeller(){
    const carVariants={
        hidden:{
            opacity:0,
            x:-80
        },
        show:(index:number)=>{return {
                opacity:1,
                x:0,
                transition:{
                    duration:1,
                    delay:0.4 * index,
                    type:"tween"
                }
            }
         }
    }

   
    return(
        <div>
            <section className="center">
            <motion.h1  initial={{ y: -80, opacity: 0 }} transition={{type:"tween",duration:1}}
          animate={{ y: 0, opacity: 1 }} className="heading more-height">Best selling Cars</motion.h1>
            <motion.p  initial={{ y: -80, opacity: 0 }} transition={{type:"tween",duration:1,delay:0.4}}
          animate={{ y: 0, opacity: 1 }} className="paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae eos soluta esse culpa porro in, ipsa explicabo officia reiciendis harum perspiciatis id sapiente commodi dolorem aperiam. Ut modi ex necessitatibus voluptas neque ipsa vitae voluptates tempora dicta cupiditate. Dolorem, minus voluptatibus. Reiciendis cupiditate culpa exercitationem cumque consequatur recusandae ullam doloremque.</motion.p>
            </section>
            <motion.section className="cars" >
                {Array(5).fill({name:"TOYOTA"}).map((obj:{name:string},index)=>{
                    return <motion.div key={index} variants={carVariants}   initial="hidden"  whileInView="show" viewport={{once:true}} className="car-container" custom={index}>
                    <img  src={mainCar} className="car-img"/>
                    <p className="paragraph bold">{obj.name}</p>
                    <p className="paragraph">$62,000</p>
                    <button className="car-button">purchase</button>
                </motion.div>
                })}
            </motion.section>
        </div>
    )
}