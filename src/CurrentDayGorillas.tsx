import React, { useEffect, useState } from 'react';
import { createApi } from 'unsplash-js';
import './CurrentDayGorillas.css';

const unsplash = createApi({ accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '' });

const CurrentDayGorillas: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    unsplash.search.getPhotos({ query: 'gorilla families', perPage: 10 })
      .then(result => {
        const url = result.response?.results[2].urls.full || '';
        setImageUrl(url);
      });
  }, []);

  return (
    <div className="current-day-gorillas" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>Gorillas in the Current Day</h1>
      <div className="content">
        <p>
          Gorillas are the largest living primates and are known for their strong family bonds and social structures. 
          In the wild, they live in groups called troops or bands, led by a dominant male known as a silverback. 
          Gorillas are primarily found in the tropical forests of central Africa and are divided into two species: 
          the eastern gorilla and the western gorilla. Despite their imposing size, gorillas are generally gentle and 
          shy animals, primarily herbivorous, feeding on leaves, stems, fruit, and bamboo shoots.
        </p>
        <p>
          In recent years, gorilla populations have faced significant threats due to habitat destruction, poaching, 
          and diseases such as Ebola. Conservation efforts are ongoing to protect these magnificent creatures and 
          their habitats. Organizations and governments are working together to create protected areas, enforce 
          anti-poaching laws, and conduct research to better understand gorilla behavior and ecology.
        </p>
        <p>
          Gorillas play a crucial role in their ecosystems by dispersing seeds and maintaining the health of the 
          forest. Their presence is vital for the biodiversity of their habitats. As we continue to learn more about 
          gorillas, it is essential to support conservation efforts to ensure their survival for future generations.
        </p>
      </div>
    </div>
  );
};

export default CurrentDayGorillas;
