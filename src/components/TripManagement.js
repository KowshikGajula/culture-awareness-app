import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TripManagement.css';

const TripManagement = () => {
    const [trips, setTrips] = useState([]);
    const [newTrip, setNewTrip] = useState({
        id: '',
        destinationName: '',
        tripDuration: '',
        touristPlaces: '',
        tripCost: '',
        itineraryDetails: '',
        accommodationDetails: '',
        travelDetails: '',
        contactDetails: '',
        websiteLink: '',
        bookingInfo: '',
        groupSize: '',
        imageLink: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    // Fetch all trips on component mount
    useEffect(() => {
        axios.get('http://localhost:8080/admin/trips')
            .then(response => setTrips(response.data))
            .catch(error => console.error('Error fetching trips:', error));
    }, []);

    // Handle form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTrip({ ...newTrip, [name]: value });
    };

    // Add a new trip or update an existing one
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTrip.id) {
            // If there is an id, it's an update
            axios.put(`http://localhost:8080/admin/trips/${newTrip.id}`, newTrip)
                .then(response => {
                    setTrips(trips.map(trip => trip.id === newTrip.id ? response.data : trip));
                    setResponseMessage('Trip updated successfully!');
                    resetForm();
                })
                .catch(error => {
                    console.error('Error updating trip:', error);
                    setResponseMessage('Failed to update trip');
                });
        } else {
            // Otherwise, it's a new trip
            axios.post('http://localhost:8080/admin/trips', newTrip)
                .then(response => {
                    setTrips([...trips, response.data]);
                    setResponseMessage('Trip added successfully!');
                    resetForm();
                })
                .catch(error => {
                    console.error('Error adding trip:', error);
                    setResponseMessage('Failed to add trip');
                });
        }
    };

    // Delete a trip
    const handleDeleteTrip = (id) => {
        axios.delete(`http://localhost:8080/admin/trips/${id}`)
            .then(() => {
                setTrips(trips.filter(trip => trip.id !== id));
                setResponseMessage('Trip deleted successfully!');
            })
            .catch(error => {
                console.error('Error deleting trip:', error);
                setResponseMessage('Failed to delete trip');
            });
    };

    // Handle editing a trip (to prefill the form)
    const handleEditTrip = (trip) => {
        setNewTrip({
            id: trip.id,
            destinationName: trip.destinationName,
            tripDuration: trip.tripDuration,
            touristPlaces: trip.touristPlaces,
            tripCost: trip.tripCost,
            itineraryDetails: trip.itineraryDetails,
            accommodationDetails: trip.accommodationDetails,
            travelDetails: trip.travelDetails,
            contactDetails: trip.contactDetails,
            websiteLink: trip.websiteLink,
            bookingInfo: trip.bookingInfo,
            groupSize: trip.groupSize,
            imageLink: trip.imageLink,
        });
    };

    // Reset form after add or update
    const resetForm = () => {
        setNewTrip({
            id: '',
            destinationName: '',
            tripDuration: '',
            touristPlaces: '',
            tripCost: '',
            itineraryDetails: '',
            accommodationDetails: '',
            travelDetails: '',
            contactDetails: '',
            websiteLink: '',
            bookingInfo: '',
            groupSize: '',
            imageLink: '',
        });
    };

    return (
        <div className="trip-management-container">
            <h1>Trip Management</h1>

            <h2>{newTrip.id ? 'Update Trip' : 'Add a New Trip'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="destinationName" value={newTrip.destinationName} onChange={handleChange} placeholder="Destination Name" required />
                <input type="text" name="tripDuration" value={newTrip.tripDuration} onChange={handleChange} placeholder="Trip Duration" required />
                <input type="text" name="touristPlaces" value={newTrip.touristPlaces} onChange={handleChange} placeholder="Tourist Places" required />
                <input type="text" name="tripCost" value={newTrip.tripCost} onChange={handleChange} placeholder="Trip Cost" required />
                <textarea name="itineraryDetails" value={newTrip.itineraryDetails} onChange={handleChange} placeholder="Itinerary Details" required />
                <textarea name="accommodationDetails" value={newTrip.accommodationDetails} onChange={handleChange} placeholder="Accommodation Details" />
                <textarea name="travelDetails" value={newTrip.travelDetails} onChange={handleChange} placeholder="Travel Details" />
                <input type="text" name="contactDetails" value={newTrip.contactDetails} onChange={handleChange} placeholder="Contact Details" />
                <input type="text" name="websiteLink" value={newTrip.websiteLink} onChange={handleChange} placeholder="Website Link" />
                <input type="text" name="bookingInfo" value={newTrip.bookingInfo} onChange={handleChange} placeholder="Booking Info" />
                <input type="number" name="groupSize" value={newTrip.groupSize} onChange={handleChange} placeholder="Group Size" />
                <input type="text" name="imageLink" value={newTrip.imageLink} onChange={handleChange} placeholder="Image Link" />
                <button type="submit">{newTrip.id ? 'Update Trip' : 'Add Trip'}</button>
            </form>

            {responseMessage && <div className="response-message">{responseMessage}</div>}

            <h2>Existing Trips</h2>
            {trips.map(trip => (
                <div key={trip.id} className="trip-card">
                    <h3>{trip.destinationName}</h3>
                    <p><strong>Duration:</strong> {trip.tripDuration}</p>
                    <p><strong>Tourist Places:</strong> {trip.touristPlaces}</p>
                    <p><strong>Cost:</strong> {trip.tripCost}</p>
                    <p><strong>Itinerary:</strong> {trip.itineraryDetails}</p>
                    <p><strong>Accommodation:</strong> {trip.accommodationDetails}</p>
                    <p><strong>Travel Details:</strong> {trip.travelDetails}</p>
                    <p><strong>Contact:</strong> {trip.contactDetails}</p>
                    <p><strong>Website:</strong> {trip.websiteLink}</p>
                    <p><strong>Booking Info:</strong> {trip.bookingInfo}</p>
                    <p><strong>Group Size:</strong> {trip.groupSize}</p>
                    <img src={trip.imageLink} alt={trip.destinationName} className="trip-image" />
                    <button onClick={() => handleEditTrip(trip)}>Update</button>
                    <button onClick={() => handleDeleteTrip(trip.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default TripManagement;
