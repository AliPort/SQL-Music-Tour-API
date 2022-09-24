const {Op} = require('sequelize')
const event = require('express').Router()
const db = require('../models')
const {Event} = db

//find all events
events.get('/', async(req,res)=>{
    try{
        const foundEvent=await Event.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name:{[Op.like]:'%${req.query.name? req.query.name:``}%' }
            }
        })
        res.status(200).json(foundEvents)
    }catch(error){
        res.status(500).json(error)
    }
})

//find a specific event
events.get('/:id', async(req,res)=>{
    try{
        const foundEvent=await Event.findOne({
            where:{band_id:req.params.id}
        })
        res.status(200).json(foundBand)
    }catch(error){
        res.status(500).json(error)
    }
})

//create a Event
events.post('/', async(req,res) => {
    try{
        const newEvent=await Event.create(req.body)
        res.status(200).json({
            message:'Successfully inserted a new event',
            data:newEvent
        })
    } catch(err){
        res.status(500).json(err)
    }
})

//update a event
events.put('/:id', async (req,res)=>{
    try{
        const updatedEvents=await Event.update(req.body,{
            where:{
                event_id:req.params.id
            }
        })
        res.status(200).json({
            message:'Successfully updated ${updatedBands} event(s)'
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//delete an event
events.delete('/:id', async (req,res)=> {
    try{
        const deletedEvents=await Event.destroy({
            where:{
                event_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully deleted ${deletedEvents} event(s)`
        })
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports=events