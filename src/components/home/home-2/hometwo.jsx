import Brands from "@/common/brands";
import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Choose from "./choose";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import NewsLetter from "./news-letter";
import Service from "./service";
import Team from "./team";
import Testimonial from "../../../common/testimonial";
import Blog from "./blog";
import Feedback from "../home/feedback";
import Blogs from "../home/blog";
import Cta_Area from "../home/cta-area";
import Specialists from "@/common/specialists";
import Slider from "./Slider";




const HomeTwo = () => {
  return (
    <>
    <Slider/>
      <About />
      <Service /> 
      <Cta_Area />
      <Blogs />
      <HeroBanner />
      {/* <Gallery /> */}
      {/* <Counter cls="pt-80 pb-100" /> */}
      {/* <Choose /> */}
      {/* <Appointment /> */}
      {/* <Brands border_style={true} /> */}
      {/* <Team /> */}
      <Specialists />
      <Feedback />
      {/* <Testimonial bg_img={true} /> */}
      <Blog />
      {/* <NewsLetter /> */}
    </>
  );
};

export default HomeTwo;
