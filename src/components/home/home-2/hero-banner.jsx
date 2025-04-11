import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const hero_slider = [
  {
    id: 1,
    left_img: "assets/img/about/about-bg-01.png",
    link: "/dr-surbhi-chaturvedi",
    experience_count: 12,
    experience_count_text: (
      <>
        Years of <br />
        Experience
      </>
    ),
    title: "Neurologist",
    section_title: "Dr. Surbhi Chaturvedi",
    section_sub_title:
      "MBBS, MD(Medicine), DM(Neurology), FCSC Fellowship in Stroke (Calgary)",
    section_des: (
      <>
        Dr. Surbhi Chaturvedi is a Consultant Neurologist with over 13 years of
        experience, specializing in stroke management, migraines, Parkinson’s
        disease, epilepsy, and other neurological disorders. A gold medalist in
        her studies, she has advanced expertise in digital EEG and EMG, and is a
        published author and international conference speaker.
      </>
    ),
    know_more: "/",
    img_1: "/assets/img/aa14.jpg",
    img_2: "../assets/img/aa164.png",
  },
  {
    id: 2,
    left_img: "assets/img/about/about-bg-01.png",
    link: "/dr-shashikanth-vokkaleri-orthopedic-excellence",
    experience_count: 13,
    experience_count_text: (
      <>
        Years of <br />
        Experience
      </>
    ),
    title: "Joint Replacement & Arthroscopic Surgeon",
    section_title: "Dr. Shashikanth Vokkaleri",
    section_sub_title:
      " MBBS (BMCRI), MS Orthopaedic (PGIMER), Senior Registrar (AIIMS New Delhi), Fellowship in Advanced Arthoplasty (SICOT), Fellowship in Shoulder & Knee Arthoscopy, (Royal College of Surgeons England)",
    section_des: (
      <>
        Dr. Shashikanth Vokkaleri is a Joint Replacement and Arthroscopic
        Surgeon with 13 years of experience. He is committed to preserving
        patients natural ligaments and joints to enhance their quality of life.
        He aims to provide affordable, high-quality, and suitable treatments by
        utilizing advanced science and technology in his practice.
      </>
    ),
    know_more: "/",
    img_1: "/assets/img/aa13.jpg",
    img_2: "../assets/img/aa163.png",
  },
];

// social_links
const social_links = [
  {
    name: "facebook",
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    color: "facebook-2",
  },
  {
    name: "youtube",
    link: "https://www.youtube.com/",
    target: "_blank",
    icon: "fab fa-youtube",
    color: "youtub-2",
  },
  {
    name: "twitter",
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
    color: "twitter-2",
  },
];

const setting = {
  // Optional parameters
  slidesPerView: 1,
  effect: "fade",
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: ".slider-n",
    prevEl: ".slider-p",
  },
};

const HeroBanner = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section
        style={{ backgroundColor: "#f0fff0" }}
        className="slider-area  pt-90 pb-90 p-relative"
      >
        <div style={{ backgroundColor: "#f0fff0" }} className="slider-social">
          <div style={{ backgroundColor: "#f0fff0" }} className="container">
            <div className="row">
              {/* <div className="col-lg-6 col-md-10 d-none d-md-block">
                <div className="slider-content__social">
                  {social_links.map((link, i) => (
                    <Link
                      key={i}
                      target={link.target}
                      className={link.color}
                      href={link.link}
                    >
                      <i className={link.icon}></i> {link.name}
                    </Link>
                  ))}
                </div>
              </div> */}
              <div className="col-lg-6 col-md-2 col-12  d-md-block">
                <div className="slider-content__arrow d-flex align-items-center">
                  <div className="slider-p">
                    <i className="fa-regular fa-arrow-left"></i>
                  </div>
                  <div className="slider-n">
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={isLoop}
          {...setting}
          className="swiper-container tp-slider slider-active"
        >
          {hero_slider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide ">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-12 order-2 order-lg-1">
                      {/* <div className="slider-content pt-60">
                        <h2 className="slider-content__title mb-45">
                          {item.title}
                        </h2>
                        <p>{item.des}</p>
                        <div className="slider-content__btn mb-165">
                          <Link className="tp-btn" href="/contact">
                            {item.appointment}
                          </Link>
                          <Link className="tp-btn-second ml-25" href="/about">
                            {item.about}
                          </Link>
                        </div>
                      </div> */}
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="tp-about__content pt-0 ml-60  wow fadeInRight"
                        data-wow-delay=".4s"
                      >
                        <div>
                          <div className="tp-section">
                            <span className="tp-section__sub-title left-line mb-25">
                              {item.title}
                            </span>
                            <h3
                              style={{ color: "#c61000" }}
                              className="tp-section__title tp-ab-sm-title mb-25"
                            >
                              {item.section_title}
                            </h3>
                            <i style={{ color: "black" }}>
                              {item.section_sub_title}
                            </i>
                            <p
                              style={{ color: "black" }}
                              className=" mr-20 mb-25"
                            >
                              {item.section_des}
                            </p>
                          </div>
                          {/* <div className="tp-about__info-list mb-55">
                  <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {list.text}
                      </li>
                    ))}
                  </ul>
                </div> */}
                          <div className="tp-about__btn">
                            <Link className="tp-btn" href={item.link}>
                              Know More
                            </Link>
                            <a
                              style={{ backgroundColor: "#c61000" }}
                              className="tp-btn-second ml-25"
                              href="https://click4appointment.com/clinic-details/sridurgaorthoneuroclinic-4196"
                            >
                              Book Appointment
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2">
                      <div className="slider-content__bg">
                        <img src={item.img_1} alt="about-thumb" />
                      </div>
                      <div className="slider-content__shape d-none d-md-block">
                        <img src={item.img_2} alt="slider-shape" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default HeroBanner;
