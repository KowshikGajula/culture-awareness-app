import React, { useState } from 'react';
import './ArtAndCraft.css';

function ArtAndCraft() {
  // Art and craft data as an array of objects
  const artAndCrafts = [
    { 
      name: 'Madhubani Painting', 
      description: 'A folk art form from Bihar, known for its intricate designs.', 
      imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/painting/1/0/6/33-1-brmp-0027-tss-original-imagn7qvqjndchyw.jpeg?q=90&crop=false',
      story: 'Madhubani paintings are traditionally done using fingers, twigs, brushes, nib-pens, and matchsticks. It often depicts mythological themes, including gods and goddesses.',
      state: 'Bihar'
    },
    { 
      name: 'Pashmina Shawls', 
      description: 'Luxurious woolen wear from Kashmir, renowned for its softness.', 
      imageUrl: 'https://cdn.shopify.com/s/files/1/0719/3886/7511/files/Untitled_design_2_480x480.jpg?v=1700643369',
      story: 'Pashmina shawls are hand-spun and woven from cashmere wool. The art of making these shawls has been passed down through generations, reflecting the region’s fine craftsmanship.',
      state: 'Kashmir'
    },
    { 
      name: 'Blue Pottery', 
      description: 'A unique craft from Rajasthan characterized by its blue dye.', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRznceD1qIyPYEL7_44mSbH6PTzEAQ2uMsOjg&s',
      story: 'Originating from Persia, blue pottery is made using a special process involving quartz and is known for its vibrant blue and white colors, often depicting flowers and animal motifs.',
      state: 'Rajasthan'
    },
    { 
      name: 'Wood Carving', 
      description: 'Artistic wooden sculptures showcasing intricate craftsmanship.', 
      imageUrl: 'https://thumbs.dreamstime.com/b/thailand-wood-carving-3254268.jpg',
      story: 'Wood carving has been a part of Indian tradition for centuries. Intricate designs, deities, and architectural elements are carefully carved into wood, creating timeless masterpieces.',
      state: 'Various States'
    },
    { 
      name: 'Warli Art', 
      description: 'A tribal art form from Maharashtra, depicting daily life and nature.', 
      imageUrl: 'https://thumbs.dreamstime.com/b/indian-tribal-painting-warli-painting-style-maharashtra-india-58209695.jpg',
      story: 'Warli art uses simple shapes to portray the lives and daily activities of tribal communities. The art is traditionally created on the walls of mud houses with white pigment made from rice flour.',
      state: 'Maharashtra'
    },
    { 
      name: 'Kanchipuram Silk', 
      description: 'Famous silk sarees from Tamil Nadu known for their vibrant colors.', 
      imageUrl: 'https://cdn0.weddingwire.in/article/9762/3_2/960/jpg/2679-kanchipuram-silk-sarees-for-wedding-with-prices-infinite-memories-lead-image.jpeg',
      story: 'Kanchipuram sarees are known for their bright colors and durability. Handwoven by weavers using pure mulberry silk, these sarees feature elaborate patterns and designs.',
      state: 'Tamil Nadu'
    },
    { 
      name: 'Batik', 
      description: 'A traditional method of dyeing fabric using wax, popular in Gujarat.', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFjO7_3FYGh8DfWflKAWysRnTcOIbrKPhXnQ&s',
      story: 'Batik is an ancient technique where wax is used to resist dye on parts of fabric, creating unique patterns. It has flourished in Gujarat, where artisans experiment with colors and designs.',
      state: 'Gujarat'
    },
    { 
      name: 'Tanjore Painting', 
      description: 'A classical South Indian painting known for its rich colors and gold foil.', 
      imageUrl: 'https://j3k5s6s3.rocketcdn.me/wp-content/uploads/2021/03/Tanjore-painting-shanmugasundaram-15-1.jpeg',
      story: 'Tanjore paintings are famous for their surface richness and compact composition. The paintings are known for their use of vibrant colors and the extensive use of gold foil.',
      state: 'Tamil Nadu'
    },
    { 
      name: 'Channapatna Toys', 
      description: 'Colorful wooden toys from Karnataka, crafted using traditional techniques.', 
      imageUrl: 'https://static.toiimg.com/photo/90932880.cms',
      story: 'These toys are made using ivory wood, with artisans painting them with natural dyes. The craft has been passed down through generations in Channapatna, near Bengaluru.',
      state: 'Karnataka'
    },
    { 
      name: 'Zardozi Embroidery', 
      description: 'A traditional form of embroidery using gold and silver threads.', 
      imageUrl: 'https://cdn0.weddingwire.in/article/7611/3_2/1280/jpg/1167-indiamarks-zardozi-work-introduction.jpeg',
      story: 'Zardozi embroidery has been an integral part of royal garments for centuries. This intricate form of embroidery uses metallic threads to create elaborate designs on fabrics.',
      state: 'Uttar Pradesh'
    },
    { 
      name: 'Kalamkari', 
      description: 'A traditional hand-painted or block-printed cotton fabric from Andhra Pradesh.', 
      imageUrl: 'https://dsource.in/sites/default/files/gallery/4330/1.jpg',
      story: 'Kalamkari refers to a type of hand-painted or block-printed cotton textile, where natural dyes are used. It often portrays mythological stories and epic scenes.',
      state: 'Andhra Pradesh'
    },
    { 
      name: 'Dhokra Art', 
      description: 'Ancient metal casting technique practiced by tribal artisans.', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZkxZu3IvbYAnyynmthkZd1hig83cTiDGQg&s',
      story: 'Dhokra is a form of lost-wax casting that has been used in India for over 4,000 years. The art is practiced by tribal artisans and produces artifacts like human and animal figurines.',
      state: 'Chhattisgarh'
    },
    { 
      name: 'Rajasthani Puppetry', 
      description: 'A traditional folk art form, telling stories through colorful puppets.', 
      imageUrl: 'https://media.istockphoto.com/id/484824302/photo/rajasthan-puppets.jpg?s=612x612&w=0&k=20&c=l8r0Mchfcm6vrJXzKWeszLwkYUB8C5_XSbpjzG8St94=',
      story: 'Rajasthani puppetry, known as "Kathputli", is a centuries-old folk tradition. The puppets are beautifully crafted, and the puppeteers narrate stories from history and folklore.',
      state: 'Rajasthan'
    },
    { 
      name: 'Leather Craft', 
      description: 'Artisans create beautiful leather goods, especially from Rajasthan.', 
      imageUrl: 'https://img.freepik.com/premium-photo/leather-craft-leather-working_189959-6452.jpg',
      story: 'Leather crafts in India are known for their exquisite handwork. Rajasthan is particularly famous for its colorful and elaborately designed leather items, including bags and footwear.',
      state: 'Rajasthan'
    },
    { 
      name: 'Stone Carving', 
      description: 'Intricate sculptures made from local stones, showcasing ancient techniques.', 
      imageUrl: 'https://www.gitagged.com/wp-content/uploads/2022/10/Konark-Stone-Carving.jpg',
      story: 'Stone carving has been a part of Indian architecture for centuries, especially in temples. Craftsmen use traditional tools to create detailed and artistic stone sculptures.',
      state: 'Odisha'
    }
  ];

  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCraft, setSelectedCraft] = useState(null);

  // Filter art and craft forms based on the search query
  const filteredCrafts = artAndCrafts.filter(craft =>
    craft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    craft.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Open the modal with selected craft details
  const openModal = (craft) => {
    setSelectedCraft(craft);
  };

  // Close the modal
  const closeModal = () => {
    setSelectedCraft(null);
  };

  return (
    <div className="art-and-craft-container">
      <header className="art-and-craft-header">
        <h1>Famous Art and Craft of India</h1>
        <p>Discover the rich diversity of India's artistic traditions.</p>
      </header>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for an art form..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      {/* Art and Craft Gallery */}
      <div className="art-and-craft-gallery">
        {filteredCrafts.length > 0 ? (
          filteredCrafts.map((craft, index) => (
            <div key={index} className="art-and-craft-card" onClick={() => openModal(craft)}>
              <img src={craft.imageUrl} alt={craft.name} />
              <h3>{craft.name}</h3>
              <p>{craft.description}</p>
            </div>
          ))
        ) : (
          <p>No crafts found.</p>
        )}
      </div>

      {/* Modal */}
      {selectedCraft && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedCraft.imageUrl} alt={selectedCraft.name} className="modal-image" />
            <h2>{selectedCraft.name}</h2>
            <p>{selectedCraft.description}</p>
            <p>{selectedCraft.story}</p> {/* Story of the art/craft form */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtAndCraft;