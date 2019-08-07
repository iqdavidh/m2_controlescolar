const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ActividadesSchema = new Schema({
  idGrupo: {type: String,require:true},
  tipo: {type: String,require:true},
  titulo: {type: String,require:true},
  fecha: {type: Date, require:true},
  alumnos: {type:Array, required: true}

});

module.exports = mongoose.model('actividades', ActividadesSchema);
