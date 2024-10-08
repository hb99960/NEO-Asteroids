import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default class LineChart extends Component {
  render() {
    const { dates, numAsteroids, totalAsteroid, maxVelocityAsteroid, maxVelocity, closestAsteroid, closestAsteroidDistance, averageDiameter } = this.props;

    return (
      <div style={{ width: "100%", height: "400px" }}>
        Asteroid Data
        <Line
          data={{
            labels: dates,
            datasets: [
              {
                label: "Asteroids Stats",
                data: numAsteroids,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
              },
            ],
          }}
        >
        </Line>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Fastest Asteroid</div>
            </div>
            {maxVelocityAsteroid} {maxVelocity} km/s
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Closest Asteroid</div>

            </div>
            {closestAsteroid}{closestAsteroidDistance} km
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Average Size of Asteroids in (km)</div>
            </div>
            {averageDiameter}
            <span className="badge text-bg-primary rounded-pill">{totalAsteroid}</span>
          </li>
        </ol>
      </div>
    );
  }
}
