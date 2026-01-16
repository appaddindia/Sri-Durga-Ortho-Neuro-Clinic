import SEO from "@/components/seo";
import Drsubra from "@/components/team/team-details/dr-subra";
import TeamDetails from "@/components/team/team-details/team-details";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Dr. Subrata Kumar Pal" />
      <Drsubra />
    </Wrapper>
  );
};

export default Index;
