import React from 'react';
import './style.css'
const Card = ({ imageUrl, altText, title, description,techStack,github,live }) => {
  return (
    <div className="card">
      <img className="card__img" src={imageUrl} alt={altText} />
      <div className="card__content">
        <h1 className="card__header">{title}</h1>
        <div className="card__text-wrapper">
          <p className="card__text">{description}</p>
        </div >
         <div className="card__techStack">
    {techStack.map((tech, idx) => (
      <span key={idx} className="tech-tag">{tech}</span>
    ))}
  </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button className="card__btn"  onClick={() => window.open(github)}>Github </button>
        <button className="card__btn" onClick={() => window.open(live)}>Live </button>
      </div>
      </div>
    </div>
  );
};

export default Card;
