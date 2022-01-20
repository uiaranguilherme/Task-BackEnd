import Event from "../Entitys/events";
import route from "./index";

const EventList = route.get('/event',async (req, res) => {
    const { email } = req.body;

    const list = await Event.find({email})
    res.send({list})
});

export default EventList;