import Banner from "@/components/about/banner";
import SEO from "@/components/seo";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import React from "react";

const Video = () => {
  // Replace with YouTube video IDs or full URLs
  const video = [
    "https://youtube.com/shorts/VMT5iUPrvY0?si=tFrrqow8tUeve5kO", // Shorts link
    "https://youtube.com/shorts/Z-Z5sGS43XA?si=I3nZ-2uDHrS53l5H", // Just video ID
    "https://youtube.com/shorts/ZiXHimTjXtQ?si=W_0BB18uAPpoV7XD",
    "https://youtube.com/shorts/BOlIN64YXak?si=2ImGXFGd8fMus9OQ",
    "https://youtube.com/shorts/wbF4FHgw-pA?si=o-gKqdJQhESUZ-_T",
    "https://youtube.com/shorts/GVV4skIxZLA?si=wRgrQlEpYQeoDODZ",
    "https://youtube.com/shorts/jKNoTS2yXc0?si=6bNZfvsf7EbllBDw",
    "https://youtube.com/shorts/HkMzmZolf98?si=eIxLqVtQnNtC3wEa",
    "https://youtube.com/shorts/eSLHnWf8obI?si=N__JuA905XjoJlvP",
    "https://youtube.com/shorts/T2fmj2SdkUY?si=KKBMpszfKncEKSlS",
    "https://youtube.com/shorts/EAwJAGlOS2Y?si=BcWR9x_YhDbfA2ev",
    "https://youtube.com/shorts/EAwJAGlOS2Y?si=hnFxUACtXyb4SaMV",
    "https://youtube.com/shorts/4E0OqQ_JuSY?si=bzn_qcFm3ylFyLKg",
    "https://youtube.com/shorts/JqqGXZml2NQ?si=QwzJf6DT8m5HaV3E",
    "https://youtube.com/shorts/pYQNtgysU1A?si=LzOzs26jqk-Xwqp9",
    "https://youtube.com/shorts/yYPypmxK9pU?si=ie6byvf-_WL2ANUi",
    "https://youtube.com/shorts/XIAFIlJC6jo?si=EHo-oUmjB4iL7KRa",
    "https://youtube.com/shorts/ef7qPURZxkE?si=n8LzXzBtQIhF4zmM",
    "https://youtube.com/shorts/17tWSkLx_vs?si=W5zDpu2hv2NgwA_j",
    "https://youtube.com/shorts/aeRz7UCltIE?si=VTNh-ZHVLnu3fGYO",
    "https://youtube.com/shorts/mn4_CJPp-48?si=ggE78P1P7TOWrz3m",
  ];

  // function to extract ID
  const getYouTubeId = (urlOrId) => {
    try {
      // If it's already a short ID (no "http")
      if (!urlOrId.includes("http")) return urlOrId;

      // Shorts link
      if (urlOrId.includes("shorts/")) {
        return urlOrId.split("shorts/")[1].split("?")[0];
      }

      // Normal YouTube watch URL
      if (urlOrId.includes("watch?v=")) {
        return urlOrId.split("watch?v=")[1].split("&")[0];
      }

      return urlOrId; // fallback
    } catch (err) {
      return urlOrId;
    }
  };

  return (
    <Wrapper>
      <SEO pageTitle="video" />
      <HeaderTwo />
      <section
        className="pt-120 pb-120 breadcrumb__overlay"
        style={{
          backgroundImage: `url(/assets/img/aa177.avif)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb">
                <h2 className="tp-breadcrumb__title">Video</h2>
              </div>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-12 col-12">
              <div className="tp-breadcrumb__link text-xl-end">
                <span>
                  Sri Durga Ortho & Neuro Clinic : <Link href="/"> Video</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-area pt-90 pb-90">
        <div className="container">
          <div className="row">
            {video.map((item) => {
              const id = getYouTubeId(item);
              return (
                <div key={id} className="col-lg-4 col-md-6 col-12">
                  <div className="tp-blog mb-30">
                    <div className="tp-blog__thumb p-relative fix">
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "5/3",
                          background: "#000",
                        }}
                      >
                        <iframe
                          width="100%"
                          height="100%"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            border: 0,
                          }}
                          src={`https://www.youtube.com/embed/${id}`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterFour />
    </Wrapper>
  );
};

export default Video;
