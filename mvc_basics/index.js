const express = require('express')
const path = require('path') // file path utility
const handlebars = require('express3-handlebars').create({ defaultLayout: 'main' })

const app = express()

app.listen(3000, () => {
    console.log(`Server Started on 3000`)
})



app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/home/:nm', (req, res) => {
     res.render('home', { myNm: req.params.nm })
 }) 
app.get('/home', (req, res) => {
    res.render('home', { myNm: req.query.name})
}) 

app.get('/dynamic/:name/:age', (req, res)=>{
    const name = req.params.name
    const age = req.params.age
    
    const demo = {
        name : name,
        age : age
    }
     res.render('dynamic', {demo : demo})
}) 
