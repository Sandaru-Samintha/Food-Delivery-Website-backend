import foodModel from "../models/foodModel.js";
import fs from "fs"



//add food item

const addFood = async(req,res) =>{

  if (!req.file) {
    return res.status(400).json({ success: false, message: "Image is required" });
  }

  
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: image_filename,
    category: req.body.category,
  })
  try {
    await food.save();
    res.json({success:true,message:"Food Added"})
  } catch (error) {
    console.log(error)
    res.status(500).json({success:false,message:"Error"})
  }
}

//all food list 
const foodList = async (req,res) =>{
  try {
    const foods = await foodModel.find({}); // fetch all the food items . and put them in to variable name foods
    res.json({success:true,data:foods}) // this pass the data of foods
  } catch (error) {
    console.log(error)
    res.json({success:false,message:"Error"})
  }
}

const foodRemove = async (req,res) =>{
  try {
    const food = await foodModel.findById(req.body.id)  //find the food item using id
    fs.unlink(`uploads/${food.image}`,()=>{}) // remove the image of given id in uploads folder
    await foodModel.findByIdAndDelete(req.body.id) //delete the food item in given id
    res.json({success:true,message:"Food removed"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
  }
}

export {addFood,foodList,foodRemove}