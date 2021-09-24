const db = require('../db/dbConfig')

  module.exports ={
      getAll,
      checkIn,
      checkOut
  }
    




function getAll(){
    return db('logs')
            .then(logs => logs)
}
function checkOut(logs){
    return db('logs')
            .insert(logs,"id")
            .then(logs => logs)
}

function checkIn(changes){
    let time = changes.time_in
    let id = changes.id

    return db('logs')
        .where({id})
              .update({
            time_in:time
        })

}