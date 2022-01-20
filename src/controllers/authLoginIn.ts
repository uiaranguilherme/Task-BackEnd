import jwt from 'jsonwebtoken';
import secret from '../config/jwt';
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
    user.password = undefined
    const token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 88000,
    } )

    res.send({user, token});
})

export default LoginIn;