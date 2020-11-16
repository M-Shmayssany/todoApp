const express = require('express');

//Controllers
const mainRoute = require('../controllers/main.js');
const users = require('../controllers/users.js');
const todoList = require('../controllers/todolist.js');

const router = express.Router();

const main = router.get('/', mainRoute.homeRoute);

// Users Route
const usersGetAll = router.get('/users', users.usersAll);
const userSession = router.get('/user', users.userSession);
const usersLogin = router.post('/login', users.userLogin);
const usersFind = router.get('/users/:id', users.userById);
const usersInsert = router.post('/register', users.userInsert);
const usersUpdateById = router.put('/users', users.userUpdateById);
const deleteUser = router.delete('/users/:id', users.userDeleteById);

// TodoList Route
const todoListGetAll = router.get('/todoList', todoList.todoListAll);
const todoListInsert = router.post('/todoList', todoList.todoListInsert);

module.exports = {
    main,
    // Export Users route
    usersGetAll,
    usersFind,
    usersInsert,
    deleteUser,
    usersUpdateById,
    usersLogin,
    // Export TodoList route
    todoListGetAll,
    todoListInsert
};