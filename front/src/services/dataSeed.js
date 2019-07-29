'use strict';


let lista2a = [
	{"id": "01","apellidos":"Vanbrunt", "nombre": "Lesli"},
	{"id": "02","apellidos":"Govan", "nombre": "Latrina"},
	{"id": "03","apellidos":"Rascon", "nombre": "Leeanna"},
	{"id": "04","apellidos":"Toney", "nombre": "Nga"},
	{"id": "05","apellidos":"Hofmann", "nombre": "Debbra"},
	{"id": "06","apellidos":"Shanklin", "nombre": "Barrie"},
	{"id": "07","apellidos":"Sherrer", "nombre": "Floyd"},
	{"id": "08","apellidos":"Kinsman", "nombre": "Zofia"},
	{"id": "09","apellidos":"Lemos", "nombre": "Azalee"},
	{"id": "10","apellidos":"Nickel", "nombre": "Columbus"},
	{"id": "11","apellidos":"Gurrola", "nombre": "Deshawn"},
	{"id": "12","apellidos":"Mingo", "nombre": "Erin"},
	{"id": "13","apellidos":"Lovern", "nombre": "Katelin"},
	{"id": "14","apellidos":"Chess", "nombre": "Julio"},
	{"id": "15","apellidos":"Bradway", "nombre": "Jarrod"},
	{"id": "16","apellidos":"Newhart", "nombre": "Tobie"},
	{"id": "17","apellidos":"Roehr", "nombre": "Griselda"},
	{"id": "18","apellidos":"Yarbro", "nombre": "George"},
	{"id": "19","apellidos":"Riffel", "nombre": "Otto"},
	{"id": "20","apellidos":"Derrico", "nombre": "Lorretta"},
	{"id": "21","apellidos":"Lococo", "nombre": "Epifania"},
	{"id": "22","apellidos":"Mckeithan", "nombre": "Toni"},
	{"id": "23","apellidos":"Carmen", "nombre": "Rocco"},
	{"id": "24","apellidos":"Dearman", "nombre": "Marget"},
	{"id": "25","apellidos":"Greenhill", "nombre": "Celestina"},
	{"id": "26","apellidos":"Levesque", "nombre": "Rosamaria"},
	{"id": "27","apellidos":"Beres", "nombre": "Kim"},
	{"id": "28","apellidos":"Prophet", "nombre": "Candida"},
	{"id": "29","apellidos":"Yarnall", "nombre": "Lora"},
	{"id": "30","apellidos":"Eisen", "nombre": "Windy"},
];

let lista2b = [
	{"id": "01","apellidos":"Jerkins", "nombre": "Tonya"},
	{"id": "02","apellidos":"Lamers", "nombre": "Kenny"},
	{"id": "03","apellidos":"Westbrooks", "nombre": "Hai"},
	{"id": "04","apellidos":"Greb", "nombre": "Guy"},
	{"id": "05","apellidos":"Zemke", "nombre": "Jacquelyn"},
	{"id": "06","apellidos":"Gilstrap", "nombre": "Suzann"},
	{"id": "07","apellidos":"Valero", "nombre": "Yanira"},
	{"id": "08","apellidos":"Graddy", "nombre": "Ernest"},
	{"id": "09","apellidos":"Casanova", "nombre": "Celena"},
	{"id": "10","apellidos":"Dionisio", "nombre": "Ester"},
	{"id": "11","apellidos":"Buell", "nombre": "Lizzie"},
	{"id": "12","apellidos":"Sandquist", "nombre": "Consuelo"},
	{"id": "13","apellidos":"Schaper", "nombre": "Belkis"},
	{"id": "14","apellidos":"Janicki", "nombre": "Cedrick"},
	{"id": "15","apellidos":"Gose", "nombre": "Enola"},
	{"id": "16","apellidos":"Bement", "nombre": "Linsey"},
	{"id": "17","apellidos":"Levalley", "nombre": "Fannie"},
	{"id": "18","apellidos":"Delman", "nombre": "Kum"},
	{"id": "19","apellidos":"Tondreau", "nombre": "Sana"},
	{"id": "20","apellidos":"Langdon", "nombre": "Shawnna"},
	{"id": "21","apellidos":"Janda", "nombre": "Krista"},
	{"id": "22","apellidos":"Lowrance", "nombre": "Dalia"},
	{"id": "23","apellidos":"Carter", "nombre": "Jospeh"},
	{"id": "24","apellidos":"Monty", "nombre": "Josephina"},
	{"id": "25","apellidos":"Bealer", "nombre": "Dulce"},
	{"id": "26","apellidos":"Veliz", "nombre": "Gerard"},
	{"id": "27","apellidos":"Konecny", "nombre": "Eleanor"},
	{"id": "28","apellidos":"Smyers", "nombre": "Carolyn"},
	{"id": "29","apellidos":"Jacob", "nombre": "Bryan"}
];


let lista2c = [
	{"id": "a01","apellidos":"Istre", "nombre": "Colby"},
	{"id": "a02","apellidos":"Maxham", "nombre": "Antwan"},
	{"id": "a03","apellidos":"Weinberger", "nombre": "Zora"},
	{"id": "a04","apellidos":"Mcpeters", "nombre": "Jaymie"},
	{"id": "a05","apellidos":"Korte", "nombre": "Sonny"},

	{"id": "a06","apellidos":"Hodgin", "nombre": "Jenni"},
	{"id": "a07","apellidos":"Maass", "nombre": "Torri"},
	{"id": "a08","apellidos":"Lepe", "nombre": "Jayne"},
	{"id": "a09","apellidos":"Coco", "nombre": "Madison"},
	{"id": "a10","apellidos":"Kehr", "nombre": "Nohemi"},
	{"id": "a11","apellidos":"Currence", "nombre": "Cameron"},
	{"id": "a12","apellidos":"Gunnells", "nombre": "Tori"},
	{"id": "a13","apellidos":"Borton", "nombre": "Jeni"},
	{"id": "a14","apellidos":"Streets", "nombre": "Adolfo"},
	{"id": "a15","apellidos":"Bent", "nombre": "Clark"},
	{"id": "a16","apellidos":"Jewell", "nombre": "Yael"},
	{"id": "a17","apellidos":"Wilbanks", "nombre": "Rick"},
	{"id": "a18","apellidos":"Champney", "nombre": "Sherri"},
	{"id": "a19","apellidos":"Laver", "nombre": "Christie"},
	{"id": "a20","apellidos":"Macbeth", "nombre": "Ferdinand"},
	{"id": "a21","apellidos":"Noonkester", "nombre": "Leon"},
	{"id": "a22","apellidos":"Scruton", "nombre": "Christin"},
	{"id": "a23","apellidos":"Pellegrino", "nombre": "Brook"},
	{"id": "a24","apellidos":"Oleary", "nombre": "Joleen"},
	{"id": "a25","apellidos":"Barnum", "nombre": "Eusebio"},
	{"id": "a26","apellidos":"Worthy", "nombre": "Pierre"},
	{"id": "a27","apellidos":"Dubois", "nombre": "Pasquale"},
	{"id": "a28","apellidos":"Segui", "nombre": "Nan"},
	{"id": "a29","apellidos":"Rall", "nombre": "Keva"}
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
		t["alumnos"] = JSON.parse(jsonEval2a);
	});


/* completar cada lista con los datos de alumnos */
let listaCalificacionAlumnos2b = JSON.parse(JSON.stringify(lista2b));
listaCalificacionAlumnos2b.forEach(a => {
	a.calificacion = null;
});
let jsonEval2b = JSON.stringify(listaCalificacionAlumnos2b);

listaTareas2B
	.forEach(t => {
		t["id_grupo"] = "g2b";
		t["alumnos"] = JSON.parse(jsonEval2b);
	});


/* completar cada lista con los datos de alumnos */
let listaCalificacionAlumnos2c = JSON.parse(JSON.stringify(lista2c));
listaCalificacionAlumnos2c.forEach(a => {
	a.calificacion = null;
});
let jsonEval2c = JSON.stringify(listaCalificacionAlumnos2c);

listaTareas2C
	.forEach(t => {
		t["id_grupo"] = "g2c";
		t["alumnos"] = JSON.parse(jsonEval2c);
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
		"alumnos": lista2a
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
		"alumnos": lista2b
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
		"alumnos": lista2c
	},
];


listaGrupos.forEach(g=>{
	g.asistencia=[
		{fecha:'2019-12-10', alumnos:[]}
	];
});

let listaActividad = [...listaTareas2A, ...listaTareas2B, ...listaTareas2C];



/*reporte asistencia*/
let reporte={
	year:2019,
	mes:1,
	alumnos:[]
};



let dataSeed = {
	listaGrupos: listaGrupos,
	listaActividad: listaActividad,
	listaTipoActividad:['Tarea', 'Examen']
};


export default dataSeed;
