const express = require('express');
const app = express();
app.use(express.json()); 

app.get('/json_data', function(req, res) {
    const data = require('./data.json'); 
    res.json(data);
});

app.post('/handle', function(req, res) {
    console.log(req.body);
    res.json(req.body);
})

const port = 8080
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})