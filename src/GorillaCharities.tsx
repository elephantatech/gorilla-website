import React, { useEffect, useState } from "react";
import { searchPhotos } from "./GetImages";
import "./GorillaCharities.css";

const GorillaCharities: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    const fetchPhoto = async () => {
      const results = await searchPhotos("forest", 1, 1);
      if (results && results.length > 0) {
        const url = results[0].urls.full || "";
        setImageUrl(url);
      }
    };
    fetchPhoto();
  }, []);

  const charities = [
    {
      name: "The Dian Fossey Gorilla Fund",
      description:
        "Dedicated to the conservation and protection of gorillas and their habitats in Africa.",
      webpage: "https://gorillafund.org/",
      twitter: "https://twitter.com/gorillafund",
    },
    {
      name: "The Gorilla Organization",
      description:
        "Works to save the world’s last remaining gorillas from extinction.",
      webpage: "https://www.gorillas.org/",
      twitter: "https://twitter.com/TheGorillaOrg",
    },
    {
      name: "Wildlife Conservation Society",
      description:
        "Committed to saving wildlife and wild places worldwide through science, conservation action, education, and inspiring people to value nature.",
      webpage: "https://www.wcs.org/",
      twitter: "https://twitter.com/TheWCS",
    },
  ];

  return (
    <div
      className="gorilla-charities"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <h1>Support Charities for Gorillas</h1>
      <div className="content">
        {charities.map((charity, index) => (
          <div key={index} className="charity">
            <hr />
            <h2>{charity.name}</h2>
            <p>{charity.description}</p>
            <p>
              <a
                href={charity.webpage}
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>{" "}
              |
              <a
                href={charity.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Twitter
              </a>
            </p>
            {index < charities.length - 1}
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default GorillaCharities;
