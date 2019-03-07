const express = require('express');
const router = express.Router();
const path = require('path');
const members = require('./../../members.js');
const errors = require('./../../errors/errorMessage.js');

console.log(errors)
// Member.show
router.get('/:id',(req,res)=>{
    const found = members.some((member)=> member.id === parseInt(req.params.id))
    if (found){
        res.json(members.filter((member)=> member.id === parseInt(req.params.id) ))
    }else{
        errors["message"] = `No member with an id of ${parseInt(req.params.id)} found`
        res.status(400).json(errors)
        throw new Error(errors.message)   
    }
    
})
// Member.all
router.get('/',(req,res)=>
    res.json(members)
);

// Memebr.create
router.post('/',(req,res) => {
    res.send(req.body)
})
module.exports = router;