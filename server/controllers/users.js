// import models if needed
const User = require('../models/User');
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = {
    usersAll:  //fitch all users
        async (req, res) => {
            try {
                const users = await User.find();
                res.json(users);
            } catch (error) {
                console.log(error);
                // notifier l'utilisateur d'une erreur, et définir un comportement pour l'app
            }
        },
    userSession : (req,res)=>{
        res.send('its working!');
        },
    userLogin :
        async (req,res)=>{
            const user = new User(req.body);
            await User.findOne({'email':user.email},(err, doc)=>{
                if(err) throw err;
                console.log(doc);
                
                if(!doc){
                    console.log('The user ' + user.email + ' is not register');
                    res.send({isloggin: false, message:'The user is not register'})
                }else{
                    if(bcrypt.compareSync(user.password, doc.password)){
                        console.log('you are logged in as ' + doc.firstname + ' ' + doc.lastname);
                        res.send({isloggin: true, message:'Successfully logged in as ' + doc.firstname + ' ' + doc.lastname, data:doc})
                    }else{
                        console.log('Incorrect password');
                        res.send({isloggin: false, message:'Incorrect password'})
                    }
                }
            })
        },
    userById :  //find a user by id from data base
        async (req,res) => {
            try{
                const user = await User.findById(req.params.id);
                req.session.user = user;
                console.log(req.session.user);
                res.json(user);
            }catch(err){
                console.log(err);
            }
        },
    userInsert:   //insert a now user into the database
        (req, res) => {
            const user = new User(req.body);
                // generate salt from saltRounds
                bcrypt.genSalt(saltRounds,(err, salt)=>{
                    bcrypt.hash(user.password, salt, (err, hash)=>{
                        user.password = hash;
                        try {
                            user.save();
                            res.send('saved successfully');
                        } catch (err) {
                            console.log(err);
                            res.status(500).send(err);
                        }
                    });
                });
        },
    userUpdateById:
        (req, res) => {
                // A GERE UNIQUEMENT ADMIN AURA DROIT
            const userId = req.body.userId;
            const { firstname, lastname, email, password } = req.body;

            User.findById(userId)
                .then((user) => {
                    user.firstname = firstname;
                    user.lastname = lastname;
                    user.email = email;
                    user.password = password;

                    return user.save();
                })
                .then(() => {
                    console.log('User Updated');
                    res.send('Updated successfully');
                })
                .catch((err) => {
                    console.log(err);
                    // définir le comportement de l'app en cas d'erreur
                });
        },
    userDeleteById:
        async (req, res) => {
            // A GERE UNIQUEMENT ADMIN AURA DROIT
            const userId = req.params.id;
        
            try {
                const user = await User.findByIdAndDelete(userId, (user) => user);
                
                res.send('Deleted successfully');
                // définir le comportement de l'app en cas de réussite
            } catch (error) {
                console.log(error);
                // définir le comportement de l'app en cas d'erreur
            }
        }
    
}