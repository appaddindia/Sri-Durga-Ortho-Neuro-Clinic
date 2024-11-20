import Link from "next/link";
import React from "react";

// category_data
const category_data= [
    {
      category: "Spinal cord disorder",
      blog_item: "01",
      lonk: "/spinal-cord-disorder"
    },
    {
      category: "Sleep disorder",
      blog_item: "02",
      lonk: "/sleep-disorder"
    },
    {
      category: "Autonomic function disorder",
      blog_item: "03",
      lonk: "/autonomic-function-disordere"
    },
    {
      category: "Alzheimer's and other dementia",
      blog_item: "04",
      lonk: "/alzheimers-dementia"
    },
    {
      category: "Pediatric Neurology",
      blog_item: "05",
      lonk: "/pediatric-neurology"
    },
    {
      category: "Vertigo/Dizziness",
      blog_item: "06",
      lonk: "/vertigo-dizziness"
    },
  ]

const CategoryFive = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <h3 className="sidebar__widget-title mb-25">Neuroinfections</h3>
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

export default CategoryFive;
