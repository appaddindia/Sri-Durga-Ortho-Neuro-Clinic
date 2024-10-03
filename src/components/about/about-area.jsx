import Count from "@/common/count";
import Link from "next/link";
import React from "react";

const AboutArea = () => {

  const about_content = {
    about_bg: "/assets/img/shape/shape-bg-05.png",
    about_img: "/assets/img/about/about-bg-02.png",
    popup_video: "https://www.youtube.com/watch?v=-BpXNPHiB2U",
    about_thumb: "/assets/img/about/about-bg-03.png",
    title: "Sri Durga Ortho & Neuro Clinic",
    sub_title: "About",
    des_1: (
      <>
       
Comprehensive Orthopedic and Neurological Care at Sri Durga Clinic: Your Pathway to Health and Healing.
      </>
    ),
    dex_2: (
      <>Sri Durga Ortho & Neuro Clinic is a premier healthcare facility specializing in orthopedic and neurological treatments. Our skilled team includes Dr. Shashikanth Vokkaleri, a Joint Replacement and Arthroscopic Surgeon, and Dr. Surbhi Chaturvedi, an award-winning Neurologist. We offer services like knee and hip replacements, arthroscopy, and neurological disorder management, prioritizing advanced care for your health and well-being. Book your appointment today!
      </>
    ),
    btn: "Know More",

    // booking data
    booking_bg: "/assets/img/shape/shape-bg-04.png",
    b_sub_title: "book Free sampling",
    b_title: (
      <>
        Free Sampling at your <br /> Home Adress
      </>
    ),
    b_btn: "Book Now",
    b_img: "/assets/img/shape/logo-shape-1.png",
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
  return (
    <>
      <section className="about-area pt-110 pb-60">
        <div className="container">
          <div className="row">
          <div className="col-xl-6 col-lg-8 col-12">
          <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span className="tp-section__sub-title left-line mb-25">
                      {sub_title}
                    </span>
                    <h3 className="tp-section__title mb-25">{title}</h3>
                    <i>{des_1}</i>
                    <p className=" mr-20 mb-25">{dex_2}</p>
                  </div>
                  <div className="about-content__btn">
                    <Link href="/contact" className="tp-btn">
                      Book Appointment
                    </Link>
                  </div>
                </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-12">
              <div
                className="tp-about-thumb mb-60 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="tp-ab-img d-flex">
                  <div className="tp-ab-main-img p-relative">
                    <img
                      src="/assets/img/aa23.jpg"
                      alt="about-thumb"
                    />
                    <div className="about__exprience tp-ab-counter">
                      <h3 className="counter">

                        <Count add_style={true} number={12} />
                      </h3>
                      <i>
                        Years of <br />
                        Experience
                      </i>
                    </div>
                  </div>
                  <div className="tp-ab-shape d-none d-md-block d-lg-none d-xl-block">
                    <img
                      className="ab-shape-one"
                      src="/assets/img/aa24.jpg"
                      alt="about-shape"
                    />
                    <img
                      className="ab-shape-two"
                      src="/assets/img/aa25.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
