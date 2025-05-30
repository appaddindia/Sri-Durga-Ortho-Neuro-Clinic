import FooterComponent from "@/components/cart/footerComponent";
import ScrollToTop from "hooks/scroll-to-top";
import React,{useEffect} from "react";
import { animationCreate } from "utils/utils";

const Wrapper = ({ children }) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate()
    }, 500);
  },[])
  return (
    <>
      {children}
      <ScrollToTop />
      <FooterComponent/>
    </>
  );
};

export default Wrapper;
