import React, { useEffect, useState } from "react";
import { searchPhotos } from "./GetImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GorillaSlides.css";

const GorillaSlides: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const results = await searchPhotos("gorilla", 1, 20);
      if (results) {
        const urls = results.map((photo) => photo.urls.full);
        setImages(urls);
      }
    };

    fetchPhotos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="gorilla-slides">
      <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index} className="slide">
            <img src={url} alt="Gorilla" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GorillaSlides;
