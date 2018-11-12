const model = require('../models/snack_model');

const fetchSnack = (req, res, next) => {
    let result = model.fetchSnack();
    res.send(result)
}

const findSnack = (req, res, next) => {
    let {id} = req.params
    let result = model.findSnack(id);
    res.send(result)
}

const deleteSnack = (req, res, next) => {
    let {id} = req.params
    let result = model.deleteSnack(id);
    res.send(result)
}

const addSnack = (req, res, next) => {
    let {body} = req
    let result = model.addSnack(body);
    res.send(result)
}

const updateSnack = (req, res, next) => {
    let {id} = req.params
    let {body} = req
    let result = model.updateSnack(id, body);
    res.send(`Your snack name is now ${result.name}!`)
}
module.exports = {
    fetchSnack,
    findSnack,
    deleteSnack,
    addSnack,
    updateSnack
};
