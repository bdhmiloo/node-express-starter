const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO change collection name here
const collectionName = 'Template';

// TODO create model here
const templateSchema = new Schema(
    {
        message: {
            type: String,
            unique: false,
            required: false,
        }
    }
);

module.exports = mongoose.model(collectionName, templateSchema);

