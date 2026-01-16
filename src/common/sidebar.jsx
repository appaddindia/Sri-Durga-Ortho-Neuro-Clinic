"use client";

import MobileMenus from "@/layout/header/mobile-menus";
import ImagePopup from "@/modals/ImagePopup";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const images = [
  {
    title: "YouTube Shorts",
    type: "youtube",
    src: "https://www.youtube.com/embed/7k_hXzHi0XA",
  },
  // {
  //   title: "Instagram Reel",
  //   type: "instagram",
  //   src: "https://www.instagram.com/reel/DSKHM8Qgmz-/",
  // },
  {
    title: "Instagram Post",
    type: "image",
    src: "/assets/img/insta-post.jpg",
  },
  {
    title: "Facebook Post",
    type: "image",
    src: "/assets/img/facebook-post.jpg",
  },
];

const InstagramEmbed = ({ url }) => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ width: "10px", maxWidth: "10px" }}
    ></blockquote>
  );
};

const Sidebar = ({ isActive, setIsActive }) => {
  const [photoIndex, setPhotoIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const img = images.map((item) => item.src);

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
            <i style={{ marginTop: "4px" }} className="fa-solid fa-star"></i>
            1st Floor, Shiva Ram Karanath Nagar, No. 42 & 25, 80 Feet Rd, MCEHS
            Layout, Rachenahalli, Hegde Nagar, Bengaluru, Karnataka 560077
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
            <a
              href="https://click4appointment.com/clinic-details/sridurgaorthoneuroclinic-4196"
              className="header-bottom-btn"
            >
              Book Appointment
            </a>
          </div>
        </div>

        {/* GALLERY */}
        <div className="tpsideinfo__gallery mb-35 d-none d-xl-block">
          <span>Check our Posts</span>

          <div className="tpsideinfo__gallery-item">
            {images.map((item, i) => (
              <a
                key={i}
                style={{
                  cursor: "pointer",
                  padding: "5px",
                  textAlign: "start ",
                }}
                onClick={() => handleImagePopup(i)}
                className="popup-image"
              >
                {" "}
                <span> {item.title}</span>
                {item.type === "youtube" && (
                  <iframe
                    src={item.src}
                    title="YouTube Shorts"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      borderRadius: "8px",
                    }}
                  />
                )}
                {/* {item.type === "instagram" && <InstagramEmbed url={item.src} />} */}
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt="post"
                    style={{
                      height: "180px",
                      width: "85%",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                )}
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

      {/* IMAGE POPUP */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
};

export default Sidebar;
