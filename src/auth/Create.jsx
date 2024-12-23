import { useState } from "react";
import axios from "axios"

export default function Create() {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventAgenda, setEventAgenda] = useState("");
  const [eventCapacity, setEventCapacity] = useState("");
  const [eventContact, setEventContact] = useState("");

  const handleSubmit = async(event) => {
    // set to default
    event.preventDefault();

    const events = { eventName, eventLocation, eventTime,eventDate,eventDescription,eventAgenda,eventCapacity,eventContact };
    // fetch("http://localhost:3003/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(events),
    // }).then(() => {
    //   console.log("new event added");
    // });
    await axios.post("http://localhost:3003/",events)
    // reset to default
    setEventLocation("");
    setEventName("");
    setEventTime("");
    setEventDate("")
    setEventDescription("")
    setEventAgenda("")
    setEventCapacity("")
    setEventType("")
  };

  return (
    <div className="p-8 shadow-lg drop-shadow-lg flex justify-center">
      <form onSubmit={handleSubmit}>
        <h1 className="text-center font-bold">Create Event</h1>
        <div>
          <label htmlFor="name" className="p-2">
            Event Name:
          </label>
          <input
            type="text"
            name="eventName"
            id="eventName"
            required
            placeholder="Enter Event Name:"
            className="border p-2 m-2"
            value={eventName}
            onChange={(event) => {
              setEventName(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name" className="p-2">
            Event Location:
          </label>
          <input
            type="text"
            name="eventLocation"
            id="eventLocation"
            required
            placeholder="Enter Event Location:"
            className="border p-2 m-2"
            value={eventLocation}
            onChange={(event) => {
              setEventLocation(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name" className="p-2">
            Event Time:
          </label>
          <input
            type="text"
            name="eventTime"
            id="eventTime"
            required
            placeholder="Enter Event Time:"
            className="border p-2 m-2"
            value={eventTime}
            onChange={(event) => {
              setEventTime(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="date">Event Date:</label>
          <input type="date" name="" id="" className="border p-2 m-2" value={eventDate}
            onChange={(event) => {
              setEventDate(event.target.value);
            }}/>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            required
            placeholder="Enter a brief description of the event"
            className="border p-2 m-2"
            value={eventDescription}
            onChange={(event) => {
              setEventDescription(event.target.value);
            }}
          ></textarea>
        </div>

        <div>
          <label htmlFor="description">Agenda or Schedule</label>
          <textarea
            name=""
            id=""
            required
            placeholder="Outline the event schedule or agenda"
            className="border p-2 m-2"
            value={eventAgenda}
            onChange={(event) => {
              setEventAgenda(event.target.value);
            }}
          ></textarea>
        </div>

        <div>
          <label htmlFor="contact" Organizer Contact></label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter organizer's contact information"
            className="border p-2 m-2"
            value={eventContact}
            onChange={(event) => {
              setEventContact(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="capacity">Capacity</label>
          <input
            type="number"
            name=""
            id=""
            required
            placeholder="Enter maximum number of attendees"
            className="border p-2 m-2"
            value={eventCapacity}
            onChange={(event) => {
              setEventCapacity(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="category" Category></label>
          <select name="" id="">
            <option value="conference">Conference</option>
            <option value="conference">Workshop</option>
            <option value="conference">Mettup</option>
          </select>
        </div>

        <div>
          <button className="bg-eventManagement-textHover p-2 rounded text-eventManagement-lightGray hover:font-bold transition duration-100 ease-in">
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
}

/**



       

        
 */