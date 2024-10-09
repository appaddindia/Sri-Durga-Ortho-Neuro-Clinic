import article_data from "@/data/article-data";
import blog_data from "@/data/blog-data";
import service_data from "@/data/service";
import Link from "next/link";
import React from "react";




const Servicerow = ({data}) => {
  return (
    <>
      <section className="services-area pt-90 pb-90">
        <div className="container">
          {/* <div className="row align-items-end  mb-45">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-30">Service Area</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="services-link text-md-start text-lg-end mb-30">
                <span>
                  Well ensure you always get the best results:
                  <Link href="/contact">
                    Contact us<i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div> */}
          
          <div className="row mb-15">
            {data.map((item,i) => (
              // <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
              //   <div
              //     className={`services-item tp-services-item mb-50 ml-${item.ml} wow fadeInUp`}
              //     data-wow-delay=".2s"
              //   >
              //     <div
              //       className={`services-item__icon ${item.color_icon} mb-30`}
              //     >
              //       <i className={item.icon}></i>
              //     </div>
              //     <div className="services-item__content">
              //       <h5 className="services-item__tp-title mb-30">
              //         <Link href="/services-details">{item.title}</Link>
              //       </h5>
              //       <p>{item.des}</p>
              //     </div>
              //   </div>
              // </div>
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 mb-25">
                    <div className="tp-blog__thumb p-relative fix">
                      <a href="#">
                        
                        <div style={{width:"100%",aspectRatio:"3/2",backgroundImage: `url(${item.img})`,
          backgroundPosition:"center",
          backgroundSize:"cover"}}></div>
                      </a>
                      <span className="tp-blog__date text-center">
                        <Link href="/blog-details">{item.blog_date}</Link>
                      </span> 
                      {/* <div className="tp-blog__date text-center">
                        <h4>{item.blog_date}</h4>
                      </div> */}
                    </div>
                    <div  style={{backgroundColor:"#f0fff0"}} className="tp-blog__content" >
                      {/* <span className="tp-blog__category mb-30">
                        <Link href="/blog-details">{item.blog_category}</Link>
                      </span> */}
                      <h5 className="tp-blog__title mb-10">
                        <Link style={{color:"#2a4825"}} href={item.link}>{item.title}</Link>
                      </h5>
                      <p style={{marginBottom:"15px"}}>{`${item.subdes.slice(0,80)}...`}</p>
                      <div  className="tp-blog__btn">
                        <Link  style={{backgroundColor:"#2a4825",color:"white"}}  href={item.link}>Read moRe</Link>
                      </div>
                    </div>
                  </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-link text-center">
                <span>
                Reach out with questions; our team is here to help
                  <Link href="/contact">
                  Contact Us
                    <i className="fa-regular fa-arrow-right"></i>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicerow;
