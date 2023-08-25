const express = require("express");
const app = express();
const mongooseConnect = require("./configs/mongoDB.connect");
require("dotenv").config()

app.use(express.json())

const authRouter = require("./routes/auth.routes")
app.use("/auth", authRouter)


const bookRoutes = require('./routes/book.routes');
app.use('/books', bookRoutes);

const interactionRoutes = require('./routes/interactionRoutes');
app.use('/interactions', interactionRoutes);

app.listen(8000, (err)=>{
    if(err){
        console.error(err)
        return
    }
    console.log("server running on port: ", 8000)
    mongooseConnect()
})