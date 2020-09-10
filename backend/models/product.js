import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: String,
    description: String,
    oldPrice: Number,
    price: Number,
    images: [Object],
    sale: Boolean,
    newItem: Boolean,
    toSlider: Boolean,
    createdAt: { type: Date, default: Date.now },
});

export default model('Product', productSchema);
