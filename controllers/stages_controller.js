const {Op} = require('sequelize')
const stages = require('express').Router()
const db = require('../models')
const {Stage} = db

//find all stages
stages.get('/', async(req,res)=>{
    try{
        const foundStages=await Stage.findAll({
            order: [['available_start_time', 'ASC']],
            where: {
                name:{[Op.like]:'%${req.query.name? req.query.name:``}%' }
            }
        })
        res.status(200).json(foundStage)
    }catch(error){
        res.status(500).json(error)
    }
})

//find a specific stage
stages.get('/:id', async(req,res)=>{
    try{
        const foundStage=await Stage.findOne({
            where:{stage_id:req.params.id}
        })
        res.status(200).json(foundStage)
    }catch(error){
        res.status(500).json(error)
    }
})

//create a stage
stages.post('/', async(req,res) => {
    console.log('re.body', req.body)
    try{
        const newStage=await Stage.create(req.body)
        res.status(200).json({
            message:'Successfully inserted a new stage',
            data:newStage
        })
    } catch(err){
        console.log('Errrr!!', err)
        res.status(500).json(err)
    }
})

//update a stage
stages.put('/:id', async (req,res)=>{
    try{
        const updatedStages=await Stage.update(req.body,{
            where:{
                stage_id:req.params.id
            }
        })
        res.status(200).json({
            message:'Successfully updated ${updatedStage} stage(s)'
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

//delete a stage
stages.delete('/:id', async (req,res)=> {
    try{
        const deletedStages=await Stage.destroy({
            where:{
                stage_id:req.params.id
            }
        })
        res.status(200).json({
            message:`Successfully deleted ${deletedStages} stage(s)`
        })
    } catch(err){
        res.status(500).json(err)
    }
})


module.exports=stages