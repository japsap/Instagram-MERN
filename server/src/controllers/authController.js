const router = require('express').Router();

const authService = require('../services/authService');

router.post('/register', (req, res) => {
    const { username, email, password, repeatPassword } = req.body

    const existingUser = authService.getUser(username)

    if(existingUser){
        return res.status(400).json({ status: 400, message: "Username already used"})
    }

    if(password !== repeatPassword){
        return res.status(400).json({ status: 400, message: "Passwords don't match!"})
    }

    try{
        
    }catch(err){

    }

})

router.post('/login', (req, res) => {
    
})


module.exports = router