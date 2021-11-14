const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helloSchema = new Schema(
    {
        message: {
            type: String,
            unique: false,
            required: false,
        }
    }
);

module.exports = mongoose.model('Hello', helloSchema);
