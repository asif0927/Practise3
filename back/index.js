const express = require('express')
const app = express()
const bodyparser=require('body-parser');
const cors=require("cors");
const PORT = 4040
app.use(bodyparser.json());
app.use(cors());
const mongoose=require('mongoose');

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

const serviceSchema = new mongoose.Schema({
   title: String,
   description:String,
   price:Number,
   iconUrl:String
});
const serviceModel=mongoose.model('Service', serviceSchema);


//get
app.get('/api/services', async(req,res)=>{
    const { title } = req.query;
    const services = await serviceModel.find();
    if (!title) {
      res.status(200).send(services);
    } else {
      const searchedservices = services.filter((x) =>
        x.title.toLowerCase().trim().includes(title.toLowerCase().trim())
      );
      res.status(200).send(searchedservices);
    }
})
//getbyid
app.get('/api/services/:id', async(req,res)=>{
    const id=req.params.id;
    const service=await serviceModel.findById(id);
    res.status(200).send(service)
})


app.delete('/api/services/:id', async(req,res)=>{
    const id=req.params.id;
    const deletesevice=await serviceModel.findByIdAndDelete(id);
    res.status(203).send(deletesevice);
})

app.post('/api/services',async (req,res)=>{
    const {title,description,price,iconUrl}=req.body;
    const newService = new serviceModel({
        title:title,
        description:description,
        price:price,
        iconUrl:iconUrl
      });
      await newService.save();
      res.status(201).send({
        message: `${newService.title} posted successfully`,
        payload: newService,
      });
})


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

const DB_CONNECTION='mongodb+srv://asif_admin:Admin123@app.6i78tjn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(DB_CONNECTION).then(()=>{
    console.log("Mongo Db Connected!");
})