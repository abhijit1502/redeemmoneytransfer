import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Preloader from "../Components/Preloader";
import Error_Seo from "../SEO/Error_Seo";

function Error() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (window.initThemeScripts) window.initThemeScripts();
      if (window.initGsapScripts) window.initGsapScripts();
    }
  }, [isLoading]);

  return (
    <>
      <Error_Seo />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {/* ============================ 404 section start ============================== */}
          <section className="py-80 bg-neutral-10">
            <div className="container">
              <div className="max-w-610-px w-100 mx-auto">
                <img
                  src="assets/images/thumbs/go-to-back-img1.png"
                  alt="Image"
                  className="tw-mb-5"
                />
                <div className="text-center ">
                  <h2 className="cursor-big fw-normal text-dark-600 tw-mb-3">
                    Oops! Page Not Found{" "}
                  </h2>
                  <p className="fw-normal tw-text-lg text-dark-500 tw-mb-10">
                    We're sorry, the page you have looked for does not exist in our database! Maybe go to our home page or try to use a search?
                  </p>
                  <div className="position-relative z-1 w-100 mx-auto">
                    <NavLink
                      to="/"
                      className="go-back-link bg-main-600 w-100 text-white fw-semibold tw-text-lg tw-px-5 tw-py-3 border-two-px-solid rounded-3 hover-text-dark-900"
                    >
                      GO BACK TO HOME
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ============================ 404 section end ============================== */}
        </>
      )}
    </>
  );
}

export default Error;
