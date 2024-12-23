import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export default function Dashboard() {
  const initialEvents = useLoaderData();
  const [events, setEvents] = useState(initialEvents);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== id));
      alert("Event deleted successfully.");
    }
  };

  const handleEdit = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    const newName = prompt("Enter the new Event Name:", eventToEdit?.EventName || "");
    const newDate = prompt("Enter the new Event Date (YYYY-MM-DD):", eventToEdit?.EventDate || "");
    const newTime = prompt("Enter the new Event Time:", eventToEdit?.EventTime || "");

    if (newName || newDate || newTime) {
      setEvents(
        events.map((event) =>
          event.id === id
            ? {
                ...event,
                EventName: newName || event.EventName,
                EventDate: newDate || event.EventDate,
                EventTime: newTime || event.EventTime,
              }
            : event
        )
      );
      alert("Event updated successfully.");
    }
  };

  return (
    <div className="dashboard-container p-8">
      {/* Header Section */}
      <header className="dashboard-header text-center mb-6">
        <h1 className="text-3xl font-bold">Event Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage all your events in one place</p>
      </header>

      {/* Events Section */}
      <section className="events-section">
        <h2 className="text-2xl font-semibold mb-4">Your Events</h2>
        <div className="events-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                className="event-card bg-white shadow rounded-lg p-4 border-t-4 border-blue-500"
                key={event.id}
              >
                <h3 className="text-xl font-semibold text-blue-600">{event.EventName}</h3>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {event.EventDate}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Time:</strong> {event.EventTime}
                </p>
                <p className="text-sm text-gray-500 mb-3">{event.Description}</p>
                <p className="text-sm">
                  <strong>Location:</strong> {event.Location}
                </p>
                <p className="text-sm">
                  <strong>Contact:</strong> {event.Contact}
                </p>
                {event.Link && (
                  <p className="mt-2">
                    <a
                      href={event.Link}
                      className="text-blue-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Event Link
                    </a>
                  </p>
                )}

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => handleEdit(event.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(event.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-full">No events available. Start by creating one!</p>
          )}
        </div>
      </section>
    </div>
  );
}
