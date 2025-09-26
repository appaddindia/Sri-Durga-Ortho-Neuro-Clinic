import MobileMenus from "@/layout/header/mobile-menus";
import ImagePopup from "@/modals/ImagePopup";
import Link from "next/link";
import React, { useState } from "react";

const images = [
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  },
];

const Sidebar = ({ isActive, setIsActive }) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img);

  return (
    <>
      <div
        className={`tpsideinfo tp-side-info-area ${
          isActive ? "tp-sidebar-opened" : ""
        }`}
      >
        <button
          onClick={() => setIsActive(false)}
          className="tpsideinfo__close"
        >
          <i className="fal fa-times"></i>
        </button>
        <div className="tpsideinfo__logo mb-40">
          <Link href="/">
            <img src="/assets/img/logo/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="mobile-menu mean-container d-block d-lg-none">
          <div className="mean-bar">
            <MobileMenus />
          </div>
        </div>

        <div className="tpsideinfo__content mb-60">
          <p className=" d-none d-xl-block">
            Sri Durga Ortho & Neuro Clinic offers expert orthopedic and
            neurological care. Led by Dr. Shashikanth Vokkaleri and Dr. Surbhi
            Chaturvedi, we provide advanced treatments. Book your appointment
            today!
          </p>
          <span>Contact Us</span>
          <a style={{ display: "flex" }} href="#">
            <i style={{ marginTop: "4px" }} className="fa-solid fa-star"></i>1st
            Floor, Shiva Ram Karanath Nagar, No. 42 & 25, 80 Feet Rd, MCEHS
            Layout, Rachenahalli,Hegde Nagar , Bengaluru, Karnataka 560077
          </a>
          <a style={{ display: "flex" }} href="tel:9980445660">
            <i style={{ marginTop: "4px" }} className="fa-solid fa-star"></i>
            9980445660
          </a>
          <a
            style={{ display: "flex" }}
            href="mailto:sridurgaorthoneuroclinic@gmail.com"
          >
            <i style={{ marginTop: "4px" }} className="fa-solid fa-star"></i>
            sridurgaorthoneuroclinic@gmail.com
          </a>
        </div>
        <div className="tpsideinfo__content-inputarea mb-60 d-none d-xl-block">
          <span>Get Update</span>
          <div className="tpsideinfo__content-inputarea-input">
            <form action="#">
              <input type="email" placeholder="Enter Mail" />
              <button className="tpsideinfo__content-inputarea-input-btn">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="tpsideinfo__gallery mb-35 d-none d-xl-block">
          <span>Cheack Instagram Post</span>
          <div className="tpsideinfo__gallery-item">
            {images.map((item, i) => (
              <a
                key={i}
                style={{ cursor: "pointer" }}
                onClick={() => handleImagePopup(i)}
                className="popup-image"
              >
                <img src={item.img} alt="" />
              </a>
            ))}
          </div>
        </div>
        <div className="tpsideinfo__socialicon">
          <a href="https://www.youtube.com/@sridurgaorthoneuroclinic/">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://share.google/A4V80uN5VjBv7GHGx">
            <i className="fa-brands fa-google"></i>
          </a>
          <a href="https://www.facebook.com/sridurgaorthoandneuro/">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/sridurgaorthoneuroclinic/">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      <div
        onClick={() => setIsActive(false)}
        className={`body-overlay ${isActive ? "opened" : ""}`}
      ></div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;
