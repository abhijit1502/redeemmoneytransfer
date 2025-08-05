import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Preloader from "../../Components/Preloader";
import "../../css/steps.css";
import CookieConsent from "../../Components/CookieConsent";
import General_FAQ_Seo from "../../SEO/General_FAQ_Seo";

function GeneralFAQ() {
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
      <General_FAQ_Seo />
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          {/* ==================== Breadcrumb Start Here ==================== */}
          <div className="bg-neutral-20 position-relative z-1 py-120 pb-5">
            <img
              src="assets/images/shape/my-profile-shape-1.png"
              alt="Image"
              className="shape__one position-absolute z-n1 tw-block-end-0 tw-start-0"
            />
            <img
              src="assets/images/shape/my-profile-shape-2.png"
              alt="Image"
              className="shape__two position-absolute z-n1 tw-block-end-0 tw-end-0"
            />
            <div className="text-center">
              <h1
                className="fw-normal text-dark-600 text-uppercase cursor-big"
                data-aos="fade-up"
                data-aos-duration={600}
              >
                General FAQs
              </h1>
              <div
                className="d-flex align-items-center tw-gap-105 justify-content-center"
                data-aos="fade-up"
                data-aos-duration={800}
              >
                <NavLink
                  to="/help"
                  className="fw-semibold tw-text-base text-dark-600 text-uppercase"
                >
                  Help
                </NavLink>
                <span className="tw-text-6 text-main-600">
                  <i className="ph ph-caret-double-right" />
                </span>
                <span className="fw-semibold tw-text-base text-main-600 text-uppercase">
                  General FAQs
                </span>
              </div>
            </div>
          </div>
          {/* ==================== Breadcrumb End Here ==================== */}
          {/* =============== FAQ Two Section Start ================ */}
          <section className="bg-neutral-10 py-80 z-1 overflow-hidden">
            <div className="container">
              <div className="justify-content-center mx-auto">
                <div className>
                  <div
                    className="accordion d-flex justify-content-center tw-gap-6 flex-wrap"
                    id="accordionExample"
                  >
                    <div className="w-100">
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ab laboriosam, unde asperiores ea veniam,
                              dolorum, reprehenderit nihil assumenda itaque nemo
                              praesentium dolorem et quasi voluptate quo ipsa
                              non. Eveniet, doloremque.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Mollitia accusamus cumque alias
                              minus rem libero praesentium corporis consequatur
                              voluptatem magni dolorem, repellat sapiente sint
                              ex nihil, expedita nesciunt, unde vel!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Minima neque quibusdam quas corrupti facere
                              nulla modi dolorum perspiciatis numquam vero eum
                              in, natus reiciendis sint placeat officiis
                              consectetur nesciunt sequi.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum, dolor sit amet consectetur
                              adipisicing elit. Omnis rerum ex voluptatem esse
                              culpa impedit quasi! Minima nemo architecto
                              voluptas atque libero pariatur accusamus
                              perspiciatis aut quas minus! Veniam, voluptatum?
                            </p>
                          </div>
                        </div>
                      </div>
                       <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={600}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Et perspiciatis perferendis
                              recusandae adipisci quaerat rem, consequatur
                              aspernatur delectus qui, neque veritatis ipsum
                              illum odio facere dolores eligendi illo voluptatem
                              dicta.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={800}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Quia optio reiciendis culpa ab consequuntur
                              sunt? Autem est aliquid itaque ad expedita rem
                              blanditiis. Consequuntur aperiam nulla saepe at
                              nostrum numquam.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1000}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Ex asperiores impedit cumque debitis ipsam,
                              provident consectetur nostrum. Hic minus aliquam
                              blanditiis veritatis officiis, inventore fugit
                              vitae illo, temporibus, excepturi consequuntur.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="accordion-item tw-mb-6 rounded-3 bg-white border-neutral-1px-solid"
                        data-aos="fade-up"
                        data-aos-duration={1200}
                      >
                        <h2 className="accordion-header cursor-big">
                          <button
                            className="accordion-button collapsed bg-white rounded-3 tw-text-xl tw-gap-1"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Question
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <p className="fw-normal tw-text-lg text-dark-600">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Debitis, tenetur. Recusandae
                              officia, iste est eveniet quos ipsam debitis error
                              incidunt iusto explicabo alias ea? Quasi fugiat
                              excepturi libero animi vel.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* =============== FAQ Two Section End ================ */}
          <Footer />
        </>
      )}
    </>
  );
}

export default GeneralFAQ;
