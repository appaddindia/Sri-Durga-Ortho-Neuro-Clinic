import Link from "next/link";
import React, { useState } from "react";

const Cta_Area = () => {
  const about_content = {
    about_bg: "/assets/img/shape/shape-bg-05.png",
    about_img: "/assets/img/about/about-bg-02.png",
    popup_video: "https://www.youtube.com/watch?v=-BpXNPHiB2U",
    about_thumb: "/assets/img/about/about-bg-03.png",
    title: "Best Laboratory For Testing And Research",
    sub_title: "About",
    des_1: (
      <>
        Your full service lab for clinical trials. Our mission is to ensure the
        generation of accurate and precise findings
      </>
    ),
    dex_2: (
      <>
        Exerci tation ullamcorper suscipit lobortis nisl aliquip ex ea commodo
        claritatem insitamconse quat.Exerci tation ullamcorper suscipit loborti
        excommodo habent claritatem insitamconse quat.Exerci tationlobortis nisl
        aliquip ex ea commodo habent claritatem insitamconse quat.
      </>
    ),
    btn: "Talk with Expart",

    // booking data
    booking_bg: "/assets/img/aa165.png",
    b_sub_title: "book Appointment",
    b_title: (
      <>
        Reach out with inquiries<br/> our team is ready to help
      </>
    ),
    b_btn: "Book Now",
    b_img: "/assets/img/logo/logo.jpg",
  };
  const {
    about_bg,
    about_img,
    popup_video,
    about_thumb,
    sub_title,
    title,
    des_1,
    dex_2,
    btn,
    booking_bg,
    b_sub_title,
    b_title,
    b_btn,
    b_img,
  } = about_content;

  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <>
      {/* <section className="cta-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="cta-bg theme-light-bg pt-65 pb-70"
                style={{
                  backgroundImage: `url("/assets/img/shape/shape-bg-03.png")`,
                }}
              >
                <div className="cta-content ml-90">
                  <h2 className="cta-title mb-35">
                    Looking for a best <br /> lebatory Service
                  </h2>
                  <a href="tel:+9159008855" className="tp-cta-btn">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="white" />
                      <circle cx="7" cy="2" r="2" fill="white" />
                      <circle cx="12" cy="2" r="2" fill="white" />
                      <circle cx="12" cy="7" r="2" fill="white" />
                      <circle cx="12" cy="12" r="2" fill="white" />
                      <circle cx="7" cy="7" r="2" fill="white" />
                      <circle cx="7" cy="12" r="2" fill="white" />
                      <circle cx="7" cy="17" r="2" fill="white" />
                      <circle cx="2" cy="7" r="2" fill="white" />
                      <circle cx="2" cy="12" r="2" fill="white" />
                    </svg>
                    <span>Call :</span>+91 590 088 55
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <div className="cta-area pt-75 contantbox">
          <div className="container">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="col-lg-12">
                <div
                  className="tp-cta-bg p-relative theme-light-bg pt-65 pb-70"
                  style={{
                    backgroundImage: `url(${booking_bg})`,
                  }}
                >
                  <div className="cta-content ml-90">
                    <div className="tp-section">
                      <span className="tp-section__sub-title sub-title-white left-line-white mb-20">
                        {b_sub_title}
                      </span>
                    </div>
                    <h2 className="cta-title mb-30">{b_title}</h2>
                    <div className="cta-btn">
                      <a href="https://api.whatsapp.com/send/?phone=9980445660&text=Hello"  className="tp-btn-second">{b_btn}</a>
                    </div>
                    <div className="cta-shape d-none d-md-block">
                      <img style={{width:"80px",marginTop:"-9px"}} src={b_img} alt="cta-logo-shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Cta_Area;
