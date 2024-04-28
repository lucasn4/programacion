const mongoose = require('mongoose');
//let contador = 1;
const userSchema = new mongoose.Schema(
{
    //orden: {
    //    type:Number, 
    //    default: function() {
    //            return contador++;
    //        }
    //},
    nombres: {
        type: String
    },
    apellidos: {
        type: String
    },
    legajo: {
        type: Number
    },
    email: {
        type: String
    },
    contraseña: {
        type: String
    }
},
{
    timestamps: true, //agrega de forma automatica la fecha de modificacion y fecha de creacion como columna en la creacion
    versionKey: false,
}
)
const ModelUser = mongoose.model("users", userSchema);
module.exports = ModelUser;