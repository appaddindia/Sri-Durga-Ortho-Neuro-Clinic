import Link from "next/link";
import React from "react";

const Banner = ({bannername,bannerimg}) => {
  return (
    <>
      <section
        className="pt-120 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(${bannerimg})`,
          backgroundPosition:"center",
          backgroundSize:"cover"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">{bannername}</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-5 col-12">
              <div className="tp-breadcrumb__link d-flex align-items-center">
                <span>
                  Bioxlab : <Link href="/service">{bannername}</Link>
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
