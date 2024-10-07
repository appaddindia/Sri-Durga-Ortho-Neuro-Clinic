import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useState } from "react";

const About = () => {
  // about content data
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

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        className="about-area grey-bg pt-90 tp-box-space pb-90 ml-30 mr-30"
        style={{
          backgroundImage: `url(${about_bg})`,
        }}
      >
        <div className="about-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-thumb text-lg-center p-relative ml-85 mb-0 wow fadeInLeft"
                  data-wow-delay=".3s"
                >
                  <img src={about_img} alt="about-thumb" />
                  {/* <div className="about-video">
                    <button
                      onClick={() => setIsVideoOpen(true)}
                      className="popup-video"
                      href={popup_video}
                    >
                      <i className="fa-solid fa-play"></i>
                    </button>
                  </div> */}
                  <div className="about-thumb-shape d-none d-md-block">
                    <img src={about_thumb} alt="about-shape" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-12">
                <div
                  className="about-content ml-60 mb-60 wow fadeInRight"
                  data-wow-delay=".3s"
                >
                  <div className="tp-section">
                    <span  className="tp-section__sub-title left-line mb-25">
                      {sub_title}
                    </span>
                    <h3  style={{color:"#c61000"}} className="tp-section__title mb-25">{title}</h3>
                    <i>{des_1}</i>
                    <p style={{color:"black"}} className=" mr-20 mb-25">{dex_2}</p>
                  </div>
                  <div className="about-content__btn">
                    <Link  href="/about" className="tp-btn">
                      {btn}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-0 mt-50">
            <div className="col-lg-12">
              <div style={{padding:"20px 30px"}} className="search-form">
                <form action="#">
                  <input style={{padding:"25px"}} type="text" placeholder="Reach out, we’re here to help!" />
                  <button className="tp-btn search-btn" type="submit">
                    Submit
                    <i className="fa-light fa-magnifying-glass ml-5"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
        
        {/* <div className="cta-area pt-75 ">
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
                      <button className="tp-btn-second">{b_btn}</button>
                    </div>
                    <div className="cta-shape d-none d-md-block">
                      <img src={b_img} alt="cta-logo-shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      /> */}
      {/* video modal end */}
    </>
  );
};

export default About;
