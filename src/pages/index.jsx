import React from "react";
import Layout from "@/layout/layout";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import LayoutTwo from "@/layout/layout-2";
import HomeTwo from "@/components/home/home-2/hometwo";

const index = () => {
  return (
    <Wrapper>
      <LayoutTwo>
      <SEO pageTitle="Home Two" />
        <HomeTwo />
      </LayoutTwo>
    </Wrapper>
  );
};

export default index;
