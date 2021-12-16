import mongoose from 'mongoose'

const eventManagerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true

    },
    address2: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now()
    },

})

const EventManagerModel = mongoose.model('EventManager', eventManagerSchema)
export default EventManagerModel