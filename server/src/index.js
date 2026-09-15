const express = require('express');

const app = express();

const events = [
    {
        id: '101',
        title: 'Tekron',
        description: 'This is tekron event'
    },
    {
        id:'201',
        title: 'blood donation camp',
        description: 'this is a blood donation camp'
    }
];

app.get('/events',(req,res)=>{
    res.json(events)
})



app.listen(3000,()=>{
    console.log('server started on port 3000')
})