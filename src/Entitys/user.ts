import mongo from "../database";
import bcrypt from 'bcrypt';

const UserSchema = new mongo.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now
    },
})
UserSchema.pre('save', async function(next){
    const hash = bcrypt.hash( this.password, 10);
    this.password = hash

    next()
})

const User = mongo.model( 'User', UserSchema )
export default User;