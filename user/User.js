var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
    id: Int32,
    tipo: String, //cliente proovedor
    nombres: String,
    apellidos: String,
    empresa: String, //solo para proovedor
    datosIngreso:{
      correo:String,
      contrasenia:String
    },
    direccion:[{
      calle:String,
      numero: Int32,
      ciudad:String,
      codigoPostal:Int32
    }],
    metodo_pago:[{
      tipo: String, // "Monedero EMARK" 
      saldo: Int32 
    }],
    tarjeta:[{
        tipo: String, // "Tarjeta"
        dato_tarjeta: {
      numero: Int32, //max && min 16 dig
            fecha_caducidad: Date,
            ccv: Int32 //max && min 3 dig
        }    
    }],
      billetera:[{
          tipo: String, // "Billetera digital"
          num_cel: Int32 //max && min 9 dig
    }]

});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');