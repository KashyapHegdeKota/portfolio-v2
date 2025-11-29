// src/data/projects.js
export const projectsData = [
  {
    id: 1,
    title: "2026 F-1 Schedule Carbon Emissions Calculator",
    description:
      "Architected a cloud-native microservice to simulate Formula 1 freight logistics and carbon footprint analysis. Built using a FastAPI backend deployed on AWS Lambda via GitHub Actions for automated CI/CD. The system leverages DynamoDB for low-latency geospatial data retrieval and a modern Next.js frontend to visualize flight paths and environmental impact in real-time. Designed to handle cross-platform dependency resolution and high-concurrency requests with zero idle server costs.",
    imageUrl: "/f1.jpg", // Place an image in public folder
    tags:["AWS Lambda", "FastAPI", "DynamoDB", "Next.js", "CI/CD"],
    liveUrl: "https://f1-emissions-2026.vercel.app/",
    repoUrl: "https://github.com/KashyapHegdeKota/f1-emissions-2026"
  },
  {
    id: 2,
    title: "CaptionMe: AI-Powered Image Captioning App",
    description:
      'CaptionMe is an end-to-end AI image captioning system built with Python, PyTorch, and Streamlit, licensed under MIT. It uses a ResNet-50 encoder for visual features and a custom LSTM decoder trained on Flickr8k to generate clear, human-like captions in real time. The project includes a full data pipeline, transfer learning, custom vocabulary building, and a polished web app for instant inference. I trained and deployed the model, added a command-line interface for batch or single image use, and documented the setup for local runs and Colab training.',
    imageUrl: "/captionme.png", // Place an image in public folder
    tags: ["Python", "PyTorch", "Streamlit", "Deep Learning"],
    liveUrl: "https://captionme.kashyaphegde.com/",
    repoUrl: "https://github.com/KashyapHegdeKota/CaptionMe"
  },
  {
    id: 3,
    title: "Family Guy Episode Recommender",
    description:
      'Family Guy Episode Recommender is a playful web app that picks the right Family Guy episode for your mood, built with a React frontend and an AWS serverless backend. Choose from eight moods, get a curated recommendation from a 20 plus episode library, and enjoy a clean, responsive UI with smooth animations. The backend uses AWS Lambda behind API Gateway, so it stays fast and scales automatically.',
    imageUrl: "/family-guy-recommender.png", // Place an image in public folder
    tags: ["React", "AWS Lambda", "Serverless"],
    liveUrl: "https://familyguy.kashyaphegde.com/",
    repoUrl: "https://github.com/KashyapHegdeKota/family-guy-episode-recommender"
  },
  // {
  //   id: 3,
  //   title: "Convo "
  // }
  {
    id: 4,
    title: "LeetBuddy: AI-Powered Coding Companion",
    description:
      "Project Synapse is a web-based AI co-pilot for algorithmic problem-solving. Instead of giving answers, it analyzes a user's code in a built-in editor and provides Socratic-style hints to guide them toward an optimal solution. The project's core is a custom-trained Code-Vision Language Model (LLaVA) that I fine-tuned using LoRA. To achieve this, I engineered a complete MLOps pipeline to create a unique multimodal dataset of scraped problems, LLM-generated hints, and sequential code snapshots captured with Selenium.",
    imageUrl: "/leetbuddy.png", // Place an image in public folder
    tags: ["Python", "LLaVA", "LoRA", "MLOps", "Selenium"],
    repoUrl: "https://github.com/KashyapHegdeKota/LeetBuddy"
  },
  {
    id: 5,
    title: "Crime Predictor",
    description:
      'AI-driven Crime Prediction Application that uses public crime data from the Arizona State University Police Department and machine learning algorithms to forecast potential crime risks based on location and time. Utilized Python’s scikit-learn library and Random Forest Classifier to predict crime probabilities with data from <a style = "color: rgb(69, 69, 243); white-space:nowrap; "href="https://cfo.asu.edu/crime-logs">https://cfo.asu.edu/crime-logs.</a>',
    imageUrl: "/crime-predictor.png", // Place an image in public folder
    tags: ["Python", "Machine Learning", "scikit-learn"],
    repoUrl: "https://github.com/KashyapHegdeKota/Crime-Predictor", // Link to GitHub repository
  },
  {
    id: 6,
    title: "Weather Application",
    description:
      "The Weather App is a responsive web app providing real-time weather updates for cities worldwide. Using the OpenWeatherMap API, it features a search bar with autocomplete, current weather details, and a clean, responsive design. This project highlights skills in front-end development, API integration, and user-focused design.",
    imageUrl: "/ezgif-5-1c90407034.png",
    tags: ["JavaScript", "OpenWeatherMap API", "Responsive Design"],
    liveUrl: "https://weather.kashyaphegde.com/",
    repoUrl: "https://github.com/KashyapHegdeKota/weather-app",
  },
  {
    id: 7,
    title: "Pantry Tracker",
    description:
      "The Pantry Tracker is a modern web app built with Next.js and Firebase, featuring Google authentication, a Generative AI-powered chat interface, and Firestore for secure data storage. It offers a clean, responsive design for seamless navigation and user management.",
    imageUrl: "/pantry.png",
    tags: ["Next.js", "Firebase", "Generative AI", "Firestore"],
    liveUrl: "https://pantry.kashyaphegde.com/",
    repoUrl: "https://github.com/KashyapHegdeKota/PantryTracker",
  },
];
