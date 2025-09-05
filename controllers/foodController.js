import foodModel from "../models/foodModel.js";
import fs from "fs"



//add food item

const addFood = async(req,res) =>{

  if (!req.file) {
    return res.status(400).json({ success: false, message: "Image is required" });
  }

  
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name:req.body.name,
    description:req.body.description,
    price:req.body.price,
    image:image_filename,
    category:req.body.category
  })
  try {
    await food.save();
    res.json({success:true,message:"Food Added"})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Error"})
  }
}

export {addFood}