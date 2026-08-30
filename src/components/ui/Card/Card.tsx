

import type React from "react";
import "./Card.css";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  children: React.ReactNode;
}

const Card = ({ title, description, image, children }: CardProps) => {
  return (
    <div className="card">
      {image && (
        <img
          src={image}
          alt={title}
          className="card-image"
        />
      )}

      <div className="card-content">
        <h2>{title}</h2>

        <p>{description}</p>

        {children}
      </div>
    </div>
  );
};

export default Card;
