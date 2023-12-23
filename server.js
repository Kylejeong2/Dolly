// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wishlistDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Create schema and model for WishlistItem
const wishlistItemSchema = new mongoose.Schema({
    name: String
});
const WishlistItem = mongoose.model('WishlistItem', wishlistItemSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // This is optional, for serving static files like HTML/CSS/JS

// Routes
app.route('/wishlist')
    .get((req, res) => {
        WishlistItem.find((err, foundItems) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(foundItems);
            }
        });
    })
    .post((req, res) => {
        const newItem = new WishlistItem({
            name: req.body.name
        });
        newItem.save((err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send('Item added to wishlist.');
            }
        });
    })
    .delete((req, res) => {
        WishlistItem.deleteOne({ _id: req.body.id }, (err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send('Item deleted from wishlist.');
            }
        });
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
