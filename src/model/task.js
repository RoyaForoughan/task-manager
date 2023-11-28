const { Schema, model , default : mongoose } = require("mongoose");

const TaskSchema = new Schema({
    taskID : {type: mongoose.Types.ObjectId },
  //  taskID : {type: String},
    title : {type : String , required : true}
})


const TaskModel = new model('task' , TaskSchema)
module.exports = {
    TaskModel
}