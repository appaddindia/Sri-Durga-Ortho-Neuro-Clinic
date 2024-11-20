import SEO from "@/components/seo";
import ServiceThree from "@/components/services/service-three";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Service-3" />
      <ServiceThree />
    </Wrapper>
  );
};

export default Index;;
