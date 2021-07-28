const mongoose = require('mongoose')

async function dbConfig(){
    try{
        await mongoose.connect('mongodb+srv://dicklee:ser123@cluster0.lznlv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('database connected')
    } catch (error){
        console.log(error)
    }
}

module.exports = dbConfig;