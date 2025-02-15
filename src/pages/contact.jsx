import ContactUs from "@/components/contact/contact";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"contact us"} />
      <ContactUs />
    </Wrapper>
  );
};

export default Index;;
