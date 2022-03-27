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
    <div>
      <div class="card-vertical text-overlay-container product-category card-shadow">
        <div class="card-body">
          <img
            class="card-img"
            src="./images/unisex.png"
            alt="unisex-category"
          />
        </div>
        <div class="gray-tile"></div>
        <div class="text-overlay">UNISEX</div>
      </div>
    </div>
  );
};



export default Card;
