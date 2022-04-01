const mongoose=require('mongoose');
const { Schema } = mongoose;


new TaskSchema = new Schema({
    title:{ type:String,required:true },
    description: { type: String , required: true }
});

module.exports = mongoose.model('task',TaskSchema);