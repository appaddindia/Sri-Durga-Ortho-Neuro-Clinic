import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <div
      className="small d-lg-none"
      style={{ position: "fixed", bottom: "0px", zIndex: 999, width: "100%" }}
    >
      <div className="row">
        <div
          style={{ backgroundColor: "#614417", padding: "18px 3px" }}
          className="col-3"
        >
          <a style={{ width: "100%" }} href="tel:9980445660">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg
                style={{ width: "20px", marginBottom: "8px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="white"
                  d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                />
              </svg>
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "0px",
                color: "white",
                fontSize: "12px",
              }}
            >
              Call Us
            </p>
          </a>
        </div>

        <div
          style={{ backgroundColor: "#284329", padding: "18px 3px" }}
          className="col-3"
        >
          <a style={{ width: "100%" }} href="https://wa.link/txwsrd">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Image
                  src="/assets/img/whatsapp.png"
                  height={30}
                  width={30}
                  alt=""
                />
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "0px",
                color: "white",
                fontSize: "12px",
              }}
            >
              WhatsApp
            </p>
          </a>
        </div>

        <div
          style={{ backgroundColor: "#614417", padding: "18px 3px" }}
          className="col-3"
        >
          <Link
            style={{ width: "100%" }}
            href="https://www.google.com/maps?ll=13.021473,77.628801&z=14&t=m&hl=kn&gl=IN&mapclient=embed&cid=14283709170592320519"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg
                style={{ width: "17px", marginBottom: "8px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="white"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "0px",
                color: "white",
                fontSize: "12px",
              }}
            >
              Location
            </p>
          </Link>
        </div>

        <div
          style={{ backgroundColor: "#284329", padding: "18px 3px" }}
          className="col-3"
        >
          <Link style={{ width: "100%" }} href="https://click4appointment.com/clinic-details/sridurgaorthoneuroclinic-4196">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <svg
                style={{ width: "20px", marginBottom: "8px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="white"
                  d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"
                />
              </svg>
            </div>
            <p
              style={{
                textAlign: "center",
                marginBottom: "0px",
                color: "white",
                fontSize: "12px",
              }}
            >
              Appoint
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
