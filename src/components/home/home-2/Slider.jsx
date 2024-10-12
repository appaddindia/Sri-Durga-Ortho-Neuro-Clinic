import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const banner = [
  {
    img1: "/assets/img/aa172.jpg",
    img2: "/assets/img/banner1.jpg",
  },
  {
    img1: "/assets/img/aa173.jpg",
    img2: "/assets/img/banner2.jpg",
  },
  {
    img1: "/assets/img/aa174.jpg",
    img2: "/assets/img/banner3.jpg",
  },
  
  
];

const setting = {
  // loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".blog-nxt",
    prevEl: ".blog-prv",
  },
};
function Slider() {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        modules={[Navigation]}
        loop={isLoop}
        {...setting}
        className="swiper-container blog-active"
      >
        {banner.map((elem, i) => (
          <SwiperSlide key={i}>
            <div style={{ width: "100%" }}>
              <div  className="d-lg-block d-none">
              <img
                className="topperscreen"
                style={{ width: "100%" }}
                src={elem.img1}
                alt=""
              />
              </div>
              <div  className="d-lg-none">
              <img
                className=""
                style={{ width: "100%" }}
                src={elem.img2}
                alt=""
              />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        style={{ position: "absolute", zIndex: "800" }}
        className="container"
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
          className="blog-arrow d-flex align-items-center"
        >
          <div className="blog-prv">
            <i className="fa-regular fa-arrow-left"></i>
          </div>
          <div className="blog-nxt">
            <i className="fa-regular fa-arrow-right"></i>
          </div>
        </div>
      </div>

      {/* <div
        style={{ padding: "0px 100px", width: "100%", position: "relative" }}
        className="team-arrow"
      >
        <div className="team-prv">
          <i className="fa-regular fa-arrow-left"></i>
        </div>
        <div className="team-nxt">
          <i className="fa-regular fa-arrow-right"></i>
        </div>
      </div> */}
    </div>
  );
}

export default Slider;
