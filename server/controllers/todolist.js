// import models if needed
const TodoList = require('../models/Todolist');


module.exports = {
    todoListAll:  //fitch all Todo list
        async (req, res) => {
            try {
                const todoList = await TodoList.find();
                res.json(todoList);
            } catch (error) {
                console.log(error);
            }
        },
    todoListById :  //find a todo list by id from data base
        async (req,res) => {
            try{
                const todoList = await TodoList.findById(req.params.id);
                res.json(todoList);
            }catch(err){
                console.log(err);
            }
        },
    todoListInsert:   //insert a now Todo list into the database
        (req, res) => {
            const todoList = new TodoList(req.body);
            console.log(req.body);
                            todoList.save(function(err, todoList) {
                                if (err) {
                                    console.log(err);
                                    res.send(400, 'Bad Request');
                                }else{
                                    console.log('saved successfully');
                                    res.send('saved successfully');
                                }
                            });
        },
    todoListUpdateById:
        (req, res) => {
                // A GERE UNIQUEMENT ADMIN AURA DROIT
            const Id = req.params.id;
            const body = req.body;
            // const { description, status, addedBy, addTime } = req.body;
            TodoList.findOne({ _id: Id },(err,data)=>{
                if(data){
                    data.list.push({
                        description: req.body.description,
                        status: req.body.status,
                        addedBy: req.body.addedBy,
                        addTime: req.body.addTime
                    });
                    data.save();
                    console.log('list updated successfully');
                    res.send('list updated successfully');
                }else if(err){
                    console.error(err);
                    res.send(err.message);
                }
            });
        },

    todoListUserUpdateById:
        (req, res) => {
                // A GERE UNIQUEMENT ADMIN AURA DROIT
            const Id = req.params.id;
            const body = req.body;
            console.log(req.body);
            const { description, status, addedBy, addTime } = req.body;
            TodoList.findOne({ _id: Id },(err,data)=>{
                if(data){
                    data.group.push({
                        userId: req.body.userId,
                        userEmail: req.body.userEmail,
                    });
                    data.save();
                    console.log('Group updated successfully');
                    res.send('Group updated successfully');
                }else if(err){
                    console.error(err);
                    res.send(err.message);
                }
            });
        },
            
    todoListDeleteById:
        async (req, res) => {
            // A GERE UNIQUEMENT ADMIN AURA DROIT
            const todoListId = req.params.id;

            try {
                await TodoList.findByIdAndDelete(todoListId, () =>{
                    // définir le comportement de l'app en cas de réussite
                res.send({message: 'ok' });
                console.log('List deleted successfully');
                });
            } catch (err) {
                console.log(err); 
                //res.send(err);
                // définir le comportement de l'app en cas d'erreur
            }
        }
    
}