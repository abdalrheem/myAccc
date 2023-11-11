import React from "react";
import "./Partner.css";
import "../assets/animate.css";
interface Pros {
  PartnerLogo: string;
  PartnerName: string;
}
const PartnerDetails = ({ PartnerLogo, PartnerName }: Pros) => {
  return (
    <div className="col-lg-3 col-sm-6 wow fade-in" data-wow-delay="0.1s">
      <a className="cat-item d-block bg-light text-center rounded p-3" href="">
        <div className="rounded p-4">
          <div className="icon mb-3">
            <img className="img-fluid" src={PartnerLogo} alt="Icon" />
          </div>
          <h6>{PartnerName}</h6>
        </div>
      </a>
    </div>
  );
};

export default PartnerDetails;
