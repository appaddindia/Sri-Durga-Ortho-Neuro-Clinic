
import Banner from "@/components/about/banner";
import SEO from "@/components/seo";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import React from "react";

const Index = () => {
    const gallery=[
        "/assets/img/aa178.jpg",
        "/assets/img/aa179.jpg",
        "/assets/img/aa180.jpg",
        "/assets/img/aa181.jpg",
        "/assets/img/aa182.jpg"
    ]
  return (
    <Wrapper>
      <SEO pageTitle="About" />
      <HeaderTwo />
      <section
        className="pt-120 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/aa177.avif)`,
          backgroundPosition:"center",
          backgroundSize:"cover"
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Gallery</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb__link text-xl-end">
                <span>
                  Sri Durga Ortho & Neuro Clinic : <Link href="/"> Gallery</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  className="blog-area pt-90 pb-90">
        <div className="container">
          {/* <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  Waht’s New
                </span>
                <h3 className="tp-section__title mb-65">Blog & Article</h3>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-blog-arrow d-flex align-items-center">
                <div className="tp-blog-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="tp-blog-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div> */}
          
            <div className="row">
            {gallery.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 col-12">
                  <div className="tp-blog mb-30">
                    <div className="tp-blog__thumb p-relative fix">
                      <a href="#">
                      <div style={{width:"100%",aspectRatio:"3/2",backgroundImage: `url(${item})`,
          backgroundPosition:"center",
          backgroundSize:"cover"}}></div>
                        {/* <img src={item.img} alt="blog-item" /> */}
                      </a>
                      {/* <div className="tp-blog__date text-center">
                        <h4>{item.blog_date}</h4>
                      </div> */}
                    </div>
                  </div>
                </div>
            ))}
            </div>
          
        </div>
      </section>
      
      <FooterFour />
    </Wrapper>
  );
};

export default Index;;
