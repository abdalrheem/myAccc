import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <>
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Services</span>
              </h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </p>
            </div>
            <SimpleGrid width={"100%"} minChildWidth="250px" spacing="40px">
              <ServiceCard
                text={
                  "Acorac Group Consulting services address a variety of sectors by combining technology, expertise, and strategic capabilities."
                }
                label={"Digital Technology"}
                Imgsrc={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
              <ServiceCard
                text={
                  "Giving you a competitive advantage, we offer and share technical services that will lead to your long-term sustainability in technical leadership."
                }
                label={"Technical Leadership"}
                Imgsrc={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
              <ServiceCard
                text={
                  "We have expert solutions that are adaptable to solve the problems and difficulties faced by clients in their IT businesses."
                }
                label={"Solutions"}
                Imgsrc={
                  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                }
              />
            </SimpleGrid>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
