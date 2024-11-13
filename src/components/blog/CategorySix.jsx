import Link from "next/link";
import React from "react";

// category_data
const category_data= [
    {
      category: "EEG",
      blog_item: "01",
      lonk: "/eeg"
    },
    {
      category: "⁠NCS of face and limbs",
      blog_item: "02",
      lonk: "/ncs-face-limbs"
    },
    {
      category: "Blink reflex",
      blog_item: "03",
      lonk: "/blink-reflex"
    },
    {
      category: "H reflex",
      blog_item: "04",
      lonk: "/h-reflex"
    },
    {
      category: "Visual evoked potential",
      blog_item: "05",
      lonk: "/visual-evoked-potential"
    },
    {
      category: "⁠Repetitive Nerve stimulation",
      blog_item: "06",
      lonk: "/repetitive-nerve-stimulation"
    },
    {
      category: "⁠BAER",
      blog_item: "07",
      lonk: "/baer"
    },
    {
      category: "⁠EMG",
      blog_item: "08",
      lonk: "/emg"
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
