import About from "@/components/about/about";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="About" />
      <About />
    </Wrapper>
  );
};

export default Index;;
