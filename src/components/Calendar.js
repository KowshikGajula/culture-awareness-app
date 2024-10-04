// Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Optional: Include your CSS styles

// Sample events data for the next year
const eventsData = {
    // October 2024
    '2024-10-30': 'Diwali Festival',
    '2024-10-12': 'Dussehra Celebration',
    '2024-10-16': 'World Food Day',
    '2024-10-24': 'United Nations Day',
    '2024-10-31': 'Halloween',
  
    // November 2024
    '2024-11-01': 'World Vegan Day',
    '2024-11-14': 'Children’s Day',
    '2024-11-19': 'International Men’s Day',
    '2024-11-30': 'Guru Nanak Jayanti',
  
    // December 2024
    '2024-12-01': 'World AIDS Day',
    '2024-12-10': 'Human Rights Day',
    '2024-12-25': 'Christmas Celebration',
    '2024-12-31': 'New Year’s Eve',
  
    // January 2025
    '2025-01-01': 'New Year’s Day',
    '2025-01-14': 'Makar Sankranti',
    '2025-01-26': 'Republic Day',
    '2025-01-30': 'Martyrs’ Day',
  
    // February 2025
    '2025-02-02': 'World Wetlands Day',
    '2025-02-14': 'Valentine’s Day',
    '2025-02-21': 'International Mother Language Day',
    '2025-02-28': 'National Science Day',
  
    // March 2025
    '2025-03-01': 'Zero Discrimination Day',
    '2025-03-08': 'International Women’s Day',
    '2025-03-10': 'Holi',
    '2025-03-21': 'World Poetry Day',
    '2025-03-27': 'World Theatre Day',
  
    // April 2025
    '2025-04-01': 'April Fool’s Day',
    '2025-04-07': 'World Health Day',
    '2025-04-14': 'Baisakhi',
    '2025-04-22': 'Earth Day',
    '2025-04-29': 'International Dance Day',
  
    // May 2025
    '2025-05-01': 'Labor Day',
    '2025-05-03': 'World Press Freedom Day',
    '2025-05-09': 'Mother’s Day',
    '2025-05-15': 'International Day of Families',
    '2025-05-31': 'World No Tobacco Day',
  
    // June 2025
    '2025-06-05': 'World Environment Day',
    '2025-06-08': 'World Oceans Day',
    '2025-06-15': 'Father’s Day',
    '2025-06-21': 'International Yoga Day',
    '2025-06-26': 'International Day against Drug Abuse',
  
    // July 2025
    '2025-07-04': 'American Independence Day',
    '2025-07-11': 'World Population Day',
    '2025-07-15': 'Guru Purnima',
    '2025-07-28': 'World Nature Conservation Day',
    '2025-07-30': 'International Day of Friendship',
  
    // August 2025
    '2025-08-06': 'Hiroshima Day',
    '2025-08-09': 'International Day of the World’s Indigenous Peoples',
    '2025-08-15': 'Independence Day',
    '2025-08-19': 'World Humanitarian Day',
    '2025-08-29': 'National Sports Day',
  
    // September 2025
    '2025-09-05': 'Teacher’s Day',
    '2025-09-08': 'International Literacy Day',
    '2025-09-16': 'World Ozone Day',
    '2025-09-21': 'International Day of Peace',
    '2025-09-27': 'World Tourism Day',
  
    // October 2025
    '2025-10-02': 'Gandhi Jayanti',
    '2025-10-05': 'World Teachers’ Day',
    '2025-10-16': 'World Food Day',
    '2025-10-24': 'United Nations Day',
    '2025-10-31': 'Halloween',
  
    // November 2025
    '2025-11-01': 'World Vegan Day',
    '2025-11-14': 'Children’s Day',
    '2025-11-19': 'International Men’s Day',
    '2025-11-27': 'Thanksgiving',
    '2025-11-30': 'Guru Nanak Jayanti',
  
    // December 2025
    '2025-12-01': 'World AIDS Day',
    '2025-12-10': 'Human Rights Day',
    '2025-12-25': 'Christmas Celebration',
    '2025-12-31': 'New Year’s Eve'
  };

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [event, setEvent] = useState('');

  // Function to handle date selection and correct date format
  const handleDateChange = (date) => {
    setDate(date);

    // Correct date format to YYYY-MM-DD without timezone influence
    const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];

    // Check if the event exists for the selected date
    setEvent(eventsData[offsetDate] || 'No events on this date');
  };

  const tileClassName = ({ date }) => {
    const offsetDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
      .toISOString()
      .split('T')[0];

    if (eventsData[offsetDate]) {
      return 'event-day'; // Apply custom class for dates with events
    }
    return null;
  };

  return (
    <div>
      <h2 style={{
        textAlign: 'center',
        marginTop: '40px',
        marginBottom: '20px',
        color: 'linear-gradient(45deg, #ff6f61, #ff9a8b)',  // Gradient color for the heading
        fontWeight: 'bold',  // Make the heading bold
        fontSize: '2.5em',  // Increase font size for prominence
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',  // Add a slight shadow for depth
        background: 'linear-gradient(90deg, #ff7f50, #ff6347)', // Attractive background gradient
        WebkitBackgroundClip: 'text',  // Clip the background to the text
        WebkitTextFillColor: 'transparent' // Makes the gradient apply only to the text
      }}>
        Upcoming Events, Webinars, or Festivals
      </h2>   
      <Calendar 
        onChange={handleDateChange} 
        value={date} 
        tileClassName={tileClassName} 
      />
      <div>
        <h3>Event Details:</h3>
        <p>{event}</p>
      </div>
    </div>
  );
};

export default EventCalendar;
