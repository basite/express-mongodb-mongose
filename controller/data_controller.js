const Model = require('../models/data_model.js')

module.exports = {
    all: (req, res, next) =>{
        Model.find({})
        .then((result) => {
            res.send(result)
        })
        .catch(next)
        // res.send('hello')
    },
    
    create: (req, res, next) => {
        let newModel = 
        new Model({
            id: req.body.id,
            namaCPU: req.body.namaCPU,
            tipe: req.body.tipe,
            platform: req.body.platform,
            rilis: req.body.rilis,
            ramSisa: req.body.ramSisa,
            ramTotal: req.body.ramTotal            
        })
        newModel.save()
        .then((data)=>{
            res.send(data)
        })
        .catch(next)
    }    
}