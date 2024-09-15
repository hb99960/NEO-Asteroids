import "./App.css";
import LineChart from "./components/LineChart";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <NavBar
        title="Neo Asteroids"
        navItem1="Home"
        navItem2="FAQs"
        navItem3="Contact us"
        navItem3Field1="About us"
        navItem3Field2="Career"
        navItem3Field3="Enquiry"
        navItem3Field4="Learning Links"
        navBtn1="Search"
      ></NavBar>
      
      <div className="container my-3">
      <SideBar></SideBar>
      </div>
      
      <div className="container">
        <LineChart></LineChart>
      </div>
    </>
  );
}

export default App;
