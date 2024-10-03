import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section
        className="pt-120 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/aa30.avif)`,
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-7 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Blog Details</h2>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 col-md-5 col-12">
              <div className="tp-breadcrumb__link d-flex align-items-center">
                <span>
                  Bioxlab : <Link href="/blog-details"> Blog Detaails</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
