const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var dataSchema = new Schema({
    id: {
        type:String ,
        required: true
    },
    namacpu: {
        type:String,
        required: true
    },
    tipe: {
        type:String,
        required: true
    },
    platform: {
        type:String,
        required: true
    },
    rilis: {
        type:String,
        required: true 
    },
    ramSisa: {
        type:Number,
        required: true
    },
    ramTotal: {
        type:Number,
        required: true
    },
})

const data_model = mongoose.model('data', dataSchema)
module.exports = data_model