import React from 'react';
import { useParams } from 'react-router-dom';
import './Story.css';

const storiesData = {
  'taj-mahal': {
    name: 'Taj Mahal',
    imageUrl: 'https://www.hindustantimes.com/ht-img/img/2023/04/09/1600x900/AI-generated-pics-taj-mahal-viral-instagram_1681029929230_1681029939696_1681029939696.jpg',
    description: [
      `The Taj Mahal, an epitome of love, is a white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Construction began in 1632 and took over 20 years to complete. It stands as a symbol of India's rich history and architectural brilliance, showcasing the intricate artistry reflected in its carvings and inlay work.`,
      `As a UNESCO World Heritage Site and one of the Seven Wonders of the World, the Taj Mahal attracts millions of visitors each year. The stunning gardens and reflective pools surrounding the structure enhance its charm, creating a serene atmosphere that reflects the profound love story behind its creation.`
    ],
  },
  'konark-sun-temple': {
    name: 'Konark Sun Temple',
    imageUrl: 'https://i.redd.it/i-made-konark-temple-which-is-in-odisha-had-its-main-v0-v21bah1wm3sa1.jpg?width=611&format=pjpg&auto=webp&s=6c35e286deecf5100343037383fb8eba72842ac8',
    description: [
      `The Konark Sun Temple, built in the 13th century, is dedicated to the sun god Surya. Designed as a massive chariot with twelve pairs of wheels, the temple features exquisite carvings that depict various deities and celestial bodies. This UNESCO World Heritage Site showcases the architectural brilliance of ancient India.`,
      `Legend has it that King Narasimhadeva I of the Eastern Ganga Dynasty commissioned the temple. Its alignment with the sun's rays at equinox and intricate craftsmanship make it a marvel of engineering. Despite damage over centuries, the temple remains a significant symbol of India’s rich heritage, drawing countless tourists and devotees.`
    ],
  },
  'hampi': {
    name: 'Hampi',
    imageUrl: 'https://i.ytimg.com/vi/egXm7crahRY/sddefault.jpg',
    description: [
      `Hampi, once the capital of the Vijayanagara Empire, is a UNESCO World Heritage Site filled with stunning temples, palaces, and ruins. Its architecture, dating back to the 14th century, showcases the grandeur of its time, with notable structures like the Virupaksha Temple and Vittala Temple adorned with intricately carved pillars and a stone chariot.`,
      `The unique landscape of Hampi, characterized by boulder-strewn hills and lush valleys, provides insight into the socio-cultural life of the empire. Despite its decline in the 16th century, Hampi continues to attract scholars and travelers seeking to explore India's glorious past through its ruins and heritage.`
    ],
  },
  'ajanta-caves': {
    name: 'Ajanta Caves',
    imageUrl: 'https://thumbs.dreamstime.com/b/ajanta-caves-india-near-aurangabad-maharashtra-state-50520853.jpg',
    description: [
      `The Ajanta Caves, carved into a rock face in Maharashtra, date back to the 2nd century BCE and are renowned for their stunning Buddhist frescoes and sculptures. Serving as a monastic retreat for Buddhist monks, these caves showcase intricate artwork depicting Jataka tales and the life of Buddha, preserved due to their hidden location in a lush gorge.`,
      `The artistry within the caves reflects the evolution of Indian art, and their rediscovery in the 19th century has made them a significant site for archaeological studies. The Ajanta Caves illustrate India's rich spiritual and cultural heritage through their impressive and detailed depictions.`
    ],
  },
  'mahabalipuram': {
    name: 'Mahabalipuram',
    imageUrl: 'https://whc.unesco.org/uploads/thumbs/site_0249_0001-750-750-20090918173439.jpg',
    description: [
      `Mahabalipuram, located on the southeastern coast of India, is famous for its rock-cut temples and sculptures, built in the 7th century by the Pallava dynasty. Featuring intricately carved monuments like the Shore Temple, a UNESCO World Heritage Site, Mahabalipuram reflects the artistic brilliance and devotion to architecture of its era.`,
      `The site also houses the Pancha Rathas, showcasing various architectural styles and mythological themes through its carvings. The coastal beauty and historical significance of Mahabalipuram make it a captivating destination for tourists and history enthusiasts alike.`
    ],
  },
  'ellora-caves': {
    name: 'Ellora Caves',
    imageUrl: 'https://images.indianexpress.com/2018/09/ellora-story.jpg',
    description: [
      `Ellora Caves, situated in Maharashtra, is one of the largest rock-cut monastery-temple complexes in the world, dating from the 600-1000 CE period. The site showcases the epitome of Indian rock-cut architecture, particularly the grand Kailasa temple carved from a single rock, reflecting the skill and artistry of the craftsmen of that time.`,
      `The caves represent the coexistence of three major religions: Hinduism, Buddhism, and Jainism, which is unique in its own right. Their remarkable artistry and architectural features continue to attract scholars and tourists, highlighting the cultural diversity and religious harmony that characterized ancient India.`
    ],
  },
};

function Story() {
  const { placeId } = useParams(); // Getting the dynamic route param
  const story = storiesData[placeId]; // Fetching story data based on route

  if (!story) {
    return <div>Story not found.</div>;
  }

  return (
    <div className="story-container">
      <h1 className="story-title">{story.name}</h1>
      <img src={story.imageUrl} alt={story.name} className="story-image" />
      {story.description.map((paragraph, index) => (
        <p key={index} className="story-description">{paragraph}</p>
      ))}
    </div>
  );
}

export default Story;
