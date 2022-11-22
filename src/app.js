const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const Detail = require('./models/details');
const Slider = require('./models/slider');
const bodyParser = require('body-Parser');
const app = express()
let port = process.env.PORT | 5555;



const routes = require("./routes/main");
const services = require('./models/services');

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/static', express.static("public"))

app.use("/", routes)


app.set('view engine', 'hbs')
app.set('views', 'views')
hbs.registerPartials("views")

// database connection
mongoose.connect("mongodb://localhost/website_tut", () => {
    console.log("db connected");

    // services.create([{
    //     icon: "fab fa-accusoft",
    //     title: "Provide best courses",
    //     description: "we provide courses that hepls ours student in learning and  in placement.",
    //     linkText: "www.learnRushi.com",
    //     link: "check"
    // }])

    // Detail.create({
    //     brandName: "info technical Solution",
    //     brandIcoonUrl: "https://w1.pngwing.com/pngs/348/138/png-transparent-menu-icon-shutdown-computer-icon-design-reboot-logo-start-menu-computer-software.png",
    //     link: [{
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "services",
    //             url: "/services"

    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"

    //         },
    //         {
    //             label: "About",
    //             url: "/about"

    //         }, {
    //             label: "Contact Us",
    //             url: "/contact-us"

    //         }
    //     ]
    // })

    // Slider.create([{
    //         title: 'Learn java in very easy manner',
    //         subTitle: 'Java is one of the most popular programming language.',
    //         imageUrl: '/static/images/1.jpg'

    //     },
    //     {
    //         title: 'What is django in python',
    //         subTitle: 'Django is most famous web framework of python programming.',
    //         imageUrl: '/static/images/2.jpg'

    //     },
    //     {
    //         title: 'What about node js?',
    //         subTitle: 'node js is runtime environmentto execute javascript outside browser',
    //         imageUrl: '/static/images/3.jpg'

    //     }
    // ])
})


app.listen(port, () => {
    console.log('sever started ');
})