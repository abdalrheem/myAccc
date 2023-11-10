import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

interface Props {
  text: string;
  label: string;
  src: string;
  path: string;
}
const ProjectCard = ({ text, label, src, path }: Props) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img className="cards__item__img" alt="Travel Image" src={src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default ProjectCard;
