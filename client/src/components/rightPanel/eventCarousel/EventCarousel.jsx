import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./EventCarousel.css";

const EventCarousel = () => {
  return (
    <div className="eventCarousel">
      <Carousel autoPlay showThumbs={false} infiniteLoop showStatus={false} className="carousel">
        <div>
          <div className="carouselCaption">
            <h4>Long Event Name</h4>
            <p>Date: 2015-04-23</p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            alt="event"
          />
        </div>
        <div>
          <div className="carouselCaption">
            <h4>Long Event Name</h4>
            <p>Date: 2015-04-23</p>
          </div>
          <img
            src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
            alt="event"
          />
        </div>
        <div>
          <div className="carouselCaption">
            <h4>Long Event Name</h4>
            <p>Date: 2015-04-23</p>
          </div>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="event"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default EventCarousel;
