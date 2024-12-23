const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MongoDB connection
const connectToDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/Event");
};
connectToDB().then(() => console.log("Connected to MongoDB"));

// Import Event Model
const Event = require("./model");

// Define Routes

// GET: Fetch all events
app.get("/", async (req, res) => {
  try {
    const data = await Event.find({});
    res.json({ data });
  } catch (error) {
    res.status(500).json({ message: "Error fetching events", error });
  }
});

// POST: Add a new event
app.post("/", async (req, res) => {
  try {
    const eventData = req.body;
    await Event.create({
      name: eventData.eventName,
      location: eventData.eventLocation,
      time: eventData.eventTime,
      date: eventData.eventDate,
      description: eventData.eventDescription,
      agenda: eventData.eventAgenda,
      capacity: eventData.eventCapacity,
      contact: eventData.eventContact,
    });
    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error creating event", error });
  }
});

// PUT: Update an existing event by ID
app.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const updatedEvent = await event.findByIdAndUpdate(id, updatedData, { new: true });
      res.status(200).json(updatedEvent);
    } catch (error) {
      res.status(500).json({ message: "Error updating event.", error });
    }
  });
  

// DELETE: Delete an event by ID
app.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedEvent = await event.findByIdAndDelete(id);
      if (!deletedEvent) {
        return res.status(404).json({ message: "Event not found." });
      }
      res.status(200).json({ message: "Event deleted successfully." });
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).json({ message: "Error deleting event.", error });
    }
  });
  
  

// Start the server
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server started at Port ${port}.`);
});
