import Link from "next/link";
import React from "react";
import BlogSearch from "../blog/blog-search";
import Category from "../blog/category";
import RecentPost from "../blog/recent-post";
import Tags from "../blog/tags";
import CommentForm from "../forms/comment-form";

const PostBoxDetails = () => {
 
  return (
    <>
      <div
        className="postbox__area pt-130 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12">
              <div className="postbox__wrapper pr-0">
                <article className="postbox__item format-image mb-50 transition-3">
                  <div className="postbox__thumb w-img mb-30">
                    <Link href="/blog-details">
                      <img src="/assets/img/aa20.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area pb-20">
                          <div className="postbox__meta mb-20">
                            {/* <span>
                              <Link href="/">
                                <i className="fa-regular fa-user"></i> Sri Durga Ortho & Neuro Clinic
                              </Link>
                            </span> */}
                            <span>
                              <i className="fa-regular fa-clock"></i> Dec 28,
                              2022
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa-regular fa-message-dots"></i>{" "}
                                (64) Coments
                              </a>
                            </span>
                            <span>
                              <i className="fa-light fa-eye"></i> 1,526 views
                            </span>
                          </div>

                          <h3 className="postbox__title mb-15">
                            <Link  style={{color:"#2a4825"}} href="/blog-details">
                            Understanding Knee Replacement Surgery
                            </Link>
                          </h3>
                          <p  style={{color:"black"}}>
                          Knee replacement surgery, also known as knee arthroplasty, is a surgical procedure designed to alleviate pain and restore function in patients suffering from severe knee arthritis or damage. During the surgery, the damaged surfaces of the knee joint are removed and replaced with artificial components, typically made of metal and plastic. This procedure can be partial, replacing only a section of the knee, or total, where both the femur and tibia surfaces are replaced. Patients commonly seek knee replacement surgery after exhausting non-surgical treatments such as physical therapy, medications, or corticosteroid injections.
                          </p>
                          <p  style={{color:"black"}}>
                          The recovery process following knee replacement surgery generally involves physical therapy to regain strength and mobility. While many patients experience significant pain relief and improved function, the timeline for recovery varies; some may return to daily activities within a few weeks, while others might take several months for full rehabilitation. The surgery is associated with certain risks, including infection and blood clots, but overall, it is considered safe and effective for restoring quality of life to those with debilitating knee conditions.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__content-area mb-60">
                          <h4>Our Approach</h4>
                          <div className="postbox__text mb-30">
                            <p>
                              Must explain to you how all praising uts pain was{" "}
                              <br /> born and I will gives you a itself
                              completed <br /> account of the system, and sed
                              expounds the ut <br /> actual teachings of that
                              greater{" "}
                            </p>
                            <div className="postbox__text-list">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Extramural Funding
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Bacteria
                                  Markers
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Nam nec
                                  mi euismod euismod
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img w-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-03.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area mb-40">
                          <h4 className="mb-25">
                            <Link href="/blog-details">
                              What Is A Business Technology Roadmap?
                            </Link>
                          </h4>
                          <p>
                            Unlike detailed blueprints that lay out all tasks,
                            deadlines, bug reports, and more along the way,
                            technology roadmaps are high-level visual summaries
                            highlighting a company’s vision or plans.
                          </p>
                          <p>
                            In an Agile approach, a technology roadmap feeds the
                            sprint and grooming processes, providing insight
                            into how the product will travel from start to
                            finish. It makes it easier for development teams to:
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-01.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-02.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="postbox__tag-border">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-md-12">
                          <div className="postbox__tag">
                            <div className="postbox__tag-list tagcloud">
                              <span>Tag</span>
                              <Link href="/blog">Covid-19</Link>
                              <Link href="/blog">Bacteria</Link>
                              <Link href="/blog">Medicine</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                          <div className="postbox__social-tag">
                            <span>Share</span>
                            <a className="blog-d-lnkd" href="#">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a className="blog-d-pin" href="#">
                              <i className="fa-brands fa-pinterest"></i>
                            </a>
                            <a className="blog-d-fb" href="#">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a className="blog-d-tweet" href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="postbox__thumb w-img mb-30 mt-30">
                    <Link href="/blog-details">
                      <img src="/assets/img/aa21.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content mb-40">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area pb-20">
                          <div className="postbox__meta mb-20">
                            {/* <span>
                              <Link href="/">
                                <i className="fa-regular fa-user"></i> Sri Durga Ortho & Neuro Clinic
                              </Link>
                            </span> */}
                            <span>
                              <i className="fa-regular fa-clock"></i> Jun 18, 2024
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa-regular fa-message-dots"></i>{" "}
                                (84) Coments
                              </a>
                            </span>
                            <span>
                              <i className="fa-light fa-eye"></i> 2,528 views
                            </span>
                          </div>

                          <h3 className="postbox__title mb-15">
                            <Link style={{color:"#2a4825"}} href="/blog-details">
                            Exploring Minimally Invasive Options
                            </Link>
                          </h3>
                          <p  style={{color:"black"}}>
                          Minimally invasive surgery (MIS) refers to techniques that limit the size of incisions needed and reduce trauma to the body during surgical procedures. This approach often employs specialized instruments and technology, such as cameras and robotic systems, allowing surgeons to perform operations through smaller openings compared to traditional methods. The benefits of minimally invasive options include reduced pain, shorter hospital stays, faster recovery times, and less scarring, making it an attractive alternative for many patients.
                          </p>
                          <p style={{color:"black"}}>
                          In orthopedic surgery, for instance, minimally invasive techniques can be used for procedures like knee and hip replacements, as well as arthroscopic surgeries for joint repairs. By preserving surrounding tissues and structures, these methods promote quicker healing and help patients return to their daily activities sooner. As advancements in technology continue to evolve, minimally invasive options are becoming increasingly available across various surgical fields, providing patients with safer, more effective treatment choices that align with their recovery goals.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__content-area mb-60">
                          <h4>Our Approach</h4>
                          <div className="postbox__text mb-30">
                            <p>
                              Must explain to you how all praising uts pain was{" "}
                              <br /> born and I will gives you a itself
                              completed <br /> account of the system, and sed
                              expounds the ut <br /> actual teachings of that
                              greater{" "}
                            </p>
                            <div className="postbox__text-list">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Extramural Funding
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Bacteria
                                  Markers
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Nam nec
                                  mi euismod euismod
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img w-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-03.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area mb-40">
                          <h4 className="mb-25">
                            <Link href="/blog-details">
                              What Is A Business Technology Roadmap?
                            </Link>
                          </h4>
                          <p>
                            Unlike detailed blueprints that lay out all tasks,
                            deadlines, bug reports, and more along the way,
                            technology roadmaps are high-level visual summaries
                            highlighting a company’s vision or plans.
                          </p>
                          <p>
                            In an Agile approach, a technology roadmap feeds the
                            sprint and grooming processes, providing insight
                            into how the product will travel from start to
                            finish. It makes it easier for development teams to:
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-01.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-02.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="postbox__tag-border">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-md-12">
                          <div className="postbox__tag">
                            <div className="postbox__tag-list tagcloud">
                              <span>Tag</span>
                              <Link href="/blog">Covid-19</Link>
                              <Link href="/blog">Bacteria</Link>
                              <Link href="/blog">Medicine</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                          <div className="postbox__social-tag">
                            <span>Share</span>
                            <a className="blog-d-lnkd" href="#">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a className="blog-d-pin" href="#">
                              <i className="fa-brands fa-pinterest"></i>
                            </a>
                            <a className="blog-d-fb" href="#">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a className="blog-d-tweet" href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="postbox__thumb w-img mb-30">
                    <Link href="/blog-details">
                      <img src="/assets/img/aa22.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="postbox__content">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area pb-20">
                          <div className="postbox__meta mb-40">
                            {/* <span>
                              <Link href="/">
                                <i className="fa-regular fa-user"></i> Sri Durga Ortho & Neuro Clinic
                              </Link>
                            </span> */}
                            <span>
                              <i className="fa-regular fa-clock"></i> Aug 28, 2024
                            </span>
                            <span>
                              <a href="#">
                                <i className="fa-regular fa-message-dots"></i>{" "}
                                (174) Coments
                              </a>
                            </span>
                            <span>
                              <i className="fa-light fa-eye"></i> 1,329 views
                            </span>
                          </div>

                          <h3 className="postbox__title mb-35">
                            <Link style={{color:"#2a4825"}} href="/blog-details">
                            Understanding and Navigating Memory Disorders
                            </Link>
                          </h3>
                          <p  style={{color:"black"}}>
                          Memory disorders encompass a range of conditions that affect a person’s ability to remember information, retain skills, and recall experiences. These disorders can stem from various causes, including neurodegenerative diseases like Alzheimers, traumatic brain injuries, strokes, or psychiatric conditions such as depression and anxiety. Symptoms may vary widely, from mild forgetfulness to profound memory loss, impacting daily functioning and quality of life. Understanding the specific type of memory disorder is crucial for effective management and treatment, as different conditions may require tailored approaches.
                          </p>
                          <p style={{color:"black"}}>
                          Navigating memory disorders involves a comprehensive evaluation by healthcare professionals, which may include neuropsychological assessments, brain imaging, and lab tests. Early diagnosis is essential for implementing strategies that can help slow progression and improve cognitive function. Interventions may include cognitive rehabilitation, medication management, and lifestyle modifications, such as engaging in mental exercises, maintaining social connections, and adopting a healthy diet. Support from caregivers and support groups is also vital, offering emotional assistance and practical strategies for coping with the challenges posed by memory disorders.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__content-area mb-60">
                          <h4>Our Approach</h4>
                          <div className="postbox__text mb-30">
                            <p>
                              Must explain to you how all praising uts pain was{" "}
                              <br /> born and I will gives you a itself
                              completed <br /> account of the system, and sed
                              expounds the ut <br /> actual teachings of that
                              greater{" "}
                            </p>
                            <div className="postbox__text-list">
                              <ul>
                                <li>
                                  <i className="fa-solid fa-check"></i>
                                  Extramural Funding
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Bacteria
                                  Markers
                                </li>
                                <li>
                                  <i className="fa-solid fa-check"></i>Nam nec
                                  mi euismod euismod
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img w-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-03.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="row">
                      <div className="col-lg-12">
                        <div className="postbox__content-area mb-40">
                          <h4 className="mb-25">
                            <Link href="/blog-details">
                              What Is A Business Technology Roadmap?
                            </Link>
                          </h4>
                          <p>
                            Unlike detailed blueprints that lay out all tasks,
                            deadlines, bug reports, and more along the way,
                            technology roadmaps are high-level visual summaries
                            highlighting a company’s vision or plans.
                          </p>
                          <p>
                            In an Agile approach, a technology roadmap feeds the
                            sprint and grooming processes, providing insight
                            into how the product will travel from start to
                            finish. It makes it easier for development teams to:
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-01.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="postbox__meta-img mb-60">
                          <img
                            src="/assets/img/blog/blog-details-meta-02.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className="postbox__tag-border">
                      <div className="row align-items-center">
                        <div className="col-xl-7 col-md-12">
                          <div className="postbox__tag">
                            <div className="postbox__tag-list tagcloud">
                              <span>Tag</span>
                              <Link href="/blog">Covid-19</Link>
                              <Link href="/blog">Bacteria</Link>
                              <Link href="/blog">Medicine</Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                          <div className="postbox__social-tag">
                            <span>Share</span>
                            <a className="blog-d-lnkd" href="#">
                              <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a className="blog-d-pin" href="#">
                              <i className="fa-brands fa-pinterest"></i>
                            </a>
                            <a className="blog-d-fb" href="#">
                              <i className="fa-brands fa-facebook"></i>
                            </a>
                            <a className="blog-d-tweet" href="#">
                              <i className="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </article>
                {/* <div className="postbox__comment mb-65">
                  <h3 className="postbox__comment-title">(04) Comment</h3>
                  <ul>
                    <li>
                      <div className="postbox__comment-box d-flex">
                        <div className="postbox__comment-info">
                          <div className="postbox__comment-avater mr-25">
                            <img
                              src="/assets/img/blog/comments/comment-1.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text">
                          <div className="postbox__comment-name">
                            <h5>Kristin Watson</h5>
                            <span className="post-meta">MARCH 10, 2020</span>
                          </div>
                          <p>
                            Patient Comments are a collection of comments
                            submitted by viewers in response to <br /> a
                            question posed by a MedicineNet doctor.
                          </p>
                          <div className="postbox__comment-reply">
                            <a href="#">
                              <i className="fas fa-reply-all"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="children mb-30">
                      <div className="postbox__comment-box d-flex">
                        <div className="postbox__comment-info">
                          <div className="postbox__comment-avater mr-25">
                            <img
                              src="/assets/img/blog/comments/comment-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="postbox__comment-text">
                          <div className="postbox__comment-name">
                            <h5>Brooklyn Simmons</h5>
                            <span className="post-meta">MARCH 10, 2020</span>
                          </div>
                          <p>
                            Include anecdotal examples of your experience, or
                            things you took notice of that you <br /> feel
                            others would find useful.
                          </p>
                          <div className="postbox__comment-reply">
                            <a href="#">
                              <i className="fas fa-reply-all"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div> */}

                {/* <CommentForm /> */}
              </div>
            </div>
            <div style={{position:"sticky",top:"0px"}} className="col-xxl-4 col-xl-4 col-lg-5 col-md-12">
              <div style={{position:"sticky",top:"100px"}} className="sidebar__wrapper pl-25 pb-50">
                <BlogSearch />
                {/* <Category /> */}
                <RecentPost />
                {/* <Tags /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBoxDetails;
