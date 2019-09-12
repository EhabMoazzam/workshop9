var ProductSchema = require('./../../schemas/product')

module.exports.func = function(req, res){
    ProductSchema.findOne({'_id' : req.body._id}, function (err, doc){
        if (err) res.status(401).json(err)

        doc.remove(function(err, data){
            if (err) res.status(401).json(err)

            res.status(201).json({ result : 'deleted'})
        })
    })
}