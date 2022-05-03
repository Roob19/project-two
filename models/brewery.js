const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const brewerySchema = new Schema({
    id: Number,
    name: String,
    brewery_type: String,
    street: String,
    city: String,
    state: String,
    postal_code: String,
    country: String,
    longitude: String,
    latitude: String,
    phone: String,
    website_url: String,
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Brewery', brewerySchema);