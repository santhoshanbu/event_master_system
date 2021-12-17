import mongoose from "mongoose";

const eventManagerSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  occupation: {
    type: String,
  },

  address1: {
    type: String,
  },
  address2: {
    type: String,
  },
  email: {
    type: String,
  },

  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const EventManagerModel = mongoose.model("EventManager", eventManagerSchema);
export default EventManagerModel;
