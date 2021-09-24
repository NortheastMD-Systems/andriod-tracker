const db = require('../db/dbConfig')

module.exports = {
    add,
    getById,
    getByName,
    getAll,
  remove
}

function getAll(){
    return db('users')
    .then(users => users)
}

function getById(userid){
    return db('users as u')
           .select('u.name','u.userid')
           .where({userid})
           .first()
           .then(users => users)
}

function add(user){
    return db('users')
    .insert(user,"id")
    .then(users => users)
}

function remove(userid){
    return db('users')
           .where({userid})
           .del()

}

function getByName(name){
    return db('users as u')
            .select('u.name','u.userid')
            .where({name})
}