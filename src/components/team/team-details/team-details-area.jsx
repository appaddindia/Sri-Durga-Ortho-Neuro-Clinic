import Link from "next/link";
import React from "react";

// team_info data
const team_info = [
  {
    id: 1,
    img: "/assets/img/team/-01.jpg",
    name: "Cameron Williamson",
    title: "Genetic Specialist",
    des: (
      <>
        Providing insight-driven transformation to <br /> investment banks,
        wealth and asset mana, <br /> exchanges, Finance
      </>
    ),
    expertise: "Genetic Specialist",
    expertise_year: "15 Years",
    email: "webmail.info@gmail.com",
    social_links: [
      {
        link: "http://facebook.com",
        target: "_blank",
        icon: "fab fa-facebook-f",
        color: "tp-f-fb",
      },

      {
        link: "http://instagram.com",
        target: "_blank",
        icon: "fa-brands fa-instagram",
        color: "tp-f-instagram",
      },

      {
        link: "http://twitter.com",
        target: "_blank",
        icon: "fab fa-twitter",
        color: "tp-f-twitter",
      },

      {
        link: "https://www.pinterest.com/en/",
        target: "_blank",
        icon: "fa-brands fa-pinterest-p",
        color: "tp-f-pinterest",
      },
    ],
    personal_experience: {
      title: "Personal Experience",
      des_1: (
        <>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet.
        </>
      ),
      des_2: (
        <>
          Must explain to you how all this mistaken idea of denouncing works
          pleasure and praising uts pain was born and I will gives you a itself
          completed account of the system, and sed expounds the ut actual
          teachings of that greater sed explores truth. Denouncing works
          pleasures and praising pains was us born and I will gives you a
          completed ut workers accounts of the system. sit aspernatur aut odit
          aut fugit, sed quia consequuntur magni dolores eos qui ratione
          voluptatem sequi nesciunt.
        </>
      ),
      personal_info: [
        {
          id: 1,
          title: "Skills",
          des: (
            <>
              Must explain to you how all praising uts pain <br />
              was born and I will gives you a itself completed <br />
              account of the system, and sed expounds the <br /> ut actual
              teachings of that greater
            </>
          ),
          title_list: [
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
          ],
        },
        {
          id: 2,
          title: "Education",
          des: (
            <>
              Must explain to you how all praising uts pain <br />
              was born and I will gives you a itself completed <br />
              account of the system, and sed expounds the <br /> ut actual
              teachings of that greater
            </>
          ),
          title_list: [
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
          ],
        },
        {
          id: 3,
          title: "Awards",
          des: (
            <>
              Must explain to you how all praising uts pain <br />
              was born and I will gives you a itself completed <br />
              account of the system, and sed expounds the <br /> ut actual
              teachings of that greater
            </>
          ),
          title_list: [
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
            "Bacteria Markers",
            "Nam nec mi euismod euismod",
            "In aliquet dui nec ectus",
            "Extramural Funding",
          ],
        },
      ],
    },
  },
];
const TeamDetailsArea = () => {
  return (
    <>
      <section className="team-details-area pt-130 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="tp-team-dtls__thumb mb-50">
                <img src="/assets/img/aa13.jpg" alt="team-thumb" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="tp-team-dtls__content mt-50 mb-50">
                <h4 className="tp-team-dtls__title mb-10">
                  <Link style={{ color: "#c61000" }} href="/">
                    Dr. Shashikanth Vokkaleri
                  </Link>
                </h4>
                <span className="mb-35">
                  Joint Replacement & Arthroscopic Surgeon
                </span>
                <p style={{ color: "black" }}>
                  Expert orthopedic surgeon focused on minimally invasive,
                  compassionate patient care.
                </p>
                <div className="tp-team-dtls__info">
                  <ul>
                    <li style={{ display: "flex" }}>
                      Education:{" "}
                      <span style={{ marginLeft: "10px" }}>
                        MBBS (BMCRI), MS Orthopaedic (PGIMER), Senior Registrar
                        (AIIMS New Delhi), Fellowship in Advanced Arthoplasty
                        (SICOT), Fellowship in Shoulder & Knee Arthoscopy,
                        (Royal College of Surgeons England)t
                      </span>
                    </li>
                    <li style={{ display: "flex" }}>
                      Experience:{" "}
                      <span style={{ marginLeft: "10px" }}>13 Years</span>
                    </li>
                    <li style={{ display: "flex" }}>
                      E-mail:{" "}
                      <span style={{ marginLeft: "10px" }}>
                        <a href="mailto:sridurgaorthoneuroclinic@gmail.com">
                          {" "}
                          sridurgaorthoneuroclinic@gmail.com
                        </a>
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
                  Dr. Shashikanth Vokkaleri – MBBS (BMCRI), FRCS (England), MS
                  Ortho (PGI Chandigarh), Senior Resident (AIIMS – New Delhi) –
                  is a Bengaluru-based Orthopaedic Surgeon with 12+ years
                  experience. He specializes in Trauma, Arthroscopy (Knee, Hip,
                  Shoulder), Knee Pain, Knee Injury, Hip Pain, Hip Injury,
                  Shoulder Pain, Back Pain, ACL/PCL Injury/Reconstruction,
                  Fracture, Sports Injury and Joint Replacement.
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
                      <span style={{ marginRight: "8px" }}>1) </span> Dr
                      Shashikanth worked at one of the premier institutes of
                      India AIIMS, New Delhi as Senior Registrar where he
                      garnered more knowledge and experience of handling complex
                      trauma and joint replacement surgeries.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>2) </span> He worked
                      as Assistant Professor at M.S. Ramaiah Medical College,
                      Bengaluru from 2015 to 2016.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>3) </span>He worked
                      as a Joint Replacement Surgeon at Sparsh Hospital,
                      Infantry Road, Bengaluru from 2016 to 2018.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>4) </span>He worked
                      as Senior Clinical Fellow in Arthroscopy and Sports
                      Medicine at Chesterfield Royal Hospital, NHS, England from
                      2018 to 2021.
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
                      <span style={{ marginRight: "8px" }}>1) </span>Dr
                      Shashikanth specialises in arthroscopic and joint
                      replacement surgeries of shoulder, hip, and knee.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>2) </span>He
                      routinely performs surgeries such as Shoulder Bankart
                      Repair, Rotator Cuff Repair, Shoulder Replacement,
                      Subacromial Decompression, Patellar Stabilisation,
                      Cartilage Regeneration, Knee Meniscal Repair, ACL Repair,
                      MCL & PLC Repair, Partial & Total Knee and Hip
                      Replacement.
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>3) </span>He uses
                      stem cell therapy, platelet rich plasma (PRP) in treating
                      patients, and tries to treat most of the cases without
                      surgery
                    </li>
                    <li
                      style={{
                        color: "black",
                        marginBottom: "6px",
                        display: "flex",
                      }}
                    >
                      <span style={{ marginRight: "8px" }}>4) </span>His
                      treatment procedures also include bone marrow aspirate
                      concentrate (BMAC), computer navigation and robotic
                      surgery to benefit the patient.
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
              href="https://click4appointment.com/clinic-details/sridurgaorthoneuroclinic-4196"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;
