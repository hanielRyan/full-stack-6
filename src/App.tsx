import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import BestSeller from "./components/BestSeller";
import Testimony from "./components/Testimony";
export default function App(){
  const navName=[{pathname:"/",name:"home"},{pathname:"/about",name:"about"},{pathname:"/testimony",name:"testimony"},{pathname:"/best-sellers",name:"best sellers"}]
  return(
<Router>
  <div style={{marginBottom:20}}>
  <Nav navName={navName}/>
  </div>
  <Routes>
    <Route path="/" element={<Hero />}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/best-sellers" element={<BestSeller/>}/>
    <Route path="/testimony" element={<Testimony/>}/>
  </Routes>
</Router>
  )
}