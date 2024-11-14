import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Event.css';


/* eslint-disable no-dupe-keys */

// Event data with description, image, and timings

const eventDetails = {
  
  // October 2024
  'Dussehra Celebration': {
    description: 'Celebrating the victory of good over evil.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '5:00 PM - 9:00 PM',
    place: 'Various locations across India',
    mode: 'Offline',
  },
  'World Food Day': {
    description: 'A day focused on food security worldwide.',
    image: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg', // Replace with the image link for the event
    timing: '2:00 PM - 4:00 PM',
    place: 'New Delhi',
    mode: 'Online Webinar',
    link: 'https://example.com/world-food-day', // Online link for the event
  },
  'United Nations Day': {
    description: 'Celebrating UN achievements and initiatives.',
    image: 'https://img.freepik.com/premium-photo/celebrating-united-nations-day-global-tribute_1262027-21411.jpg?semt=ais_hybrid', // Replace with the image link for the event
    timing: '10:00 AM - 12:00 PM',
    place: 'Online Webinar',
    mode: 'Online',
    link: 'https://example.com/un-day', // Online link for the event
  },
  'Diwali Festival': {
    description: 'Festival of Lights.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: 'Evening',
    place: 'Across India',
    mode: 'Offline',
  },
  'Halloween': {
    description: 'A fun-filled night of costumes and candy.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '5:00 PM - 10:00 PM',
    place: 'Various locations',
    mode: 'Offline',
  },
  'World Vegan Day': {
    description: 'A day to highlight the benefits of a vegan lifestyle.',
    image: 'https://img.freepik.com/free-vector/hand-drawn-illustration-world-vegan-day-celebration_23-2150871462.jpg', // Replace with the image link for the event
    timing: '12:00 PM - 2:00 PM',
    place: 'Mumbai, Delhi',
    mode: 'Online Webinar',
    link: 'https://example.com/world-vegan-day', // Online link for the event
  },
  'Children’s Day': {
    description: 'Celebrating childhood and education.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '10:00 AM - 1:00 PM',
    place: 'Schools and institutions across India',
    mode: 'Offline',
  },
  'International Men’s Day': {
    description: 'Focus on men’s mental health and gender equality.',
    image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_80/lsci/db/PICTURES/CMS/373000/373042.jpg', // Replace with the image link for the event
    timing: '4:00 PM - 6:00 PM',
    place: 'Ahmedabad',
    mode: 'Online',
    link: 'https://youtu.be/YqKYpgZ9FWU?si=Aheg0Z4PNFe8wQox', // Online link for the event
  },
  'Guru Nanak Jayanti': {
    description: 'Celebrating the birth of Guru Nanak.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '10:00 AM onwards',
    place: 'Gurdwaras across India',
    mode: 'Offline',
  },
  'World AIDS Day': {
    description: 'Awareness and support for people living with HIV.',
    image: 'https://www.hiv.gov/static/0502632bf38a23606ba9914380d963ec/b74b1/awareness-box-worldaidsday.jpg', // Replace with the image link for the event
    timing: '11:00 AM - 1:00 PM',
    place: 'Hyderabad',
    mode: 'Online',
    link: 'https://example.com/world-aids-day', // Online link for the event
  },
  'Human Rights Day': {
    description: 'Celebrating human rights achievements worldwide.',
    image: 'https://greenwgroup.co.in/wp-content/uploads/2020/12/International-human-rights-day-2020-blog-banner-1.jpg', // Replace with the image link for the event
    timing: '3:00 PM - 5:00 PM',
    place: 'Bangalore',
    mode: 'Hybrid',
    link: 'https://example.com/human-rights-day', // Online link for the event
  },
  'Christmas Celebration': {
    description: 'Celebration of Christmas and holiday cheer.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: 'All Day',
    place: 'Churches and communities across India',
    mode: 'Offline',
  },
  'New Year’s Eve': {
    description: 'Festive New Year’s Eve celebrations worldwide.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: 'Evening',
    place: 'Across India',
    mode: 'Offline',
  },
  'New Year’s Day': {
    description: 'Celebration marking the start of the new year.',
    image: 'https://cdn-az.allevents.in/events5/banners/6ce88e9fbe4ca7d17aea2cef563f36d8ab8df3ca34ca09baacfab5ff02da6887-rimg-w540-h360-gmir.jpg?v=1704476594', // Replace with the image link for the event
    timing: 'All Day',
    place: 'Across India',
    mode: 'Offline',
  },
  'Makar Sankranti': {
    description: 'Harvest festival celebrated in various parts of India.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: 'Morning onwards',
    place: 'Across India',
    mode: 'Offline',
  },
  'Republic Day': {
    description: 'Celebration of the Constitution of India.',
    image: 'https://i.pinimg.com/736x/4c/a1/6d/4ca16d7aadf520abcf70533c188d380c.jpg', // Replace with the image link for the event
    timing: '9:00 AM - 12:00 PM',
    place: 'New Delhi',
    mode: 'Offline',
  },
  'Martyrs’ Day': {
    description: 'Day of remembrance for fallen freedom fighters.',
    image: 'https://www.aajsamaaj.com/wp-content/uploads/2022/01/Martyr-Day-2021.jpg', // Replace with the image link for the event
    timing: '10:00 AM',
    place: 'National War Memorial, Delhi',
    mode: 'Offline',
  },
  'World Wetlands Day': {
    description: 'Focus on wetlands preservation and protection.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '2:00 PM - 4:00 PM',
    place: 'Kolkata',
    mode: 'Online Webinar',
    link: 'https://example.com/world-wetlands-day', // Online link for the event
  },
  'National Science Day': {
    description: 'Educational webinar on scientific achievements in India.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '10:00 AM - 1:00 PM',
    place: 'Online',
    mode: 'Online',
    link: 'https://example.com/national-science-day', // Online link for the event
  },
  'International Women’s Day': {
    description: 'Recognizing women’s achievements worldwide.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '10:00 AM - 1:00 PM',
    place: 'Various NGOs and online events',
    mode: 'Hybrid',
    link: 'https://example.com/international-womens-day', // Online link for the event
  },
  'Holi': {
    description: 'Festival of colors celebrating the arrival of spring.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: 'All Day',
    place: 'Across India',
    mode: 'Offline',
  },
  'World Health Day': {
    description: 'Focus on global health awareness.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '3:00 PM - 5:00 PM',
    place: 'Pune',
    mode: 'Online',
    link: 'https://example.com/world-health-day', // Online link for the event
  },
  'Earth Day': {
    description: 'Awareness and advocacy for environmental protection.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '10:00 AM - 1:00 PM',
    place: 'Mumbai',
    mode: 'Online Webinar',
    link: 'https://example.com/earth-day', // Online link for the event
  },
  'Independence Day': {
    description: 'Celebration of Indian independence.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '8:00 AM - 11:00 AM',
    place: 'Red Fort, New Delhi',
    mode: 'Offline',
  },
  'World Humanitarian Day': {
    description: 'Webinar on humanitarian efforts worldwide.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '3:00 PM - 5:00 PM',
    place: 'Online',
    mode: 'Online',
    link: 'https://example.com/world-humanitarian-day', // Online link for the event
  },
  // August 2025
  'World Humanitarian Day': {
    description: 'Webinar on humanitarian efforts worldwide.',
    image: 'IMAGE_URL_HERE', // Replace with the image link for the event
    timing: '3:00 PM - 5:00 PM',
    place: 'Online',
    mode: 'Online',
    link: 'https://example.com/world-humanitarian-day', // Online link for the event
  },
};
const Event = () => {
  const { eventName } = useParams();
  const event = eventDetails[eventName];

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return <div>Event not found!</div>;
  }

  return (
    <div className="event-container" style={{ 
      backgroundColor: 'linear-gradient(120deg, #FFB703, #FB5607)', // Festive gradient background
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      color: '#FFFFFF',
      fontFamily: 'Arial, sans-serif'
  }}>
      <div className="event-content" style={{ 
          backgroundColor: '#F5F5DC', // Warm beige for content background
          color: '#333333',
          borderRadius: '12px',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
          padding: '2rem',
          width: '90%',
          maxWidth: '600px',
          textAlign: 'center',
          animation: 'fadeIn 2s ease' // Apply animation for fade-in effect
      }}>
          <h1 className="event-title" style={{ 
              color: '#D62828', // Bright, inviting red for title
              fontSize: '2.5rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              animation: 'slideDown 1s ease' // Slide-down effect for title
          }}>{eventName}</h1>
  
          <img src={event.image} alt={eventName} className="event-image" style={{ 
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              margin: '1rem 0',
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              transform: 'scale(1)',
              transition: 'transform 0.4s ease',
              animation: 'zoomIn 1.5s ease' // Zoom-in effect for image
          }} />
          
          <p className="event-description" style={{ 
              color: '#333333',
              fontSize: '1.2rem',
              marginTop: '1rem',
              lineHeight: '1.5',
              animation: 'fadeInUp 2s ease' // Fade-in effect for description
          }}>{event.description}</p>
          
          <div className="event-details" style={{ 
              textAlign: 'left',
              marginTop: '1.5rem',
              animation: 'fadeInUp 2.5s ease' // Delayed fade-in for details section
          }}>
              <p style={{ color: '#6A0572', fontSize: '1.1rem' }}><strong>Timing:</strong> {event.timing}</p>
              <p style={{ color: '#6A0572', fontSize: '1.1rem' }}><strong>Place:</strong> {event.place}</p>
              <p style={{ color: '#6A0572', fontSize: '1.1rem' }}><strong>Mode:</strong> {event.mode}</p>
              {event.link && (
                  <p><strong>Link:</strong> <a href={event.link} target="_blank" rel="noopener noreferrer" style={{ 
                      color: '#3D348B',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      animation: 'bounce 2s infinite' // Bouncing link effect
                  }}>Join Event</a></p>
              )}
          </div>
      </div>
  </div>
  );
  // eslint-disable-next-line
  {/* Add keyframes for animations */}
  <style>
  {`
  @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
  }
  
  @keyframes slideDown {
      0% { transform: translateY(-30px); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes zoomIn {
      0% { transform: scale(0.9); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes bounce {
      0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
      40% { transform: translateY(-8px); }
      60% { transform: translateY(-4px); }
  }
  `}
  </style>
  
  
};

export default Event;
