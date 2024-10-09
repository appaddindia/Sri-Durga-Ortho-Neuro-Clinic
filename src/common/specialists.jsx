import Link from "next/link";
import React from "react";


// choose data
const choose = [
  {
    id: 1,
    color:"#fd7e14",
    icon: "/assets/img/development (1).png",
    title: (
      <>
        Advanced Options
      </>
    ),
    des: (
      <>
        Utilizing the latest innovative techniques for optimal patient outcomes.
      </>
    ),
  },
  {
    id: 2,
    color: "#F72A75",
    icon: "/assets/img/self-development.png",
    title: (
      <>
        Dedicated Specialist Duo
      </>
    ),
    des: (
      <>
        A pair of skilled and experienced doctors committed to your comprehensive care
      </>
    ),
  },
  {
    id: 3,
    color: "#457c42",
    icon: "/assets/img/comprehensive.png",
    title: (
      <>
        Comprehensive Care Approach
      </>
    ),
    des: (
      <>
        Holistic focus on comprehensive orthopedic and neurological health care needs.




      </>
    ),
  },
  {
    id: 4,
    color: "#0dcaf0",
    icon: "/assets/img/patient-care.png",
    title: (
      <>
        Patient-Centric Philosophy
      </>
    ),
    des: (
      <>
        Prioritizing your overall health and well-being with personalized treatment plans.
      </>
    ),
  },
];


const Specialists = () => {
  return (
    <>
      <section className="choose-area theme-bg pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span style={{color:"white"}} className="tp-section__sub-title left-line right-line mb-25">
                Sri Durga Ortho & Neuro Clinic
                </span>
                <h3 className="tp-section__title title-white mb-55">
                  Why Choose Us
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            {choose.map((item) => (
              <div key={item.id} className="col-xl-3 col-md-6">
                <div
                  className="tp-choose__item ml-75 mb-55 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <div style={{backgroundColor:item.color}} className={`tp-choose__icon ${item.color} mb-40`}>
                  <img 
            style={{ 
                width: "80px", 
                padding: "12px", 
            }} 
            src={item.icon} 
            alt="Icon" 
        />
                  </div>
                  <div className="tp-choose__content">
                    <h4 className="tp-choose__title mb-20">{item.title}</h4>
                    <p>{item.des}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="tp-choose-option">
                <span>
                Reach out with questions; our team is here to help :
                  <Link href="/">
                    Contact Us<i className="fa-solid fa-arrow-right"></i>
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

export default Specialists;
