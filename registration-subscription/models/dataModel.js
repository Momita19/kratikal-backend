const mongoose = require('mongoose')

// define schema 
const DataSchema = new mongoose.Schema({
    fullName:  { type: String, required: true },
    workEmail:  { type: String, required: true },
    phoneNumber:  { type: String, required: true },
    companyName:  { type: String, required: true },
    designation:  { type: String, required: true },
    noOfEmployees:  { type: String, required: true },
    subscribe:  { type: Boolean, required: true },
})

// create model

const DataModel = mongoose.model('data', DataSchema)

module.exports = DataModel;