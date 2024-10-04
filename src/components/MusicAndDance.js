import React, { useState } from 'react';
import './MusicAndDance.css';

function MusicAndDance() {
  // Music and dance data as an array of objects
  const musicAndDanceForms = [
    { 
      name: 'Bharatanatyam', 
      description: 'A classical dance form from Tamil Nadu, emphasizing grace and precision.', 
      imageUrl: 'https://t3.ftcdn.net/jpg/03/65/13/52/360_F_365135250_D4slgOo8wAYADnqNvaMtR9hIu17ySXmV.jpg',
      story: 'Bharatanatyam is one of India’s oldest classical dances, rooted in temples of Tamil Nadu. Known for its intricate footwork and expressive storytelling, it conveys ancient Hindu mythology. Today, it’s celebrated globally for its rhythm and spiritual depth.'
    },
    { 
      name: 'Kathak', 
      description: 'A classical dance from North India, famous for intricate footwork and spins.', 
      imageUrl: 'https://www.navhindtimes.in/wp-content/uploads/2022/03/Tejaswini.jpg',
      story: 'Kathak originated as a storytelling dance, depicting epics like the Ramayana through footwork and expressions. Influenced by Persian and Mughal cultures, it evolved into a refined art form, known for its rhythmic spins and ghungroos.'
    },
    { 
      name: 'Odissi', 
      description: 'An ancient classical dance from Odisha, characterized by fluidity and sculpturesque poses.', 
      imageUrl: 'https://www.orissadanceacademy.org/photo_gallery/Photo_23.jpg',
      story: 'Odissi, a dance from Odisha, is deeply spiritual, inspired by temple carvings and performed in devotion to Lord Jagannath. It features fluid movements and emphasizes expressive eye gestures, narrating tales from Hindu mythology.'
    },
    { 
      name: 'Bhangra', 
      description: 'A lively folk dance from Punjab, traditionally performed during harvest.', 
      imageUrl: 'https://i.pinimg.com/originals/a3/59/36/a35936d3d8877189d5597bec2adcea27.jpg',
      story: 'Bhangra is a vibrant folk dance celebrating the harvest season in Punjab. With energetic movements and dhol beats, it has become internationally popular, performed at weddings and festivals for its lively and joyous spirit.'
    },
    { 
      name: 'Bollywood Dance', 
      description: 'A fusion dance style, popularized by Indian cinema.', 
      imageUrl: 'https://www.danceclassonline.in/images/bollywood3.jpg',
      story: 'Bollywood dance blends classical Indian, folk, and Western styles, creating vibrant, expressive performances. Known for its colorful costumes and energetic moves, it is now popular globally thanks to Bollywood films.'
    },
    { 
      name: 'Kuchipudi', 
      description: 'A classical dance-drama from Andhra Pradesh, known for its storytelling.', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGiMq-wWqHXojTzJ11Aofr4WkOmG4BzY0Og&s',
      story: 'Kuchipudi combines rhythmic dance with acting to narrate Hindu myths. Originating from Andhra Pradesh, it balances grace with energy and was traditionally performed by Brahmin men. Today, both men and women perform it worldwide.'
    },
    
    {
      name: 'Sattriya',
      description: 'A classical dance form from Assam, associated with the satras.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bS8spQi_8Etvu3i6_hwLHn5oVR7YllJaEA&s',
      story: 'Sattriya is a classical dance form that originated in Assam. It is closely tied to the satras (monastic institutions) of Assam and was traditionally performed as a form of devotion to Vishnu. This dance form is known for its expressive gestures, dramatic narratives, and rhythmic footwork. Over time, Sattriya has moved from being a strictly religious practice to a prominent cultural symbol of Assam.',
      state: 'Assam'
  },
  {
      name: 'Folk Dance',
      description: 'Dances that reflect the traditions and cultures of various regions.',
      imageUrl: 'https://i.pinimg.com/originals/00/9a/9a/009a9ab76bccf61fdb692c43c0489e8b.jpg',
      story: 'Folk dances vary from region to region, reflecting the rich traditions and cultures of each area. These dances are often performed during festivals, weddings, or harvest celebrations. Each folk dance carries the essence of the local people’s way of life, from the energetic Bhangra of Punjab to the rhythmic Lavani of Maharashtra. The costumes, music, and movements all contribute to the vibrant representation of cultural identity.',
      state: 'Various Regions'
  },
  {
      name: 'Ghazal',
      description: 'A poetic form of music expressing love and melancholy.',
      imageUrl: 'https://i.ytimg.com/vi/IqZ8O0lIR48/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCncc7k7S3FuylHqOcc5TNKpGTkbg',
      story: 'The Ghazal is a poetic and musical form that originated in Persia and found a deep resonance in South Asia. Known for its deep expressions of love, longing, and heartbreak, Ghazals are sung in both Urdu and Hindi, and often set to soft melodies. Famous ghazal singers like Jagjit Singh and Ghulam Ali have popularized the form worldwide, creating an everlasting impact on Indian music culture.',
      state: 'Northern India (widespread)'
  },
  {
      name: 'Classical Music',
      description: 'The soul of India\'s musical heritage, with distinct forms like Hindustani and Carnatic.',
      imageUrl: 'https://5.imimg.com/data5/ANDROID/Default/2021/4/DS/XG/BP/82734540/product-jpeg-500x500.jpg',
      story: 'Indian classical music is one of the oldest traditions of music in the world. It is categorized into two major styles: Hindustani from North India and Carnatic from South India. The music focuses on raga (melodic framework) and tala (rhythmic cycles) to create complex and intricate compositions that express a wide range of emotions. Both forms hold deep spiritual and philosophical meanings, often passed down through generations.',
      state: 'North and South India'
  },
  {
      name: 'Qawwali',
      description: 'A form of Sufi devotional music popular in South Asia.',
      imageUrl: 'https://www.shutterstock.com/shutterstock/videos/1013072039/thumb/1.jpg?ip=x480',
      story: 'Qawwali is a form of Sufi devotional music that originated in Persia but took strong roots in the Indian subcontinent. It is performed by a group of musicians and singers and is typically used to express a deep love for God. Qawwalis are often performed at Sufi shrines and are characterized by their fervent emotional intensity and repetitive verses that help induce a trance-like state. The most famous Qawwali performer is Nusrat Fateh Ali Khan.',
      state: 'North India, Pakistan'
  },
  {
      name: 'Sufi Music',
      description: 'Spiritual music that expresses mystical love for the divine.',
      imageUrl: 'https://shaks.blog/wp-content/uploads/2020/05/svklimkin-inj0uryo-ww-unsplash.jpg?w=1400',
      story: 'Sufi music is deeply spiritual and expresses the mystical love between the soul and the divine. Originating in the Islamic tradition, this music form aims to transcend the worldly plane and connect the performer and the audience with God. It is performed in various forms, from qawwali to semi-classical, with the intent to evoke devotion and ecstasy in its listeners. Sufi music is widely respected for its depth and beauty across India and Pakistan.',
      state: 'North India, Pakistan'
  },
  {
      name: 'Lavani',
      description: 'A traditional dance form from Maharashtra, known for its energetic beats.',
      imageUrl: 'https://iasbaba.com/wp-content/uploads/2023/02/lava.png.webp',
      story: 'Lavani is a traditional folk dance from Maharashtra, noted for its quick tempo and expressive storytelling. It has historically been performed to the beats of the dholki and is often associated with the region\'s cultural celebrations. The dance is known for its bold moves and vibrant costumes, highlighting the performer’s expressions. Lavani plays a key role in Marathi theater and cinema.',
      state: 'Maharashtra'
  },
  {
      name: 'Garba',
      description: 'A folk dance from Gujarat, often performed during Navratri.',
      imageUrl: 'https://t3.ftcdn.net/jpg/06/70/00/30/360_F_670003034_TiKtqHgo9FZXMT8yqOyR14DPcb8cskwP.jpg',
      story: 'Garba is a folk dance from Gujarat, performed during the nine nights of the Navratri festival. It is performed in a circle, with dancers clapping and moving rhythmically to traditional music. The dance celebrates femininity, fertility, and the goddess Durga. Garba is now performed not just in Gujarat but by communities across India and even globally.',
      state: 'Gujarat'
  },
  {
      name: 'Chhau',
      description: 'A semi-classical dance with martial arts elements from Eastern India.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chhau_dance.jpg/1024px-Chhau_dance.jpg',
      story: 'Chhau is a semi-classical dance form from Eastern India that combines elements of martial arts, acrobatics, and storytelling. It is traditionally performed during festivals and draws on mythological themes. The dance style is known for its powerful movements and the use of elaborate masks. It has roots in the tribal culture of Jharkhand, Odisha, and West Bengal.',
      state: 'Odisha, West Bengal, Jharkhand'
  },
  {
      name: 'Bihu',
      description: 'A dance from Assam, celebrating the Bihu festival.',
      imageUrl: 'https://media.istockphoto.com/id/1204129776/photo/bihu-dance-of-assam.jpg?s=612x612&w=0&k=20&c=AJbomV__4kVUvoiBdpMzgpm8t3PJjoy3Lu9nk0epAiw=',
      story: 'Bihu is a folk dance from Assam, celebrated during the harvest festival of Bihu. It is performed to the tune of traditional instruments like the dhol and pepa, with fast-paced movements symbolizing joy and abundance. Both men and women take part in the dance, dressed in vibrant Assamese attire. Bihu is a representation of the state\'s agricultural heritage and the spirit of the people.',
      state: 'Assam'
  },
  {
      name: 'Dandiya',
      description: 'A dance form from Gujarat performed with sticks.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuylKlBnzH11JgqOVCpccTQAmM52zaMF4tQ&s',
      story: 'Dandiya Raas is a traditional folk dance performed with decorated sticks called dandiya. Like Garba, it is primarily associated with the festival of Navratri in Gujarat. The dancers form two circles, one of men and one of women, and move rhythmically while striking their sticks together in synchronization. The energetic music, colorful costumes, and lively atmosphere make it one of the most popular folk dances in India.',
      state: 'Gujarat'
  },
  {
      name: 'Mohiniyattam',
      description: 'A graceful dance form from Kerala, depicting feminine beauty.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_PQJfAqELJ6x6MaBBwualfdR39FLsAj7eEQ&s',
      story: 'Mohiniyattam is a classical dance form from Kerala, known for its gentle and graceful movements. The name means "dance of the enchantress," and the dance emphasizes feminine charm and beauty. It is often performed solo, with a focus on storytelling and expressive gestures. Mohiniyattam has a unique blend of graceful footwork and rhythmic movements, making it a cherished part of Kerala’s cultural heritage.',
      state: 'Kerala'
  },
  {
      name: 'Taal',
      description: 'A traditional Indian drumming system, essential to many music forms.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ng1mbqKyl8x4dCqDkrN5FjaoQMW1ZUeDVg&s',
      story: 'Taal is the rhythmic pattern used in Indian music. It serves as a framework for compositions in both Hindustani and Carnatic music. Taal consists of a repeating cycle of beats, with varying emphasis on different beats. Musicians and dancers use Taal to synchronize their movements and melodies, making it an essential component of Indian classical music. It is learned and mastered over years of rigorous practice.',
      state: 'All of India'
  },
  {
      name: 'Shehnai',
      description: 'A traditional wind instrument often played at weddings.',
      imageUrl: 'https://www.binaswar.com/wp-content/uploads/2019/08/AB0_2509-2.jpg',
      story: 'The Shehnai is a traditional wind instrument, commonly played at weddings and religious ceremonies in India. Its melodious sound is considered auspicious, and it is often associated with festive occasions. The instrument has a rich history in Indian classical music and is famous for the iconic performances of Ustad Bismillah Khan, who brought Shehnai to the global stage.',
      state: 'North India'
  },
  {
      name: 'Kirtan',
      description: 'A devotional form of singing that narrates religious stories.',
      imageUrl: 'https://i.pinimg.com/originals/60/dd/a0/60dda07db551f3546f4accbfb3b290ec.jpg',
      story: 'Kirtan is a form of devotional singing that narrates religious stories, particularly in Hindu and Sikh traditions. Performed with a group, the songs are repetitive and are accompanied by instruments like the harmonium and tabla. Kirtans often take place in temples or community gatherings, with the intention of creating a spiritual connection through music. The repetition of divine names or stories helps to bring a sense of unity and devotion among the participants.',
      state: 'All of India'
  },
  {
      name: 'Fusion Music',
      description: 'A contemporary blend of traditional and modern styles.',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafnHEIrPe0goG-SaypNzu5P7HvC3sBCKhgQ&s',
      story: 'Fusion music is a contemporary style that blends traditional Indian music with modern genres like rock, jazz, and electronic music. It is a way for artists to explore new sounds while keeping a connection to their cultural roots. Artists like A. R. Rahman have made fusion music popular by combining classical Indian instruments with modern music techniques, appealing to audiences across the globe.',
      state: 'All of India'
  }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedForm, setSelectedForm] = useState(null);
  
  // Filter music and dance forms based on the search query
  const filteredForms = musicAndDanceForms.filter(form =>
    form.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    form.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Open the modal with selected form details
  const openModal = (form) => {
    setSelectedForm(form);
  };
  
  // Close the modal
  const closeModal = () => {
    setSelectedForm(null);
  };
  
  return (
    <div className="music-and-dance-container">
      <header className="music-and-dance-header">
        <h1>Famous Music and Dance Forms of India</h1>
        <p>Explore the rich tapestry of India's musical and dance traditions.</p>
      </header>
  
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a form..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
  
      {/* Music and Dance Gallery */}
      <div className="music-and-dance-gallery">
        {filteredForms.length > 0 ? (
          filteredForms.map((form, index) => (
            <div key={index} className="music-and-dance-card" onClick={() => openModal(form)}>
              <img src={form.imageUrl} alt={form.name} />
              <h3>{form.name}</h3>
              <p>{form.description}</p>
            </div>
          ))
        ) : (
          <p>No forms found.</p>
        )}
      </div>
  
      {/* Modal */}
      {selectedForm && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedForm.imageUrl} alt={selectedForm.name} className="modal-image" />
            <h2>{selectedForm.name}</h2>
            <p>{selectedForm.description}</p>
            <p>{selectedForm.story}</p> {/* Story of the form */}
          </div>
        </div>
      )}
    </div>
  );
  
}

export default MusicAndDance;
