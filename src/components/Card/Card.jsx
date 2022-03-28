import React from "react";
import {Link} from "react-router-dom"

const CardButton = (props) => {
  return 
    <Link
      to={props.link}
      className={`card-btn link-btn ${
        props.variant === "primary" ? "button-primary" : "button-secondary"
      }`}
    >
      {props.info}
    </Link>
};

const Card = (props) => {
  return (
      <div
        className={`card-shadow ${
          props.variant === "vertical" ? "card-vetical" : "card-horizontal"
        } ${props.overlayText ? "text-overlay-container" : ''}
        ${props.className? props.className : ""}`}
      >
        
        <img
          className="card-img"
          src={props.img.src}
          alt={props.img.alt}
        />

        {/* this comment is for future PR, please ignore */}

        {/* <CardImage src={props.img.src} 
          alt={props.img.alt}/> */}
        
        
        <div className="card-body">
            {props.title && <h3 className="card-title">{props.title}</h3>}
            {props.subtitle && <h6 className="card-title-sub ">{props.subtitle}</h6>}
            {props.description && <p className="card-description">{props.description}</p>}

            {props.cardButton &&  
            <Link
      to={props.cardButton.link}
      className={`card-btn link-btn ${
        props.cardButton.variant === "primary" ? "button-primary" : "button-secondary"
      }`}
    >
      {props.cardButton.info}
    </Link>}

    {/* this comment is for future PR, please ignore */}
    {/* <CardButton link={props.cardButton.link} info={props.cardButton.info} variant={props.cardButton.variant}/> */}

        </div>
        {props.overlayText && 
        <div className="text-overlay text-center H2">{props.overlayText}</div>}
    </div>
  );
}

const CardImage = (props) => {
  return <img className="card-img" src={props.src} alt={prop.alt} />;
};

const CardBody = (props) => {
  return (
    
      <div className="card-body">
            {props.title && <h3 className="card-title">{props.title}</h3>}
            {props.subtitle && <h6 className="card-title-sub ">{props.subtitle}</h6>}
            {props.description && <p className="card-description">{props.description}</p>}
            </div>

  );
};



export default Card;
