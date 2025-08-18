import React from "react";
import { NavLink } from "react-router-dom";

function Marquee() {
  return (
    <>
      <div className="slider__marquee style2 bg-primary-500 tw-py-7">
        <div className="marquee_mode">
          <div className="item tw-gap-10">
            <NavLink to="#">
              <img
                className="flags-size"
                src="assets/images/flags/inr.png"
                alt="img"
              />
              <h3 className="fw-normal text-white hover-text-main-200 tw-duration-500">
                {" "}
                Send Money to India
              </h3>
            </NavLink>
          </div>
          <div className="item tw-gap-10">
            <NavLink to="#">
              <img
                className="flags-size"
                src="assets/images/flags/ngn.png"
                alt="img"
              />
              <h3 className="fw-normal text-white hover-text-main-200 tw-duration-500">
                Send Money to Nigeria
              </h3>
            </NavLink>
          </div>
          <div className="item tw-gap-10">
            <NavLink to="#">
              <img
                className="flags-size"
                src="assets/images/flags/kes.png"
                alt="img"
              />
              <h3 className="fw-normal text-white hover-text-main-200 tw-duration-500">
                Send Money to Kenya
              </h3>
            </NavLink>
          </div>
          <div className="item tw-gap-10">
            <NavLink to="#">
              <img
                className="flags-size"
                src="assets/images/flags/brl.png"
                alt="img"
              />
              <h3 className="fw-normal text-white hover-text-main-200 tw-duration-500">
                Send Money to Brazil
              </h3>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
