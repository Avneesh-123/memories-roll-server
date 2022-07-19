import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


const app = express();
dotenv.config();
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
app.use(cors());//(is basically used for ports)
app.use(express.static("public"))

app.use(bodyParser.json({limit: "30mb" , extended: true}));//if our image size would exceed the limit
app.use(bodyParser.urlencoded({limit: "30mb" , extended: true}));//body parser (will make the post request to an object)


app.use('/posts',postRoutes);
app.use('/user',userRoutes);

app.get('/',(req,res)=>{
    res.send('hello to memorial app')
})
//https://www.mongodb.com/cloud/atlas




const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch((error) => console.error(error.message));

// mongoose.connect(CONNECTION_URL).then(()=>{console.log('Server running on port : ${PORT}')})


