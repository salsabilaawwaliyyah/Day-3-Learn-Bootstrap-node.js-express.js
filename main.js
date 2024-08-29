const express = require('express')
const axios= require('axios');  

const app = express()
const port = 3000

//Baca file statis
app.use(express.static("public"))
//convert response to json
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// app.get('/', (req, res) => res.send('Hello World!'))
//minta fata jokes dari sistem laboratory
app.get('/joke',async  (req, res) => {
    try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Dark?type=single")
    const joke = response.data.joke;
    res.json({joke});
} catch (error) {
    res.status(500).json({error:'Failed get data'})
}
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))


















// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })