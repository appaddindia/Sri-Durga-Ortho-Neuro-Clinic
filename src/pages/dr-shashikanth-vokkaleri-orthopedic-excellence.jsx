import SEO from "@/components/seo";
import TeamDetails from "@/components/team//";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team Details" />
      <TeamDetails />
    </Wrapper>
  );
};

export default Index;;
