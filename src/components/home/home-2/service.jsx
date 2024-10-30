import blog_data from "@/data/blog-data";
import service_data from "@/data/service";
import Link from "next/link";
import React from "react";


const servicedata = [
  {
    id: 1,
    img: "/assets/img/aa1.jpg",
    link: "/knee-replacement",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_category: "Medicine",
    blog_title: (
      <>
       Knee Replacement
      </>
    ),
    blog_des: (
      <>
        
Knee replacement surgery, or knee arthroplasty, is a procedure to replace a damaged or wo...
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/img/aa2.jpg",
    link: "/knee-arthroscopy",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_category: "Medicine",
    blog_title: (
      <>
        Knee Arthroscopy
      </>
    ),
    blog_des: (
      <>
        Knee arthroscopy is a minimally invasive surgical procedure used to diagnose and trea...
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/img/aa3.jpg",
    link: "/hip-replacement",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_category: "Medicine",
    blog_title: (
      <>
        Hip Replacement
      </>
    ),
    blog_des: (
      <>
        
Hip replacement surgery, also known as hip arthroplasty, involves replacing a da...
      </>
    ),
  },

  {
    id: 4,
    img: "/assets/img/aa168.jpg",
    link: "/shoulder-replacement",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_title: (
      <>
        Shoulder Replacement
      </>
    ),
    blog_category: "Shoulder Replacement",
    blog_des: (
      <>
        Shoulder replacement surgery is a procedure used to relieve pain...
      </>
    ),
  },
  {
    id: 5,
    img: "/assets/img/aa4.jpg",
    link: "/hip-arthroscopy",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_title: (
      <>
        Hip Arthroscopy
      </>
    ),
    blog_category: "Medicine",
    blog_des: (
      <>
        Hip arthroscopy is a minimally invasive surgical procedure used to diagnose a...
      </>
    ),
  },
  {
    id: 6,
    img: "/assets/img/aa169.jpg",
    link: "/shoulder-arthroscopy",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_title: (
      <>
        Shoulder Arthroscopy
      </>
    ),
    blog_category: "Shoulder Arthroscopy",
    blog_des: (
      <>
        Shoulder arthroscopy is a minimally invasive surgical procedure used to diagnose and treat ...
      </>
    ),
  },
  {
    id: 7,
    img: "/assets/img/aa170.jpg",
    link: "/ankle-surgery",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_title: (
      <>
        Ankle Surgery
      </>
    ),
    blog_category: "Ankle Surgery",
    blog_des: (
      <>
        Ankle surgery can address various conditions affecting the ankle joint, sucjuries, arthritis...
      </>
    ),
  },
  {
    id: 8,
    img: "/assets/img/aa171.jpg",
    link: "/elbow-surgery",
    blog_date: (
      <>
        <span >Orthopedic Surgery</span>
      </>
    ),
    blog_title: (
      <>
        Elbow Surgery
      </>
    ),
    blog_category: "Elbow Surgery",
    blog_des: (
      <>
        Elbow surgery can address various conditions affecting the elbow joint, such as inju...
      </>
    ),
  },
  {
    id: 9,
    img: "/assets/img/aa31.avif",
    link: "/bone-fracture-treatment",
    blog_date: (
      <>
        <span >Orthopedic Treatments</span>
      </>
    ),
    blog_title: (
      <>
       Bone Fracture Treatment
      </>
    ),
    blog_category: "Medicine",
    blog_des: (
      <>
        Plaster application for fractures is a common method used...
      </>
    ),
  },
  {
    id: 10,
    img: "/assets/img/aa32.jpg",
    link: "/plaster-application-fractures",
    blog_date: (
      <>
        <span >Orthopedic Treatments</span>
      </>
    ),
    blog_title: (
      <>
        Plaster application for fractures
      </>
    ),
    blog_category: "Medicine",
    blog_des: (
      <>
        Surgeries around the knee are performed to address vario...
      </>
    ),
  },
  {
    id: 11,
    img: "/assets/img/aa33.avif",
    link: "/orthopedic-treatments",
    blog_date: (
      <>
        <span >Orthopedic Treatments</span>
      </>
    ),
    blog_title: (
      <>
        Unicondylar knee replacement
      </>
    ),
    blog_category: "Medicine",
    blog_des: (
      <>
        
Unicondylar knee replacement (UKR), also known as unico...
      </>
    ),
  },
  {
    id: 12,
    img: "/assets/img/aa34.avif",
    link: "/tendo-achilles-tendinitis",
    blog_date: (
      <>
        <span >Orthopedic Treatments</span>
      </>
    ),
    blog_title: (
      <>
        Tendo Achilles tendinitis
      </>
    ),
    blog_category: "Medicine",
    blog_des: (
      <>
        
Achilles tendinitis is an overuse injury causing pain...
      </>
    ),
  },
];

const Service = () => {
  return (
    <>
      <section className="services-area pt-90 pb-0">
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
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                Orthopedic & Trauma
                </span>
                <h3 style={{color:"#c61000"}} className="tp-section__title title-white mb-55">
                Orthopedic and Trauma Solutions
                </h3>
              </div>
            </div>
          </div>
          <div className="row mb-15">
            {servicedata.map((item) => (
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
                      <Link href={item.link}>
                        <img src={item.img} alt="blog-item" />
                      </Link>
                      <span style={{backgroundColor:"rgba(0, 0, 0, 0.362)",padding:"1px 8px",color:"white"}} className="tp-blog__date text-center">
                        <Link href={item.link}>{item.blog_date}</Link>
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
                        <Link href={item.link}>{item.blog_title}</Link>
                      </h5>
                      <p style={{marginBottom:"15px",color:"black"}}>{item.blog_des}</p>
                      <div  className="tp-blog__btn">
                        <Link style={{backgroundColor:"#2a4825",color:"white"}}  href={item.link}>Read moRe</Link>
                      </div>
                    </div>
                  </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-link text-center">
                <span>
                Discover In-Depth Details About Our:
                  <Link href="/service">
                    More Services
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

export default Service;
