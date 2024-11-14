import React, { useState, useEffect } from 'react';
import './Trip.css';  // Assuming the CSS is in a file named Trip.css

const Trip = () => {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch('http://localhost:8080/admin/trips')
            .then((response) => response.json())
            .then((data) => setTrips(data))
            .catch((error) => console.error('Error fetching trips:', error));
    }, []);

    return (
        <div className="trip-container">
            <h1>Available Trips</h1>
            {trips.map((trip) => (
                <div className="trip-card" key={trip.id}>
                    <h2>{trip.destinationName}</h2>
                    {trip.imageLink && (
                        <img
                            src={trip.imageLink}
                            alt={trip.destinationName}
                            className="trip-image"
                        />
                    )}
                    <p><strong>Duration:</strong> {trip.tripDuration}</p>
                    <p><strong>Tourist Places:</strong> {trip.touristPlaces}</p>
                    <p><strong>Cost:</strong> {trip.tripCost}</p>
                    <p><strong>Itinerary:</strong> {trip.itineraryDetails}</p>
                    <p><strong>Accommodation:</strong> {trip.accommodationDetails}</p>
                    <p><strong>Travel Details:</strong> {trip.travelDetails}</p>
                    <p><strong>Contact:</strong> {trip.contactDetails}</p>
                    <p><strong>Booking Info:</strong> {trip.bookingInfo}</p>
                    <p><strong>Group Size:</strong> {trip.groupSize}</p>
                    <p>
                        <strong>Website:</strong>
                        <a href={trip.websiteLink} target="_blank" rel="noopener noreferrer">
                            {trip.websiteLink}
                        </a>
                    </p>
                  {/* <button className="book-button">Book Trip</button> */}

                </div>
            ))}
        </div>
    );
};

export default Trip;
