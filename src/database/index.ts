import mongoose from 'mongoose';

const mongo = mongoose;

mongo.connect('mongodb://localhost/task');
mongo.Promise = global.Promise;

export default mongo;