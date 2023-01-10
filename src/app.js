const path=require('path')
const express = require('express')
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')
const hbs = require('hbs')
const app = express()
const port =process.env.PORT || 5000
//console.log(app.use(express.static(path.join(__dirname ,'../views'))) )

const publicPath=path.join(__dirname ,'../public')
const viewPath=path.join(__dirname ,'../views')
app.set('view engine','hbs')
app.set('views',viewPath)
app.use(express.static(publicPath))
app.get('',(req,res)=>{
    res.render('index',{
        title:"Weather",
        name:"shahzaib"


    })          
})
app.get('/help',(req,res)=>{
res.render('help')
})
app.delete('/help',(req,res)=>{
    res.render('delete')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

//......................weather....................//
app.get('/weather',(req,res)=>{
    
    if(!req.query.address)
    {
        return res.send({
            error:"provide location sir!!"
        })
    }
    geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
        if(error){
        return res.send({error})
        }
    forecast(latitude,longitude,(error,forecastData)=>{
        if(error)
        res.send ({error})
        
            res.send({
                forecast: forecastData,
                location,
                address:req.query.address

            })
        }) 
    })
})
//     res.send({
//         title :'Weather',
//         weather :'cool',
//         location:  req.query.address  
//         //whatever:'Why so serious'
//     })
// })

////////////////////////////////////////////////////////////////////end../.................
app.get('/products',(req,res)=>{
    if(!req.query.search){
    return res.send({
        error:'provide search'
    })}
    //return console.log("please provide search")
    console.log(req.query.search)
    res.send
    ({
        products :[],
       // location:req.query.search
    })
    })
app.get('*',(req,res)=>{
    res.render('error',{
        title:'404',
        name:'shahzaib',
        errormessage:'error'
})
})
app.get('/help/*',(req,res)=>{
    res.render('error',{
        title:'404',
        name:'shahzaib',
        errormessage:'help content not found'

    })
})

//to start express
//const app=express()
//to start server
//app.use(express.static(path.join(__dirname,'../'))
//app.get('',(req,res)=>{res.render or res.send})
//app.listen(Port,()=>{})
    // app.get('',(req,res)=>{
    //     res.send('done')
    // })
    // app.get('/help',(req,res)=>{
    //     res.send([{
    //         name:'shahzaib'
    //     },
    // {
    //     age:21
    // }])
    // }) 
    // app.get('/about',(req,res)=>{
    // res.send('about is not availabale yet')
    // })
app.listen(port)
