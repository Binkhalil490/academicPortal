# Academic Portal

The Academic Portal is a web application designed to serve as an interactive platform for academic institutions. It is built using Angular for the frontend, Spring Boot for the backend, and Oracle as the database.

## Features

- **User Authentication**: Secure user authentication and authorization mechanisms to control access to different portal features.

- **Student and Faculty Profiles**: A comprehensive system for managing student and faculty profiles with relevant information.

- **Course Management**: Facilitates the creation, modification, and deletion of courses, including details such as course descriptions, schedules, and resources.

- **Enrollment System**: Allows students to enroll in courses and provides faculty with tools to manage their course enrollments.

- **Interactive Dashboard**: A user-friendly dashboard providing an overview of academic activities, announcements, and personalized information.

## Prerequisites

Before running the application, make sure you have the following installed:

- [Node.js](https://nodejs.org/): Required to run the Angular frontend. Install using:
  ```bash
  # Example installation command for macOS using Homebrew
  brew install node

## Clone the repository:
git clone https://github.com/your-username/academic-portal.git
cd academic-portal

## Frontend Setup:
cd frontend
npm install

## Backend Setup:

Open the backend project in your preferred Java IDE.
Configure the database connection in the src/main/resources/application.properties file.

## Run the Application:

Start the Spring Boot backend.
In the frontend directory, run the Angular project:
ng serve

## Open your browser and navigate to http://localhost:4200/ to access the Academic Portal.
