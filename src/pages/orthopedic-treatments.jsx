import SEO from "@/components/seo";
import ServiceOne from "@/components/services/service/service-one";
import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import React, { useEffect, useState } from "react";

const index = () => {
    const [data, setData]=useState(article_data)
  useEffect(()=>{
    const update=article_data.filter((item)=>{
      return item.main == "Orthopedic Treatments"
    })
    setData(update)
  },[])
  return (
    <Wrapper>
      <SEO pageTitle="Services" />
      <ServiceOne data={data} bannername={"Orthopedic Treatments"} bannerimg={"/assets/img/aa151.jpg"}/>
    </Wrapper>
  );
};

export default index;
