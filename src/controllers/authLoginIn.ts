import bcrypt, { hash } from 'bcrypt';
import express from 'express';
const route = express.Router();

import User from "../Entitys/user";

const LoginIn = route.post('/authenticate',async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email }).select('+password');
    
    if(!user){
        return res.status(400).send({ error: "Usuario não encontrado" })
    }
    if(!await password == user.password){
        return res.status(400).send({ error: "Password invalido..." })
    }
    
    res.send({user});
})

export default LoginIn;