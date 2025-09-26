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
                      <a href="mailto:sridurgaorthoneuroclinic@gmail.com">
                        sridurgaorthoneuroclinic@gmail.com
                      </a>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-5">
                        Sri Durga Ortho & Neuro Clinic
                      </span>
                      <p>
                        Sri Durga Ortho & Neuro Clinic offers specialized
                        orthopedic and neurological care. With Dr. Shashikanth
                        Vokkaleri and Dr. Surbhi Chaturvedi, prioritize your
                        health—book your appointment today!
                      </p>
                    </div>
                    <div className="tp-footer-widget__social fw-social">
                      <a href="https://www.facebook.com/sridurgaorthoandneuro/">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="https://share.google/A4V80uN5VjBv7GHGx">
                        <i className="fa-brands fa-google"></i>
                      </a>
                      <a href="https://www.instagram.com/sridurgaorthoneuroclinic/">
                        <i className="fa-brands fa-instagram"></i>
                      </a>

                      <a href="https://www.youtube.com/@sridurgaorthoneuroclinic/">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
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
                          <Link href="/shoulder-replacement">
                            Shoulder Replacement
                          </Link>
                        </li>
                        <li>
                          <Link href="/shoulder-arthroscopy">
                            Shoulder Arthroscopy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="tp-footer-widget__sub-sec">
                      <span className="tp-footer-widget__sub-title mb-10">
                        Neurological Treatments
                      </span>
                      <div className="tp-footer-widget__list">
                        <ul>
                          <li>
                            <Link href="/neurological-treatments">
                              Epilepsy and Seizuresy
                            </Link>
                          </li>
                          <li>
                            <Link href="/neurological-treatments">
                              Parkinson’s Disease
                            </Link>
                          </li>
                          <li>
                            <Link href="/neurological-treatments">
                              Neuromuscular Disorders
                            </Link>
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
                          <Link href="/orthopaedic-consultation">
                            Orthopaedic consultation
                          </Link>
                        </li>
                        <li>
                          <Link href="/sports-injury-treatments">
                            Sports Injury Treatments
                          </Link>
                        </li>
                        <li>
                          <Link href="/ligament-tear">Ligament Tear</Link>
                        </li>
                        <li>
                          <Link href="/bone-fracture-treatment">
                            Bone Fracture Treatment
                          </Link>
                        </li>
                        <li>
                          <Link href="/frozen-shoulder">Frozen shoulder</Link>
                        </li>
                        <li>
                          <Link href="/regenerative-treatment">
                            Regenerative treatment
                          </Link>
                        </li>
                        <li>
                          <Link href="/tendo-achilles-tendinitis">
                            Tendo Achilles tendinitis
                          </Link>
                        </li>
                        <li>
                          <Link href="/diagnostic-laboratory">
                            Diagnostic laboratory
                          </Link>
                        </li>
                        <li>
                          <Link href="/stemcell-therapy">Stemcell therapy</Link>
                        </li>
                        <li>
                          <Link href="/dequervains-release">
                            Dequervains release
                          </Link>
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
                    <div className="tp-footer-widget__links mb-20">
                      <ul>
                        <li>
                          <a href="https://www.google.com/maps?ll=13.021473,77.628801&z=14&t=m&hl=kn&gl=IN&mapclient=embed&cid=14283709170592320519">
                            1st Floor, Shiva Ram Karanath Nagar, No. 42 & 25, 80
                            Feet Rd, MCEHS Layout, Rachenahalli,Hegde Nagar ,
                            Bengaluru, Karnataka 560077
                          </a>{" "}
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
                        {/* <li>
                          <div class="consultation mt-20">
                            <h6>Orthopedic Consultation</h6>
                            <p style={{ color: "white" }}>
                              <strong>Morning Hours:</strong> Monday to
                              Saturday: 7:30 AM to 8:30 AM
                            </p>
                          </div>
                          <div class="consultation">
                            <h6>Neurology Consultation</h6>
                            <p style={{ color: "white" }}>
                              <strong>Afternoon & Evening Hours:</strong> Monday
                              to Saturday: 3:30 PM to 8:30 PM
                            </p>
                          </div>
                          <p style={{ color: "white" }}>
                            <b>Sunday :</b> As Per Prior appointment only .
                          </p>
                        </li> */}
                        <li>
                          <div class="consultation mt-20">
                            <h6>Orthopaedic Consultation</h6>
                            <p style={{ color: "white" }}>
                              <strong>Dr. Shashikanth (Vokkaleri):</strong>{" "}
                              Monday to Saturday: 9:00 AM to 10:15 AM, 4:00 PM
                              to 5:30 PM
                            </p>
                          </div>
                          <div class="consultation">
                            <h6>Neurology Consultation</h6>
                            <p style={{ color: "white" }}>
                              <strong>Dr. Surbhi Chaturvedi:</strong> Monday to
                              Saturday: 6:30 PM to 8:30 PM
                            </p>
                          </div>
                          <div class="consultation">
                            <h6>Psychiatrist Consultation</h6>
                            <p style={{ color: "white" }}>
                              <strong>Dr. Shree Lakshmi Malya:</strong> Monday
                              to Saturday: 10:00 AM to 11:00 AM
                            </p>
                          </div>
                          <p style={{ color: "white" }}>
                            <b>Sunday :</b> As Per Prior appointment only.
                          </p>
                        </li>
                      </ul>
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
                      {/* <li>
                        <a href="#">Pricing</a>
                      </li> */}
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
