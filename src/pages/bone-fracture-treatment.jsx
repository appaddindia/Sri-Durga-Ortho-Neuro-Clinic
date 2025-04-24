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
      return item.title == "Bone Fracture Treatment";
    });
    setData(update);
  }, []);
  console.log(data);
  
  const router = useRouter();
  const [doctorData, setDoctorData] = useState([]);
  useEffect(() => {
    const data = article_data.filter((data) => data.link === router.pathname);
    setDoctorData(data);
    console.log("router", data);
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle="Sri Durga Ortho & Neuro Clinic" />
      <Blog data={data} doctorData={doctorData} />
    </Wrapper>
  );
};

export default Index;
