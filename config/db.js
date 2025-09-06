import mongoose, { connect } from "mongoose";

export const connectDB = async()=>{
  await mongoose.connect("mongodb+srv://sandarusaminthagunarathna_db_user:sandaru123@cluster0.8twpldy.mongodb.net/Food-del").then(()=>console.log("DB connected"))
}