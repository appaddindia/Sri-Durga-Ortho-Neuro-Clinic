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

const psychiatricdata = [
  {
    id: 80,
    img: "/assets/img/psychiatry.jpg.webp",
    banner: "/assets/img/what-is-a-psychiatrist.webp",
    title: "Psychiatric Treatments",
    main: "Psychiatric",
    submain: "",
    link: "/psychiatric",
    subdes:
      "At Sri Durga Ortho & Neuro Clinic, our Psychiatry Department provides compassionate, confidential, and evidence-based care for a wide range of mental health conditions to help individuals lead fulfilling lives.",
    des: (
      <>
        {/* <h3>Psychiatrist Treatments at Sri Durga Ortho & Neuro Clinic</h3> */}

        <div>
          <p>
            At Sri Durga Ortho & Neuro Clinic, we understand that mental health
            is as vital as physical health. Our Psychiatry Department provides
            compassionate, confidential, and evidence-based care for a wide
            range of psychiatric disorders. We aim to help patients regain
            emotional balance, improve their quality of life, and function
            effectively in their personal and professional lives.
          </p>
        </div>

        <div>
          <h5>Our Approach</h5>
          <p>
            Our psychiatric services are tailored to each individuals needs
            through comprehensive evaluations, personalized treatment plans, and
            follow-up care. We adopt a multidisciplinary approach, often working
            in tandem with neurologists and other specialists to address
            overlapping neurological and psychiatric concerns.
          </p>
        </div>

        <div>
          <h5>Conditions We Treat</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Depression:</strong> Persistent sadness, fatigue, and
                loss of interest in daily activities.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Anxiety Disorders:</strong> Generalized anxiety, panic
                attacks, social anxiety, and phobias.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Bipolar Disorder:</strong> Mood instability involving
                episodes of mania and depression.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Obsessive-Compulsive Disorder (OCD):</strong> Intrusive
                thoughts and repetitive behaviors affecting daily life.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Schizophrenia and Psychotic Disorders:</strong>{" "}
                Hallucinations, delusions, and impaired thinking and behavior.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>ADHD:</strong> Inattention, hyperactivity, and
                impulsivity in children and adults.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>PTSD:</strong> Psychological distress after experiencing
                or witnessing trauma.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Personality Disorders:</strong> Long-standing patterns
                of unhealthy thinking, functioning, and behavior.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Sleep Disorders:</strong> Insomnia, nightmares, and
                disturbances related to mental health.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Substance Use and Addiction:</strong> Management of
                alcohol, drug, and prescription medication dependency.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Geriatric Psychiatry:</strong> Mental health concerns in
                the elderly, including dementia and depression.
              </span>
            </li>
            <li style={listItemStyle}>
              <span style={bulletStyle}>•</span>
              <span>
                <strong>Child and Adolescent Psychiatry:</strong> Behavioral and
                emotional disorders in younger age groups.
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h5>Services We Offer</h5>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {[
              "Detailed Psychiatric Evaluations",
              "Medication Management",
              "Cognitive Behavioral Therapy (CBT)",
              "Psychoeducation for Patients and Families",
              "Crisis Intervention",
              "Supportive Psychotherapy",
              "Lifestyle and Stress Management Guidance",
              "Coordinated Care with Neurology for Neuropsychiatric Conditions",
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
              "Expert team of psychiatrists and neurologists",
              "Confidential and judgment-free environment",
              "Holistic and patient-centered approach",
              "Integrated care for mental and neurological health",
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
          <h5>Take the First Step Toward Better Mental Health</h5>
          <p>
            Your mental wellness matters. If you or your loved one is struggling
            with emotional or psychological concerns, we are here to help with
            compassion and expertise.
          </p>
          <p>
            <a href="tel:+919980445660">
              📞 Book an appointment today with our Psychiatry Department at Sri
              Durga Ortho & Neuro Clinic
            </a>
          </p>
        </div>
      </>
    ),
    doctorDetails: {
      name: "Dr Shree Lakshmi Mallya",
      designation: "Psychiatrist",
      qualification: "MBBS, M.D. (Psychiatry)",
      image: "/assets/img/laxmii.jpeg",
      link: "drshreelakshmimallya",
    },
  },
];

const Index = () => {
  const [data, setData] = useState(psychiatricdata);
  useEffect(() => {
    const update = psychiatricdata.filter((item) => {
      return item.title == "psychiatric";
    });
    setData(update);
  }, []);

  const router = useRouter();
  const [doctorData, setDoctorData] = useState([]);
  useEffect(() => {
    const data = psychiatricdata.filter(
      (data) => data.link === router.pathname
    );
    setDoctorData(data);
    console.log("router", data);
  }, []);

  return (
    <Wrapper>
      <SEO pageTitle="Sri Durga Ortho & Neuro Clinic" />
      <Blog data={psychiatricdata} doctorData={doctorData} />
    </Wrapper>
  );
};

export default Index;
