import React from "react";
import FooterTwo from "./footer/footer-2";
import HeaderTwo from "./header/header-two";
import FooterFour from "./footer/footer-4";
import FooterComponent from "@/components/cart/footerComponent";

const LayoutTwo = ({ children }) => {
  return (
    <>
      <HeaderTwo />
      <main>{children}</main>
      {/* <FooterTwo /> */}
      <FooterFour />
    </>
  );
};

export default LayoutTwo;
