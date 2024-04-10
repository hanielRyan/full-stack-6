import { useEffect } from "react";
import { motion } from "framer-motion";
import mainCar from "../images/main-car.png";

export default function Hero() {
  useEffect(() => {
    document.title = "Carz | Home";
  }, []);



  return (
    <div className="default hero">
      <motion.section className="padding">
      <motion.div initial={{ y: -80, opacity: 0 }} transition={{type:"tween",duration:1}}
          animate={{ y: 0, opacity: 1 }} className="inherit">
        <h1 className="heading">
          BEST CARS IN THE WORLD
        </h1>
        </motion.div>
        <motion.div initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }} transition={{type:"tween",duration:1,delay:0.3}} className="inherit">
        <p
          className="paragraph"
        >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut consequuntur dignissimos ratione doloremque fugit voluptates totam, iusto ullam minima temporibus soluta eaque vitae amet quibusdam tempora cumque dolor magnam nulla.
        </p>
        </motion.div>
        <motion.div className="inherit"   initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }} transition={{type:"tween",duration:1,delay:0.6}}>
        <button
          className="main-button"
        >
          view more
        </button>
        </motion.div>
      </motion.section>

      <motion.section  initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween",duration:1}}>
    
    <img src={mainCar} className="main-img"/>
</motion.section>
    </div>
  );
}


