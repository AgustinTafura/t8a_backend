const { Schema, model } =  require("mongoose");

const AttendeeSchema = new Schema({
    // _id: false,
    name: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
    },
    lastName: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
    },
    phoneNumber: { 
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    nationality: { 
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },
    jobTitle: { 
        type: String,
        trim: true,
        lowercase: true,
        required: true,
    },

},{
    timestamps: true,
})

const Attendee =  model('Attendee', AttendeeSchema)

module.exports = {
    AttendeeSchema,
    Attendee
}