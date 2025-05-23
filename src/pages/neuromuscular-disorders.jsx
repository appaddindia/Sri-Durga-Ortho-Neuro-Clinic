import Blog from "@/components/blog";
import SEO from "@/components/seo";
import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState(article_data);
  useEffect(() => {
    const update = article_data.filter((item) => {
      return item.title == "Neuromuscular Disorders";
    });
    setData(update);
  }, []);
  console.log(data);;

  return (
    <Wrapper>
      <SEO pageTitle="Sri Durga Ortho & Neuro Clinic" />
      <Blog data={data} />
    </Wrapper>
  );
};

export default Index;
