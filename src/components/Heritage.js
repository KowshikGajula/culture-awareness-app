import React, { useState } from 'react';
import './Heritage.css';

function Heritage() {
  // Heritage data as an array of objects
  const heritageItems = [
    { name: 'Taj Mahal', description: 'A UNESCO World Heritage Site and symbol of love, located in Agra.', imageUrl: 'https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=' },
    { name: 'Jaipur Forts', description: 'Historic forts like Amer Fort and Nahargarh Fort showcasing royal architecture.', imageUrl: 'https://t3.ftcdn.net/jpg/02/56/53/38/360_F_256533834_Chxhh4CkOk6YVnvAKGPSN3jc40rSTFaV.jpg' },
    { name: 'Varanasi', description: 'One of the oldest cities in the world, a spiritual center along the Ganges.', imageUrl: 'https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg' },
    { name: 'Khajuraho Temples', description: 'Famous for their stunning erotic sculptures and intricate carvings.', imageUrl: 'https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U=' },
    { name: 'Bharatanatyam', description: 'One of the oldest classical dance forms, originating from Tamil Nadu.', imageUrl: 'https://st.depositphotos.com/1267105/2147/i/450/depositphotos_21470687-stock-photo-indian-bharatanatyam-dancers.jpg' },
    { name: 'Diwali', description: 'The festival of lights, symbolizing the victory of light over darkness.', imageUrl: 'https://media.istockphoto.com/id/1351592257/photo/traditional-diya-lamps-lit-during-diwali-celebration.jpg?s=612x612&w=0&k=20&c=kxt66SWeJmTPBrc1tLJ6Gwn3A8TxGd1Mh9VCp6TNWMI=' },
    { name: 'Yoga', description: 'An ancient practice for physical and mental well-being, originating in India.', imageUrl: 'https://img.freepik.com/free-photo/full-shot-people-doing-yoga-together_23-2151084081.jpg' },
    { name: 'Indian Cuisine', description: 'Diverse flavors and culinary traditions from different regions of India.', imageUrl: 'https://media.istockphoto.com/id/1290444763/photo/assorted-of-indian-dish-with-curry-dish-naan-chicken.jpg?s=612x612&w=0&k=20&c=5q09leP6_QnvdUEfsB6KUXDTTBJtl88bEwrDfRVNA0U=' },
    { name: 'Mysore Palace', description: 'A historical palace showcasing Indo-Saracenic architecture in Karnataka.', imageUrl: 'https://media.istockphoto.com/id/1281931838/photo/the-mysore-palace-at-night-in-mysore-in-southern-india.jpg?s=612x612&w=0&k=20&c=ylyE9VYrc008JnHKdXKDxbJx-_I2U8-oQFJDzwJk9Pw=' },
    { name: 'Ajanta and Ellora Caves', description: 'Rock-cut caves famous for ancient Buddhist and Hindu monuments in Maharashtra.', imageUrl: 'https://www.shutterstock.com/image-photo/kailasa-temple-cave-16-ellora-600nw-1039920103.jpg' },
    { name: 'Sari', description: 'A traditional garment that showcases India\'s textile artistry and culture.', imageUrl: 'https://t4.ftcdn.net/jpg/00/17/49/37/360_F_17493746_NxmDWBzvxFZjwi2lmDXVddPTI4nlb44p.jpg' },
    { name: 'Martial Arts of India', description: 'Ancient combat techniques, like Kalaripayattu and Gatka.', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Kalaripayattu_mock_combat_in_rural_Kerala.jpg/1200px-Kalaripayattu_mock_combat_in_rural_Kerala.jpg' },
    { name: 'Rajasthani Folk Music', description: 'Traditional music representing the rich culture of Rajasthan.', imageUrl: 'https://assets.vogue.in/photos/64d6135bdfb7338d7a2fbbd1/16:9/w_3024,h_1701,c_limit/SAZ.jpeg' },
    { name: 'Warli Painting', description: 'A tribal art form from Maharashtra, depicting life and nature.', imageUrl: 'https://t3.ftcdn.net/jpg/05/49/61/24/360_F_549612490_RMhkLAfFdY0LTpWtyHk7CgxXPPl6Tzwa.jpg' },
    { name: 'Traditional Indian Weddings', description: 'Rich customs and rituals that vary by region, celebrating union.', imageUrl: 'https://media.istockphoto.com/id/1314780540/photo/indian-traditional-wedding-ceremony-photography.jpg?s=612x612&w=0&k=20&c=ZKDagbzO5WafZxlksbpzYJg46O9aJpINeTjZE3JQXHs=' }
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedHeritage, setSelectedHeritage] = useState(null);

  // Filter heritage items based on the search query
  const filteredHeritage = heritageItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Open the modal with selected heritage item details
  const openModal = (item) => {
    setSelectedHeritage(item);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedHeritage(null);
  };

  return (
    <div className="heritage-container">
      <header className="heritage-header">
        <h1>Indian Cultural Heritage</h1>
        <p>Immerse yourself in the rich diversity of Indian culture, traditions, and art forms.</p>
      </header>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for heritage..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Heritage Gallery */}
      <div className="heritage-gallery">
        {filteredHeritage.length > 0 ? (
          filteredHeritage.map((item, index) => (
            <div key={index} className="heritage-card" onClick={() => openModal(item)}>
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))
        ) : (
          <p>No heritage items found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedHeritage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedHeritage.imageUrl} alt={selectedHeritage.name} className="modal-image" />
            <h2>{selectedHeritage.name}</h2>
            <p>{selectedHeritage.description}</p>
            <p>{selectedHeritage.story}</p> {/* Updated to display the story */}
            <a href={selectedHeritage.mapUrl} target="_blank" rel="noopener noreferrer" className="modal-map-link">View on Google Maps</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Heritage;
