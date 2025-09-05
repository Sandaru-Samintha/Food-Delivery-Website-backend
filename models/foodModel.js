import mongoose from "mongoose";

//store new food for database so give its schema for food model
const foodSchema = new mongoose.Schema({
  name:{type:String,required:true},
  description:{type:String,required:true},
  price:{type:Number,required:true},
  image:{type:String,required:true},
  category:{type:String,required:true}
})



// in this case we create the model , the model name is "food"
const foodModel =mongoose.model.food || mongoose.model("food",foodSchema)  // we should create the model in the one time ,it check using   if their is already in model work "mongoose.model.food " this  and other wise their is no foodModel in the model name in food then work mongoose.model("food",foodSchema) this


export default foodModel;