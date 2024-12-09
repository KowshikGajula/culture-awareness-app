import React from 'react';
import ThreeSixty from 'react-360-view';

const VirtualTour = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore a 360° Virtual Tour</h1>
      <ThreeSixty
        amount={36} // Number of frames in the 360° image sequence
        imagePath="https://www.airpano.com/files/r_450/taj_mahal_03.jpg" // Path to the images
        fileName="image-{index}.jpg" // Format of the image filenames
        spinReverse={false} // Direction of spin
        autoPlay={true} // Auto-spin the 360° view
        autoPlaySpeed={100} // Speed of auto-spin (lower is faster)
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f3f3f3',
    padding: '20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
};

export default VirtualTour;
