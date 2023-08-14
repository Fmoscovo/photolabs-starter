# PhotoLabs 📷

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Table of Contents

- [Features](#features-)
- [Screenshots](#screenshots-)
- [Demo Video](#demo-video-)
- [Quick Start (Frontend)](#quick-start-frontend-)
- [Backend Setup](#backend-setup-)
- [Technology Stack](#technology-stack-)
- [Contribution](#contribution-)
- [License](#license)

## Features 🌟

- **Photo Browsing**: Browse through a beautiful array of photos.
- **Detailed Photo View**: View photo details, including user information and similar photo suggestions.
- **Favorites**: Like and unlike photos with a simple click.
- **Dynamic Themes**: Alternate between light and dark modes.
- **Keyboard Accessibility**: Quickly close the photo details modal with the 'Escape' key.

## Screenshots 📸
![Screenshot 2023-08-14 004638](https://github.com/Fmoscovo/photolabs-starter/assets/128196275/23a0b65d-7431-4426-b478-8338cbe9b55f)

## Demo Video 🎥
https://github.com/Fmoscovo/photolabs-starter/assets/128196275/29454182-a6d9-4cd3-a680-853cb457934f

## Quick Start (Frontend) 🚀

### Prerequisites

- Node.js and npm installed on your machine.

### Installation & Running

1. Clone the repository:
   
        git clone https://github.com/Fmoscovo/photolabs.git

2. Navigate to the frontend directory:
    
        cd photolabs/frontend

3. Install dependencies:

        npm install

4. Run the application:

        npm start

Visit http://localhost:3000 in your browser to see the application in action.

## Quick Start (Backend Setup)  🖥️

### Prerequisites

- Node.js and npm.
- PostgreSQL set up and accessible.

### Installation & Running

1. Navigate to the frontend directory:
    
        cd photolabs/frontend

2. Install dependencies:

        npm install

3. Run the application: 

         npm start

4. Set up the database:
    a. Login to PostgreSQL:

        psql -U development  
     (Password = development)
    
    b. Create a new database:

        CREATE DATABASE photolabs_development;

5. Configure environment variables:

         Copy .env.example to .env.development.

    Fill in PostgreSQL details as provided below:

        PGHOST=localhost
        PGUSER=labber
        PGDATABASE=photolabs_development
        PGPASSWORD=labber
        PGPORT=5432
6. Seed the database:

        Use the browser to navigate to http://localhost:8001/api/debug/reset.
        OR
        Execute a GET request using curl http://localhost:8001/api/debug/reset.

7. Start the server:

         npm start



## Technology Stack 🛠️

### Frontend:
- React
- Sass
- FontAwesome
- PropTypes

### Backend:
- Express.js
- PostgreSQL
- Socket.io

