const mongoose = require('mongoose');
const app=require('./app');
const PORT=8082;
const DB_url='mongodb+srv://Vishnupriya:<password>@cluster0.tfyvngp.mongodb.net/?retryWrites=true&w=majority';
const DB_PASSWORD='vMRFBcT7YEVs2lmh';
const DB=DB_url.replace('<password>',DB_PASSWORD);
mongoose.connect(DB).then(()=>{
    console.log("DB connect succesful")
}).catch((error)=>{
    console.log("Error in DB",error);
})
app.listen(PORT, ()=> {
    console.log(`Listening on the port ${PORT}`);
});
    