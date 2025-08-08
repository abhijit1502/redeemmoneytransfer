import React from "react";

function Preloader() {
  return (
    <>
      {/*==================== Preloader Start ====================*/}
      <div className="preloder">
        <div className="position-relative tw-w-76-px tw-h-76-px d-flex justify-content-center align-items-center">
          <img
            src="assets/images/icon/preloder-img1.png"
            alt="Img"
            className="tw-w-9"
          />
          <div className="preloder__exchange__img w-100 h-100">
            <img
              src="assets/images/icon/preloder-img2.png"
              alt="Img"
              className="w-100 h-100 animation-rotation"
            />
          </div>
        </div>
      </div>
      {/*==================== Preloader End ====================*/}
    </>
  );
}

export default Preloader;
