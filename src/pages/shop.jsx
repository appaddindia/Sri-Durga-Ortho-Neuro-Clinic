import SEO from "@/components/seo";
import Shop from "@/components/shop";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Shope" />
      <Shop />
    </Wrapper>
  );
};

export default Index;;
