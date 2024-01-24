
// import NavBar from "../components/NavBar";
import  MegaMenu from "../components/MegaMenu";
import Footer from "../components/Footer_cus";
import SpeedDial from "../components/SpeedDial";
export default function Home() {
  return (
    <div className="container">
        <MegaMenu/>
        <div className="container m-5">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="basis-1/2 bg-red-500">01</div>
            <div className="basis-1/2 bg-blue-500">02</div>
          </div>
        </div>
        <SpeedDial/>
        <Footer/>
    </div>
  )
}