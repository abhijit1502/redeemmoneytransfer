import React, { useState } from "react";

// Helper to extract initials
const getInitials = (name) => {
  const nameParts = name.trim().split(" ");
  const firstInitial = nameParts[0]?.[0] || "";
  const lastInitial = nameParts[nameParts.length - 1]?.[0] || "";
  return (firstInitial + lastInitial).toUpperCase();
};

// Testimonial card component
const TestimonialCard = ({ name, location, message, imgSrc }) => {
  const [imageError, setImageError] = useState(false);
  const initials = getInitials(name);

  return (
    <div className="swiper-slide">
      <div className="bg-neutral-10 tw-px-8 tw-py-8 rounded-3">
        <div>
          <div className="d-flex align-items-center justify-content-between tw-gap-3 flex-wrap tw-mb-6">
            <div className="d-flex align-items-center tw-gap-3">
              {!imageError ? (
                <img
                  src={imgSrc}
                  alt={name}
                  onError={() => setImageError(true)}
                  style={{ width: 50, height: 50, borderRadius: "50%", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    backgroundColor: "#6598f7",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "16px"
                  }}
                >
                  {initials}
                </div>
              )}
              <div>
                <h5 className="fw-medium text-dark-600 tw-mb-05">{name}</h5>
                <span className="fw-normal text-dark-500 tw-text-lg">
                  {location}
                </span>
              </div>
            </div>
            <img
              src="assets/images/icon/testimonial-icon1.png"
              alt="Quote Icon"
            />
          </div>
        </div>
        <p className="fw-normal text-dark-500 tw-text-lg tw-mb-6">"{message}"</p>
        <span className="w-100 bg-neutral-05 h-005 d-block" />
      </div>
    </div>
  );
};

function Testimonial() {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "California, USA",
      message:
        "I've been sending money to my family in Mexico for years, and Redeem is by far the fastest and most affordable service I've used.",
      imgSrc: "",
    },
    {
      name: "Rajiv Patel",
      location: "Toronto, Canada",
      message:
        "The exchange rates are significantly better than my bank offers. I save over $30 every time I send money to my parents in India.",
      imgSrc: "",
    },
    {
      name: "Lisa Wong",
      location: "Sydney, Australia",
      message:
        "The app is so easy to use, and I love being able to track my transfer every step of the way. It gives me peace of mind.",
      imgSrc: "",
    },
    {
      name: "James Santos",
      location: "Dubai, UAE",
      message:
        "Redeem has the best rates for sending money to the Philippines. The money is always there within minutes of my transfer.",
      imgSrc: "",
    },
    {
      name: "Emma Wilson",
      location: "London, UK",
      message:
        "I was skeptical at first, but Redeem has been a game-changer for my business. We use it for all our international payments now.",
      imgSrc: "",
    },
    {
      name: "Mohammed Al-Farsi",
      location: "Doha, Qatar",
      message:
        "Customer service was exceptional when I had an issue with my first transfer. They resolved it immediately and I've been a loyal customer since.",
      imgSrc: "",
    },
  ];

  return (
    <section className="py-80 z-1 overflow-hidden">
      <div className="container">
        <div className="d-flex tw-gap-3 justify-content-between flex-wrap tw-mb-80-px">
          <div className="max-w-522">
            <div
              className="d-flex align-items-center tw-gap-1 tw-mb-3 d-none"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <span>
                <img
                  src="assets/images/icon/star-icon2.png"
                  alt="Image"
                />
              </span>
              <h5 className="text-primary-600 fw-normal">Our Testimonials</h5>
            </div>
            <h2
              className="fw-bold h1 cursor-big"
              data-aos="fade-up"
              data-aos-duration={800}
            >
              What Our Clients Say About us
            </h2>
          </div>
          <div className="max-w-340">
            <p
              className="fw-normal tw-text-lg text-dark-500 tw-mb-8"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              See why people around the globe choose Redeem for their
              international money transfers.
            </p>
            <div className="d-flex align-items-center tw-gap-1">
              <button
                type="button"
                className="testimonial-button-prev w-12 h-12 border-base-two-600 border rounded-circle d-flex align-items-center justify-content-center tw-text-6 hover-bg-primary-400 tw-duration-400 hover-text-white"
                data-aos="fade-right"
                data-aos-duration={800}
              >
                <i className="ph ph-caret-left" />
              </button>
              <button
                type="button"
                className="testimonial-button-next w-12 h-12 border-base-two-600 border rounded-circle d-flex align-items-center justify-content-center tw-text-6 hover-bg-primary-400 tw-duration-400 hover-text-white"
                data-aos="fade-left"
                data-aos-duration={800}
              >
                <i className="ph ph-caret-right" />
              </button>
            </div>
          </div>
        </div>

        <div className="swiper testimonial-two-slider">
          <div className="swiper-wrapper d-flex">
            {testimonials.map((item, index) => (
              <TestimonialCard
                key={index}
                name={item.name}
                location={item.location}
                message={item.message}
                imgSrc={item.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
