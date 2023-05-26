import React from 'react';
import PortfolioCard from './portfolioCard';
import forumImage from '../assets/forum.png';
import weatherImage from '../assets/weather.JPG';
import movieImage from '../assets/movie.jpg';
import raycastImage from '../assets/raycast.JPG'; // Assuming the file extension is '.jpg'
import abcDojoImage from '../assets/abcdojo.JPG';
import ezlImage from '../assets/ezl.jpg';

const portfolioItems = [
  {
    id: 1,
    imageSrc: forumImage,
    github: 'https://github.com/amsudekum/Forum-Project',
  },
  {
    id: 2,
    imageSrc: weatherImage,
    github: 'https://github.com/kcavner/weather-dashboard',
  },
  {
    id: 3,
    imageSrc: movieImage,
    github: 'https://github.com/jboyce313/movie-game',
  },
  {
    id: 4,
    imageSrc: raycastImage,
    github: 'https://github.com/kcavner/raycast-visualizer',
  },
  {
    id: 5,
    imageSrc: abcDojoImage,
    github: 'https://kcavner.github.io/abc-dojo/',
  },
  {
    id: 6,
    imageSrc: ezlImage,
    github: 'https://github.com/kcavner/Ezleagues',
  },
];

function Portfolio() {
  return (
    <div className='portfolioName'>My Projects
      <div className='portfolioPage'>
        {portfolioItems.map((item) => (
          <PortfolioCard
            key={item.id}
            imageSrc={item.imageSrc}
            github={item.github}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
