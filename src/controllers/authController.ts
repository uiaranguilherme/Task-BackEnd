import jwt from 'jsonwebtoken';
import secret from '../config/jwt';
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

        user.password = undefined
        const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 88000,
        } )

        return res.send({user})
    }catch(err) {
        res.status(400).send({message: 'Registration Failed'})
    }

})


export default CreateUser;