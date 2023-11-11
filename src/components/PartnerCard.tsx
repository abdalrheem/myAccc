import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

interface Props {
  text: string;
  src: string;
}
const PartnerCard = ({ text, src }: Props) => {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to="./">
          <figure className="cards__item__pic-wrap">
            <img className="cards__item__img" src={src} />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
};

export default PartnerCard;
