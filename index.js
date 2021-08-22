import express from 'express'
import * as Console from "console";
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from "express-fileupload"


const PORT = 5000;
const app = express()
const DB_URL = `mongodb+srv://user:user@cluster0.c2jud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
   try {
       await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
       app.listen(PORT, () => Console.log('SERVER STARTED ON PORT ' + PORT))
   }
   catch (e) {
       console.log(e)
   }
}

await startApp()
