import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./EventCarousel.css";

const EventCarousel = () => {
  return (
    <div className="eventCarousel">
      <Carousel autoPlay showThumbs={false} infiniteLoop showStatus={false}>
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
            src="https://previews.123rf.com/images/rglinsky/rglinsky1201/rglinsky120100188/12336990-vertical-oriented-image-of-famous-eiffel-tower-in-paris-france-.jpg"
            alt="event"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default EventCarousel;
