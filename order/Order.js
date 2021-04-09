var mongoose = require('mongoose');  
var OrderSchema = new mongoose.Schema({  
    idCliente: Int32,
    estadoPedido: String, // En confirmacion, Emitido, En preparacion, En camino,Entregado 
    fechaEmision: Date,
    fechaEntrega: Date,
    productos: [{
        idProducto: Int32,
        cantidad: Int32,
  }]
});
mongoose.model('Pedido', OrderSchema);

module.exports = mongoose.model('Pedido');