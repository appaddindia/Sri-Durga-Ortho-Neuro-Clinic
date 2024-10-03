import React from "react";
import BlogDetails from "@/components/blog-details/blog-details";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
const Index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="Blog Details" />
      <BlogDetails />
    </Wrapper>
  );
};

export default Index;;
