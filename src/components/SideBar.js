import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";


export default function SideBar({ onDataChange }) {

  
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = async () => {


    const start = new Date(startDate);
    const end = new Date(endDate);
    const dateDiff = (end - start) / (1000 * 60 * 60 * 24); // Difference in days

    if (dateDiff > 7) {
      setShowModal(true); // Show modal if date range is more than 7 days
      return;
    }

    
    console.log("Date Button is clicked!!");
    // Prepare the data to send
    const formData = new FormData();
    formData.append("start_date", startDate);
    formData.append("end_date", endDate);

    const data = {
      start_date: startDate,
      end_date: endDate
    }

    try {
      // Make a POST request to index.php
      const response = await fetch("http://52.66.253.68/asteroidMVC/public/asteroids/getAsteroidData", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Handle the response
      // console.log("Response from php", response);
      console.log("Endpoint :");
      const result = await response.json(); // Assuming index.php sends back a response
      console.log("Formatted JSON Response : ", JSON.stringify(result, null, 2)); // Display the result (for testing purposes)
      // onDataChange(JSON.stringify(result, null, 2))
      onDataChange(result);
    } catch (error) {
      console.error("Error fetching asteroid data:", error);
    } finally {
      
    }

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
          onChange={handleStartDateChange}
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
          onChange={handleEndDateChange}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleDateClick}>
        Submit
      </button>

      {showModal && (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Date Range Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>The date range should not exceed 7 days!</Modal.Body>
          <Modal.Footer>
            <button
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}

     
    </div>
  );
}
