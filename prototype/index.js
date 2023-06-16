const express = require('express')
const axios = require('axios');
const path = require('path');
const app = express()
const port = process.env.PORT || 8082;

app.use('/assets',express.static(path.join(__dirname,'html/assets')));
app.use((req, res, next) => {
    console.log('Received a ' + req.method + ' request at ' + req.path)
    next()
})

app.get("/api/countries/:search", (req, res) => {
    let search = req.params.search
    console.log('search: ' + search)
    axios.get('https://restcountries.com/v3.1/all')
        .then(response => {
            let result = response.data.filter((country) => {
                return country["name"]["common"].toLowerCase().startsWith(search)
            })
            res.send(result)
        })
        .catch(error => {
            console.log(error);
        });
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));
})
app.listen(port, () => console.log(`Server running on port ${port}`));
