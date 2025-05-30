import SEO from "@/components/seo";
import TeamDetailsSec from "@/components/team/team-details/team-details-sec";
import Wrapper from "@/layout/wrapper";
import React from "react";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Team Details" />
      <TeamDetailsSec />
    </Wrapper>
  );
};

export default index;
