
const router = require('express').Router();

router.get('/', async (req, res) => {
    res.send("oke")
})

module.exports = router;