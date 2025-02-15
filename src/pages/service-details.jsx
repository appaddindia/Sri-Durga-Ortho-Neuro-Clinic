import SEO from "@/components/seo";
import ServiceDetails from "@/components/services/service-details/service-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Service Details" />
      <ServiceDetails />
    </Wrapper>
  );
};

export default Index;;
