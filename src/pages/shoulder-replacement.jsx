import SEO from "@/components/seo";
import ServiceOne from "@/components/services/service/service-one";
import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import React, { useEffect, useState } from "react";

const Index = () => {
    const [data, setData]=useState(article_data)
  useEffect(()=>{
    const update=article_data.filter((item)=>{
      return item.submain == "Shoulder Replacement"
    })
    setData(update)
  },[])
  return (
    <Wrapper>
      <SEO pageTitle="Services" />
      <ServiceOne data={data} bannername={"Shoulder Replacement"} bannerimg={"/assets/img/aa157.jpg"}/>
    </Wrapper>
  );
};

export default Index;;
