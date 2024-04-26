import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 4,
        maxlength: 32
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
});



const User = model('User',userSchema);
export default User;