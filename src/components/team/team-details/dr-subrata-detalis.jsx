import Image from "next/image";
import Link from "next/link";
import React from "react";

const Drsubratadetalis = () => {
  return (
    <>
      <section className="team-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            {/* LEFT – PHOTO */}
            <div className="col-lg-5 col-md-6">
              <div className="tp-team-dtls__thumb mb-50">
                <Image
                  src="/assets/img/500x500.webp"
                  alt="Dr Subrata Kumar Pal"
                  width={500}
                  height={500}
                  layout="responsive"
                />
              </div>
            </div>

            {/* RIGHT – DETAILS */}
            <div className="col-lg-7 col-md-6">
              <div className="tp-team-dtls__content mt-50 mb-50">
                <h4 className="tp-team-dtls__title mb-10">
                  <Link style={{ color: "#c61000" }} href="#">
                    Dr. Subrata Kumar Pal
                  </Link>
                </h4>

                <span className="mb-35">
                  Physician (MBBS, DGO, DCH) • 42+ Years Experience
                </span>

                <p style={{ color: "black", textAlign: "justify" }}>
                  Dr. Subrata Kumar Pal is a compassionate and dedicated medical
                  doctor with over 42 years of extensive experience in providing
                  high-quality patient care. His expertise spans Pediatrics,
                  Obstetrics, Gynecology, Emergency Medicine, and Community
                  Health. Known for his commitment to service, he has worked as
                  a Government Medical Officer, Paediatrician, and General Duty
                  Medical Officer across major healthcare institutions in India.
                </p>

                <div className="tp-team-dtls__info">
                  <ul>
                    <li style={{ display: "flex" }}>
                      Experience:
                      <span style={{ marginLeft: "10px" }}>42+ Years</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT SECTION */}
          <div className="row mt-40">
            <div className="col-lg-12">
              <h4 className="tp-team-dtls-text__title mb-20">
                Professional Experience
              </h4>

              <div style={{ color: "black" }}>
                <h6>
                  GDMO, Paediatrician — CEDCO BSF Sathnur Village, Bangalore
                  (2019–2023)
                </h6>
                <p>
                  Worked as an in-house physician and General Duty Medical
                  Officer on contract, handling OPD care, emergencies, and
                  fitness assessments for BSF personnel. Also managed
                  administrative duties as the sole medical practitioner on
                  campus.
                </p>

                <h6>
                  GDMO, Paediatrician — BSF Composite Hospital, Shalbagan,
                  Agartala (2015–2019)
                </h6>
                <p>
                  Provided comprehensive healthcare services to BSF personnel
                  and their families, primarily focusing on pediatric care.
                  Earned a transfer to Bangalore for improved career prospects.
                </p>

                <h6>Medical Officer — NIT, Jirania, Agartala (2014–2015)</h6>
                <p>
                  Responsible for overseeing the health and welfare of enrolled
                  students, addressing medical needs, emergencies, and
                  preventive health programs.
                </p>

                <h6>
                  Grade II Medical Officer — IGM Hospital & Belonia
                  Sub-Divisional Hospital (1985–2014)
                </h6>
                <p>
                  Served within the Tripura Health Service for nearly three
                  decades, treating thousands of patients across Pediatrics,
                  Obstetrics, Gynecology, and Emergency Medicine. Promoted to
                  Grade II Medical Officer in 2014.
                </p>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="row mt-40">
            <div className="col-lg-12">
              <h4 className="tp-team-dtls-text__title mb-20">Education</h4>

              <ul style={{ color: "black" }}>
                <li>
                  <strong>Diploma in Child Health</strong> — Institute of Child
                  Health, Kolkata (1984)
                </li>
                <li>
                  <strong>Diploma in Gynecology & Obstetrics</strong> — Gandhi
                  Medical College, Hyderabad (1983)
                </li>
                <li>
                  <strong>MBBS</strong> — Osmania Medical College, Hyderabad
                  (1978)
                </li>
              </ul>
            </div>
          </div>

          {/* EXPERTISE */}
          <div className="row mt-40">
            <div className="col-lg-12">
              <h4 className="tp-team-dtls-text__title mb-20">
                Areas of Expertise
              </h4>

              <ul style={{ color: "black" }}>
                <li>Pediatrics & Neonatology</li>
                <li>Gynecology & Obstetrics</li>
                <li>Laparoscopic Ligation Procedures</li>
                <li>Emergency Care (Pediatrics, Gynae, Medicine)</li>
                <li>Reproductive & Child Health (RCH), AIDS Programs</li>
                <li>
                  Skilled in managing diverse outpatient & inpatient cases
                </li>
              </ul>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="row mt-40">
            <div className="col-lg-12">
              <h4 className="tp-team-dtls-text__title mb-20">Languages</h4>
              <ul style={{ color: "black" }}>
                <li>English</li>
                <li>Bengali</li>
                <li>Hindi</li>
                <li>Telugu (Basic)</li>
              </ul>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="tp-about__btn mt-40">
            <Link className="tp-btn" href="/contact">
              Contact Us
            </Link>
            <Link
              style={{ backgroundColor: "#c61000" }}
              className="tp-btn-second ml-25"
              href="#"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Drsubratadetalis;
