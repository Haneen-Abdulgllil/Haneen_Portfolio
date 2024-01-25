
// import NavBar from "../components/NavBar";
import  MegaMenu from "../components/MegaMenu";
import Footer from "../components/Footer_cus";
import SpeedDial from "../components/SpeedDial";
import Carousel from "../components/Carousel";
import SideBar from "../components/SideBar";
export default function Home() {
  return (
    <div className="container">
        <MegaMenu/>
        <div className="container m-5 h-100 w-full">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="basis-1/2 ">01</div>
            <div className="basis-1/2 ">02</div>
          </div>
        </div>
        <SpeedDial/>
        <div className="container h-100 w-full" >
          <div className="flex flex-col sm:flex-row items-center">
            <div className="basis-1/4 ">
              <SideBar/>
            </div>
            <div className="basis-3/4 ">
              <Carousel/>
            </div>
          </div>
        </div>
        
        
        <Footer/>
    </div>
  )
}