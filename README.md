# Asteroid-Neo-Stats

![image](https://github.com/user-attachments/assets/a63dc7df-2d6b-4e80-91db-2baef3a874bd)

![GitHub package.json version](https://img.shields.io/github/package-json/v/hb99960/NEO-Asteroids)




# Problem Statement
"Why track asteroids? With space exploration booming, understanding near-Earth objects is more crucial than ever. This ReactJS web app leverages NASA's NeoWs API to provide real-time asteroid data, offering insightful statistics and trends through captivating, interactive charts. Whether you're a space enthusiast or a data geek, this app makes asteroid tracking both engaging and visually stunning

# Neo-Asteroids-Server
This project is a web application that allows users to view the statistics of Near Earth Objects (NEO) by fetching data from NASA’s NeoWs API. Users can input a date range and view the number of asteroids passing near Earth on each day within that range. The app also displays additional information such as the fastest asteroid, the closest asteroid, and the average size of the asteroids.

### Features
Date Selection: Users can choose a start and end date to fetch asteroid data.
Asteroid Statistics: Displays the number of asteroids for each day within the date range.
Fastest Asteroid: Shows the fastest asteroid in km/h.
Closest Asteroid: Displays the closest asteroid during the date range.
Average Asteroid Size: Provides the average size of the asteroids in kilometers.
Chart Visualization: Uses Chart.js to display a line chart of asteroid statistics.

### Live Demo
The application is deployed and can be accessed here: [Live Demo](https://hb99960.github.io/NEO-Asteroids/)

 
>Note: To view the demo, please allow insecure content in your browser settings by following these steps:
> - Go to Settings -> Privacy and Security -> Site Settings.
> - Under Additional content settings, click on Insecure content.
> - Add the URL to Allowed to show insecure content.

### Installation and Setup
1. Clone the repository: `git clone https://github.com/hb99960/NEO-Asteroids.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Backend (Neo-Asteroids-Server)
This project also includes a backend API that communicates with NASA’s NeoWs API. 

### API Endpoints
You can also test the API endpoints using Postman. Download the Postman collection here: [Postman Collection](https://api.postman.com/collections/37486278-2e00e5f4-03bc-4963-87a0-ccb6cdc82ff4?access_key=PMAT-01J81V10C7530MJ0PQZWC9Q5NV)

### Deployment
The app is deployed on AWS EC2. Access it via the following URL: [Deployed App](http://52.66.253.68/asteroidMVC/public/asteroids/getAsteroidData)

### Technologies Used
- Frontend: ReactJS, Twitter Bootstrap, Chart.js
- Backend: php
- API: NASA’s NeoWs API
- Deployment: AWS EC2
