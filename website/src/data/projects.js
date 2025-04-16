// src/data/projects.js
export const projectsData = [
  {
    id: 1,
    title: "Crime Predictor",
    description:
      'AI-driven Crime Prediction Application that uses public crime data from the Arizona State University Police Department and machine learning algorithms to forecast potential crime risks based on location and time. Utilized Python’s scikit-learn library and Random Forest Classifier to predict crime probabilities with data from <a style = "color: rgb(69, 69, 243); white-space:nowrap; "href="https://cfo.asu.edu/crime-logs">https://cfo.asu.edu/crime-logs.</a>',
    imageUrl: "/crime-predictor.png", // Place an image in public folder
    tags: ["Python", "Machine Learning", "scikit-learn"],
    repoUrl: "https://github.com/KashyapHegdeKota/Crime-Predictor", // Link to GitHub repository
  },
  {
    id: 2,
    title: "Weather Application",
    description:
      "The Weather App is a responsive web app providing real-time weather updates for cities worldwide. Using the OpenWeatherMap API, it features a search bar with autocomplete, current weather details, and a clean, responsive design. This project highlights skills in front-end development, API integration, and user-focused design.",
    imageUrl: "/ezgif-5-1c90407034.png",
    tags: ["JavaScript", "OpenWeatherMap API", "Responsive Design"],
    liveUrl: "https://weather.kashyaphegde.com/",
    repoUrl: "https://github.com/KashyapHegdeKota/weather-app",
  },
  {
    id: 3,
    title: "Project Three Title",
    description:
      "The Pantry Tracker is a modern web app built with Next.js and Firebase, featuring Google authentication, a Generative AI-powered chat interface, and Firestore for secure data storage. It offers a clean, responsive design for seamless navigation and user management.",
    imageUrl: "/pantry.png",
    tags: ["Next.js", "Firebase", "Generative AI", "Firestore"],
    liveUrl: "https://pantry.kashyaphegde.com/",
    repoUrl: "https://github.com/KashyapHegdeKota/PantryTracker",
  },
];
