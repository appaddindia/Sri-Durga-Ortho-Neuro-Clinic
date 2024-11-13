import article_data from "@/data/article-data";
import VideoPopup from "@/modals/video-popup";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogSearch from "./blog-search";
import Category from "./category";
import RecentPost from "./recent-post";
import Tags from "./tags";
import CommentForm from "../forms/comment-form";
import CategoryThree from "./CategoryThree";
import CategoryFour from "./CategoryFour";
import CategorySec from "./CategorySec";
import CategoryFive from "./CategoryFive";
import CategorySix from "./CategorySix";

// postbox_article data
const postbox_article = {
  article_img: "/assets/img/blog/blog-in-01.jpg",
  title: " Lavoratories used for scientic reseach take many froms.",
  des: (
    <>
      Laboratories used for scientific research take many forms because of the
      differing requirements of specialists in the various fields of science and
      engineering. A physics laboratory
    </>
  ),
};

const { article_img, title, des } = postbox_article;

// post_box_slider
const post_box_slider = [
  {
    img: "/assets/img/blog/blog-in-02.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-01.jpg",
  },
  {
    img: "/assets/img/blog/blog-in-03.jpg",
  },
];

// slider setting
const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".postbox-slider-button-next",
    prevEl: ".postbox-slider-button-prev",
  },
};

const PostBox = ({data}) => {
  const [main, setMain]=useState("")
  const [isLoop, setIsLoop] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    setIsLoop(true);
    setMain(data[0]?.main)
    console.log("sdsc",data[0]?.main)
  }, [data]);

  return (
    <>
      <div className="postbox-area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div style={{position:"sticky",top:"150px"}} className="postbox pr-0 pb-50">
                {data.map((article) => (
                  <article
                    key={article.id}
                    className="postbox__item format-image mb-60 transition-3"
                  >
                    {article.img && (
                      <div className="postbox__thumb w-img mb-15">
                        <Link href="#">
                          <img src={article.img} alt="blog-thumg" />
                        </Link>
                      </div>
                    )}
                    {article.slider_img && (
                      <Swiper
                        {...setting}
                        loop={isLoop}
                        modules={[Navigation]}
                        className="postbox__thumb postbox-active swiper-container w-img p-relative mb-15"
                      >
                        {article.slider_img.map((img, index) => (
                          <SwiperSlide key={index}>
                            <div className="postbox__slider-item swiper-slide">
                              <img src={img.img} alt="slider_img" />
                            </div>
                          </SwiperSlide>
                        ))}

                        <div className="postbox-nav">
                          <button className="postbox-slider-button-next">
                            <i className="fa-solid fa-chevron-right"></i>
                          </button>
                          <button className="postbox-slider-button-prev">
                            <i className="fa-solid fa-chevron-left"></i>
                          </button>
                        </div>
                      </Swiper>
                    )}
                    {/* {article.video &&
                      article.video.map((item, i) => (
                        <div
                          key={i}
                          className="postbox__thumb postbox__video p-relative w-img mb-35"
                        >
                          <Link href="/blog-details">
                            <img src={item.video_tum} alt="" />
                          </Link>

                          <VideoPopup
                            isVideoOpen={isVideoOpen}
                            setIsVideoOpen={setIsVideoOpen}
                            videoId={item.videoId}
                          />
                          <button
                            onClick={() => setIsVideoOpen(true)}
                            className="play-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </button>
                        </div>
                      ))} */}

                    <div className="postbox__content">
                      
                      <h3 className="postbox__title mb-15">
                        <Link  style={{color:"#2a4825"}} href="/">{article.title}</Link>
                      </h3>
                      <div className="postbox__text mb-25">
                        {article.des}
                      </div>
                      <div className="tp-about__btn">
                  <Link className="tp-btn" href="/contact">
                    Contact Us
                  </Link>
                  <a  style={{backgroundColor:"#c61000"}} className="tp-btn-second ml-25" href="https://api.whatsapp.com/send/?phone=9980445660&text=Hello">
                    Book Appointment
                  </a>
                </div>
                    </div>
                  </article>
                ))}

                {/* <div className="basic-pagination">
                  <nav>
                    <ul>
                      <li>
                        <Link href="/blog">
                          <i className="fa-light fa-arrow-left-long"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link href="/blog"> 3 </Link>
                      </li>
                      <li>
                        <Link href="/blog">...</Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <i className="fa-light fa-arrow-right-long"></i>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div> */}
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div className="sidebar__wrapper pl-25 pb-50">
                {/* <BlogSearch /> */}
                {
                  main =="Orthopedic Surgery" && 
                    <Category />
                  
                }
                {
                  main=="Orthopedic Treatments" && 
                    <CategorySec />
                  
                }
                {
                  main=="Neurological Treatments" && 
                    <CategoryThree />
                  
                }
                
                {
                  main=="Neurology" && 
                    <CategoryFour />
                }

                {
                  main == "Neuroinfections" && 
                    <CategoryFive />
                }
                {
                  main == "Procedures" && 
                    <CategorySix />
                }
                <CommentForm />
                {/* <RecentPost /> */}
                {/* <Tags /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBox;
