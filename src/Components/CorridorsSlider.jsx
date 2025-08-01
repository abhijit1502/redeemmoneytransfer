import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

function CorridorsSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return (
    <section className="company-sb pt-70 pb-70">
      <div className="container-fluid">
        {/* Wrap your items with <Slider> */}
        <Slider ref={sliderRef} {...settings} className="company-slider">
          <div className="company-item">
            <div className="company-img">
              <NavLink to="#" className="" title="Send Money to Canada">
                  <img className='img' src="images/flags/cad.png" alt="Company Thumbnail" />
              </NavLink>              
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
            <NavLink to="#" className="" title="Send Money to UAE">
                  <img className='img' src="images/flags/aed.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
             <NavLink to="#" className="" title="Send Money to UK">
                  <img className='img' src="images/flags/gbp.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
            <NavLink to="#" className="" title="Send Money to Australia">
                  <img className='img' src="images/flags/aud.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
            <NavLink to="#" className="" title="Send Money to Japan">
                  <img className='img' src="images/flags/jpy.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
             <NavLink to="#" className="" title="Send Money to France">
                  <img className='img' src="images/flags/FRA.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
            <NavLink to="#" className="" title="Send Money to Spain">
                  <img className='img' src="images/flags/Spain.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
             <NavLink to="#" className="" title="Send Money to USD">
                  <img className='img' src="images/flags/usd.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
          <div className="company-item">
            <div className="company-img">
           <NavLink to="#" className="" title="Send Money to Switzerland">
                  <img className='img' src="images/flags/chf.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
            <div className="company-item">
            <div className="company-img">
           <NavLink to="#" className="" title="Send Money to Singapore">
                  <img className='img' src="images/flags/sgd.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
           <div className="company-item">
            <div className="company-img">
           <NavLink to="#" className="" title="Send Money to Hong Kong">
                  <img className='img' src="images/flags/hkd.png" alt="Company Thumbnail" />
              </NavLink>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default CorridorsSlider;
