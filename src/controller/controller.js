const RedeDeApoioModel = require("../models/redeDeApoioModels")

const findAllRedeDeApoio = async (req, res) => {
    try {
        const allRedeDeApoio = await RedeDeApoioModel.find();
        res.status(200).json(allRedeDeApoio);
    } catch {
        console.log(error);
        res.status(500).json({ message: error.message });
    };
}


module.exports={
    findAllRedeDeApoio
}