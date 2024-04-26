import express, {json} from 'express';
import './db/db.js'
import User from './models/user.js';
import cors from 'cors'

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/users/register',async (req,res)=>{
    
    const user = new User(req.body);

    try{
        await user.save();
        res.status(201).send({ user});
        
    }catch(err){
        if (err.code === 11000) { // MongoDB duplicate key error
            res.status(409).send({ message: "Username already in taken." });
        } else {
            res.status(500).send({ message: "Internal server error"});
        }

    }
});


app.post('/users/login', async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    try{
        const user = await User.findOne({username, password});

        if(!user){
            throw new Error("User Not Found");
        }

        res.send({ user });
    }catch(err){
        res.status(400).send({error:err});
    }

});

app.listen(5000,()=>{
    console.log("Server started at port "+ port)
})