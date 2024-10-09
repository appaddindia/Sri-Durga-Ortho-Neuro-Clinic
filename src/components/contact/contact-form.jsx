import Link from "next/link";
import React from "react";
import ContactUs from "../forms/contact-us";


// contact_info
const contact_info = {
  address: (
    <>
      1st Floor, Shiva Ram Karanath Nagar, No. 42 & 25, 80 Feet Rd, MCEHS Layout, Rachenahalli,Hegde Nagar , Bengaluru, Karnataka 560077
    </>
  ),
  phone_1: "9980445660",
  phone_2: "+1255 - 568 - 6523",
  open: (
    <>
      Monday - Friday <br />
      09:00 AM - 05:00 PM
    </>
  ),
};

const { address, phone_1, phone_2, open } = contact_info;
const ContactForm = () => {
  return (
    <>
      <section className="contact-area pt-130 pb-115">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-5 col-12 wow fadeInLeft"
              data-wow-delay=".4s"
            >
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-01.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 style={{color:"#2a4825"}} className="tpcontact__title mb-15">Address line</h4>
                    <span>
                      <a  style={{color:"black"}} href="https://www.google.com/maps/place/80+Feet+Rd,+Bengaluru,+Karnataka/@13.0214727,77.6262261,17z/data=!4m10!1m2!2m1!1sShiva+Ram+Karanath+Nagar,+No.+42+%26+25,+80+Feet+Rd,+MCEHS+Layout,+Rachenahalli,Hegde+Nagar+,+Bengaluru,+Karnataka+56007!3m6!1s0x3bae17180101d86f:0xe545d0793abc9066!8m2!3d13.0214727!4d77.628801!15sCnZTaGl2YSBSYW0gS2FyYW5hdGggTmFnYXIsIE5vLiA0MiAmIDI1LCA4MCBGZWV0IFJkLCBNQ0VIUyBMYXlvdXQsIFJhY2hlbmFoYWxsaSxIZWdkZSBOYWdhciAsIEJlbmdhbHVydSwgS2FybmF0YWthIDU2MDA3kgEFcm91dGXgAQA!16s%2Fg%2F1hhjzc_v7?entry=ttu&g_ep=EgoyMDI0MDkyOS4wIKXMDSoASAFQAw%3D%3D">{address}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-02.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 style={{color:"#2a4825"}} className="tpcontact__title mb-15">Phone Number</h4>
                    <span>
                      <a  style={{color:"black"}} href={`tel:${phone_1}`}>{phone_1}</a>
                    </span>
                  </div>
                </div>
              </div>
              <div
                className="tpcontact mr-60 mb-60 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="tpcontact__item text-center">
                  <div className="tpcontact__icon mb-20">
                    <img src="/assets/img/icon/contact-03.svg" alt="" />
                  </div>
                  <div className="tpcontact__address">
                    <h4 style={{color:"#2a4825"}} className="tpcontact__title mb-15">Opening Hours</h4>
                    <span  style={{color:"black"}}>{open}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-7 col-12">
              <div className="contactform wow fadeInRight" data-wow-delay=".4s">
                <h4 className="contactform__title mb-35">
                  Send us a Massage :
                </h4>
                <ContactUs />

                <div className="row">
                  <div className="col-lg-12">
                    <div className="tpcontactmap">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2229018278435!2d77.62622607484224!3d13.021472687298477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17180101d86f%3A0xe545d0793abc9066!2s80%20Feet%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727843409182!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        // style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
