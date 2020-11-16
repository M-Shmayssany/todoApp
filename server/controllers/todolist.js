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
                // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app
            }
        },
    // userById :  //find a user by id from data base
    //     async (req,res) => {
    //         try{
    //             const user = await User.findById(req.params.id);
    //             res.json(user);
    //         }catch(err){
    //             console.log(err);
    //         }
    //     },
    todoListInsert:   //insert a now user into the database
        (req, res) => {
            const todoList = new TodoList(req.body);
                            todoList.save(function(err, todoList) {
                                if (err) {
                                    console.log(err);
                                    res.send(400, 'Bad Request');
                                }else{
                                    res.send('saved successfully');
                                }
                            });
        },
    // userUpdateById:
    //     (req, res) => {
    //             // A GERE UNIQUEMENT ADMIN AURA DROIT
    //         const userId = req.body.userId;
    //         const { firstname, lastname, email, password } = req.body;

    //         User.findById(userId)
    //             .then((user) => {
    //                 user.firstname = firstname;
    //                 user.lastname = lastname;
    //                 user.email = email;
    //                 user.password = password;

    //                 return user.save();
    //             })
    //             .then(() => {
    //                 console.log('User Updated');
    //                 res.send('Updated successfully');
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //                 // définir le comportement de l'app en cas d'erreur
    //             });
    //     },
    // userDeleteById:
    //     async (req, res) => {
    //         // A GERE UNIQUEMENT ADMIN AURA DROIT
    //         const userId = req.params.id;
        
    //         try {
    //             const user = await User.findByIdAndDelete(userId, (user) => user);
                
    //             res.send('Deleted successfully');
    //             // définir le comportement de l'app en cas de réussite
    //         } catch (error) {
    //             console.log(error);
    //             // définir le comportement de l'app en cas d'erreur
    //         }
    //     }
    
}