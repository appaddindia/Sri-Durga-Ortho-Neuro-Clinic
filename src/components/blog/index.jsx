import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import PostBox from "./post-box";

const Blog = ({ data, doctorData }) => {
  return (
    <>
      <HeaderTwo />
      <Banner data={data} />
      <PostBox data={data} doctorData={doctorData} />
      <FooterFour />
    </>
  );
};

export default Blog;
