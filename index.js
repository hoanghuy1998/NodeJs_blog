const express = require('express')
const app = express()
const port = 3060
//rute:tuyến đường
app.get('/', (req, res) =>{
    var a=1;
    var b=2;
    var c=a+b;
    return res.send('Hello World!')
});
app.get('/trangchu', (req, res) => res.send('đây là trang chủ'));
app.get('/tintuc', (req, res) => res.send('đây là trang tin tức'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))