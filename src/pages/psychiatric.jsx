import Blog from "@/components/blog";
import SEO from "@/components/seo";
// import article_data from "@/data/article-data";
import Wrapper from "@/layout/wrapper";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const psychiatricdata = [
  {
    id: 80,
    img: "/assets/img/psychiatry.jpg.webp",
    banner: "/assets/img/what-is-a-psychiatrist.webp",
    title: "Psychiatric",
    main: "Psychiatric",
    submain: "",
    link: "/psychiatric",
    subdes:
      "At Sri Durga Ortho & Neuro Clinic, our Psychiatry Department provides compassionate, confidential, and evidence-based care for a wide range of mental health conditions to help individuals lead fulfilling lives.",
    des: (
      <>
        <p style={{ color: "black" }}>
          At Sri Durga Ortho & Neuro Clinic, we understand that mental health is
          as vital as physical health. Our Psychiatry Department provides
          compassionate, confidential, and evidence-based care for a wide range
          of psychiatric disorders. We aim to help patients regain emotional
          balance, improve their quality of life, and function effectively in
          their personal and professional lives.
        </p>
        <p style={{ color: "black" }}>
          Our psychiatric services are tailored to each individuals needs
          through comprehensive evaluations, personalized treatment plans, and
          follow-up care. We adopt a multidisciplinary approach, often working
          in tandem with neurologists and other specialists to address
          overlapping neurological and psychiatric concerns.
        </p>
        <p style={{ color: "black" }}>
          <strong>Conditions We Treat:</strong> Depression, Anxiety Disorders,
          Bipolar Disorder, OCD, Schizophrenia, ADHD, PTSD, Personality
          Disorders, Sleep Disorders, Substance Use & Addiction, Geriatric
          Psychiatry, and Child & Adolescent Psychiatry.
        </p>
        <p style={{ color: "black" }}>
          <strong>Services We Offer:</strong> Detailed Psychiatric Evaluations,
          Medication Management, Cognitive Behavioral Therapy (CBT),
          Psychoeducation, Crisis Intervention, Supportive Psychotherapy,
          Lifestyle & Stress Management, and Coordinated Neuropsychiatric Care.
        </p>
        <p style={{ color: "black" }}>
          <strong>Why Choose Us?</strong> Expert psychiatrists and neurologists,
          a confidential and judgment-free environment, holistic and
          patient-centered care, and integrated mental-neurological treatment
          approaches.
        </p>
        <p style={{ color: "black" }}>
          Take the first step toward better mental health. If you or your loved
          one is facing emotional or psychological challenges, we’re here to
          help with compassion and expertise.
        </p>
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
