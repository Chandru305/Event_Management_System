import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [editEvent, setEditEvent] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch events from the backend
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3003/");
      setEvents(response.data.data);
    } catch (error) {
      console.error("Error fetching events:", error);
      alert("Failed to fetch events.");
    }
  };

  // Handle input change for editing an event
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditEvent({ ...editEvent, [name]: value });
  };

  // Save the edited event
  const saveEdit = async () => {
    if (!editEvent.name || !editEvent.date || !editEvent.description || !editEvent.time || !editEvent.contact) {
      alert("Please fill out all fields before saving.");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:3003/${editEvent._id}`, editEvent);
      setEvents(events.map((event) => (event._id === editEvent._id ? response.data.updatedEvent : event)));
      setEditEvent(null); // Clear edit mode
      alert("Event updated successfully.");
    } catch (error) {
      console.error("Error saving event:", error);
      alert("Failed to update event.");
    }
  };

  // Delete an event
  const deleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) {
      return;
    }

    try {
      await axios.delete(`http://localhost:3003/${id}`);
      setEvents(events.filter((event) => event._id !== id)); // Remove the deleted event from the list
      alert("Event deleted successfully.");
    } catch (error) {
      console.error("Failed to delete event:", error);
      alert("Failed to delete event.");
    }
  };

  return (
    <div className="events-container">
      <h1 className="header">Explore Upcoming Events</h1>

      {/* Link to Home Page */}
      <div className="back-home">
        <Link to="/" className="back-home-btn">Back to Home</Link>
      </div>

      <div className="events-list">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event._id} className="event-card">
              {editEvent && editEvent._id === event._id ? (
                <div className="edit-section">
                  <input
                    name="name"
                    value={editEvent.name}
                    onChange={handleEditChange}
                    placeholder="Event Name"
                  />
                  <input
                    name="date"
                    type="date"
                    value={editEvent.date}
                    onChange={handleEditChange}
                  />
                  <textarea
                    name="description"
                    value={editEvent.description}
                    onChange={handleEditChange}
                    placeholder="Description"
                  />
                  <input
                    name="time"
                    type="time"
                    value={editEvent.time}
                    onChange={handleEditChange}
                  />
                  <input
                    name="contact"
                    value={editEvent.contact}
                    onChange={handleEditChange}
                    placeholder="Contact Info"
                  />
                  <div className="edit-buttons">
                    <button className="save-btn" onClick={saveEdit}>
                      Save
                    </button>
                    <button className="cancel-btn" onClick={() => setEditEvent(null)}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="event-name">{event.name}</h2>
                  <p className="event-detail">Date: {event.date}</p>
                  <p className="event-detail">Time: {event.time}</p>
                  <p className="event-detail">{event.description}</p>
                  <p className="event-detail">Contact: {event.contact}</p>
                  <div className="action-buttons">
                    <button className="edit-btn" onClick={() => setEditEvent(event)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteEvent(event._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-events">No events available at the moment.</p>
        )}
      </div>
    </div>
  );
}
