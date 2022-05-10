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
            <h4>CSE TCET Hack 2022</h4>
            <p>Date: 13-05-2022</p>
          </div>
          <img
            src="https://www.devonblog.com/wp-content/uploads/2021/03/hackathon1.png"
            alt="event"
          />
        </div>
        <div>
          <div className="carouselCaption">
            <h4>Robotic Process Automation Seminar</h4>
            <p>Date: 15-05-2022</p>
          </div>
          <img
            src="https://wwwcdn.imo.org/localresources/en/OurWork/Conferences/PublishingImages/Pages/Default/Main%20Hall.jpg"
            alt="event"
          />
        </div>
        <div>
          <div className="carouselCaption">
            <h4>Play & Gain 5.0</h4>
            <p>Date: 20-05-2022</p>
          </div>
          <img
            src="https://www.startuplithuania.com/wp-content/uploads/2021/11/BCH_cover-1130x500.jpg"
            alt="event"
          />
        </div>
        <div>
          <div className="carouselCaption">
            <h4>Painting Workshop</h4>
            <p>Date: 23-05-2022</p>
          </div>
          <img
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            alt="event"
          />
        </div>
        <div>
          <div className="carouselCaption">
            <h4>Sujourn 2022</h4>
            <p>Date: 31-05-2022</p>
          </div>
          <img
            src="http://uloop_post_img.s3.amazonaws.com/post_images/uloop_news/241725/large_image_1499629306.jpg"
            alt="event"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default EventCarousel;
