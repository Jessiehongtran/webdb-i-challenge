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
    db('accounts')
        .where({id})
        .first()
        .then(accounts => {
            res.status(200).json(accounts)
        }) 
        .catch(err => res.json(err))
})

server.post('/accounts', (req,res)=> {
    const postData = req.body
    console.log(postData)
    db('accounts')
        .insert(postData)
        .then(accounts => {
            res.status(200).json(accounts)
        }) 
        .catch(err => res.json(err))
})

server.put('/accounts/:id', (req,res)=> {
    const changes = req.body;
    const {id} = req.params;
    db('accounts')
    .where({id})
    .update(changes)
    .then(count => {
        res.status(200).json({message: `updated ${count} records`})
    })
    .catch(err => res.json(err))
})

server.delete('/accounts/:id', (req,res)=> {
    const {id} = req.params;
    db('accounts')
    .where({id})
    .delete()
    .then(count => {
        res.status(200).json({message: `deleted ${count} records`})
    })
    .catch(err => res.json(err))
})
module.exports = server;
