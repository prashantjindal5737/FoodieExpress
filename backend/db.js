const mongoose = require('mongoose');

const mongoConnect = async () => {
  try {
    // await mongoose.connect('mongodb://localhost:27017/foodapp', {
              await mongoose.connect("mongodb+srv://princejindalprashant:f3009sKgMuIp7Fsz@cluster0.zrejugd.mongodb.net/myapp?retryWrites=true&w=majority");

    // });
    console.log('🗄️ MongoDB connected');
    const cats = await mongoose.connection.db.collection('categories').find({}).toArray();
    global.foodapp = cats;
    global.foodcat = cats;
  } catch (err) {
    console.error(err);
  }
};

module.exports = mongoConnect;
