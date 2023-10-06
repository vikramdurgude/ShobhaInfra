var express=require('express');
var app=express();

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile("index.html")
})

app.get('/contact', (req, res) => {
    res.sendFile("contact.html")
})

app.get('/aboutus', (req, res) => {
    res.sendFile("aboutus.html")
})
  
app.listen(9000, () => {
    console.log(`Example app listening on port 9000`)
})
