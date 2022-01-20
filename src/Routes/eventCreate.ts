import Event from '../Entitys/events';
import  { Router } from 'express';
import User from '../Entitys/user';
const route = Router()

const CreateEvent = route.post('/event', async (req, res)=>{
    const { email } = req.body

    try{
        if( !await User.findOne({ email })){
            res.status(400).send({error: "Este usuario não existe"})
        }

        const event = await Event.create(req.body)
        res.status(200).send({event})

    }catch(err) {
        res.status(400).send({message: "Não foi possivel criar Evento..."})
    }
});

export default CreateEvent;