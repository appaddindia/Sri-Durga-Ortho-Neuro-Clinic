import Link from 'next/link';
import React from 'react';

const ProjectDetailsBanner = () => {
    return (
      <>
        <section
          className="pt-120 pb-120 breadcrumb__overlay"
          style={{
            backgroundImage: `url(/assets/img/banner/breadcrumb-01.jpg)`,
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-12 col-md-12 col-12">
                <div className="tp-breadcrumb">
                  <h2 className="tp-breadcrumb__title">Project Details</h2>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12 col-md-12 col-12">
                <div className="tp-breadcrumb__link text-xl-end">
                  <span>
                    Sri Durga Ortho & Neuro Clinic : <Link href="/portfolio-details">Project</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default ProjectDetailsBanner;