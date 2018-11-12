const snack = [
    {id: 1, name: 'chips'},
    {id: 2, name: 'cookies'},
    {id: 3, name: 'candy'},
    {id: 4, name: 'hummus'},
    {id: 5, name: 'apples'},
    {id: 6, name: 'rice cake'},
    {id: 7, name: 'pocky'},
    {id: 8, name: 'kale chips'},
    {id: 9, name: 'veggie sticks'},
    {id: 10, name: 'yogurt'}
]

const fetchSnack = () => {
    return snack;
}

const findSnack = (snackId) => {
    return snack.find(snack => snack.id == snackId)
}

const deleteSnack = (snackId) => {
    snack.splice(snack.findIndex(el => el.id == snackId), 1)
    return snack;
}

const addSnack = (snackInfo) => {
    const id = snack.slice(-1)[0].id +1
    const name = snackInfo.name
    snack.push({id, name})
    return snack;
}

const updateSnack = (snackId, snackInfo) => {
    snack.forEach(snack => {
        if(snack.id == snackId) {
            snack.name = snackInfo.name
        }
    })
    const snack = snack.find( element => element.name == snackInfo.name)
    if ( snack.name == snackInfo.name){
        return snack;
    }
}
module.exports = {
    fetchSnack,
    findSnack,
    deleteSnack,
    updateSnack,
    addSnack
};