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
            <div className="col-lg-4 col-md-6 col-12">
              <img
                style={{ width: "100%", borderRadius: "8px" }}
                src="/assets/img/aa14.jpg"
                alt=""
              />
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="tp-srv-process mb-0">
                <span className="tp-section__sub-title left-line mb-15">
                  Neurologist
                </span>
                <h4
                  style={{ color: "#c61000" }}
                  className="tp-srv-stap__title mb-25"
                >
                  Dr. Surbhi Chaturvedi
                </h4>
                <a
                  style={{ marginBottom: "15px" }}
                  className="tp-section__link mb-15"
                  href="#"
                >
                  <b>DM - Neurology, MD - General Medicine, MBBS</b>
                </a>
                <p style={{ color: "black" }} className="mb-20">
                  Dr. Surbhi Chaturvedi is a highly regarded Consultant
                  Neurologist with over five years of dedicated experience in
                  the field. She earned her MD in Medicine in 2016 and completed
                  her DM in Neurology in 2019, graduating as the topper of her
                  class and receiving a prestigious Gold medal. Dr. Chaturvedi
                  honed her skills during her training at the renowned National
                  Institute of Mental Health and Neurosciences (NIMHANS) in
                  India and further enhanced her expertise through a prestigious
                  Stroke fellowship in Canada. As a Fellow of the Canadian
                  Stroke Consortium, she has developed a strong focus on stroke
                  management, among other neurological disorders.
                </p>
                <p style={{ color: "black" }} className="mb-40">
                  Dr. Chaturvedis clinical expertise encompasses a wide range of
                  conditions, including migraines, Parkinsons disease, epilepsy,
                  and more. She excels in performing advanced procedures such as
                  digital EEG and electromyography (EMG), which are essential
                  for accurate diagnosis and treatment planning. In addition to
                  her clinical work, she has authored numerous peer-reviewed
                  publications and has established herself as a thought leader
                  in the field by serving as a keynote speaker at international
                  conferences. Dr. Chaturvedi’s commitment to advancing
                  neurological care and her focus on patient outcomes make her
                  an invaluable asset to her patients and the medical community.
                </p>
                <div className="tp-about__btn">
                  <Link className="tp-btn" href="/dr-surbhi-chaturvedi">
                    Know More
                  </Link>
                  <a
                    style={{ backgroundColor: "#c61000" }}
                    className="tp-btn-second ml-25"
                    href="https://click4appointment.com/clinic-details/sridurgaorthoneuroclinic-4196"
                  >
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterFour />
    </>
  );
};

export default index;
