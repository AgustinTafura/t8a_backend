const { Schema, model } = require("mongoose")
const {AttendeeSchema} = require("./attendee")

const EventSchema = new Schema({
    id : Schema.Types.ObjectId,
    name: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
    },
    startDate: {
        type:Date, 
        required: true,
    },
    attendees:[AttendeeSchema],
    duration: {
        type: String, 
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    location:{
        type: String
    },
},{
    timestamps: true,
})

const Event = model('Event', EventSchema)

module.exports = {
    Event,
    EventSchema
}