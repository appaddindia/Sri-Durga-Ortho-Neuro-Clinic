import Blog from "@/components/blog";
import SEO from "@/components/seo";
import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData]=useState(article_data)
  useEffect(()=>{
    const update=article_data.filter((item)=>{
      return item.title == "Dequervains release"
    })
    setData(update)
  },[])
  console.log(data)
  return (
    <Wrapper>
      <SEO pageTitle="Blog" />
      <Blog data={data}/>
    </Wrapper>
  );
};

export default Index;;
