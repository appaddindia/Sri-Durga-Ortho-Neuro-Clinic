import Counter from "@/common/counter";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import AboutArea from "./about-area";
import Banner from "./banner";
import Specialists from "@/common/specialists";
import NavTab from "@/common/nav-tab";
import Team from "@/common/team";
import FooterFour from "@/layout/footer/footer-4";
import Feedback from "../home/home/feedback";
import Blog from "../home/home-2/blog";
import HeroBanner from "../home/home-2/hero-banner";
import ServiceDetailsArea from "../services/service-details/service-details-area";
import Cta_Area from "../home/home/cta-area";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Banner />
      <AboutArea />
      <ServiceDetailsArea />
      <Cta_Area />
      {/* <HeroBanner /> */}
      {/* <Counter /> */}
      {/* <Specialists /> */}
      {/* <Feedback /> */}
      {/* <Testimonial bg_img={true} /> */}
      <Blog />
      {/* <NavTab /> */}
      {/* <Team /> */}
      <FooterFour />
    </>
  );
};

export default About;
