import SEO from "@/components/seo";
import ServiceOne from "@/components/services/service/service-one";
import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import React, { useEffect, useState } from "react";

const Index = () => {
    const [data, setData]=useState(article_data)
  useEffect(()=>{
    const update=article_data.filter((item)=>{
      return item.main == "Orthopedic Surgery"
    })
    setData(update)
  },[])
  return (
    <Wrapper>
      <SEO pageTitle="Services" />
      <ServiceOne data={data} bannername={"Orthopedic Surgery"} bannerimg={"/assets/img/aa150.jpg"}/>
    </Wrapper>
  );
};

export default Index;;
