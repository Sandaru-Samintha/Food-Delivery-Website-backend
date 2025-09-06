import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routers/foodRoute.js"

//app config
const app = express()  //initialice the app using the express
const port = 4000      //define the port number where our server will be running

//middleware
app.use(express.json())  //when never we will get the request from frontend the backend that will be pass using the express.json file
app.use(cors()) //using this we can access the backend the any frontend


//db connection
connectDB();

//api endpoints

/* api end point the foodRoute */
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
  res.send("API Working")
}) //using this get method using http request data from server ,update ,delete method are depend for this

app.listen(port,()=>{
  console.log(`Server Started on http://localhost:${port}`)
})//using this run the express server from using port number



