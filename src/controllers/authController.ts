import bcrypt, { hash } from 'bcrypt';
import express from 'express';
const route = express.Router()

import User from "../Entitys/user";

const CreateUser = route.post('/register', async (req, res) => {

    const { email } = req.body;

    try{
        if(await User.findOne({email})){
            res.send({error: "Usuario já existe" })
        }

        const user = await User.create(req.body)

        return res.send({user})
    }catch(err) {
        res.status(400).send({message: 'Registration Failed'})
    }

})


export default CreateUser;