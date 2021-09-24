const db = require('../db/dbConfig')
module.exports = {
    add,
    getBySku,
    getAll,
    remove
}


function getAll(){
    return db('scanners')
    .then(scanners => scanners)
}

function getBySku(sku){
    return db('scanners')
    .select('*')
    .where({sku})
    .first()
    .then(scanners => scanners)
}

    function add(scanner){
        return db('scanners')
        .insert(scanner,"id")
        .then(scanners => scanners)
    }

    function remove(sku){
        return db('scanners')
                .where({sku})
                .del()
    }