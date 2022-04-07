import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const CardButton = (props) => {
  return props.link ? (
    <Link
      to={props.link}
      className={`button card-btn link-btn text-center ${props.variant}`}
      onClick={props.onClick}
    >
      <span>{props.info}</span>
    </Link>
  ) : (
    <button
      className={`button card-btn text-center ${props.variant}`}
      onClick={props.onClick}
    >
      {props.info}
    </button>
  );
};

const CardImage = (props) => {
  return <img className="card-img" src={props.src} alt={props.alt} />;
};

const Card = (props) => {
  return (
    <div
      className={`card-shadow ${
        props.variant === "vertical" ? "card-vetical" : "card-horizontal"
      } ${props.overlayText ? "text-overlay-container" : ""}
        ${props.className ? props.className : ""}`}
    >
      <CardImage src={props.img.src} alt={props.img.alt} />

      <div className="card-body ">
        {props.title && <h3 className="card-title">{props.title}</h3>}
        {props.subtitle && (
          <h6 className="card-title-sub ">{props.subtitle}</h6>
        )}
        {props.description && (
          <p className="card-description line-clamp">{props.description}</p>
        )}

        {props.cardButton && (
          <CardButton
            link={props.cardButton.link}
            info={props.cardButton.info}
            variant={props.cardButton.variant}
          />
        )}
      </div>
      {props.overlayText && (
        <div className="text-overlay text-center H2">{props.overlayText}</div>
      )}
    </div>
  );
};

export default Card;
export { Card, CardImage, CardButton };
