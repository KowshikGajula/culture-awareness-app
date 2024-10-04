import React, { useState } from 'react';
import './Culture.css';

function Culture() {
  // Culture data as an array of objects
  const cultures = [
    { name: 'Languages', imageUrl: 'url-to-culture-image', description: 'Over 1,600 languages are spoken across India, reflecting its diversity.' },
    { name: 'Traditions', imageUrl: 'url-to-culture-image', description: 'Weddings and rituals are deeply rooted in customs that shape daily life.' },
    { name: 'Festivals', imageUrl: 'url-to-culture-image', description: 'India celebrates a multitude of festivals, each with its unique significance.' },
    { name: 'Folklore', imageUrl: 'url-to-culture-image', description: 'Stories passed down through generations preserve India\'s rich heritage.' },
    { name: 'Customs', imageUrl: 'url-to-culture-image', description: 'Unique traditions and practices vary across different regions of India.' },
    { name: 'Cuisine', imageUrl: 'url-to-culture-image', description: 'From spicy curries to sweet desserts, Indian cuisine is incredibly diverse.' },
    { name: 'Dance', imageUrl: 'url-to-culture-image', description: 'Each region has its own dance forms that reflect local traditions and stories.' },
    { name: 'Music', imageUrl: 'url-to-culture-image', description: 'India has a rich musical heritage, with classical and folk traditions.' },
    { name: 'Art', imageUrl: 'url-to-culture-image', description: 'India\'s art forms range from ancient sculptures to modern paintings.' },
    { name: 'Handicrafts', imageUrl: 'url-to-culture-image', description: 'Artisans create unique handicrafts that reflect regional styles.' },
    { name: 'Literature', imageUrl: 'url-to-culture-image', description: 'Indian literature boasts a rich tapestry of poetry, prose, and epics.' },
    { name: 'Clothing', imageUrl: 'url-to-culture-image', description: 'Traditional attire varies widely across regions, showcasing cultural identity.' },
    { name: 'Architecture', imageUrl: 'url-to-culture-image', description: 'From temples to forts, Indian architecture tells stories of history and art.' },
    { name: 'Spiritual Practices', imageUrl: 'url-to-culture-image', description: 'Spirituality influences daily life, with practices rooted in ancient traditions.' },
    { name: 'Community Life', imageUrl: 'url-to-culture-image', description: 'Community gatherings play a vital role in social cohesion and cultural exchange.' },
    { name: 'Sports', imageUrl: 'url-to-culture-image', description: 'Traditional sports and games are celebrated, fostering a spirit of competition.' },
    { name: 'Folklore Festivals', imageUrl: 'url-to-culture-image', description: 'Celebration of local folklore through music, dance, and storytelling.' },
    { name: 'Cultural Exchanges', imageUrl: 'url-to-culture-image', description: 'Interaction between communities leads to a rich cultural tapestry.' },
    { name: 'Heritage Conservation', imageUrl: 'url-to-culture-image', description: 'Efforts to preserve cultural heritage for future generations.' },
    { name: 'Modern Influences', imageUrl: 'url-to-culture-image', description: 'Globalization and technology shape contemporary Indian culture.' }
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');

  // Filter cultures based on the search query
  const filteredCultures = cultures.filter(culture =>
    culture.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="culture-container">
      <header className="culture-header">
        <h1>Diverse Cultures of India</h1>
        <p>Explore the rich cultural tapestry of India, woven with traditions and practices.</p>
      </header>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a culture..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Culture Gallery */}
      <div className="culture-gallery">
        {filteredCultures.length > 0 ? (
          filteredCultures.map((culture, index) => (
            <div key={index} className="culture-card">
              <img src={culture.imageUrl} alt={culture.name} />
              <h3>{culture.name}</h3>
              <p>{culture.description}</p>
            </div>
          ))
        ) : (
          <p>No cultures found.</p>
        )}
      </div>
    </div>
  );
}

export default Culture;
