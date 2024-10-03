import Link from "next/link";
import React from "react";

// category_data
const category_data= [
    {
      category: "Stroke",
      blog_item: "01",
      lonk: "/stroke"
    },
    {
      category: "Epilepsy and Seizures",
      blog_item: "02",
      lonk: "/epilepsy-and-seizures"
    },
    {
      category: "Headache",
      blog_item: "03",
      lonk: "/headache"
    },
    {
      category: "Migraine",
      blog_item: "04",
      lonk: "/migraine"
    },
    {
      category: "Spine Disorder",
      blog_item: "05",
      lonk: "/spine-disorder"
    },
    {
      category: "Parkinson’s Disease",
      blog_item: "06",
      lonk: "/parkinsons-disease"
    },
    {
      category: "Memory Disorder",
      blog_item: "07",
      lonk: "/memory-disorder"
    },
    {
      category: "Neuromuscular Disorders",
      blog_item: "08",
      lonk: "/neuromuscular-disorders"
    },
    {
      category: "Pediatric Neurology",
      blog_item: "09",
      lonk: "/pediatric-neurology"
    },
    {
      category: "Sciatica Disorder",
      blog_item: "10",
      lonk: "/sciatica-disorder"
    },
    {
      category: "Neuropathy",
      blog_item: "11",
      lonk: "/neuropathy"
    }
  ]

const CategoryThree = () => {
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

export default CategoryThree;
