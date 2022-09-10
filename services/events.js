const eventRepository = require('../repositories/events');

const getAll = async () => {
    const events = await eventRepository.getAll();
    return events
};

const create = async (data) => {
    const event = await eventRepository.create(data);
    return event;
};

const getById = async (id) => {
    const event = await eventRepository.getById(id);
    if (!event) {
        const error = new Error('Event not found');
        error.status = 404;
        throw error;
    }
    return event;
};

const update = async (id, data) => {
    const existEvent = await eventRepository.getById(id);
    if (!existEvent) {
        const error = new Error('Event not found');
        error.status = 404;
        throw error;
    }
    const event = await eventRepository.update(id, data);
    return event;
};

const remove = async (id) => {
    const existEvent = await eventRepository.getById(id);
    if (!existEvent) {
        const error = new Error('Event not found');
        error.status = 404;
        throw error;
    }
    await eventRepository.remove(id);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};