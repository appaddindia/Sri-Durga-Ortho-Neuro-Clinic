import blog_data from "@/data/blog-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";



const servicedata = [
  {
    id: 1,
    img: "/assets/img/aa9.jpg",
    link: "/headache",
    blog_date: (
      <>
        Neurological Treatments
      </>
    ),
    blog_category: "Medicine",
    blog_title: (
      <>
        Headache
      </>
    ),
    blog_des: (
      <>
        Headaches are a common symptom in various neurological conditions, and their management can be complex...
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/img/aa10.jpg",
    link: "/memory-disorder",
    blog_date: (
      <>
        Neurological Treatments
      </>
    ),
    blog_category: "Medicine",
    blog_title: (
      <>
        Memory Disorder
      </>
    ),
    blog_des: (
      <>
        Memory disorders can significantly impact an individual’s daily life and functioning. Here’s an overview of key aspects...
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/img/aa11.jpg",
    link: "/neuromuscular-disorders",
    blog_date: (
      <>
        Neurological Treatments
      </>
    ),
    blog_category: "Medicine",
    blog_title: (
      <>
        Neuromuscular Disorders
      </>
    ),
    blog_des: (
      <>
        Neuromuscular disorders are a group of diseases that affect the nerves controlling voluntary muscles, leading to weakness...
      </>
    ),
  },

  {
    id: 4,
    img: "/assets/img/aa12.jpg",
    link: "/pediatric-neurology",
    blog_date: (
      <>
        Neurological Treatments
      </>
    ),
    blog_category: "Medicine",
    blog_title: "Pediatric Neurology",
    blog_des: (
      <>
        Pediatric neurology focuses on diagnosing and treating neurological disorders in children, from infancy through adolescence...
      </>
    ),
  },
];


// slider setting 
const setting = {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
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
    nextEl: ".tp-blog-n",
    prevEl: ".tp-blog-p",
  },
};
const Blog = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <section  className="blog-area pt-90 pb-90">
        <div className="container">
          {/* <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  Waht’s New
                </span>
                <h3 className="tp-section__title mb-65">Blog & Article</h3>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="tp-blog-arrow d-flex align-items-center">
                <div className="tp-blog-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="tp-blog-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-section text-center">
                <span className="tp-section__sub-title left-line right-line mb-25">
                Neurological Treatments
                </span>
                <h3 style={{color:"#171151"}} className="tp-section__title title-white mb-55">
                Advanced Neurological Treatment Solutions
                </h3>
              </div>
            </div>
          </div>
          <Swiper
            {...setting}
            loop={isLoop}
            modules={[Navigation]}
            className="swiper-container tp-blog-active wow fadeInUp"
            data-wow-delay=".3s"
          >
            {servicedata.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="swiper-slide">
                  <div className="tp-blog mb-30">
                    <div className="tp-blog__thumb p-relative fix">
                      <a href="#">
                        <img src={item.img} alt="blog-item" />
                      </a>
                      <span className="tp-blog__date text-center">
                        <Link href={item.link}>{item.blog_date}</Link>
                      </span> 
                      {/* <div className="tp-blog__date text-center">
                        <h4>{item.blog_date}</h4>
                      </div> */}
                    </div>
                    <div style={{backgroundColor:"#f2f5fa"}} className="tp-blog__content">
                      {/* <span className="tp-blog__category mb-30">
                        <Link href="/blog-details">{item.blog_category}</Link>
                      </span> */}
                      <h5 className="tp-blog__title mb-10">
                        <Link href={item.link}>{item.blog_title}</Link>
                      </h5>
                      <p style={{marginBottom:"15px"}}>{item.blog_des}</p>
                      <div style={{display:"flex",justifyContent:"space-between"}}>
                      <div className="tp-blog__btn">
                        <Link href={item.link}>Read moRe</Link>
                      </div>
                      <div style={{backgroundColor:"#171151",color:"white",borderRadius:"6px"}} className="tp-blog__btn">
                        <Link href="/contact">Contact Us</Link>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-link text-center">
                <span>
                Learn More About Our Comprehensive Services :
                  <Link href="/neurological-treatments">
                   More services
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

export default Blog;
