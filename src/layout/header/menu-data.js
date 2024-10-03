const menu_data = [
  {
    id: 1,
    mega_menu: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    title: "About",
    link: "/about",
    has_dropdown: true,
    active: "active",
    sub_menus: [
      { link: "/dr-shashikanth-vokkaleri-orthopedic-excellence", title: "Dr. Shashikanth Vokkaleri" },
      { link: "/dr-surbhi-chaturvedi", title: "Dr. Surbhi Chaturvedi" },
    ],
  },
  
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Orthopedic",
    link: "/",
    active: "",
    sub_menus: [
      {
        link: "/orthopedic-surgery",
        title: "Orthopedic Surgery",
        has_dropdown: true,
        sub_menus : [
          {
            link: "/",
            title: "Knee Replacement",
            has_dropdown: true,
            sub_menus: [
              { link: "/primary-Knee-replacement", title: "Primary Knee replacement" },
              { link: "/complex-knee-replacement", title: "Complex Knee replacement" },
              { link: "/unicondylar-knee-replacement", title: "Unicondylar Knee Replacement" },
            ],
          },
          {
            link: "/service",
            title: "Knee Arthroscopy",
            has_dropdown: true,
            sub_menus: [
              { link: "/sports-injury-treatment", title: "Sports injury Treatment" },
              { link: "/acl-reconstruction", title: "ACL Reconstruction" },
              { link: "/pcl-reconstruction", title: "PCL Reconstruction" },
              { link: "/mcl-reconstruction", title: "MCL Reconstruction" }, // Updated link
              { link: "/lateral-ligament-complex", title: "Lateral Ligament Complex" }, // Updated link
              { link: "/menstrual-injury", title: "Menstrual Injury" }, // Updated link
              { link: "/chondral-defect", title: "Chondral Defect" }, // Updated link
            ],
          },
          {
            link: "/service",
            title: "Hip Replacement",
            has_dropdown: true,
            sub_menus: [
              { link: "/primary-hip-replacement", title: "Primary Hip Replacement" }, // Updated link
              { link: "/complex-hip-replacement", title: "Complex Hip Replacement" }, // Updated link
              { link: "/revision-hip-replacement", title: "Revision Hip Replacement" }, // Updated link
            ],
          },
          {
            link: "/service",
            title: "Hip Arthroscopy",
            has_dropdown: true,
            sub_menus: [
              { link: "/hip-labral-defects", title: "Hip Labral Defects" }, // Updated link
              { link: "/hip-labral-repair", title: "Hip Labral Repair" }, // Updated link
            ],
          },
          {
            link: "/service",
            title: "Shoulder Replacement",
            has_dropdown: true,
            sub_menus: [
              { link: "/shoulder-hemiarthroplasty", title: "Shoulder Hemiarthroplasty Replacement" }, // Updated link
              { link: "/reverse-shoulder-replacement", title: "Reverse total joint shoulder replacement" }, // Updated link
            ],
          },
          {
            link: "/service",
            title: "Shoulder Arthroscopy",
            has_dropdown: true,
            sub_menus: [
              { link: "/ac-joint-reconstruction", title: "AC joint reconstruction" }, // Updated link
              { link: "/bankart-repair", title: "Bankart Repair" }, // Updated link
              { link: "/rotator-cuff-repair", title: "Rotator Cuff Repair" }, // Updated link
              { link: "/angioplasty", title: "Angioplasty" }, // Updated link
              { link: "/augmentation-shoulder-instability", title: "Augmentation Procedure for Shoulder Instability" }, // Updated link
            ],
          },
          {
            link: "/service",
            title: "Ankle Surgery",
            has_dropdown: true,
            sub_menus: [
              { link: "/ankle-replacements", title: "Ankle Replacements" }, // Updated link
              { link: "/ankle-arthroscopy", title: "Ankle Arthroscopy" }, // Updated link
            ],
          },
          {
            link: "/service",
            title: "Elbow Surgery",
            has_dropdown: true,
            sub_menus: [
              { link: "/total-joint-replacement", title: "Total Joint Replacement" }, // Updated link
              { link: "/partial-head-replacement", title: "Partial Head Replacement" }, // Updated link
              { link: "/elbow-arthroscopy", title: "Elbow Arthroscopy" }, // Updated link
            ],
          },
          {
            link: "/service",
            title: "Spine Surgery",
            has_dropdown: true,
            sub_menus: [
              { link: "/single-level-fixation", title: "Single Level Fixation" }, // Updated link
              { link: "/multiple-level-fixation", title: "Multiple Level Fixation" }, // Updated link
            ],
          },
        ],
       },
       
       {
        link: "/orthopedic-treatments",
        title: "Orthopedic Treatments",
        has_dropdown: true,
        sub_menus: [
          { link: "/orthopaedic-consultation", title: "Orthopaedic consultation" },
          { link: "/sports-injury-treatments", title: "Sports Injury Treatments" },
          { link: "/ligament-tear", title: "Ligament Tear" },
          { link: "/bone-fracture-treatment", title: "Bone Fracture Treatment" },
          { link: "/plaster-application-fractures", title: "Plaster application for fractures" },
          { link: "/frozen-shoulder", title: "Frozen shoulder" },
          { link: "/physiotherapy", title: "Physiotherapy" },
          { link: "/regenerative-treatment", title: "Regenerative treatment" },
          // { link: "/unicondylar-knee-replacement", title: "Unicondylar knee replacement" },
          { link: "/bmac-injection", title: "Bone Marrow Aspirate Concentrate Injection" },
          { link: "/prp-therapy", title: "PRP Therapy" },
          { link: "/tendo-achilles-tendinitis", title: "Tendo Achilles tendinitis" },
          { link: "/diagnostic-laboratory", title: "Diagnostic laboratory" },
          { link: "/stemcell-therapy", title: "Stemcell therapy" },
          { link: "/trigger-finger-release", title: "Trigger finger release" },
          { link: "/dequervains-release", title: "Dequervains release" },
          { link: "/tennis-elbow", title: "Tennis elbow" },
          { link: "/plantar-fascitis", title: "Plantar fascitis" },
          { link: "/trigger-point-release", title: "Trigger point release" },
        ],
      }
    ],
  },
  {
    id: 5,
    mega_menu: false,
    title: "Neurology",
    link: "/neurological-treatments",
    has_dropdown: true,
    active: "",
    sub_menus: [
      { link: "/stroke", title: "Stroke" },
      { link: "/epilepsy-and-seizures", title: "Epilepsy and Seizures" },
      { link: "/headache", title: "Headache" },
      { link: "/migraine", title: "Migraine" },
      { link: "/spine-disorder", title: "Spine Disorder" },
      { link: "/parkinsons-disease", title: "Parkinson’s Disease" },
      { link: "/memory-disorder", title: "Memory Disorder" },
      { link: "/neuromuscular-disorders", title: "Neuromuscular Disorders" },
      { link: "/pediatric-neurology", title: "Pediatric Neurology" }, // Fixed typo
      { link: "/sciatica-disorder", title: "Sciatica Disorder" },
      { link: "/neuropathy", title: "Neuropathy" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "More",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Gallery" },
      { link: "/blog-details", title: "Blog Details" },
    ],
  },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
