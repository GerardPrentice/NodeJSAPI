var mongoose = require('mongoose');  
var CommentarySchema = new mongoose.Schema({  
	titulo: String,
	descripcion: String,
	fecha: Date,
	id_Producto: Int32
});
mongoose.model('comentario', CommentarySchema);

module.exports = mongoose.model('comentario');