import Link from "next/link";
import React from "react";

const FooterFour = ({ style_2 = false }) => {
  return (
    <>
      <footer>
        <div
          className={`footer-area ${
            style_2 ? "pt-105" : "tp-footer-white-content theme-bg pt-95"
          } `}
        >
          <div className="tp-footer-top pb-25">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-1 mb-40 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="tp-footer-widget__content mb-95">
                      <i>FEEL FREE TO CONTACT US</i>
                      <h4 className="tp-footer-widget__contact mb-20">
                        <a href="tel:9980445660">9980445660</a>
                      </h4>
                      <a href="mailto:sridurgaorthoneuroclinic@gmail.com">sridurgaorthoneuroclinic@gmail.com</a>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-5">
                      Sri Durga Ortho & Neuro Clinic
                      </span>
                      <p>
                      Sri Durga Ortho & Neuro Clinic offers specialized orthopedic and neurological care. With Dr. Shashikanth Vokkaleri and Dr. Surbhi Chaturvedi, prioritize your health—book your appointment today!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-2 mb-40 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                    Orthopedic Surgery
                    </span>
                    <div className="tp-footer-widget__links mb-35">
                      <ul>
                        <li>
                          <Link href="/knee-replacement">Knee Replacement</Link>
                        </li>
                        <li>
                          <Link href="/knee-arthroscopy">Knee Arthroscopy</Link>
                        </li>
                        <li>
                          <Link href="/hip-replacement">Hip Replacement</Link>
                        </li>
                        <li>
                          <Link href="/hip-arthroscopy">Hip Arthroscopy</Link>
                        </li>
                        <li>
                          <Link href="/shoulder-replacement">Shoulder Replacement</Link>
                        </li>
                        <li>
                          <Link href="/shoulder-arthroscopy">Shoulder Arthroscopy</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                      Neurological Treatments
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul><li>
                          <Link href="/neurological-treatments">Epilepsy and Seizuresy</Link>
                        </li>
                        <li>
                          <Link href="/neurological-treatments">Parkinson’s Disease</Link>
                        </li>
                        <li>
                          <Link href="/neurological-treatments">Neuromuscular Disorders</Link>
                        </li>
                          
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-3 mb-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                    Orthopedic Treatments
                    </span>
                    <div className="tp-footer-widget__links">
                      <ul>
                        <li>
                          <Link href="/orthopaedic-consultation">Orthopaedic consultation</Link>
                        </li>
                        <li>
                          <Link href="/sports-injury-treatments">Sports Injury Treatments</Link>
                        </li>
                        <li>
                          <Link href="/ligament-tear">Ligament Tear</Link>
                        </li>
                        <li>
                          <Link href="/bone-fracture-treatment">Bone Fracture Treatment</Link>
                        </li>
                        <li>
                          <Link href="/frozen-shoulder">Frozen shoulder</Link>
                        </li>
                        <li>
                          <Link href="/regenerative-treatment">Regenerative treatment</Link>
                        </li>
                        <li>
                          <Link href="/tendo-achilles-tendinitis">Tendo Achilles tendinitis</Link>
                        </li>
                        <li>
                          <Link href="/diagnostic-laboratory">Diagnostic laboratory</Link>
                        </li>
                        <li>
                          <Link href="/stemcell-therapy">Stemcell therapy</Link>
                        </li>
                        <li>
                          <Link href="/dequervains-release">Dequervains release</Link>
                        </li>
                        <li>
                          <Link href="/plantar-fascitis">plantar fascitis</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6">
                  <div
                    className="tp-footer-widget footer-2-col-4 mb-40 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <span className="tp-footer-widget__title mb-15">
                      Contact Info
                    </span>
                    <div className="tp-footer-widget__links mb-120">
                      <ul>
                        <li>1st Floor, Shiva Ram Karanath Nagar, No. 42 & 25, 80 Feet Rd, MCEHS Layout, Rachenahalli,Hegde Nagar , Bengaluru, Karnataka 560077
                        </li>
                        {/* <li>
                          <Link href="tel:95382 98050">
                          95382 98050
                          </Link>
                        </li>
                        <li>
                          <Link href="mailto:support@rstheme.com">
                          sridurgaorthoneuroclinic@gmail.com
                          </Link>
                        </li> */}
                        <li>Office Hours: 9AM - 5PM</li>
                        <li>Sunday - Wekend Day</li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa-light fa-basketball"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-area-bottom fw-border">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright copyright-white">
                    <span>
                     
                      © Copyright © {new Date().getFullYear()}
                      <a href="index"> Appaddindia</a>.
                      <i> All Rights Reserved Copyright</i>
                    </span>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                  <div className="footer-widget__copyright-info info-direction">
                    <ul className="d-flex align-items-center">
                      <li>
                        <a href="#">Terms and conditions</a>
                      </li>
                      <li>
                        <a href="#">Privacy policy</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
