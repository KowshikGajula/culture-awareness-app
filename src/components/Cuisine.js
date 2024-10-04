import React, { useState } from 'react';
import './Cuisine.css';

function Cuisine() {
  // Cuisine data as an array of objects
  const cuisines = [
    { 
      name: 'Biryani', 
      description: 'Fragrant rice dish with layers of flavor', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JxrNGXdkMHP7ug1Jd0TNL6nf9ZY1lqvJyQ&s', 
      story: 'Biryani is a beloved dish across India, with each region adding its unique twist. Hyderabadi Biryani, for example, is renowned for its rich flavors, cooked with tender marinated meat and saffron-infused rice.' 
    },
    { 
      name: 'Paneer Tikka', 
      description: 'Grilled vegetarian dish with spiced paneer', 
      imageUrl: 'https://t4.ftcdn.net/jpg/08/16/13/27/360_F_816132727_GttNKheh30xescq1LnUC4nr1vZFzL7Yp.jpg',
      story: 'Paneer Tikka is a popular vegetarian dish from North India, especially in Punjab. It consists of paneer cubes marinated in spices and grilled to perfection, often enjoyed as an appetizer or side dish.'
    },
    { 
      name: 'Samosa', 
      description: 'Crispy, savory snack filled with spiced potatoes', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPo-V7bkCFSc_VsJcfveLzMBp2Brr9S6T-jA&s',
      story: 'Samosa, a popular street food, is enjoyed across India. It originated in the northern regions and is known for its crispy exterior and spiced potato filling. Served with chutney, it’s a favorite tea-time snack.' 
    },
    { 
      name: 'Dosa', 
      description: 'South Indian rice and lentil crepe', 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLkdmNl2vyxV9YYnT9VoxnH_1XU_6IuSjdw&s',
      story: 'Dosa is a traditional dish from South India, especially popular in Tamil Nadu and Karnataka. It’s a thin, crispy crepe made from fermented rice and lentil batter, often served with sambar and coconut chutney.'
    },
    { 
      name: 'Butter Chicken', 
      description: 'North Indian creamy chicken curry', 
      imageUrl: 'https://t3.ftcdn.net/jpg/06/01/41/68/360_F_601416862_AfYdeefqT1kGqWTx1DZCsJZVzYIDFzPR.jpg',
      story: 'Butter Chicken originated in Delhi, and it’s a rich, creamy curry made with marinated chicken cooked in a tomato-based sauce. It’s a staple in North Indian cuisine and loved worldwide for its mild yet flavorful taste.' 
    },
    { 
      name: 'Rogan Josh', 
      description: 'Rich and aromatic Kashmiri curry', 
      imageUrl: 'https://img.freepik.com/premium-photo/aromatic-feast-mutton-rogan-josh-with-naan-indian-culinary-delight_896558-35674.jpg',
      story: 'Rogan Josh is a signature dish from Kashmir, known for its deep red color and aromatic spices. Traditionally made with lamb, it’s cooked slowly to infuse the meat with flavors of saffron, cinnamon, and cardamom.' 
    },
    { 
      name: 'Vada Pav', 
      description: 'Mumbai\'s popular spicy street food', 
      imageUrl: 'https://media.istockphoto.com/id/1257507120/photo/vada-pav-or-wada-pav-indian-desi-burger-is-a-street-food-dish-from-mumbai-maharashtra-indian.jpg?s=612x612&w=0&k=20&c=XMuNFtgb37k8NqjRde1sedlBpgq8VS9dD7ApQOOR3NU=',
      story: 'Vada Pav, often called the "Indian burger," originated in Mumbai. It’s a spicy potato fritter stuffed between a bun, served with chutneys and green chilies. It’s a popular street food loved by Mumbaikars.' 
    },
    { 
      name: 'Pani Puri', 
      description: 'Tangy, spicy street snack', 
      imageUrl: 'https://media.istockphoto.com/id/525416827/photo/pani-puri-golgappe-chat-item-india.jpg?s=612x612&w=0&k=20&c=tOCmN28AXHIe3SMBgszWU6PLUD6w6CU6q8yMdwSAKPw=',
      story: 'Pani Puri, also known as Golgappa in the northern regions, is a beloved street snack across India. The crisp puris are filled with spiced water, potatoes, and chutney, creating an explosion of flavors in every bite.' 
    },
    { 
      name: 'Idli', 
      description: 'Steamed rice cake from South India', 
      imageUrl: 'https://us.123rf.com/450wm/jayk67/jayk672303/jayk67230300004/202614742-serving-south-indian-breakfast-idli-with-chutney-and-sambar.jpg?ver=6',
      story: 'Idli is a popular breakfast dish from South India, particularly in Tamil Nadu and Karnataka. These steamed rice cakes are soft and fluffy, typically served with sambar and coconut chutney.' 
    },
    { 
      name: 'Gulab Jamun', 
      description: 'Sweet dessert soaked in sugar syrup', 
      imageUrl: 'https://www.slurrp.com/web/_next/image?url=https%3A%2F%2Fimages.slurrp.com%2Fprodarticles%2Fzr7t7j7s00j.webp%3Fimpolicy%3Dslurrp-20210601%26width%3D1200%26height%3D900%26q%3D75&w=1200&q=75',
      story: 'Gulab Jamun is a decadent dessert enjoyed throughout India. These soft, deep-fried dough balls are soaked in a rose-flavored sugar syrup, making them a favorite at festivals and celebrations.' 
    },
    { 
      name: 'Pav Bhaji', 
      description: 'Spicy mashed vegetables with buttered buns', 
      imageUrl: 'https://media.istockphoto.com/id/1438867572/photo/pav-bhaji-is-a-fast-food-dish-from-india-consisting-of-a-thick-vegetable-curry-served-with.jpg?s=612x612&w=0&k=20&c=vMD1YWTq7tf5iGtUAa4IqsfGY-QjDLW3ii0OdiZWHuc=',
      story: 'Pav Bhaji is a popular street food from Mumbai, Maharashtra. The dish consists of a thick, spicy vegetable curry (bhaji) served with soft, buttered buns (pav). It’s often garnished with chopped onions, cilantro, and a squeeze of lemon.' 
    },
    { 
      name: 'Tandoori Chicken', 
      description: 'Grilled chicken marinated in yogurt and spices', 
      imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/029/858/402/small_2x/of-tandoori-chicken-as-a-dish-in-a-high-end-restaurant-generative-ai-photo.jpg',
      story: 'Tandoori Chicken, a dish that hails from the northern regions of India, particularly Punjab, is marinated in yogurt and spices, then grilled in a tandoor (clay oven). Its vibrant red color comes from the spices used, giving it a smoky, spicy flavor.' 
    },
    { 
      name: 'Chole Bhature', 
      description: 'Spicy chickpeas with fried bread', 
      imageUrl: 'https://wallpapercave.com/wp/wp9199690.jpg',
      story: 'Chole Bhature is a beloved North Indian dish, especially in Punjab and Delhi. It consists of spicy chickpeas (chole) served with fluffy deep-fried bread (bhature). Often enjoyed as a hearty breakfast or lunch, it’s a must-try for food lovers.' 
    },
    { 
      name: 'Fish Curry', 
      description: 'Rich, spicy coastal fish curry', 
      imageUrl: 'https://i.ytimg.com/vi/qstxR_Jh4aY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC_Suuq5x3tx19D_lMjm3RHk6IpHg',
      story: 'Fish Curry is a staple in coastal regions of India, particularly Kerala, Goa, and West Bengal. Made with fresh fish and a blend of spices, this curry is rich in flavors, often served with rice or roti for a fulfilling meal.' 
    },
    { 
      name: 'Litti Chokha', 
      description: 'Traditional dish from Bihar', 
      imageUrl: 'https://t4.ftcdn.net/jpg/04/25/54/11/360_F_425541152_3YH9WU1Z6by625MIQTNNAN1a9p9r094t.jpg',
      story: 'Litti Chokha is a traditional dish from Bihar and eastern Uttar Pradesh. Litti refers to round dough balls filled with roasted gram flour, while Chokha is a side dish made of mashed vegetables, usually brinjal, potatoes, and tomatoes.' 
    }
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  
  // Filter cuisines based on the search query
  const filteredCuisines = cuisines.filter(cuisine =>
    cuisine.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cuisine.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Open the modal with selected cuisine details
  const openModal = (cuisine) => {
    setSelectedCuisine(cuisine);
  };
  
  // Close the modal
  const closeModal = () => {
    setSelectedCuisine(null);
  };
  
  return (
    <div className="cuisine-container">
      <header className="cuisine-header">
        <h1>Cuisine of India</h1>
        <p>Explore the flavors and spices that define Indian cuisine, representing the diverse cultural tapestry of the country.</p>
      </header>
  
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a dish..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
  
      {/* Cuisines Gallery */}
      <div className="cuisine-gallery">
        {filteredCuisines.length > 0 ? (
          filteredCuisines.map((cuisine, index) => (
            <div key={index} className="cuisine-card" onClick={() => openModal(cuisine)}>
              <img src={cuisine.imageUrl} alt={cuisine.name} />
              <h3>{cuisine.name}</h3>
              <p>{cuisine.description}</p>
            </div>
          ))
        ) : (
          <p>No dishes found.</p>
        )}
      </div>
  
      {/* Modal */}
      {selectedCuisine && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={selectedCuisine.imageUrl} alt={selectedCuisine.name} className="modal-image" />
            <h2>{selectedCuisine.name}</h2>
            <p>{selectedCuisine.description}</p>
            <p>{selectedCuisine.story}</p> {/* Story of the cuisine */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cuisine;
