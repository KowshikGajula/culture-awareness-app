import React, { useEffect } from 'react';
import './Travel.css'; // Make sure to link the CSS file

const Travel = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="travel-guide">
      <h2>How to Travel in India</h2>

      {/* Paragraph 1: Planning Your Trip */}
      <div className="travel-section">
        <img
          src="https://aryandreamholidays.com/cdn/shop/files/createacollagehavingtravellandmarksofacrossIndia_1080x.png?v=1690457381"
          alt="Planning Your Trip"
          className="travel-image"
        />
        <p>
          <strong>Planning Your Trip to India:</strong> India is a country that offers an incredible variety of experiences, from bustling cities to serene landscapes, ancient monuments to vibrant festivals. When planning a trip, it's important to decide on the type of experience you're seeking—whether it's exploring historical sites, indulging in the diverse cuisines, or immersing yourself in India's spiritual side. The best time to visit India is from October to March, when the weather is pleasant. Plan to stay for at least 10-14 days to explore a few key regions.
        </p>
      </div>

      {/* Paragraph 2: Budgeting Your Journey */}
      <div className="travel-section">
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQECcc7f9IuFNw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721177939688?e=2147483647&v=beta&t=LeXwGU5axdmIouLd-snPwiFfylkEDdPkQudQc6NsWKg"
          alt="Budget Your Trip"
          className="travel-image"
        />
        <p>
          <strong>Budgeting for Your Journey:</strong> India is a traveler-friendly country, offering options for every budget. Whether you're a backpacker looking for economical stays or seeking luxury in 5-star hotels, India has it all. Transportation is affordable with trains, buses, and domestic flights connecting various parts of the country. Don’t forget to allocate budget for entry fees to monuments, local markets for souvenirs, and of course, the delicious street food.
        </p>
      </div>

      {/* Paragraph 3: Must-Visit Places */}
      <div className="travel-section">
        <img
          src="https://i.ytimg.com/vi/cOa97mBh8co/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBcVvuy7gJB2PooytdV9OMzXa5bSQ"
          alt="Must-Visit Places"
          className="travel-image"
        />
        <p>
          <strong>Must-Visit Places in India:</strong> There are countless places to explore in India, but some stand out more than others. Begin with the famous <strong>Golden Triangle</strong>, which includes Delhi, Agra (home to the Taj Mahal), and Jaipur. These cities showcase India's rich history and architecture. Head to <strong>Varanasi</strong> for a spiritual experience by the Ganges, or visit the <strong>backwaters of Kerala</strong> for serene boat rides. If you're an adventure enthusiast, explore the <strong>Himalayas</strong> in the north for trekking and beautiful landscapes.
        </p>
      </div>

      {/* Paragraph 4: Cultural and Culinary Experiences */}
      <div className="travel-section">
        <img
          src="https://d4t7t8y8xqo0t.cloudfront.net/admin/eazymedia/trends/3237/16355066930.jpg"
          alt="Cultural Experiences"
          className="travel-image"
        />
        <p>
          <strong>Cultural and Culinary Experiences:</strong> One of the highlights of traveling in India is experiencing its diverse culture and cuisine. Every region in India has something unique to offer. In Rajasthan, you can witness grand palaces and eat traditional Thali meals. Down south, indulge in dosas and filter coffee, while in Punjab, relish butter chicken and lassi. Be sure to plan your travel during one of the many festivals like <strong>Diwali</strong> or <strong>Holi</strong> for a memorable cultural immersion.
        </p>
      </div>

      {/* Paragraph 5: Safety Tips */}
      <div className="travel-section">
        <img
          src="https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/travel-safety-tips-2018-1525081720-1000X561.jpg"
          alt="Safety Tips"
          className="travel-image"
        />
        <p>
          <strong>Safety Tips for Travelers:</strong> Traveling in India is generally safe, but it’s always good to take precautions. Dress modestly, especially in rural areas and temples. It's advisable to drink bottled water and be cautious when eating street food. Always keep a copy of your documents and use government-authorized taxis or ridesharing apps. Lastly, be open to new experiences and interactions—India is known for its hospitality and welcoming nature!
        </p>
      </div>
    </div>
  );
};

export default Travel;
