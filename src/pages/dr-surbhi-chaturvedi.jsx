import SEO from "@/components/seo";
import TeamDetailsSec from "@/components/team//-sec";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team Details" />
      <TeamDetailsSec />
    </Wrapper>
  );
};

export default Index;;
