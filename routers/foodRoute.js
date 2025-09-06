import express from "express";
import multer from "multer";
import { addFood } from "../controllers/foodController.js";



// create the express router
const foodRouter = express.Router();


//image storage engine
const storageImg = multer.diskStorage({
  destination:"uploads", //this is the image store destination
  filename:(req,file,cb)=>{
    return cb(null,`${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({storage:storageImg})

  //create the post method ,post method use for send the data on the server
  foodRouter.post("/add", upload.single("image"), addFood)





export default foodRouter;