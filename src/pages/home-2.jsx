import HomeTwo from "@/components/home/home-2/hometwo";
import HomeOne from "@/components/home/home/home";
import SEO from "@/components/seo";
import LayoutTwo from "@/layout/layout-2";
import Wrapper from "@/layout/wrapper";
import { Layout } from "antd";
import React from "react";

const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Home Main" />
      <Layout>
        <HomeOne />
      </Layout>
    </Wrapper>
  );
};

export default Index;;
