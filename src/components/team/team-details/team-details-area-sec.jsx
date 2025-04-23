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
const TeamDetailsAreaSec = () => {
  return (
    <>
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
                <span className="mb-35">Neurologist</span>
                <p style={{ color: "black" }}>
                  Dr. Surbhi Chaturvedi, a Consultant Neurologist and gold
                  medalist, specializes in stroke management, migraines, and
                  advanced neurological procedures, with extensive experience
                  and numerous publications in the field.
                </p>
                <div className="tp-team-dtls__info">
                  <ul>
                    <li style={{ display: "flex" }}>
                      Education:{" "}
                      <span style={{ marginLeft: "10px" }}>
                        DM - Neurology, MD - General Medicine, MBBS
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
                <h4 className="tp-team-dtls-text__title mb-30">
                  Expert Neurologist Specialist
                </h4>
                <p style={{ color: "black", marginBottom: "15px" }}>
                  Dr. Surbhi Chaturvedi is a certified Neurologist. Following
                  her graduation, she completed her MD in Medicine and
                  subsequently earned her DM in Neurology, finishing at the top
                  of her class and receiving a Gold Medal. She possesses strong
                  leadership abilities and a deep understanding of relevant
                  technologies in her field.
                </p>
                <p style={{ color: "black" }}>
                  Dr. Surbhi Chaturvedi is skilled in managing various
                  neurological emergencies, including status epilepticus, acute
                  strokes within the treatment window, myasthenic crisis,
                  Guillain-Barré syndrome, and neurological infections. She has
                  experience running telemedicine services and a stroke unit and
                  is involved in neurointerventions. Her primary interests lie
                  in stroke, followed by epilepsy and pediatric neurology. She
                  is proficient in numerous neurological procedures, such as
                  digital and video EEG, BERA, NCV, EMG, VEP, and tracheostomy.
                  Additionally, Dr. Surbhi has contributed to many national and
                  international peer-reviewed publications and has served as a
                  keynote speaker at international conferences.
                </p>
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
          {/* <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="tp-team-dtls-item mb-50 mt-35 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <h4 className="tp-team-dtls-item__title mb-25">Skills</h4>
                <p>
                  Must explain to you how all praising uts pain <br />
                  was born and I will gives you a itself completed <br />
                  account of the system, and sed expounds the <br /> ut actual
                  teachings of that greater
                </p>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tp-team-dtls-item mb-50 mt-35 ml-40 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <h4 className="tp-team-dtls-item__title mb-25">Education</h4>
                <p>
                  Must explain to you how all praising uts pain <br />
                  was born and I will gives you a itself completed <br />
                  account of the system, and sed expounds the <br /> ut actual
                  teachings of that greater
                </p>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="tp-team-dtls-item mb-50 mt-35 ml-75 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <h4 className="tp-team-dtls-item__title mb-25">Awards</h4>
                <p>
                  Must explain to you how all praising uts pain <br />
                  was born and I will gives you a itself completed <br />
                  account of the system, and sed expounds the <br /> ut actual
                  teachings of that greater
                </p>
                <div className="tp-team-dtls-item__list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>In aliquet dui nec
                      lectus
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Extramural Funding
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Bacteria Markers
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>Nam nec mi euismod
                      euismod
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default TeamDetailsAreaSec;
