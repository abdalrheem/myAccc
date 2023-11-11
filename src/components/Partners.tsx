import React from "react";
import PartnerCard from "./PartnerCard";

const Partners = () => {
  return (
    <>
      <div className="heading_container heading_center">
        <h2>
          Our Technology
          <span> Partners</span>
        </h2>
      </div>
      <div className="warpper">
        <div className="scroll-content" id="scroll-content">
          <div className="item">
            <PartnerCard src="images/p1.png" text="PartnerName" />
          </div>
          <div className="item">
            <PartnerCard src="images/p2.png" text="PartnerName" />
          </div>
          <div className="item">
            <PartnerCard src="images/p3.png" text="PartnerName" />
          </div>
          <div className="item">
            <PartnerCard src="images/p4.png" text="PartnerName" />
          </div>
          <div className="item">
            <PartnerCard src="images/p5.png" text="PartnerName" />
          </div>
          <div className="item">
            <PartnerCard src="images/p6.png" text="PartnerName" />
          </div>
          <div className="item">
            <PartnerCard src="images/p7.png" text="PartnerName" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
