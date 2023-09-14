const express = require('express');
const router = express.Router();

const Url = require('../models/url');

//@route GET /:code
//@desc Redirect to long/original

router.get('/:code', async (req, res) => {
    try {
        console.log('Requested code:', req.params.code); // Debug log
        const url = await Url.findOne({ urlCode: req.params.code });
        console.log('Found URL:', url); // Debug log
        if (url) {
            return res.redirect(url.longUrl);
        } else {
            return res.status(404).json({ error: "No Url found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
