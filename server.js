const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/accounts', (req,res)=> {
    db.select('*')
        .from('accounts')
        .then(customers => {
        res.status(200).json(customers)
        })
        .catch(err => res.json(err))
})

server.get('/accounts/:id', (req,res)=> {
    const {id} = req.params;
    db('accounts').where({id})
        .first()
        .then(accounts => {
            res.status(200).json(accounts)
        }) 
        .catch(err => res.json(err))
})

server.post('/accounts', (req,res)=> {
    const postData = req.body
    console.log(postData)
    db('accounts').insert(postData,)
})

server.put('/accounts/:id', (req,res)=> {
    
})

server.delete('/accounts/:id', (req,res)=> {
    
})
module.exports = server;