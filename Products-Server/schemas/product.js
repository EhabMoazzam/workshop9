var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// autoIncrement.initialize(mongoose.connection);

var productSchema = new Schema({
    id : Number,
    name : String,
    description : String,
    price : Schema.Types.Decimal128,
    units : Number
  });
  
//   productSchema.plugin(autoIncrement.plugin, 'Product');
  
module.exports = mongoose.model('Product', productSchema);