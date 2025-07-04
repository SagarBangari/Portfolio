import React from 'react'
import Card from './Card';
import restaurant from"./images/ivan-stern-LOLSb7m6XkU-unsplash.jpg"
import chess from"./images/chess.jpg"
import snake from "./images/snake.jpg"
import wise_way from"./images/wise_way.jpg"
import { motion } from 'framer-motion';
import weatherPhoto from './images/weather-photo.png'
import memoPhoto from './images/memorise-photo.png'
import webPhoto from './images/web-photo.png'
import mobilePhoto from './images/mobile-photo.png'
const Projects = () => {
    const cards = [
       {
            imageUrl: weatherPhoto,
            altText: 'wise_way',
            title: 'Weather Prediction',
            description: "This project involves building a weather forecasting system using machine learning. By training on historical meteorological data (temperature, humidity, pressure, etc.), the model predicts upcoming weather conditions with reasonable accuracy.",
            techStack :['#Python','#Pandas','#Streamlit'],
            github:"https://github.com/SagarBangari/Weather-prediction-and-analysis",
            live:"https://weather-prediction-and-analysis.streamlit.app/"
          },
        {
          imageUrl:webPhoto,
          altText: 'Chess',
          title: 'Net Finance Hub - Web',
          description: 'The web version of Net Finance Hub is a responsive finance management platform designed for users to analyze and control their finances from any device. ',
          techStack :['#React','#MongoDB'],
          github:"https://github.com/SagarBangari/Net-Finance-Hub",
          live:"https://net-finance-hub-frontend.onrender.com"

        },
        {
          imageUrl: mobilePhoto,
          altText: 'Canyons',
          title: 'Net Finance Hub - Mobile',
          description: " Net Finance Hub is a mobile application that simplifies personal finance management. Users can track income, expenses, savings, and set financial goals with real-time analytics and notifications.",
          techStack :['#Flutter','#Firebase'],
          github:"https://github.com/SagarBangari/Net_Finance_Hub",
          live:"https://net-finance-hub-mobile.onrender.com"
        }
        ,
        {
          imageUrl: memoPhoto,
          altText: 'Resataurant website',
          title: ' Memorise Game',
          description: 'Memorise is an interactive web-based memory game designed to improve cognitive skills and concentration.',
          techStack :['#HTML','#CSS','#JavaScript'],
          github:"https://github.com/SagarBangari/Memorize-Game",
           live:"https://memorize-game.onrender.com"
        }
       
      ];

  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
        margin:"-100px",
      once:true
     }} className="up_gap " id="project">
        <h2 className='heading1 down_gap'>Projects</h2>
        <div className="completely">
        
    <div className="grid" >
        
      {cards.map((card, index) => (
        
        <Card
          key={index}
          imageUrl={card.imageUrl}
          altText={card.altText}
          title={card.title}
          description={card.description}
          techStack={card.techStack}
          github = {card.github}
          live={card.live}
        />
      ))}
    </div>
    </div>
    </motion.div>
  )
}

export default Projects
