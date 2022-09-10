const eventRepository = require('../repositories/events');
const {
    Event
} = require('../models/event')

const getAll = async () => {
    console.log(Event)
    const events = await Event.find();
    return events;
};

const create = async (data) => {
    const newEvent = new Event(data)
    const event = await newEvent.save(data);
    return event;
};

const getById = async (id) => {
    const event = await Event.findById({ _id:id });
    return event;
};

const update = async (id, data) => {
    const { name, startDate, attendees, duration, active, location } = data
    const event = await Event.findOneAndUpdate(
        { _id:id },
        {
            name, 
            startDate, 
            $push: { attendees},
            duration, 
            active, 
            location,
        },
        {
            new: true,
            omitUndefined: true,
            runValidators: true
        },
    );
    return event;
};

const remove = async (id) => {
    await Event.findOneAndDelete(
        { _id:id }
    );
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};