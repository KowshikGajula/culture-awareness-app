// EventCalendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

// Sample events data with full details for the next year
const eventsData = {
  // October 2024
  '2024-10-12': { name: 'Dussehra Celebration', type: 'festival', description: 'Celebrating the victory of good over evil' },
  '2024-10-16': { name: 'World Food Day', type: 'important', description: 'A day focused on food security worldwide' },
  '2024-10-24': { name: 'United Nations Day', type: 'webinar', description: 'Celebrating UN achievements and initiatives' },
  '2024-10-30': { name: 'Diwali Festival', type: 'festival', description: 'Festival of Lights' },
  '2024-10-31': { name: 'Halloween', type: 'festival', description: 'A fun-filled night of costumes and candy' },

  // November 2024
  '2024-11-01': { name: 'World Vegan Day', type: 'important', description: 'A day to highlight the benefits of vegan lifestyle' },
  '2024-11-14': { name: 'Children’s Day', type: 'festival', description: 'Celebrating childhood and education' },
  '2024-11-19': { name: 'International Men’s Day', type: 'important', description: 'Focus on men’s mental health and gender equality' },
  '2024-11-30': { name: 'Guru Nanak Jayanti', type: 'festival', description: 'Celebrating the birth of Guru Nanak' },

  // December 2024
  '2024-12-01': { name: 'World AIDS Day', type: 'important', description: 'Awareness and support for people living with HIV' },
  '2024-12-10': { name: 'Human Rights Day', type: 'important', description: 'Celebrating human rights achievements worldwide' },
  '2024-12-25': { name: 'Christmas Celebration', type: 'festival', description: 'Celebration of Christmas and holiday cheer' },
  '2024-12-31': { name: 'New Year’s Eve', type: 'festival', description: 'Festive New Year’s Eve celebrations worldwide' },

   // January 2025
   '2025-01-01': { name: 'New Year’s Day', type: 'important', description: 'Celebration marking the start of the new year' },
   '2025-01-14': { name: 'Makar Sankranti', type: 'festival', description: 'Harvest festival celebrated in various parts of India' },
   '2025-01-26': { name: 'Republic Day', type: 'important', description: 'Celebration of the Constitution of India' },
   '2025-01-30': { name: 'Martyrs’ Day', type: 'important', description: 'Day of remembrance for fallen freedom fighters' },
   
   // February 2025
   '2025-02-02': { name: 'World Wetlands Day', type: 'important', description: 'Focus on wetlands preservation and protection' },
   '2025-02-14': { name: 'Valentine’s Day', type: 'festival', description: 'Celebration of love and affection' },
   '2025-02-21': { name: 'International Mother Language Day', type: 'important', description: 'Promoting awareness of linguistic and cultural diversity' },
   '2025-02-28': { name: 'National Science Day', type: 'webinar', description: 'Educational webinar focused on scientific achievements in India' },
   
   // March 2025
   '2025-03-01': { name: 'Zero Discrimination Day', type: 'important', description: 'Promoting diversity and inclusion' },
   '2025-03-08': { name: 'International Women’s Day', type: 'important', description: 'Recognizing women’s achievements worldwide' },
   '2025-03-10': { name: 'Holi', type: 'festival', description: 'Festival of colors celebrating the arrival of spring' },
   '2025-03-21': { name: 'World Poetry Day', type: 'webinar', description: 'Webinar on poetry and literature from around the world' },
   '2025-03-27': { name: 'World Theatre Day', type: 'important', description: 'Celebrating the art of theatre globally' },
   
   // April 2025
   '2025-04-01': { name: 'April Fool’s Day', type: 'festival', description: 'Day of humor and pranks' },
   '2025-04-07': { name: 'World Health Day', type: 'important', description: 'Focus on global health awareness' },
   '2025-04-14': { name: 'Baisakhi', type: 'festival', description: 'Harvest festival celebrated in Punjab' },
   '2025-04-22': { name: 'Earth Day', type: 'important', description: 'Awareness and advocacy for environmental protection' },
   '2025-04-29': { name: 'International Dance Day', type: 'webinar', description: 'Webinar on the art and history of dance worldwide' },
   
   // May 2025
   '2025-05-01': { name: 'Labor Day', type: 'important', description: 'Honoring labor and working-class contributions' },
   '2025-05-03': { name: 'World Press Freedom Day', type: 'webinar', description: 'Highlighting the importance of free press' },
   '2025-05-09': { name: 'Mother’s Day', type: 'festival', description: 'Celebration of mothers and motherhood' },
   '2025-05-15': { name: 'International Day of Families', type: 'important', description: 'Recognizing the role of families worldwide' },
   '2025-05-31': { name: 'World No Tobacco Day', type: 'important', description: 'Awareness on the dangers of tobacco usage' },
   
   // June 2025
   '2025-06-05': { name: 'World Environment Day', type: 'important', description: 'Celebration and advocacy for environmental protection' },
   '2025-06-08': { name: 'World Oceans Day', type: 'webinar', description: 'Webinar on the importance of ocean conservation' },
   '2025-06-15': { name: 'Father’s Day', type: 'festival', description: 'Celebration of fathers and fatherhood' },
   '2025-06-21': { name: 'International Yoga Day', type: 'important', description: 'Celebrating the benefits of yoga for wellness' },
   '2025-06-26': { name: 'International Day against Drug Abuse', type: 'important', description: 'Raising awareness on drug abuse and prevention' },
   
   // July 2025
   '2025-07-04': { name: 'American Independence Day', type: 'festival', description: 'Celebration of American independence' },
   '2025-07-11': { name: 'World Population Day', type: 'important', description: 'Awareness of global population issues' },
   '2025-07-15': { name: 'Guru Purnima', type: 'festival', description: 'Day to honor teachers and mentors' },
   '2025-07-28': { name: 'World Nature Conservation Day', type: 'important', description: 'Advocating for the conservation of nature' },
   '2025-07-30': { name: 'International Day of Friendship', type: 'festival', description: 'Celebrating friendship and harmony worldwide' },
   
   // August 2025
   '2025-08-06': { name: 'Hiroshima Day', type: 'important', description: 'Day of remembrance for the atomic bombing of Hiroshima' },
   '2025-08-09': { name: 'International Day of the World’s Indigenous Peoples', type: 'important', description: 'Recognizing Indigenous peoples worldwide' },
   '2025-08-15': { name: 'Independence Day', type: 'festival', description: 'Celebration of Indian independence' },
   '2025-08-19': { name: 'World Humanitarian Day', type: 'webinar', description: 'Webinar on humanitarian efforts worldwide' },
   '2025-08-29': { name: 'National Sports Day', type: 'important', description: 'Celebrating sports and athletic achievements in India' },
   
   // September 2025
   '2025-09-05': { name: 'Teacher’s Day', type: 'important', description: 'Honoring teachers and their contributions' },
   '2025-09-08': { name: 'International Literacy Day', type: 'important', description: 'Promoting literacy worldwide' },
   '2025-09-16': { name: 'World Ozone Day', type: 'important', description: 'Raising awareness on ozone layer protection' },
   '2025-09-21': { name: 'International Day of Peace', type: 'festival', description: 'Celebration and advocacy for world peace' },
   '2025-09-27': { name: 'World Tourism Day', type: 'webinar', description: 'Highlighting the importance of global tourism' },
   
   // October 2025
   '2025-10-02': { name: 'Gandhi Jayanti', type: 'festival', description: 'Commemoration of Mahatma Gandhi’s birth' },
   '2025-10-05': { name: 'World Teachers’ Day', type: 'important', description: 'Celebrating the role of teachers worldwide' },
   '2025-10-16': { name: 'World Food Day', type: 'webinar', description: 'Webinar on global food security issues' },
   '2025-10-24': { name: 'United Nations Day', type: 'important', description: 'Celebrating United Nations contributions' },
   '2025-10-31': { name: 'Halloween', type: 'festival', description: 'A festive night of costumes and candy' },
   
   // November 2025
   '2025-11-01': { name: 'World Vegan Day', type: 'important', description: 'Celebrating the benefits of veganism' },
   '2025-11-14': { name: 'Children’s Day', type: 'festival', description: 'Celebration of children and childhood' },
   '2025-11-19': { name: 'International Men’s Day', type: 'important', description: 'Focus on men’s health and equality' },
   '2025-11-27': { name: 'Thanksgiving', type: 'festival', description: 'Celebration of gratitude and family gatherings' },
   '2025-11-30': { name: 'Guru Nanak Jayanti', type: 'festival', description: 'Commemoration of Guru Nanak’s birth' },
   
   // December 2025
   '2025-12-01': { name: 'World AIDS Day', type: 'important', description: 'Awareness and support for people with HIV/AIDS' },
   '2025-12-10': { name: 'Human Rights Day', type: 'important', description: 'Celebrating achievements in human rights' },
   '2025-12-25': { name: 'Christmas Celebration', type: 'festival', description: 'Holiday season and celebration of Christmas' },
   '2025-12-31': { name: 'New Year’s Eve', type: 'festival', description: 'New Year celebrations worldwide' },
};

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [eventDetails, setEventDetails] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setDate(date);

    // Format date to YYYY-MM-DD
    const formattedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
    const selectedEvent = eventsData[formattedDate];
    
    if (selectedEvent) {
      if (selectedEvent.type === 'webinar' || selectedEvent.type === 'important' ) {
        // Navigate to event details page if it's a webinar or important event
        navigate(`/event/${selectedEvent.name}`);
      } else {
        // Display event details directly
        setEventDetails(`Event: ${selectedEvent.name} | Description: ${selectedEvent.description}`);
      }
    } else {
      setEventDetails('No events on this date');
    }
  };

  const tileClassName = ({ date }) => {
    const formattedDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().split('T')[0];
    const event = eventsData[formattedDate];

    if (event) {
      if (event.type === 'important' || event.type === 'webinar') return 'important-event'; // Red highlight for important and webinars
      if (event.type === 'festival') return 'festival-event'; // Another highlight for festivals
    }
    return null;
  };

  return (
    <div>
      <h2 style={{
        textAlign: 'center',
        marginTop: '40px',
        marginBottom: '20px',
        fontWeight: 'bold',
        fontSize: '2.5em',
        background: 'linear-gradient(90deg, #ff7f50, #ff6347)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
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
        <p>{eventDetails}</p>
      </div>
    </div>
  );
};

export default EventCalendar;
