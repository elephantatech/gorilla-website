import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GorillaSlides.css';

const unsplash = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '' });

const GorillaSlides: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    unsplash.search.getPhotos({ query: 'gorilla', perPage: 20 })
      .then(result => {
        const urls = result.response?.results.map(photo => photo.urls.full) || [];
        setImages(urls);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
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
