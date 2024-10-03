import Link from "next/link";
import React from "react";

// category_data
const category_data= [
    {
      category: "Orthopaedic consultation",
      blog_item: "01",
      lonk: "/orthopaedic-consultation"
    },
    {
      category: "Sports Injury Treatments",
      blog_item: "04",
      lonk: "/sports-injury-treatment"
    },
    {
      category: "Ligament Tear",
      blog_item: "02",
      lonk: "/ligament-tear"
    },
    {
      category: "Bone Fracture Treatment",
      blog_item: "03",
      lonk: "/bone-fracture-treatment"
    },
    {
      category: "Plaster application for fractures",
      blog_item: "05",
      lonk: "/plaster-application-fractures"
    },
    {
      category: "Frozen shoulder",
      blog_item: "06",
      lonk: "/frozen-shoulder"
    },
    {
      category: "Physiotherapy",
      blog_item: "07",
      lonk: "/physiotherapy"
    },
    {
      category: "Regenerative treatment",
      blog_item: "08",
      lonk: "/regenerative-treatment"
    },
    {
      category: "Unicondylar Knee Replacement",
      blog_item: "03",
      lonk: "/unicondylar-knee-replacement"
    },
    {
      category: "Bone Marrow Aspirate Concentrate Injection (BMAC)",
      blog_item: "09",
      lonk: "/bmac-injection"
    },
    {
      category: "PRP Therapy",
      blog_item: "10",
      lonk: "/prp-therapy"
    },
    {
      category: "Tendo Achilles tendinitis",
      blog_item: "11",
      lonk: "/tendo-achilles-tendinitis"
    },
    {
      category: "Diagnostic laboratory",
      blog_item: "12",
      lonk: "/diagnostic-laboratory"
    },
    {
      category: "Stemcell therapy",
      blog_item: "13",
      lonk: "/stemcell-therapy"
    },
    {
      category: "Trigger finger release",
      blog_item: "14",
      lonk: "/trigger-finger-release"
    },
    {
      category: "Dequervains release",
      blog_item: "15",
      lonk: "/dequervains-release"
    },
    {
      category: "Tennis elbow",
      blog_item: "16",
      lonk: "/tennis-elbow"
    },
    {
      category: "Plantar fascitis",
      blog_item: "17",
      lonk: "/plantar-fascitis"
    },
    {
      category: "Trigger point release",
      blog_item: "18",
      lonk: "/trigger-point-release"
    }
  ]

const CategorySec = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-25">Orthopedic Surgery</h3>
        <div className="sidebar__widget-content">
          <ul>
            {category_data.map((item, i) => (
              <li key={i}>
                <Link href={item.lonk}>
                  {item.category}
                  <span>{item.blog_item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default CategorySec;
