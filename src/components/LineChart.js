import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default class LineChart extends Component {
  render() {
    return (
      <div>
        Hello world from LineChart Class
        <Line
          data={{
            labels: [
              "01/03/2024",
              "02/03/2024",
              "03/03/2024",
              "04/03/2024",
              "05/03/2024",
              "06/03/2024",
              "07/03/2024",
            ],
            datasets: [
              {
                label: "Asteroids Stats",
                data: [65, 59, 60, 81, 96, 55, 40],
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          }}
        ></Line>
        <ol class="list-group list-group-numbered">
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Fastest Asteroid</div>
              Asteroid no. 1809
            </div>
            
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Closest Asteroid</div>
              Asteroid no. 1534
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">Average Size of Asteroids in (km)</div>
              189 km in diameter
            </div>
            <span class="badge text-bg-primary rounded-pill">180</span>
          </li>
        </ol>
      </div>
    );
  }
}
