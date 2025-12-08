import Blog from "@/components/blog";
import SEO from "@/components/seo";
// import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const listItemStyle = {
  //   backgroundColor: "#f5f5f5",
  padding: "7px",
  marginBottom: "2px",
  borderRadius: "6px",
  //   boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "flex-start",
};

const bulletStyle = {
  marginRight: "10px",
  color: "#333",
  fontWeight: "bold",
  fontSize: "20px",
  lineHeight: "1",
};

const generalMedicineDiabetologyData = [
  {
    id: 81,
    img: "/assets/img/genaral.avif",
    banner: "/assets/img/what-is-a-psychiatrist.webp",
    title: "General Medicine & Diabetology",
    main: "General Medicine",
    submain: "Diabetology",
    link: "/general-medicine-and-diabetology",
    subdes:
      "At Sri Durga Ortho & Neuro Clinic, our General Medicine & Diabetology Department offers comprehensive care for acute and chronic medical conditions, with special focus on diabetes prevention, management, and long-term wellness.",
    des: (
      <>
        <div>
          <p>
            At Sri Durga Ortho & Neuro Clinic, our General Medicine &
            Diabetology Department provides holistic, patient-centered medical
            care for individuals across all age groups. We focus on early
            diagnosis, effective treatment, and long-term management of common
            medical illnesses, lifestyle disorders, and diabetes-related
            conditions.
          </p>
        </div>

        <div>
          <h5>Our Approach</h5>
          <p>
            We believe in comprehensive and preventive healthcare. Our approach
            includes detailed clinical evaluation, evidence-based treatment,
            lifestyle modification guidance, and regular follow-up to ensure
            optimal health outcomes—especially for chronic conditions like
            diabetes and hypertension.
          </p>
        </div>

        <div>
          <h5>Conditions We Treat</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Diabetes Mellitus:</strong> Type 1, Type 2, and
                gestational diabetes management.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Hypertension:</strong> Blood pressure evaluation and
                long-term control.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Fever and Infections:</strong> Viral, bacterial, and
                seasonal infections.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Thyroid Disorders:</strong> Hypothyroidism and
                hyperthyroidism.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Respiratory Conditions:</strong> Asthma, bronchitis, and
                COPD.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Gastrointestinal Disorders:</strong> Acidity, gastritis,
                IBS, liver-related issues.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Heart-Related Risk Factors:</strong> Cholesterol
                disorders and metabolic syndrome.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Anemia and Nutritional Deficiencies:</strong> Vitamin
                B12, iron, and vitamin D deficiency.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Geriatric Medical Care:</strong> Chronic disease
                management in elderly patients.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h5>Services We Offer</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Comprehensive General Health Check-ups",
              "Diabetes Screening and Monitoring",
              "Blood Sugar and HbA1c Management",
              "Lifestyle and Dietary Counseling",
              "Hypertension and Cardiac Risk Assessment",
              "Preventive Healthcare and Vaccinations",
              "Management of Chronic Medical Conditions",
              "Coordination with Specialists for Multidisciplinary Care",
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>Why Choose Us?</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Experienced general physicians and diabetology care",
              "Personalized treatment plans",
              "Focus on preventive and long-term health",
              "Patient-friendly and compassionate care",
            ].map((item, index) => (
              <li key={index} style={listItemStyle}>
                <span style={bulletStyle}>•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <br />
        <div>
          <h5>Take Control of Your Health Today</h5>
          <p>
            Whether it’s managing diabetes, controlling blood pressure, or
            addressing everyday medical concerns, our team is here to support
            your journey toward better health.
          </p>
          <p>
            <a href="tel:+919980445660">
              📞 Book an appointment with our General Medicine & Diabetology
              Department at Sri Durga Ortho & Neuro Clinic
            </a>
          </p>
        </div>
      </>
    ),
    doctorDetails: {
      name: "Dr. Subrata Kumar Pal",
      designation: "Physician (MBBS, DGO, DCH)",
      qualification: "MBBS, DGO, DCH",
      image: "/assets/img/500x500.webp", // replace with your actual file path
      link: "dr-subrata-kumar-pal",
    },
  },
];

const Index = () => {
  const [data, setData] = useState(generalMedicineDiabetologyData);
  useEffect(() => {
    const update = generalMedicineDiabetologyData.filter((item) => {
      return item.title == "/general-medicine-and-diabetology";
    });
    setData(update);
  }, []);

  const router = useRouter();
  const [doctorData, setDoctorData] = useState([]);
  useEffect(() => {
    const data = generalMedicineDiabetologyData.filter(
      (data) => data.link === router.pathname
    );
    setDoctorData(data);
    console.log("router", data);
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle="General Medicine & Diabetology | Sri Durga Ortho & Neuro Clinic" />
      <Blog data={generalMedicineDiabetologyData} doctorData={doctorData} />
    </Wrapper>
  );
};

export default Index;
