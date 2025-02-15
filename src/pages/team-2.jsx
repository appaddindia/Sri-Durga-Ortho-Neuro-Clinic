import SEO from "@/components/seo";
import TeamTwo from "@/components/team/team-two/team-two";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team 2" />
      <TeamTwo />
    </Wrapper>
  );
};

export default Index;;
