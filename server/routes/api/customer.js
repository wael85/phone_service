const express = require('express');
const mongodb= require('mongodb');

const router = express.Router();

// Get Customer
router.get('/',async (req,res) => {
    const customer = await customerDb();
    res.send(await customer.find({}).toArray());
});

// add Customer
router.post('/', async (req ,res) => {
   const customer = await customerDb();
   const newCustomer = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    tel: req.body.tel,
    streetName: req.body.streetName,
    streetNr: req.body.streetNr,
    city: req.body.city,
    postCode: req.body.postCode,
    phoneType: req.body.phoneType,
    problem: req.body.problem,
    statusOfDevice: req.body.status,
    createdAt: new Date
}
   await customer.insertOne(newCustomer);
   res.status(201).send(newCustomer._id);
})

// Delete Customer
router.delete('/:id', async(req,res) =>{
   try{
    const customer = await customerDb();
    await customer.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send(); 
   }catch(error){
       console.log(error);

   }
    
})
async function customerDb() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://wael85:BfaLW24cV5apX5z@cluster0.2pwer.mongodb.net/phone_service?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
    return client.db('phone_service').collection('customers');
}

module.exports = router;