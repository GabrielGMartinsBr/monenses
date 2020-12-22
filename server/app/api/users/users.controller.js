const { User } = require('../../models');
const Sequelize = require('sequelize')

const { AppRequestError } = require("../../base/errors");

async function create(data) {
    const requires = {
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        username: 'string',
        password: 'string',
    }

    if (!data || !validate(data, requires)) {
        throw new AppRequestError({ type: 'InvalidInputError', code: 400 });
    }

    const { firstName, lastName, email, username, password } = data;

    try {
        const res = await User.create({ firstName, lastName, email, username, password });
        return res;
    } catch (ex) {
        if (ex instanceof Sequelize.UniqueConstraintError) {
            const { fields } = ex
            throw new AppRequestError({ type: 'AlreadyExistError', code: 400, data: { fields } });
        }
        throw new AppRequestError({ type: 'UnexpectedError', code: 500, data: ex });
    }
}

module.exports.create = create;

// Utils

function validate(data, requires) {
    for (key in requires) {
        if (!data[key] || typeof data[key] !== requires[key]) {
            return false;
        }
    }
    return true;
}