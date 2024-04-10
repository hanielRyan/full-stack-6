import { Swiper,SwiperSlide } from "swiper/react";
import testimonyOne from "../images/review-3.jpg";
import testimonyTwo from "../images/review-2.jpg";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { motion } from "framer-motion";
export default function testimony(){
    return(
        <div>
<motion.h1 initial={{y:80,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1,type:"tween"}} viewport={{once:false}}  className="heading text-center more-height">Testimonials</motion.h1>
<section className="testimonials">
    <motion.div initial={{y:80,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,type:"tween",delay:0.8}}>
<Swiper navigation={true} modules={[Navigation]} className="testimonySwiper">
<SwiperSlide>
    <div>
 <h1 className="quote text-center">❝</h1>
 <div className="experience-center">
        <h1 className="experience text-center experience-width">They truly exceeded my expectations and made my car rental experience a delight.</h1>
        </div>
 <div className="profile-container">
   <img src={testimonyOne} className="testimony-img"/>
   <p className="paragraph line-height-sm">Alex</p>
   <p className="paragraph line-height-sm">photographer</p>
   </div>
   </div>
</SwiperSlide>
<SwiperSlide>
    <div>

 <h1 className="quote text-center">❝</h1>
 <div className="experience-center">
        <h1 className="experience text-center experience-width">They truly exceeded my expectations and made my car rental experience a delight.</h1>
        </div>
 <div className="profile-container">
   <img src={testimonyTwo} className="testimony-img"/>
   <p className="paragraph line-height-sm">Alex</p>
   <p className="paragraph line-height-sm">photographer</p>
   </div>
   </div>
</SwiperSlide>
</Swiper>
</motion.div>
</section>
        </div>
    )
}