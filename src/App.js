import { useState } from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

function App() {

  const [data, setData] = useState("");

  const handleDataChange = (newData) => {

    const sortedData = newData.dates.sort((a, b) => new Date(a.date) - new Date(b.date));

    // processing here
    console.log("Data in handle data change : ", newData);
    const dates = sortedData.map(item => item.date);
    const numAsteroids = sortedData.map(item => item.num_asteroids);
    const totalAsteroid = newData.total_asteroids;
    const maxVelocityAsteroid = newData.max_velocity_asteroid.name;
    const maxVelocity = newData.max_velocity_asteroid.velocity;
    const closestAsteroid = newData.closest_asteroid.name;
    const closestAsteroidDistance = newData.closest_asteroid.distance;
    const averageDiameter = newData.average_diameter;

    // console.log("Total asteroids :", totalAsteroid);
    // // Set the processed data
    // // setData({ dates, numAsteroids, totalAsteroid, maxVelocityAsteroid, closestAsteroidDistance });
    // // setData(newData);
    setData({dates, numAsteroids,totalAsteroid, maxVelocityAsteroid, maxVelocity, closestAsteroid, closestAsteroidDistance, averageDiameter});
  }
  

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
      <SideBar onDataChange={handleDataChange}/>

      <div className="container">
        <LineChart  
          dates={data.dates}
          numAsteroids={data.numAsteroids}
          totalAsteroid={data.totalAsteroid}
          maxVelocityAsteroid={data.maxVelocityAsteroid}
          maxVelocity={data.maxVelocity}
          closestAsteroid={data.closestAsteroid}
          closestAsteroidDistance={data.closestAsteroidDistance}
          averageDiameter={data.averageDiameter}></LineChart>
      </div>
      </div>
    </>
  );
}

export default App;
