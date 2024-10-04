import React, { useState } from 'react';
import './Festivals.css';

function Festivals() {
  // Festival data as an array of objects
  const festivals = [
    {
      name: 'Dussehra',
      description: 'Celebrating the victory of good over evil.',
      imageUrl: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/176BF/production/_126953959_gettyimages-1235898711-1.jpg',
      story: 'Dussehra, also known as Vijayadashami, is celebrated in honor of Lord Rama’s victory over the demon king Ravana. This festival signifies the triumph of good over evil and is marked by the enactment of the Ramayana and burning effigies of Ravana, Kumbhakarna, and Meghnath.'
  },
  {
      name: 'Diwali',
      description: 'The festival of lights.',
      imageUrl: 'https://www.hindubhagwan.com/Gallery/images/portfolio/full/small/Diwali_images.jpg',
      story: 'Diwali, the festival of lights, symbolizes the victory of light over darkness and knowledge over ignorance. People celebrate by lighting diyas, bursting crackers, and decorating their homes. It commemorates the return of Lord Rama to Ayodhya after 14 years of exile and the defeat of the demon king Ravana.'
  },
  {
      name: 'Holi',
      description: 'The festival of colors.',
      imageUrl: 'https://t4.ftcdn.net/jpg/05/60/58/67/360_F_560586710_VmIHNuH6TcdLHIn3cEuIDDAcCYBhkIL0.jpg',
      story: 'Holi is celebrated as a spring festival, symbolizing the arrival of love and joy. The festival commemorates the divine love of Radha and Krishna, and it encourages people to forget their grievances and rejoice in the spirit of friendship and brotherhood by throwing colored powders at each other.'
  },
  {
      name: 'Eid',
      description: 'A festival of togetherness and giving.',
      imageUrl: 'https://media.istockphoto.com/id/693665932/photo/eid-prayer-at-jama-masjid-old-delhi-india.jpg?s=612x612&w=0&k=20&c=zCFGzNgw1In7Jm8P_b8paQ2MM15Q7LNvCl58KMYTH9g=',
      story: 'Eid is celebrated by Muslims around the world to mark the end of Ramadan, the holy month of fasting. On this day, the faithful gather for prayers, share meals with family and friends, and give Zakat (charity) to the needy, emphasizing unity, compassion, and generosity.'
  },
  {
      name: 'Christmas',
      description: 'Celebrated by millions across India.',
      imageUrl: 'https://img.freepik.com/premium-photo/vibrant-christmas-village-blanketed-snow-glowing-with-colorful-lights_985955-3102.jpg',
      story: 'Christmas commemorates the birth of Jesus Christ, bringing joy and celebration to millions around the globe. In India, it is marked by decorating Christmas trees, exchanging gifts, and attending midnight masses. The spirit of giving and togetherness is central to the celebration.'
  },
  {
      name: 'Navratri',
      description: 'A festival dedicated to the goddess Durga.',
      imageUrl: 'https://m.media-amazon.com/images/I/61SgqusOHDL._AC_UF1000,1000_QL80_.jpg',
      story: 'Navratri is a nine-night festival dedicated to Goddess Durga, celebrating her victory over the buffalo demon Mahishasura. Each night, devotees worship a different avatar of the goddess, engage in traditional dances like Garba and Dandiya, and seek blessings for strength and prosperity.'
  },
  {
      name: 'Ganesh Chaturthi',
      description: 'Celebrating the birth of Lord Ganesha.',
      imageUrl: 'https://t3.ftcdn.net/jpg/02/17/34/92/360_F_217349227_Uh7WIy3w4k3ptDNRbGJTlnEU3pmmk5S5.jpg',
      story: 'Ganesh Chaturthi marks the birth of Lord Ganesha, the remover of obstacles. Celebrated with grandeur, people bring home Ganesha idols, offer prayers, and immerse the idols in water at the end of the festival, symbolizing the cycle of birth and death and the return of Ganesha to his divine abode.'
  },
  {
      name: 'Onam',
      description: 'A harvest festival celebrated in Kerala.',
      imageUrl: 'https://www.medianews4u.com/wp-content/uploads/2022/09/Heartwarming-Onam-campaigns-from-brands-spread-festive-delight.jpg',
      story: 'Onam is a harvest festival celebrated in Kerala, marking the homecoming of the mythical King Mahabali. The festival features traditional feasts (Onam Sadhya), boat races, and cultural performances, showcasing the rich heritage and unity of the people of Kerala.'
  },
  {
      name: 'Pongal',
      description: 'A multi-day harvest festival celebrated in Tamil Nadu.',
      imageUrl: 'https://s.w-x.co/in-pongal_0.jpg',
      story: 'Pongal is a harvest festival celebrated in Tamil Nadu, dedicated to the Sun God. The festival lasts four days, during which families prepare sweet rice and other dishes, decorate their homes, and express gratitude for the bountiful harvest while fostering community spirit.'
  },
  {
      name: 'Raksha Bandhan',
      description: 'A festival celebrating the bond between brothers and sisters.',
      imageUrl: 'https://static.india.com/wp-content/uploads/2022/08/Raksha-Bandhan.jpg?impolicy=Medium_Resize&w=1200&h=800',
      story: 'Raksha Bandhan is a festival that honors the sacred bond between brothers and sisters. On this day, sisters tie a protective thread (rakhi) around their brothers’ wrists, while brothers promise to protect and support their sisters in return. The day is celebrated with sweets and family gatherings.'
  },
  {
      name: 'Baisakhi',
      description: 'A harvest festival celebrated in Punjab.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjFJFMPAPn0dYyZB4wQtcRNXSlsKeX7hd_Q&s',
      story: 'Baisakhi marks the harvest of Rabi crops and the Punjabi New Year. It holds religious significance for Sikhs as it commemorates the formation of the Khalsa by Guru Gobind Singh. The festival is celebrated with traditional music, dance, and community feasting.'
  },
  {
      name: 'Chhath Puja',
      description: 'A festival dedicated to the Sun God, celebrated in Bihar.',
      imageUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/10/chhath-puja-2019-featured-1572439049.jpg',
      story: 'Chhath Puja is dedicated to the Sun God and is celebrated primarily in Bihar. Devotees offer prayers and fasting, standing in water while worshipping the setting and rising sun. The festival promotes environmental awareness and gratitude for nature’s bounty.'
  },
  {
      name: 'Mahashivratri',
      description: 'A night dedicated to Lord Shiva, celebrated with prayers and fasting.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRYW3y5C9cRubCYzopm_EgCxrOUYQc1BQuKw&s',
      story: 'Mahashivratri is a significant Hindu festival dedicated to Lord Shiva, celebrated with devotion and fasting. Devotees visit temples, chant mantras, and participate in night-long vigils to seek blessings for spiritual growth and liberation.'
  },
  {
      name: 'Vasant Panchami',
      description: 'A festival marking the arrival of spring, dedicated to Goddess Saraswati.',
      imageUrl: 'https://discoverindiabycar.com/wp-content/uploads/2023/03/1-19.jpg',
      story: 'Vasant Panchami marks the arrival of spring and is dedicated to Goddess Saraswati, the deity of knowledge and wisdom. On this day, people wear yellow, offer prayers, and begin their educational pursuits, celebrating the beauty of nature and learning.'
  },
  {
      name: 'Kite Festival',
      description: 'Celebrated in Gujarat, marking the end of winter and the arrival of spring.',
      imageUrl: 'https://t3.ftcdn.net/jpg/00/88/13/66/360_F_88136641_9yzAbxRMPYaPMplVC9B5dJ6YhWJgk6Ok.jpg',
      story: 'The Kite Festival, celebrated in Gujarat, marks the end of winter and the arrival of spring. During this vibrant festival, people fly kites of all shapes and sizes, engage in friendly competitions, and celebrate the joyous atmosphere with family and friends.'
  },
  {
      name: 'Guru Nanak Jayanti',
      description: 'Celebrating the birth of Guru Nanak, the founder of Sikhism.',
      imageUrl: 'https://img.jagranjosh.com/images/2022/November/8112022/gurupurab.webp',
      story: 'Guru Nanak Jayanti celebrates the birth of Guru Nanak, the founder of Sikhism. The day is marked by prayers, hymns, and community service (seva), emphasizing the values of peace, humility, and equality that Guru Nanak preached throughout his life.'
  }
    
  
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFestival, setSelectedFestival] = useState(null);

  // Filter festivals based on the search query
  const filteredFestivals = festivals.filter(festival =>
    festival.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    festival.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Open the modal with selected festival details
  const openModal = (festival) => {
    setSelectedFestival(festival);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedFestival(null);
  };

  return (
    <div className="festivals-container">
      <header className="festivals-header">
        <h1>Festivals of India</h1>
        <p>India is known for its vibrant festivals celebrated throughout the year.</p>
      </header>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a festival..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Festivals Gallery */}
      <div className="festivals-gallery">
        {filteredFestivals.length > 0 ? (
          filteredFestivals.map((festival, index) => (
            <div key={index} className="festival-card" onClick={() => openModal(festival)}>
              <img src={festival.imageUrl} alt={festival.name} />
              <h3>{festival.name}</h3>
              <p>{festival.description}</p>
            </div>
          ))
        ) : (
          <p>No festivals found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedFestival && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedFestival.imageUrl} alt={selectedFestival.name} className="modal-image" />
            <h2>{selectedFestival.name}</h2>
            <p>{selectedFestival.description}</p>
            <p>{selectedFestival.story}</p> {/* Story of the festival */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Festivals;