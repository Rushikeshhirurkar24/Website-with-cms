const mongoose = require('mongoose');

const Detail = mongoose.Schema({
    brandName: String,
    brandIcoonUrl: String,
    link: [{
        label: String,
        url: String
    }]
})

module.exports = mongoose.model("detail", Detail)