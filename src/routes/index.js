const express = require('express')
const State = require('../models/states')
const router = express.Router()
const moment = require('moment')

router.get('',async (req,res)=>{
    console.log('GET request to index.js')

    const today = moment().format('YYYY-M-D')
    const yesterday = moment().subtract(1, 'days').format('YYYY-M-D')

    const todaydata = await State.find({date:today})
    const yesterdaydata = await State.find({date:yesterday})
    const len = (todaydata.length-1)

    const total = await State.find({name:"Total", date:today})
    const alltot = await State.find({name:"Total"})

    res.render('index',{"data": todaydata, "total": total[0], "ydata":yesterdaydata, "n":len,  "alltot":alltot})
})

// redundant
router.get('/names',async(req,res)=>{
    const  names = await State.distinct("name")
    res.send(names)
})
router.get('/prevention',async(req,res)=>{
    console.log('GET request to index.js/prevention')
    res.render('prevention')
})
router.get('/sources',async(req,res)=>{
    console.log('GET request to index.js/sources')
    res.render('under')
})
module.exports = router