import React from "react";
import "./Partner.css";
import "../assets/animate.css";
import PartnerDetails from "./PartnerDetails";

const PartnersSection = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 className="mb-3">Our Trusted Partners</h1>
            <p>
              At Acorac Group, we believe in the power of collaboration and
              shared success. Our journey is enriched by the strong partnerships
              we have forged with industry leaders, innovative startups, and
              like-minded organizations. Together, we strive to create
              meaningful impact and deliver exceptional value to our clients and
              communities.
            </p>
          </div>
          <div className="row g-4">
            <PartnerDetails
              PartnerLogo={"images/p1.png"}
              PartnerName={"PartnerName"}
            />
            <PartnerDetails
              PartnerLogo={"images/p2.png"}
              PartnerName={"PartnerName"}
            />
            <PartnerDetails
              PartnerLogo={"images/p3.png"}
              PartnerName={"PartnerName"}
            />
            <PartnerDetails
              PartnerLogo={"images/p4.png"}
              PartnerName={"PartnerName"}
            />
            <PartnerDetails
              PartnerLogo={"images/p5.png"}
              PartnerName={"PartnerName"}
            />
            <PartnerDetails
              PartnerLogo={"images/p6.png"}
              PartnerName={"PartnerName"}
            />
            <PartnerDetails
              PartnerLogo={"images/p1.png"}
              PartnerName={"PartnerName"}
            />
            <PartnerDetails
              PartnerLogo={"images/p2.png"}
              PartnerName={"PartnerName"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersSection;
