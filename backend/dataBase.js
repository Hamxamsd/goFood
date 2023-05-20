const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/goFoodDatabase';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection('food_items');
        const data = await fetched_data.find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection('foodCategory');
        const catData = await foodCategory.find({}).toArray();
        // console.log(catData);
        // console.log(data);
        global.food_items = data;
        global.foodCategory = catData;
        // console.log(global.food_items);
    } catch (error) {
        console.error(error);
    }
}

module.exports = mongoDB;