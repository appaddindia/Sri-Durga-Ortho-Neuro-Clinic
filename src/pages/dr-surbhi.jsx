import SEO from "@/components/seo";
import DrSurabhiBanner from "@/components/team/team-details/bannerSurabhi";
import FooterFour from "@/layout/footer/footer-4";
import HeaderTwo from "@/layout/header/header-two";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";

const index = () => {
  return (
    <>
      <HeaderTwo />
      <DrSurabhiBanner />
      {/* <DirectContactUs /> */}
      <section className="team-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="tp-team-dtls__thumb mb-50">
                <img src="/assets/img/aa14.jpg" alt="team-thumb" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-dtls__content mt-50 mb-50">
                <h4 className="tp-team-dtls__title mb-10">
                  <Link style={{ color: "#c61000" }} href="/">
                    Dr. Surbhi Chaturvedi
                  </Link>
                </h4>
                <span className="mb-35">Consultant Neurologist</span>
                <p style={{ color: "black" }}>
                  Experienced neurologist specializing in stroke care, epilepsy,
                  neurodegenerative disorders, and advanced neurodiagnostics.
                </p>
                <div className="tp-team-dtls__info">
                  <ul>
                    <li style={{ display: "flex" }}>
                      Qualification:{" "}
                      <span style={{ marginLeft: "10px" }}>
                        DM - Neurology, MD - General Medicine, MBBS
                      </span>
                    </li>
                    <li style={{ display: "flex" }}>
                      Experience:{" "}
                      <span style={{ marginLeft: "10px" }}>13 Years</span>
                    </li>
                    <li style={{ display: "flex" }}>
                      Hospital:{" "}
                      <span style={{ marginLeft: "10px" }}>
                        Trilife Hospital (formerly Specialist Hospital), Kalyan
                        Nagar, Bangalore
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12">
              <div className="tp-team-dtls__social mt-45 mb-50">
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a className="tp-dtls-insta" href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a className="tp-dtls-tweet" href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a className="tp-dtls-pinter" href="#">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="tp-team-dtls-text mt-40">
                <h4 className="tp-team-dtls-text__title mb-15">Overview</h4>
                <p style={{ color: "black" }}>
                  Dr. Surbhi Chaturvedi is a Consultant Neurologist with over 13
                  years of experience. She earned her MBBS in 2011, followed by
                  MD in General Medicine in 2016, and DM in Neurology in 2019,
                  graduating with a gold medal. She worked at NIMHANS and
                  completed a prestigious stroke fellowship in Canada, earning
                  the FCSC-E certification. Her expertise spans acute stroke
                  care, epilepsy, Parkinson’s, sleep disorders, and
                  neurodegenerative diseases.
                </p>

                <div
                  style={{
                    backgroundColor: "#f8f8f8",
                    padding: "15px",
                    borderRadius: "5px",
                    marginTop: "20px",
                    marginBottom: "15px",
                  }}
                >
                  <ul>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>1)</span> Completed
                      DM in Neurology with gold medal honors in 2019.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>2)</span> Served as
                      Assistant Professor at NIMHANS, Bangalore.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>3)</span> Completed
                      fellowship in Stroke at a leading center in Canada and
                      earned FCSC–E certification.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>4)</span>{" "}
                      Sub-investigator in 8 RCTs and contributor to 4 clinical
                      research projects.
                    </li>
                  </ul>
                </div>

                <div
                  style={{
                    backgroundColor: "#f8f8f8",
                    padding: "15px",
                    borderRadius: "5px",
                    marginTop: "20px",
                    marginBottom: "35px",
                  }}
                >
                  <ul>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>1)</span> Expertise
                      in treating migraine, epilepsy, stroke, Parkinson’s
                      disease, multiple sclerosis, vertigo, and sleep disorders.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>2)</span> Skilled in
                      digital and video EEG, BERA, NCV, EMG, VEP, and
                      transcranial Doppler.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>3)</span> Member of
                      the Indian Academy of Neurology and Indian Epilepsy
                      Association.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>4)</span> Awarded
                      MRCPS(Glasgow) for outstanding international
                      contributions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-about__btn">
            <Link className="tp-btn" href="/contact">
              Contact Us
            </Link>
            <Link
              style={{ backgroundColor: "#c61000" }}
              className="tp-btn-second ml-25"
              href="https://click4appointment.com/clinic-details/surbhichaturvedi"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
      <FooterFour />
    </>
  );
};

export default index;
