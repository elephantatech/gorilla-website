import React, { useEffect, useState } from 'react';
import { searchPhotos } from "./GetImages";
import './HistoryOfGorillas.css';

const HistoryOfGorillas: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const fetchPhoto = async () => {
      const results = await searchPhotos('gorillas sleeping', 1, 1);
      if (results && results.length > 0) {
        const url = results[0].urls.full || '';
        setImageUrl(url);
      }
    };

    fetchPhoto();
  }, []);

  return (
    <div className="history-of-gorillas" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>History of Gorillas</h1>
      <div className="content">
        <p>
          Gorillas were first discovered by Western scientists in the mid-19th century. The first recorded encounter 
          was by an American missionary named Thomas Staughton Savage and a naturalist named Jeffries Wyman in 1847. 
          They described the western gorilla species, which they named Gorilla gorilla.
        </p>
        <p>
          In the early 20th century, the famous American explorer Carl Akeley embarked on several expeditions to study 
          gorillas in their natural habitat. His work helped to change the perception of gorillas from ferocious beasts 
          to gentle giants. Akeley's efforts also led to the establishment of the first gorilla sanctuary in the 
          Virunga Mountains, which is now part of the Virunga National Park in the Democratic Republic of Congo.
        </p>
        <p>
          Over the years, gorillas have been the subject of numerous studies and conservation efforts. The pioneering 
          work of primatologists like Dian Fossey, who dedicated her life to studying and protecting mountain gorillas, 
          has been instrumental in raising awareness about the plight of these magnificent creatures. Fossey's work 
          was popularized by the book and film "Gorillas in the Mist."
        </p>
        <p>
          Today, gorillas are classified as endangered species, with their populations facing threats from habitat 
          destruction, poaching, and diseases. Conservation organizations continue to work tirelessly to protect 
          gorillas and their habitats, ensuring that future generations can appreciate and learn from these incredible 
          animals.
        </p>
      </div>
    </div>
  );
};

export default HistoryOfGorillas;
