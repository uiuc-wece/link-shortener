const express = require('express');
const router = express.Router();
const validUrl = require('valid-url');
const Url = require('../models/Url');
const baseUrl = "https://wece.info"

// @route  POST api/url/shorten
// @desc   Create a short url

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;

    if(!validUrl.isUri(baseUrl)) { // Check if baseUrl is invalid
        return res.status(401).json('Invalid base url');
    }

    // Create a short id
    const { urlCode } = req.body;
    
    // Check if longUrl is valid
    if(validUrl.isUri(longUrl)) {
        try {
        let url = await Url.findOne({ longUrl });

        if(url) {
            res.json(url);
        } else {
            const shortUrl = baseUrl + '/' + urlCode;

            url = new Url({ 
                longUrl, 
                shortUrl, 
                urlCode, 
                date: new Date() 
            });
            
            await url.save();

            res.json(url);
        }
        } catch (err) {
            console.error(err);
            res.status(500).json('Server Error');
        }
    } else {
        res.status(401).json('Invalid long url');
    }
});

module.exports = router;

