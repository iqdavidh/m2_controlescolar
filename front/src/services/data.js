'use strict';




let lista2a = [
	{"_id": "01", "nombre": "Lesli Vanbrunt"},
	{"_id": "02", "nombre": "Latrina Govan"},
	{"_id": "03", "nombre": "Leeanna Rascon"},
	{"_id": "04", "nombre": "Nga Toney"},
	{"_id": "05", "nombre": "Debbra Hofmann"},
	{"_id": "06", "nombre": "Barrie Shanklin"},
	{"_id": "07", "nombre": "Floyd Sherrer"},
	{"_id": "08", "nombre": "Zofia Kinsman"},
	{"_id": "09", "nombre": "Azalee Lemos"},
	{"_id": "10", "nombre": "Columbus Nickel"},
	{"_id": "11", "nombre": "Deshawn Gurrola"},
	{"_id": "12", "nombre": "Erin Mingo"},
	{"_id": "13", "nombre": "Katelin Lovern"},
	{"_id": "14", "nombre": "Julio Chess"},
	{"_id": "15", "nombre": "Jarrod Bradway"},
	{"_id": "16", "nombre": "Tobie Newhart"},
	{"_id": "17", "nombre": "Griselda Roehr"},
	{"_id": "18", "nombre": "George Yarbro"},
	{"_id": "19", "nombre": "Otto Riffel"},
	{"_id": "20", "nombre": "Lorretta Derrico"},
	{"_id": "21", "nombre": "Epifania Lococo"},
	{"_id": "22", "nombre": "Toni Mckeithan"},
	{"_id": "23", "nombre": "Rocco Carmen"},
	{"_id": "24", "nombre": "Marget Dearman"},
	{"_id": "25", "nombre": "Celestina Greenhill"},
	{"_id": "26", "nombre": "Rosamaria Levesque"},
	{"_id": "27", "nombre": "Kim Beres"},
	{"_id": "28", "nombre": "Candida Prophet"},
	{"_id": "29", "nombre": "Lora Yarnall"},
	{"_id": "30", "nombre": "Windy Eisen"},
];

let lista2b = [
	{"_id": "01", "nombre": "Tonya Jerkins"},
	{"_id": "02", "nombre": "Kenny Lamers"},
	{"_id": "03", "nombre": "Hai Westbrooks"},
	{"_id": "04", "nombre": "Guy Greb"},
	{"_id": "05", "nombre": "Jacquelyn Zemke"},
	{"_id": "06", "nombre": "Suzann Gilstrap"},
	{"_id": "07", "nombre": "Yanira Valero"},
	{"_id": "08", "nombre": "Ernest Graddy"},
	{"_id": "09", "nombre": "Celena Casanova"},
	{"_id": "10", "nombre": "Ester Dionisio"},
	{"_id": "11", "nombre": "Lizzie Buell"},
	{"_id": "12", "nombre": "Consuelo Sandquist"},
	{"_id": "13", "nombre": "Belkis Schaper"},
	{"_id": "14", "nombre": "Cedrick Janicki"},
	{"_id": "15", "nombre": "Enola Gose"},
	{"_id": "16", "nombre": "Linsey Bement"},
	{"_id": "17", "nombre": "Fannie Levalley"},
	{"_id": "18", "nombre": "Kum Delman"},
	{"_id": "19", "nombre": "Sana Tondreau"},
	{"_id": "20", "nombre": "Shawnna Langdon"},
	{"_id": "21", "nombre": "Krista Janda"},
	{"_id": "22", "nombre": "Dalia Lowrance"},
	{"_id": "23", "nombre": "Jospeh Carter"},
	{"_id": "24", "nombre": "Josephina Monty"},
	{"_id": "25", "nombre": "Dulce Bealer"},
	{"_id": "26", "nombre": "Gerard Veliz"},
	{"_id": "27", "nombre": "Eleanor Konecny"},
	{"_id": "28", "nombre": "Carolyn Smyers"},
	{"_id": "29", "nombre": "Bryan Jacob"}
];


let lista2c = [
	{"_id": "01", "nombre": "Colby Istre"},
	{"_id": "02", "nombre": "Antwan Maxham"},
	{"_id": "03", "nombre": "Zora Weinberger"},
	{"_id": "04", "nombre": "Jaymie Mcpeters"},
	{"_id": "05", "nombre": "Sonny Korte"},
	{"_id": "06", "nombre": "Jenni Hodgin"},
	{"_id": "07", "nombre": "Torri Maass"},
	{"_id": "08", "nombre": "Jayne Lepe"},
	{"_id": "09", "nombre": "Madison Coco"},
	{"_id": "10", "nombre": "Nohemi Kehr"},
	{"_id": "11", "nombre": "Cameron Currence"},
	{"_id": "12", "nombre": "Tori Gunnells"},
	{"_id": "13", "nombre": "Jeni Borton"},
	{"_id": "14", "nombre": "Adolfo Streets"},
	{"_id": "15", "nombre": "Clark Bent"},
	{"_id": "16", "nombre": "Yael Jewell"},
	{"_id": "17", "nombre": "Rick Wilbanks"},
	{"_id": "18", "nombre": "Sherri Champney"},
	{"_id": "19", "nombre": "Christie Laver"},
	{"_id": "20", "nombre": "Ferdinand Macbeth"},
	{"_id": "21", "nombre": "Leon Noonkester"},
	{"_id": "22", "nombre": "Christin Scruton"},
	{"_id": "23", "nombre": "Brook Pellegrino"},
	{"_id": "24", "nombre": "Joleen Oleary"},
	{"_id": "25", "nombre": "Eusebio Barnum"},
	{"_id": "26", "nombre": "Pierre Worthy"},
	{"_id": "27", "nombre": "Pasquale Dubois"},
	{"_id": "28", "nombre": "Nan Segui"},
	{"_id": "29", "nombre": "Keva Rall"}
];


let listaTareas2A = [
	{"_id": "t01", "tipo": "tarea", "titulo": "Resumen 'La última luz humana'"},
	{"_id": "t02", "tipo": "tarea", "titulo": "5 preguntas 'Tesla'"},
	{"_id": "t03", "tipo": "tarea", "titulo": "Portada"},
	{"_id": "t04", "tipo": "tarea", "titulo": "Temario"},
	{"_id": "t05", "tipo": "tarea", "titulo": "Resumen 'Vaciar los océanos p1'"},
	{"_id": "t06", "tipo": "tarea", "titulo": "Resumen 'Vaciar los océanos p2'"},
	{"_id": "t07", "tipo": "tarea", "titulo": "Apuntes 'la luz morada no existe'"},
	{"_id": "t08", "tipo": "tarea", "titulo": "Apuntes de clases presentaciones"},
	{"_id": "t09", "tipo": "tarea", "titulo": "Cuadro eval"},
	{"_id": "t10", "tipo": "tarea", "titulo": "Póster entrega Criterio A"},
	{"_id": "t11", "tipo": "tarea", "titulo": "Cuadro eval firmado"},
	{"_id": "t12", "tipo": "tarea", "titulo": "Cuadro eval 2do día"},
	{"_id": "t13", "tipo": "tarea", "titulo": "cuadro de eval 3er dia"},
	{"_id": "t14", "tipo": "tarea", "titulo": "cuadro de eval 4to día"},
	{"_id": "t15", "tipo": "tarea", "titulo": "Problema energía cinética"},
	{"_id": "t16", "tipo": "tarea", "titulo": "Problema de energia potencial"},
	{"_id": "t17", "tipo": "tarea", "titulo": "Bata 20 de mayo"},
	{"_id": "t18", "tipo": "tarea", "titulo": "Bata 21 mayo"},
	{"_id": "t19", "tipo": "tarea", "titulo": "Batas"},
	{"_id": "t20", "tipo": "tarea", "titulo": "Falta de cuadro de evaluación"},
];

let listaTareas2B =
	[
		{"_id": "t21", "tipo": "tarea", "titulo": "Resumen 'La última luz humana'"},
		{"_id": "t22", "tipo": "tarea", "titulo": "Portada"},
		{"_id": "t23", "tipo": "tarea", "titulo": "Temario"},
		{"_id": "t24", "tipo": "tarea", "titulo": "Resumen 'Resfriado común'"},
		{"_id": "t25", "tipo": "tarea", "titulo": "Resumen 'Cuantas piezas de lego puente'"},
		{"_id": "t26", "tipo": "tarea", "titulo": "Notas propias Magnetismo ..."},
		{"_id": "t27", "tipo": "tarea", "titulo": "Apuntes: 'la luz morada no existe'"},
		{"_id": "t28", "tipo": "tarea", "titulo": "Cuadro de eval lleno"},
		{"_id": "t29", "tipo": "tarea", "titulo": "Póster Criterio A"},
		{"_id": "t30", "tipo": "tarea", "titulo": "Cuadro de eval firmado"},
		{"_id": "t31", "tipo": "tarea", "titulo": "Cuadro eval 2do dia"},
		{"_id": "t32", "tipo": "tarea", "titulo": "Cuadro de eval 3er dia"},
		{"_id": "t33", "tipo": "tarea", "titulo": "Cuadro eval 4to día"},
		{"_id": "t34", "tipo": "tarea", "titulo": "Problema Enería Cinética"},
		{"_id": "t35", "tipo": "tarea", "titulo": "Tarea energía potencial"},
		{"_id": "t36", "tipo": "tarea", "titulo": "Bata miércoles 15 mayo"},
		{"_id": "t37", "tipo": "tarea", "titulo": "Bata"},
		{"_id": "t38", "tipo": "tarea", "titulo": "Bata"},
		{"_id": "t39", "tipo": "tarea", "titulo": "Batas"},
		{"_id": "t40", "tipo": "tarea", "titulo": "Falta de cuadro de evaluación"},
	];

let listaTareas2C = [
	{"_id": "t41", "tipo": "tarea", "titulo": "Resumen 'La ultima luz humana'"},
	{"_id": "t42", "tipo": "tarea", "titulo": "Portada"},
	{"_id": "t43", "tipo": "tarea", "titulo": "Temario"},
	{"_id": "t44", "tipo": "tarea", "titulo": "Resumen 'Resfriado común'"},
	{"_id": "t45", "tipo": "tarea", "titulo": "Notas propias de temas Magnético etc..."},
	{"_id": "t46", "tipo": "tarea", "titulo": "Reflexión"},
	{"_id": "t47", "tipo": "tarea", "titulo": "Apunte 'No existe la luz morada'"},
	{"_id": "t48", "tipo": "tarea", "titulo": "Resumen Vaciar los océanos"},
	{"_id": "t49", "tipo": "tarea", "titulo": "cuadro eval"},
	{"_id": "t50", "tipo": "tarea", "titulo": "póster criterio A"},
	{"_id": "t51", "tipo": "tarea", "titulo": "cuadro eval firmado"},
	{"_id": "t52", "tipo": "tarea", "titulo": "Cuadro de eval 2do dia"},
	{"_id": "t53", "tipo": "tarea", "titulo": "Cuadro eval 4to día"},
	{"_id": "t54", "tipo": "tarea", "titulo": "Problema Energía Cinética"},
	{"_id": "t55", "tipo": "tarea", "titulo": "Bata 21 mayo"},
	{"_id": "t56", "tipo": "tarea", "titulo": "Batas"},
	{"_id": "t57", "tipo": "tarea", "titulo": "Falta de cuadro de evaluación"}
];

/* completar cada lista con los datos de alumnos */
let listaCalificacionAlumnos2a = JSON.parse(JSON.stringify(lista2a));

listaCalificacionAlumnos2a.forEach(a => {
	a.calificacion = null;
});
let jsonEval2a = JSON.stringify(listaCalificacionAlumnos2a);

listaTareas2A
	.forEach(t => {
		t["id_grupo"] = "g2a";
		t["listaAlumnos"] = JSON.parse(jsonEval2a);
	});


/* completar cada lista con los datos de alumnos */
let listaCalificacionAlumnos2b = JSON.parse(JSON.stringify(lista2b));
listaCalificacionAlumnos2b.forEach(a => {
	a.evaluacion = null;
});
let jsonEval2b = JSON.stringify(listaCalificacionAlumnos2b);

listaTareas2B
	.forEach(t => {
		t["id_grupo"] = "g2b";
		t["listaAlumnos"] = JSON.parse(jsonEval2b);
	});


/* completar cada lista con los datos de alumnos */
let listaCalificacionAlumnos2c = JSON.parse(JSON.stringify(lista2c));
listaCalificacionAlumnos2c.forEach(a => {
	a.evaluacion = null;
});
let jsonEval2c = JSON.stringify(listaCalificacionAlumnos2c);

listaTareas2C
	.forEach(t => {
		t["id_grupo"] = "g2c";
		t["listaAlumnos"] = JSON.parse(jsonEval2c);
	});


let listaGrupos = [
	{
		"_id": "g2a",
		"nombre": "2a",
		"escuela": "x",
		"tag_escuela": "x",
		"materia": "ma",
		"tipo_ciclo": {"tipo": "sep", "ciclo": "2019-2020"},
		"ymini": 201809,
		"ymfin": 201907,
		"comentarios": "",
		"lista_alumnos": lista2a
	},
	{
		"_id": "g2b",
		"nombre": "2b",
		"escuela": "x",
		"tag_escuela": "x",
		"materia": "ma",
		"tipo_ciclo": {"tipo": "sep", "ciclo": "2019-2020"},
		"ymini": 201809,
		"ymfin": 201907,
		"comentarios": "",
		"lista_alumnos": lista2b
	},
	{
		"_id": "g2c",
		"nombre": "2c",
		"escuela": "x",
		"tag_escuela": "x",
		"materia": "ma",
		"tipo_ciclo": {"tipo": "sep", "ciclo": "2019-2020"},
		"ymini": 201809,
		"ymfin": 201907,
		"comentarios": "",
		"lista_alumnos": lista2c
	},
];

let listaTareas = [...listaTareas2A, ...listaTareas2B, ...listaTareas2C];

let listaTipoActividad=[{"_id":"Tarea"},{"_id":"Exámen"}];

let data = {
	listaGrupos: listaGrupos,
	listaActividad: listaTareas,
	listaTipoActividad:listaTipoActividad
};


//export default data;
