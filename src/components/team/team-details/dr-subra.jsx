import DirectContactUs from "@/components/forms/direct-contact-us";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import React from "react";
import Banner from "./banner";
import TeamDetailsArea from "./team-details-area";
import Drsubratadetalis from "./dr-subrata-detalis";
import Link from "next/link";

const Drsubra = () => {
  return (
    <>
      <HeaderTwo />
      <section
        className="pt-120 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/aa28.avif)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Dr. Subrata Kumar Pal</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb__link text-xl-end">
                <span>
                  Sri Durga Ortho & Neuro Clinic :{" "}
                  <Link href="/">Dr. Subrata Kumar Pal</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Drsubratadetalis />
      {/* <DirectContactUs /> */}
      <FooterFour />
    </>
  );
};

export default Drsubra;
