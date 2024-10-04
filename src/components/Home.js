import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCalendar from './Calendar';
import './Home.css';

function Home() {
  const images = [
    'https://t4.ftcdn.net/jpg/01/64/62/13/360_F_164621341_vA1ZtJNeXpctAy7ASvEMtl5R6RG1pzOa.jpg',
    'https://media.istockphoto.com/id/1307189136/photo/gateway-of-india-mumbai-maharashtra-monument-landmark-famous-place-magnificent-view-without.jpg?s=612x612&w=0&k=20&c=gGzzkXY5bAVbRbokzrjvkt7Ve-Z3yzSVN04NaMqyBB8=',
    'https://images.unsplash.com/photo-1577083753695-e010191bacb5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpd2FsaXxlbnwwfHwwfHx8MA%3D%3D',
    'https://t3.ftcdn.net/jpg/04/84/16/22/360_F_484162295_3xrpIzKdqhk7zd8EDTAHkJtNmMMje7Br.jpg',
    'https://img.freepik.com/free-photo/lohri-celebration-india_23-2151099193.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const categories = [
    { name: 'Monuments', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSc13ODUynr7RvMiFvN2dCuv3oCYRx_EXLXQ&s', route: '/monument' },
    { name: 'Heritage', imageUrl: 'https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?b=1&s=612x612&w=0&k=20&c=LaU3hMPtVV7PL1NkGfEx1aTdeD7dRQdyhRxARMUdXsw=', route: '/heritage' },
    { name: 'Festivals', imageUrl: 'https://i.ytimg.com/vi/MuZ-0LaMdag/maxresdefault.jpg', route: '/festival' },
    { name: 'Cuisine', imageUrl: 'https://c4.wallpaperflare.com/wallpaper/559/564/946/cuisine-food-india-indian-wallpaper-preview.jpg', route: '/cuisine' },
    { name: 'Music & Dance', imageUrl: 'https://images.unsplash.com/photo-1646765495885-8a61595cb9cf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwbXVzaWN8ZW58MHx8MHx8fDA%3D', route: '/music-and-dance' },
    { name: 'Art & Craft', imageUrl: 'https://img.freepik.com/free-photo/high-angle-girl-celebrating-tamil-new-year_23-2151210751.jpg', route: '/art-and-craft' },
    { name: 'Culture', imageUrl: 'https://c0.wallpaperflare.com/preview/642/514/329/india-culture-holy-tradition.jpg', route: '/culture' },
  ];

  const ancientStories = [
    { name: 'Taj Mahal', imageUrl: 'https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=', route: '/story/taj-mahal' },
    { name: 'Konark Sun Temple', imageUrl: 'https://cdn.pixabay.com/photo/2021/11/19/04/51/temple-6808093_640.jpg', route: '/story/konark-sun-temple' },
    { name: 'Hampi', imageUrl: 'https://media.istockphoto.com/id/1270774245/photo/hampi-stone-chariot-the-antique-stone-art-piece-from-unique-angle-with-amazing-blue-sk.jpg?s=612x612&w=0&k=20&c=LugJgTiUd9y_8MO2KDQ2I4IvOD_7BH5x_R8iRApqEUg=', route: '/story/hampi' },
    { name: 'Ajanta Caves', imageUrl: 'https://media.istockphoto.com/id/629821246/photo/kailas-temple-in-ellora-caves-complex-in-india.jpg?s=612x612&w=0&k=20&c=ei3N4dugQCPoifA-fE5aDIcgkGqkQgQ2_ASvdxxVnV0=', route: '/story/ajanta-caves' },
    { name: 'Mahabalipuram', imageUrl: 'https://t3.ftcdn.net/jpg/01/17/58/12/360_F_117581268_olZPVM91tm2KaWY0MatlwMPBO7KjbbrG.jpg', route: '/story/mahabalipuram' },
    { name: 'Ellora Caves', imageUrl: 'https://media.istockphoto.com/id/531012475/photo/ellora-caves-maharashtra-india.jpg?s=612x612&w=0&k=20&c=Xb2rQVrLTA0cFdr_WquuHnACAaMsZlSUG4U56mGC_eA=', route: '/story/ellora-caves' },
  ];

  const mythologyBooks = [
    { name: 'Ramayana', imageUrl: 'https://i.pinimg.com/736x/e7/9e/33/e79e333eda236c83bee9e004ce76e39f.jpg', route: '/books/ramayana' },
    { name: 'Mahabharata', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpe6o0wr0ePKDRmHWHOXPbzzn62duF9hNwqQ&s', route: '/books/mahabharata' },
    { name: 'Bhagavata', imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/l3929ow0/regionalbooks/b/a/f/shreemad-bhagwat-geeta-original-imageeufsk4ds57y.jpeg?q=90&crop=false', route: '/books/bhagavata' },
  ];

  return (
    <div className="home-container">
      {/* Full-screen Image Carousel */}
      <div className="carousel-container">
        <button className="arrow left-arrow" onClick={prevImage}>❮</button>
        <img src={images[currentIndex]} alt="Cultural Heritage" className="carousel-image" />
        <button className="arrow right-arrow" onClick={nextImage}>❯</button>
      </div>

      {/* Category Grid */}
      <div className="category-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => navigate(category.route)}
          >
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>

      {/* Did You Know Section */}
      <div className="did-you-know">
        <h2>Did You Know?</h2>
        <img
          src="https://cdn.firstcry.com/education/2022/08/20163815/Essay-On-Freedom-Fighters-10-Lines-Short-and-Long-Essay-For-Children.jpg"
          alt="Freedom Fighter"
          className="freedom-image"
          onClick={() => navigate('/freedom')}
        />
      </div>

      {/* Stories Section */}
      <div className="stories-section">
        <h2>Ancient Stories</h2>
        <div className="story-grid">
          {ancientStories.map((story, index) => (
            <div
              key={index}
              className="story-card"
              onClick={() => navigate(story.route)}
            >
              <img src={story.imageUrl} alt={story.name} className="story-image" />
              <h3>{story.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Mythology Books Section */}
      <div className="books-section">
        <h2>Indian Mythology Books</h2>
        <div className="book-grid">
          {mythologyBooks.map((book, index) => (
            <div
              key={index}
              className="book-card"
              onClick={() => navigate(book.route)}
            >
              <img src={book.imageUrl} alt={book.name} className="book-image" />
              <h3>{book.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="want-to-travel">
  <h2>Want to Travel?</h2>
  <img
    src="https://hippie-inheels.com/wp-content/uploads/2017/09/India-Travel-Made-Easy-3.jpg"
    alt="Travel"
    className="travel-image"
    onClick={() => navigate('/travel')}
  />
</div>

<div>
      
      {/* Integrate the Event Calendar */}
      <EventCalendar />

      {/* Other content can follow */}
      {/* Example: You can include your existing components or sections here */}
    </div>
    </div>
    
  );
}

export default Home;
