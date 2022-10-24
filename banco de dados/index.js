(async()=> {
    const database = require('./db');
    const produto = require('./produto');

    try{
        const resultado = await database.sync();
        console.log(resultado);
    } catch(error){
        console.log(error)
    }
})
