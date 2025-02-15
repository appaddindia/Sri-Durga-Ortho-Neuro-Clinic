import Research from "@/components/research/research";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Research" />
      <Research />
    </Wrapper>
  );
};

export default Index;;
