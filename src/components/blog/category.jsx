import Link from "next/link";
import React from "react";

// category_data
const category_data = [
  {
    category: "Primary Knee replacement",
    blog_item: "01",
    lonk:"/primary-Knee-replacement"
  },
  {
    category: "Complex Knee replacement",
    blog_item: "02",
    lonk:"/complex-knee-replacement"
  },
  {
    category: "Unicondylar Knee Replacement",
    blog_item: "03",
    lonk:"/unicondylar-knee-replacement"
  },
  {
    category: "Sports injury Treatment",
    blog_item: "04",
    lonk:"/sports-injury-treatment"
  },
  {
    category: "ACL Reconstruction",
    blog_item: "05",
    lonk:"/acl-reconstruction"
  },
  {
    category: "PCL Reconstruction",
    blog_item: "06",
    lonk:"/pcl-reconstruction"
  },
  {
    category: "MCL Reconstruction",
    blog_item: "07",
    lonk:"/mcl-reconstruction"
  },
  {
    category: "Lateral Ligament Complex",
    blog_item: "08",
    lonk:"/lateral-ligament-complex"
  },
  {
    category: "Menstrual Injury",
    blog_item: "09",
    lonk:"/menstrual-injury"
  },
  {
    category: "Chondral Defect",
    blog_item: "10",
    lonk:"/chondral-defect"
  },
  {
    category: "Primary Hip Replacement",
    blog_item: "11",
    lonk:"/primary-hip-replacement"
  },
  {
    category: "Complex Hip Replacement",
    blog_item: "12",
    lonk:"/complex-hip-replacement"
  },
  {
    category: "Revision Hip Replacement",
    blog_item: "13",
    lonk:"/revision-hip-replacement"
  },
  {
    category: "Hip Labral Defects",
    blog_item: "14",
    lonk:"/hip-labral-defects"
  },
  {
    category: "Hip Labral Repair",
    blog_item: "15",
    lonk:"/hip-labral-repair"
  },
  {
    category: "Shoulder Hemiarthroplasty Replacement ",
    blog_item: "16",
    lonk:"/shoulder-hemiarthroplasty"
  },
  {
    category: "Reverse total joint shoulder replacement",
    blog_item: "17",
    lonk:"/reverse-shoulder-replacement"
  },
  {
    category: "AC  joint reconstruction",
    blog_item: "18",
    lonk:"/ac-joint-reconstruction"
  },
  {
    category: "Bankart Repair",
    blog_item: "19",
    lonk:"/bankart-repair"
  },
  {
    category: "Rotator Cuff Repair",
    blog_item: "20",
    lonk:"/rotator-cuff-repair"
  },
  {
    category: "Angioplasty",
    blog_item: "21",
    lonk:"/angioplasty"
  },
  {
    category: "Augmentation Procedure for Shoulder Instability",
    blog_item: "22",
    lonk:"/augmentation-shoulder-instability"
  },
  {
    category: "Ankle Replacements",
    blog_item: "23",
    lonk:"/ankle-replacements"
  },
  {
    category: "Ankle Arthroscopy",
    blog_item: "24",
    lonk:"/ankle-arthroscopy"
  },
  {
    category: "Total Joint Replacement",
    blog_item: "25",
    lonk:"/total-joint-replacement"
  },
  {
    category: "Partial Head Replacement",
    blog_item: "26",
    lonk:"/partial-head-replacement"
  },
  {
    category: "Elbow Arthroscopy",
    blog_item: "27",
    lonk:"/elbow-arthroscopy"
  },
  {
    category: "Single Level Fixation",
    blog_item: "28",
    lonk:"/single-level-fixation"
  },
  {
    category: "Multiple Level Fixation",
    blog_item: "29",
    lonk:"/multiple-level-fixation"
  },
];

const Category = () => {
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

export default Category;
