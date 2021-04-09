var mongoose = require('mongoose');  
var CategorySchema = new mongoose.Schema({  
    nombre: String,
    idHijos: Int32, //"Las categorias hoja no poseen este campo"
    nivel: Int32 

});
mongoose.model('Categoria', CategorySchema);

module.exports = mongoose.model('Categoria');