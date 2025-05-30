import PricingPlan from "@/components/pricing-plan";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Pricing Plan" />
      <PricingPlan />
    </Wrapper>
  );
};

export default Index;;
