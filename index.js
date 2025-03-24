const express = require('express');
const app = express();
const customerRouter=require('./app/modules/customer/router')
const port=3000

app.use('/customer',customerRouter)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})