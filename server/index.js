const express = require('express');

const app = express();

const router = express.Router();
app.use('/api', router);

router.get('/', (req, res) => {
    res.json({ working: true });
})

app.listen(8010);
