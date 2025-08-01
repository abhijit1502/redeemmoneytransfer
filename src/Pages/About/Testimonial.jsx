// TestimonialSection.jsx
import React, { useRef } from "react";
import Slider from "react-slick";

const TestimonialSection = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
  };

  return (
    <section className="testimonial-sb pt-55 pb-80">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-md-8">
            <div className="section-title mb-60">
              <span className="sub-heading">Our Testimonials</span>
              <h2 className="text-anm">
                <span className="font-200">We Have 1530+ Reviews</span>
                <br />
                Let’s Explore Clients Feedback
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-arrows mb-50">
              <button onClick={prev} className="prev slick-arrow slick-prev">
                <i className="fas fa-angle-left" />
              </button>
              <button onClick={next} className="next slick-arrow slick-next">
                <i className="fas fa-angle-right" />
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-6 order-lg-1 order-2">
            <div className="sasly-rating-box mb-50">
              <div className="text-box">
                <div className="rating-point">4.8</div>
                {/* <p>
                  <a href="#">(563k+ Reviews)</a>
                </p> */}
                <ul className="ratings mt-5">
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                  <li><i className="fas fa-star" /></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-6 order-lg-2 order-1">
            <Slider ref={sliderRef} {...settings} className="testimonial-slider mb-50">
              {/* Testimonial 1 */}
              <div className="sasly-testimonial-item style-one">
                <div
                  className="dot-bg bg_cover"
                  style={{
                    backgroundImage: "url(assets/images/testimonial/dot-bg.png)",
                  }}
                />
                <div className="testimonial-content">
                  <div className="author-thumb-company d-flex mb-30">
                    <div className="author-thumb">
                      <img
                        src="assets/images/testimonial/author5.png"
                        alt="Author"
                      />
                    </div>
                    {/* <div className="author-company">
                      <img
                        src="assets/images/testimonial/client.png"
                        alt="Client"
                      />
                    </div> */}
                  </div>
                  <p>                    
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatibus! Architecto vitae, dignissimos exercitationem accusamus nihil minus similique sunt! Amet at earum laborum inventore unde delectus blanditiis mollitia deleniti consectetur?"
                  </p>
                  <div className="author-info-box">
                    <div className="author-info">
                      <h4>Ricardo F. Bowers</h4>
                      <span className="position">CEO &amp; Founder</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="sasly-testimonial-item style-one">
                <div
                  className="dot-bg bg_cover"
                  style={{
                    backgroundImage: "url(assets/images/testimonial/dot-bg.png)",
                  }}
                />
                <div className="testimonial-content">
                  <div className="author-thumb-company d-flex mb-30">
                    <div className="author-thumb">
                      <img
                        src="assets/images/testimonial/author5.png"
                        alt="Author"
                      />
                    </div>
                    {/* <div className="author-company">
                      <img
                        src="assets/images/testimonial/client.png"
                        alt="Client"
                      />
                    </div> */}
                  </div>
                  <p>
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatibus! Architecto vitae, dignissimos exercitationem accusamus nihil minus similique sunt! Amet at earum laborum inventore unde delectus blanditiis mollitia deleniti consectetur?"
                  </p>
                  <div className="author-info-box">
                    <div className="author-info">
                      <h4>Sarah L. Allen</h4>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
