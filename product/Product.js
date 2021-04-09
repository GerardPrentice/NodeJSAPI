var mongoose = require('mongoose');  
var ProductSchema = new mongoose.Schema({  
    nombre: String,
    descripcion: String,
    visitas: Int32, //0
    valoracion: Float64, //[0,10] // defecto 0
    idProveedor: Int32, // [0,20]
    idCategoria: Int32,
unidad:String,
    precioUnidad: Float64,
stock: Int32,
    imagenesRefereciales:[{
    data: BinData
}],
caracteristicas = [{ // caractertistica fija la  marca del prodcuto
        nombre: String,
        descripcion: String
  }],

});
mongoose.model('Producto', ProductSchema);

module.exports = mongoose.model('Producto');