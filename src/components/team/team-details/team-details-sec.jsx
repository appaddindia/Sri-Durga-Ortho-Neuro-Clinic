import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import TeamDetailsArea from "./-area";
import TeamDetailsAreaSec from "./-area-sec";
import Bannersec from "./Bannersec";

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
