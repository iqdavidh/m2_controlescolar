'use strict';

/**
 * Created by David on 25/07/2019.
 */


import data from "../../data";

const listaGrupos = data.listaGrupos;
const listaTareas = data.listaActividad;
const paginacion=2;


let dataLocal = {
	/* nos da una lista de objetos para ver como index*/
	getIndexGrupos(pagina) {
		/* regresa un pbjectp
		* success:true/false,
		* msg:"",
		* data:{
		* 	total (el numero total de registros que hay), items, next
		* }
		* */
	},
	getGrupo(id) {
		/* regresa todos los datos del grupo*/
	},
	updateGrupo(id, data) {
		/*guarda los datos del grupo, si id es null se hace insert*/
	},
	insertGrupo(id, data) {
		/*guarda los datos del grupo, si id es null se hace insert*/
	},
	getIndexTipoActividad() {
		/* regresa un pbjectp - es la misma logica que
* success:true/false,
* msg:"",
* data:{
* 	total (el numero total de registros que hay), items, next
* }
* */
	},
	getIndexActividades(pagina) {
		/* regresa un pbjectp - es la misma logica que
	* success:true/false,
	* msg:"",
	* data:{
	* 	total (el numero total de registros que hay), items, next
	* }
	* */
	},
	updateActividad(id, data){

	},
	insertActividad(data){

	},
	updateActividadCalificacionAlumno(id,id_alumno, calificacion){

	},
	getIndexAsistencia(id_grupo,finiDMY,ffinDMY){

	},
	updateAsistencia(id_grupo,fDMY, estatus_asitencia){

	}
};

export default dataLocal;
