import React, { useState } from 'react';
import './Monument.css';

function Monument() {
  const monuments = [
    { 
      name: 'Taj Mahal', 
      location: 'Agra, Uttar Pradesh', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOqIMxo0Zdt-mEwo56wVmJyJ9lcPip4YRefQ&s', 
      story: 'The Taj Mahal, a symbol of love, was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.', 
      mapUrl: 'https://www.google.com/maps/place/Taj+Mahal/@27.1751448,78.0399535,17z' 
    },
    { 
      name: 'Qutub Minar', 
      location: 'Delhi', 
      imageUrl: 'https://media.istockphoto.com/id/1160975059/photo/qutub-minar-and-its-monuments-delhi.jpg?s=612x612&w=0&k=20&c=nCQpmVYsfFYpMg8i-6kQkuHfQ9P-5IXGxyADVItiD_k=', 
      story: 'Qutub Minar is a towering symbol of Mughal architecture, built in the early 13th century.', 
      mapUrl: 'https://www.google.com/maps/place/Qutub+Minar/@28.5244288,77.185455,17z' 
    },
    { 
      name: 'Hawa Mahal', 
      location: 'Jaipur, Rajasthan', 
      imageUrl: 'https://t3.ftcdn.net/jpg/02/16/44/20/360_F_216442060_oORACP7fDjwMhUITLLQy4RTNc0xGpJwU.jpg', 
      story: 'Hawa Mahal, also known as the "Palace of Winds," was built in 1799 by Maharaja Sawai Pratap Singh.', 
      mapUrl: 'https://www.google.com/maps/place/Hawa+Mahal/@26.9239407,75.826743,17z' 
    },
    { 
      name: 'Gateway of India', 
      location: 'Mumbai, Maharashtra', 
      imageUrl: 'https://media.istockphoto.com/id/1307189136/photo/gateway-of-india-mumbai-maharashtra-monument-landmark-famous-place-magnificent-view-without.jpg?s=612x612&w=0&k=20&c=gGzzkXY5bAVbRbokzrjvkt7Ve-Z3yzSVN04NaMqyBB8=', 
      story: 'The Gateway of India was built in 1924 to commemorate the visit of King George V and Queen Mary to India.', 
      mapUrl: 'https://www.google.com/maps/place/Gateway+Of+India+Mumbai/@18.9220005,72.8346543,17z' 
    },
    { 
      name: 'Red Fort', 
      location: 'Delhi', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1697730373510-51b7fcf2ff52?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVkJTIwZm9ydHxlbnwwfHwwfHx8MA%3D%3D', 
      story: 'Red Fort, a symbol of India\'s independence, was built by Shah Jahan in 1638.', 
      mapUrl: 'https://www.google.com/maps/place/Red+Fort/@28.6561592,77.2408827,17z' 
    },
    { 
      name: 'Ajanta Caves', 
      location: 'Maharashtra', 
      imageUrl: 'https://st3.depositphotos.com/1001071/13716/i/450/depositphotos_137164226-stock-photo-kailas-temple-in-ellora-caves.jpg', 
      story: 'The Ajanta Caves are a series of 29 Buddhist cave temples dating from the 2nd century BCE.', 
      mapUrl: 'https://www.google.com/maps/place/Ajanta+Caves/@20.5522114,75.7035876,17z' 
    },
    { 
      name: 'Ellora Caves', 
      location: 'Maharashtra', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxsb3JhJTIwY2F2ZXN8ZW58MHx8MHx8fDA%3D', 
      story: 'The Ellora Caves, known for their monumental sculptures, were built between the 5th and 10th centuries.', 
      mapUrl: 'https://www.google.com/maps/place/Ellora+Caves/@20.0261583,75.1798744,17z' 
    },
    { 
      name: 'Mysore Palace', 
      location: 'Mysuru, Karnataka', 
      imageUrl: 'https://media.istockphoto.com/id/1281931838/photo/the-mysore-palace-at-night-in-mysore-in-southern-india.jpg?s=612x612&w=0&k=20&c=ylyE9VYrc008JnHKdXKDxbJx-_I2U8-oQFJDzwJk9Pw=', 
      story: 'Mysore Palace is the royal residence of the Wadiyar dynasty and one of India\'s grandest palaces.', 
      mapUrl: 'https://www.google.com/maps/place/Mysore+Palace/@12.3051631,76.655277,17z' 
    },
    { 
      name: 'Victoria Memorial', 
      location: 'Kolkata, West Bengal', 
      imageUrl: 'https://media.istockphoto.com/id/1164616564/photo/victoria-memorial-ancient-white-marble-monument-at-kolkata-at-sunset.jpg?s=612x612&w=0&k=20&c=isr81zWNep-328aNbqq0vwty_TYiGE_FilJ5EfZ2WL0=', 
      story: 'The Victoria Memorial is a large marble building dedicated to Queen Victoria, completed in 1921.', 
      mapUrl: 'https://www.google.com/maps/place/Victoria+Memorial/@22.5448085,88.3424763,17z' 
    },
    { 
      name: 'Lotus Temple', 
      location: 'Delhi', 
      imageUrl: 'https://st5.depositphotos.com/56966306/65577/i/450/depositphotos_655778144-stock-photo-masterpieces-modern-architecture-visual-tour.jpg', 
      story: 'The Lotus Temple, completed in 1986, is notable for its flowerlike shape and serves as the Mother Temple of the Indian subcontinent.', 
      mapUrl: 'https://www.google.com/maps/place/Lotus+Temple/@28.5534922,77.2588263,17z' 
    },
    { 
      name: 'Jantar Mantar', 
      location: 'Jaipur, Rajasthan', 
      imageUrl: 'https://plus.unsplash.com/premium_photo-1697730309688-cc2a3a573494?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFudGFyJTIwbWFudGFyfGVufDB8fDB8fHww', 
      story: 'The Jantar Mantar in Jaipur is a collection of astronomical instruments, built by Maharaja Jai Singh II in 1734.', 
      mapUrl: 'https://www.google.com/maps/place/Jantar+Mantar+-+Jaipur/@26.9248144,75.823696,17z' 
    },
    { 
      name: 'Brihadeeswarar Temple', 
      location: 'Tanjore, Tamil Nadu', 
      imageUrl: 'https://media.istockphoto.com/id/1455552376/photo/brihadishwara-temple-tanjore.jpg?s=612x612&w=0&k=20&c=lFKBtr6LOD2WfdiRxINYbRdOGPw9UJLtNde3VLqRkRU=', 
      story: 'Brihadeeswarar Temple, a UNESCO World Heritage Site, is one of the largest temples in India, built by Raja Raja Chola I in 1010.', 
      mapUrl: 'https://www.google.com/maps/place/Brihadeeswarar+Temple/@10.782473,79.13106,17z' 
    },
    { 
      name: 'Khajuraho Temples', 
      location: 'Madhya Pradesh', 
      imageUrl: 'https://media.istockphoto.com/id/520838006/photo/famous-temples-of-khajuraho.jpg?s=612x612&w=0&k=20&c=Q4YDdXoUpQ6SC5HKv7-P7fzzBL2sS2koRSxvrBoR9SI=', 
      story: 'The Khajuraho Temples are famous for their intricate sculptures and erotic carvings, built between 950 and 1050 AD.', 
      mapUrl: 'https://www.google.com/maps/place/Khajuraho+Temples/@24.835289,79.9194543,17z' 
    },

    { 
      name: 'Sanchi Stupa', 
      location: 'Madhya Pradesh', 
      imageUrl: 'https://media.istockphoto.com/id/1343698809/photo/sanchi-is-a-buddhist-complex-famous-for-its-great-stupa-on-a-hilltop-at-sanchi-town-in-raisen.jpg?s=612x612&w=0&k=20&c=KxC8TlKfCc_tEv1MRsQVCDsZPJi_moXxkMy4IGW8fv0=', 
      story: 'Sanchi Stupa is a Buddhist complex famous for its great stupa, built during the reign of Emperor Ashoka in the 3rd century BCE.', 
      mapUrl: 'https://www.google.com/maps/place/Sanchi+Stupa/@23.4793006,77.7398461,17z' 
    },
    { 
      name: 'Chola Temples', 
      location: 'Tamil Nadu', 
      imageUrl: 'https://media.istockphoto.com/id/1198004449/photo/thanjavur-brihadeeswara-temple-image.jpg?s=612x612&w=0&k=20&c=_LxuN28QPYAZWMy82LrQJzTLKWn_zRVU0yKZFFauw2I=', 
      story: 'The Chola Temples, built during the Chola dynasty, showcase the architectural brilliance of South India, particularly the Brihadeeswarar Temple in Thanjavur.', 
      mapUrl: 'https://www.google.com/maps/place/Brihadeeswarar+Temple/@10.782473,79.13106,17z' 
    },
    { 
      name: 'Rani Ki Vav', 
      location: 'Gujarat', 
      imageUrl: 'https://t4.ftcdn.net/jpg/03/58/40/49/360_F_358404947_qMXWTxU2cGM5scdnD6DWGFoaL7lNF15v.jpg', 
      story: 'Rani Ki Vav, a stepwell built in the 11th century in Gujarat, is a UNESCO World Heritage Site and showcases intricate sculptures.', 
      mapUrl: 'https://www.google.com/maps/place/Rani+ki+Vav/@23.8582584,72.1134924,17z' 
    },
    { 
      name: 'Nalanda University', 
      location: 'Bihar', 
      imageUrl: 'https://t3.ftcdn.net/jpg/02/11/88/00/360_F_211880037_YxH859TYGRP8GyHwkNMXT45YJBkLUkxt.jpg', 
      story: 'Nalanda University was one of the greatest centers of learning in ancient India, flourishing from the 5th century CE to 1200 CE.', 
      mapUrl: 'https://www.google.com/maps/place/Nalanda+University/@25.1355812,85.4436765,17z' 
    },
    { 
      name: 'Golkonda Fort', 
      location: 'Hyderabad, Telangana', 
      imageUrl: 'https://t4.ftcdn.net/jpg/02/04/06/15/360_F_204061578_jvZg0hidxpfThHyk5AK6gBHsrHs42Tub.jpg', 
      story: 'Golkonda Fort is a historic fortress and citadel in Hyderabad, known for its impressive architecture and history of diamond trade.', 
      mapUrl: 'https://www.google.com/maps/place/Golkonda+Fort/@17.3833092,78.4019443,17z' 
    },
    { 
      name: 'Kumarakom Bird Sanctuary', 
      location: 'Kottayam, Kerala', 
      imageUrl: 'https://kumarakomhouseboatclub.com/wp-content/uploads/sites/2/2018/08/kumarakom-bird-sanctuary-birds.jpg', 
      story: 'Kumarakom Bird Sanctuary is a famous bird sanctuary in Kerala, known for migratory birds like the Siberian crane.', 
      mapUrl: 'https://www.google.com/maps/place/Kumarakom+Bird+Sanctuary/@9.6214784,76.4297388,17z' 
    },
    { 
      name: 'Jaisalmer Fort', 
      location: 'Jaisalmer, Rajasthan', 
      imageUrl: 'https://jaisalmertourism.co.in/images/places-to-visit/headers/jaisalmer-fort-entry-fee-timings-holidays-reviews-header.jpg', 
      story: 'Jaisalmer Fort, also known as Sonar Qila, is one of the largest fully preserved fortified cities in the world.', 
      mapUrl: 'https://www.google.com/maps/place/Jaisalmer+Fort/@26.9123295,70.910279,17z' 
    }
  
];

  
// Existing code...
const [searchQuery, setSearchQuery] = useState('');
const [selectedMonument, setSelectedMonument] = useState(null);

// Filter monuments based on the search query
const filteredMonuments = monuments.filter(monument =>
    monument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    monument.location.toLowerCase().includes(searchQuery.toLowerCase())
);

// Open the modal with selected monument details
const openModal = (monument) => {
    setSelectedMonument(monument);
};

// Close the modal
const closeModal = () => {
    setSelectedMonument(null);
};

return (
    <div className="monument-container">
        <header className="monument-header">
            <h1>Famous Indian Monuments</h1>
            <p>Discover the timeless beauty of India's architectural masterpieces.</p>
        </header>

        {/* Search Input */}
        <div className="search-container">
            <input
                type="text"
                placeholder="Search for a monument..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
            />
        </div>

        {/* Monument Gallery */}
        <div className="monument-gallery">
            {filteredMonuments.length > 0 ? (
                filteredMonuments.map((monument, index) => (
                    <div key={index} className="monument-card" onClick={() => openModal(monument)}>
                        <img src={monument.imageUrl} alt={monument.name} />
                        <h3>{monument.name}</h3>
                        <p>{monument.location}</p>
                    </div>
                ))
            ) : (
                <p>No monuments found.</p>
            )}
        </div>

        {/* Modal */}
        {selectedMonument && (
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <span className="close-button" onClick={closeModal}>&times;</span>
                    <img src={selectedMonument.imageUrl} alt={selectedMonument.name} className="modal-image" />
                    <h2>{selectedMonument.name}</h2>
                    <p>{selectedMonument.location}</p>
                    <p>{selectedMonument.story}</p> {/* Updated to display the story */}
                    <a href={selectedMonument.mapUrl} target="_blank" rel="noopener noreferrer" className="modal-map-link">View on Google Maps</a>
                </div>
            </div>
        )}
    </div>
);

};

export default Monument;