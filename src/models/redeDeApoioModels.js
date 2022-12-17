const mongoose = require("mongoose")

const redeDeApoioSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    telefone: {
        type: String,
        required: true,
        unique: true,
    }
},
    {timestamp: true }
)

const Model=mongoose.model("RedeDeApoio",redeDeApoioSchema)
module.exports=Model