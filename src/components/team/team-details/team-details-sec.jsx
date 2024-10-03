import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Bannersec from "./Bannersec";
import TeamDetailsAreaSec from "./team-details-area-sec";

const TeamDetailsSec = () => {
  return (
    <>
      <HeaderTwo />
      <Bannersec />
      <TeamDetailsAreaSec />
      {/* <DirectContactUs /> */}
      <FooterFour />
    </>
  );
};

export default TeamDetailsSec;
