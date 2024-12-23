import { Link, useLoaderData } from "react-router-dom";

export default function Home() {
  const events = useLoaderData();

  return (
    <div className="home-container bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="header text-center bg-blue-500 text-white py-8">
        <h1 className="text-4xl font-bold">Upcoming Events</h1>
        <p className="text-lg mt-2">Discover and explore events happening near you!</p>
      </header>

      {/* Events Section */}
      <main className="events-section p-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Explore Our Events</h2>
        <div className="events-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event.id}
                className="event-card bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{event.EventName}</h3>
                <p className="text-sm text-gray-500">
                  <strong>Date:</strong> {event.EventDate}
                </p>
                <p className="text-sm text-gray-500 mb-4">{event.Description}</p>
                <Link
                  to="/events"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View More
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-600 col-span-full text-center">No events available right now. Please check back later!</p>
          )}
        </div>
      </main>
    </div>
  );
}

export const eventLoader = async () => {
  const response = await fetch("http://localhost:3000/events");

  if (!response.ok) {
    throw new Error("Could not fetch events");
  }
  return response.json();
};
