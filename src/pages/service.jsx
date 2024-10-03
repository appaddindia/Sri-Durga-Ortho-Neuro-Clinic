import SEO from "@/components/seo";
import ServiceOne from "@/components/services/service/service-one";
import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Services" />
      <ServiceOne data={article_data} bannername={"Services"} bannerimg={"/assets/img/aa149.jpg"}/>
    </Wrapper>
  );
};

export default Index;;
