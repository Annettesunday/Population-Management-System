const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req,res) => {
res.status(200).send({message: 'Welcome to Population Management System'})
})

app.get('*', (req,res)=> {
  res.status(400).send({message: 'This action cannot be executed. Got to /api to see all available routes'})
})

app.listen(port, () => console.log(`Server started on port ${port}`));
