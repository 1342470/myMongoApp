const mongoose = require('mongoose');

const Report = new mongoose.Schema({
    name: String,
    venue: String,
    contact: String
})