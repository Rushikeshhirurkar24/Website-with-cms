const express = require('express');
const Detail = require('../models/details');
const Silders = require('../models/slider.js')
const Services = require('../models/services');
const contact = require('../models/contact');
const Contact = require('../models/contact');





const routes = express.Router();

routes.get('/', async(req, res) => {
    const details = await Detail.findById({ _id: "6375d01551373081ae6a2cb8" })
    const slides = await Silders.find()
    const services = await Services.find()
        // console.log(slides);

    return res.render("index", {
        details: details,
        slides: slides,
        services: services

    })

})

routes.get("/gallery", async(req, res) => {
    let details = await Detail.findById({ _id: "6375d01551373081ae6a2cb8" })
    console.log(details);
    return res.render("gallery", {
        details: details
    })
})

//process-contact-form

routes.post('/process-contact-form', async(req, res) => {
    console.log("Form is Submitted")
    console.log(req.body)
    try {

        const data = await Contact.create(req.body)
        console.log(data);
        return res.redirect("/")
    } catch (e) {
        console.log(e);
        res.redirect("/")

    }
})

module.exports = routes