var ProductSchema = require('./../../schemas/product')

module.exports.func = function(req, res){
    ProductSchema.findOne({'_id' : req.body._id}, function (err, doc){
        if (err) res.status(401).json(err)

        res.status(201).json(doc)
    })
}

module.exports.all = function(req, res){
    var data = []
    ProductSchema.find({}, function (err, docs){
        if(err){
            res.status(401).json(err);
        }
        
        docs.forEach(function (doc) {
            data.push(doc)
        })

        res.status(201).json(data);
    })
}