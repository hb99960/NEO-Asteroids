import React from "react";
import {useState} from "react";

export default function SideBar({onDataChange}) {

  const [startDate, setStartDate] = useState("");  
  const [endDate, setEndDate] = useState("");

  const handleDateClick = async () => {
    console.log("Date Button is clicked!!");
    // Prepare the data to send
    const formData = new FormData();
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);

    const data = {
        start_date: startDate,
        end_date: endDate
    }

    // Make a POST request to index.php
    const response = await fetch("http://localhost/asteroidMVC/public/asteroids/getAsteroidData", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Handle the response
    // console.log("Response from php", response);
    const result = await response.json(); // Assuming index.php sends back a response
    console.log("Formatted JSON Response : ", JSON.stringify(result, null, 2)); // Display the result (for testing purposes)
    // onDataChange(JSON.stringify(result, null, 2))
    onDataChange(result);
  
};

  const handleStartDateChange = (e) => {
    const selectedStartDate = new Date(e.target.value);
    const formattedStartDate = selectedStartDate.toISOString().slice(0, 10);
    console.log(formattedStartDate);
    setStartDate(formattedStartDate);
  }

  const handleEndDateChange = (e) => {
    const selectedEndDate = new Date(e.target.value);
    const formattedEndDate = selectedEndDate.toISOString().slice(0, 10);
    console.log(formattedEndDate)
    setEndDate(formattedEndDate);
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="startDate">Start date</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          aria-describedby="startDate"
          placeholder="Start Date"
          onChange = {handleStartDateChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="endDate">End date</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          aria-describedby="endDate"
          placeholder="End Date"
          onChange = {handleEndDateChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleDateClick}>
        Submit
      </button>
    </div>
  );
}