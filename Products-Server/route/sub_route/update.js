var ProductSchema = require('./../../schemas/product')

module.exports.func = function(req, res){

    var data = {
        id : req.body.id,
        name : req.body.name,
        description : req.body.description,
        price : req.body.price
    }

    var query = {'_id' : req.body._id}

    ProductSchema.update(query, data, function (err, doc){
        if (err) res.status(401).json(err)

        res.status(201).json(doc);
    })
}