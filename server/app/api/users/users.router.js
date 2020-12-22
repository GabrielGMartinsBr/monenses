const express = require('express');

const UsersController = require('./users.controller');
const { AppRequestError } = require('../../base/errors');

const router = express.Router();

router.use(express.json());

router.post('', async (req, res) => {
    const body = req.body;

    try {
        const user = await UsersController.create(body)
        if (!user || !user.id) {
            throw new AppRequestError();
        }
        res.json({ ok: true, user });
    } catch (ex) {
        if (!ex || !ex.type) {
            console.error(ex);
            res.status(500).json({ error: ex });
        }
        res.status(ex.code || 500).json({ error: ex });
    }

})

module.exports.usersRouter = router;
