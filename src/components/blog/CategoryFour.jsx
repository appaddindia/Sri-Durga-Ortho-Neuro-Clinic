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
      category: "Seizure disorder/Epilepsy",
      blog_item: "02",
      lonk: "/seizure-disorder-epilepsy"
    },
    {
      category: "Parkinson's disease",
      blog_item: "03",
      lonk: "/parkinsons-disease"
    },
    {
      category: "Tremors and other movement disorder",
      blog_item: "04",
      lonk: "/tremors-movement-disorders"
    },
    {
      category: "Migraine and other types of headache",
      blog_item: "05",
      lonk: "/migraine-headaches"
    },
    {
      category: "Neuropathy and other nerve disorder",
      blog_item: "06",
      lonk: "/neuropathy-nerve-disorders"
    },
    {
      category: "Neuromuscular junction disorder",
      blog_item: "07",
      lonk: "/neuromuscular-junction-disorder"
    },
    {
      category: "Neuro demyelination",
      blog_item: "08",
      lonk: "/neuro-demyelination"
    },
    {
      category: "Neuroinfections",
      blog_item: "09",
      lonk: "/neuroinfections"
    },
  ]

const CategoryFour = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-25">Categorize</h3>
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

export default CategoryFour;
