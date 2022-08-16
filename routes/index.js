const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// @route   GET /:code
// @desc    Redirect to long/original URL
router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code });
        if (url) {
            res.redirect(url.longUrl);
        } else {
            res.status(404).json({ msg: 'No url found for this code' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json('Server Error');
    }
});
module.exports = router;