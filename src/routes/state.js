const express = require('express')
const State = require('../models/states')
const router = express.Router()
const moment = require('moment')

router.get('/:loc',async (req,res)=>{

    const search = req.params.loc
    console.log('GET request to state.js for '+ search)
    
    const today = moment().format('YYYY-M-D')
    // const yesterday = moment().subtract(1, 'days').format('YYYY-M-D')

    const alldata = await State.find({name:search})
    const todaydata = await State.find({name:search ,date:today})

    const date = moment().format('LL'); 
    res.render('state',{"data": alldata, "ydata": todaydata, "date": date})
})

module.exports = router