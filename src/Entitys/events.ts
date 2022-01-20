import mongo from "../database";

const EventSchema = new mongo.Schema({
    email:{
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        lowercase: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Event = mongo.model('Event', EventSchema)

export default Event;