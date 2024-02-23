import { Schema, model, models } from "mongoose";

export interface IImage extends Document{
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    photo?: string; 
    creditBalance?: number; 
    createdAt?: Date;
    updatedAt?: Date;
}


const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    secureUrl: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
})

const User = models?.User || model('User', UserSchema);

export default User