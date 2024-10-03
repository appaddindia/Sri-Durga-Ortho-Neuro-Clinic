import Link from "next/link";
import React from "react";

// recent_post data
const recent_post = [
  {
    id: 1,
    img: "/assets/img/aa20.jpg",
    date: "4 March. 2022",
    title: "Understanding Knee Replacement Surgery",
  },
  {
    id: 2,
    img: "/assets/img/aa21.jpg",
    date: "12 February. 2022",
    title: "Exploring Minimally Invasive Options",
  },
  {
    id: 3,
    img: "/assets/img/aa22.jpg",
    date: "14 January. 2022",
    title: "Understanding and Navigating Memory Disorders",
  },
];
const RecentPost = () => {
  return (
    <>
      <div className="sidebar__widget mb-55">
        <h3 className="sidebar__widget-title mb-25">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recent_post.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-20 d-flex align-items-center"
              >
                <div className="rc__post-thumb">
                  <Link href="/blog-details">
                    <div style={{width:"97px",height:"78px",
          backgroundImage: `url(${item.img})`,
          backgroundPosition:"center",
          backgroundSize:"cover"}}>

                    </div>
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href="/blog-details">{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
