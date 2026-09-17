const mongoose=require("mongoose")
const configdb=mongoose.connect("mongodb://localhost:27017/csea_athidi")
.then(() => {
  console.log("connected to mongodb");
})
.catch((err) => {
  console.log(err);
}); 

module.exports={configdb}