const eventService = require('../services/events')

const getAll = async (req, res, next) => {
    try {
        const event = await eventService.getAll();
        res.status(200).json(event);
    } catch (e) {
        next(e);
    }
};

const create = async (req, res, next) => {
    try {
        const data = { ...req.body }
        const event = await eventService.create(data);
        res.status(200).json(event);
    } catch (e) {
        next(e);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const event = await eventService.getById(id);
        res.status(200).json(event);
    } catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {
        const data = { ...req.body}
        const { id } = req.params;
        await eventService.update( id , data );
        const event = await eventService.getById( id );
        res.status(200).json(event);
    } catch (e) {
        next(e);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        await eventService.remove(id);
        res.status(200).json({
            msg: 'Event removed succesfully'
        });
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    remove,
    update
};
