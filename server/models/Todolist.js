const mongoose = require('mongoose');

const TodolistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    list: [{
        description: {
            type: String,
            required: true
        },
        status: {
            type: Number,
            required: true
        },
        modifyBy: {
            type: String,
            required: true
        },
        addTime:{
            type: Date,
        },
        lastUpdate: {
            type: Date
        }
    }],
    group: [{
        userId: {
            type: String
        },
        userEmail: {
            type: String
        }
    }]
});

module.exports = mongoose.model('Todolist', TodolistSchema);