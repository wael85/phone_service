const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware 
app.use(bodyParser.json());
app.use(cors());

// routes
const customer = require('./routes/api/customer');
app.use('/api/customer', customer);
// Handle production
if (process.env.NODE_ENV === 'production'){
    // static folder
    app.use(express.static(__dirname + '/public/'));
    // Handle SPA routes
    app.get(/.*/, (req,res)=>
        res.sendFile(__dirname + '/public/index.html')
    );
} 
const port = process.env.PORT || 5000 ;

app.listen(port, () => console.log(`server is running on port ${port}`));



