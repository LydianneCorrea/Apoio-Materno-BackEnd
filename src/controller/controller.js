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

const findRedeDeApoioById = async (req, res) => {
    try {
        const findRedeDeApoio = await RedeDeApoioModel.findById(req.params.id);
        res.status(200).json(findRedeDeApoio);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const addNewRedeDeApoio = async (req, res) => {
    try {
        const {
            name,
            email,
            telefone
        } = req.body;
        const newRedeDeApoio = new RedeDeApoioModel({
            name,
            email,
            telefone
        });

        const savedRedeDeApoio = await newRedeDeApoio.save();

        res.status(201).json({ message: "Cadastro concluido com sucesso!", savedRedeDeApoio });
    } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
    }

}
const updateRedeDeApoio = async (req, res) => {
    try {
        const {
            name,
            telefone,
            email
        } = req.body;
        const updateApoio = await RedeDeApoioModel.findByIdAndUpdate(req.params.id, {
            name,
            email,
            telefone
        });

        res.status(200).json({ message: "contato alterado com sucesso", updateApoio });
    } catch(erro){
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};

const deleteRedeDeApoio = async (req, res) => {
    try {
        const { id } = req.params;
        const delRedeDeApoio = await RedeDeApoioModel.findByIdAndDelete(id);
        const message = `Contado deletado com sucesso`;
        res.status(200).json({ message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    };
};


module.exports = {
    findAllRedeDeApoio,
    findRedeDeApoioById,
    addNewRedeDeApoio,
    updateRedeDeApoio,
    deleteRedeDeApoio

}