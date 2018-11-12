const snackQuery = require('../queries/snack_query');

const fetchSnack = () => {
    let snack = snackQuery.fetchSnack();
    return snack;
}

const findSnack = (snackId) => {
    let snack = snackQuery.findSnack(snackId);
    return snack;
}

const deleteSnack = (snackId) => {
    let snack = snackQuery.deleteSnack(snackId);
    return snack;
}

const addSnack = (snackInfo) => {
    let snack = snackQuery.addSnack(snackInfo);
    return snack;
}

const updateSnack = (snackId, snackInfo) => {
    let snack = snackQuery.updateSnack(snackId, snackInfo);
    return snack;
}
module.exports = {
    fetchSnack,
    findSnack,
    deleteSnack,
    addSnack,
    updateSnack
};
