const getAll = async (req, res, next) => {
    try {
        res.status(200).json('getAll');
    } catch (e) {
        next(e);
    }
};

const create = async (req, res, next) => {
    try {
        res.status(200).json('create');

    } catch (e) {
        next(e);
    }
};

const getById = async (req, res, next) => {
    try {
        res.status(200).json('betById');

    } catch (e) {
        next(e);
    }
};

const update = async (req, res, next) => {
    try {

        res.status(200).json('update');
    } catch (e) {
        next(e);
    }
};

const remove = async (req, res, next) => {
    try {

        res.status(200).json('remove');
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
  