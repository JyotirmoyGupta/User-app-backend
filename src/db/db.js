import { connect } from 'mongoose';


const url = "mongodb://127.0.0.1:27017/User-app";

connect(url, {
}).then(()=>{
    console.log('connected to database SuccessFully!')
}).catch((err)=>{
    console.log("Error! ", err);
});

