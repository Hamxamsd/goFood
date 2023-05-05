const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/goFoodDatabase';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection('foodCategory');
        const data = await fetched_data.find({}).toArray();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

module.exports = mongoDB;