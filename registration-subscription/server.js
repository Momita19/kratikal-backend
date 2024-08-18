const express = require('express');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

const app =  express();
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
// Built-in middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: false }));


mongoose.connect('mongodb+srv://Momita:Momita@cluster0.gckilv2.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


// Use the routes
app.use('/api', dataRoutes);

app.listen(3001, () => {
    console.log('Server is running on port 3001...');
});