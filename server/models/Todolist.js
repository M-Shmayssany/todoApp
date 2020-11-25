const mongoose = require('mongoose');
const ListSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    addedBy: {
        type: String,
        required: true
    },
    modifyBy: {
        type: String,
        
    },
    addTime:{
        type: Date,
    },
    lastUpdate: {
        type: Date
    }
});
const GroupSchema = mongoose.Schema({
        userId: {
            type: String
        },
        userEmail: {
            type: String
        }
    });
const TodolistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    list: [ListSchema],
    group: [GroupSchema]
});

module.exports = mongoose.model('Todolist', TodolistSchema);