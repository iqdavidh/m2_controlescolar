<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <h1 id="tituloSeccion">Asitencia</h1>
      </div>
    </div>

    <div class="form-group">
      <label for>Grupo</label>
      <select class="form-control" v-model="idgrupo" v-on:change= "onChangeGrupo">
        <option
          v-for="grupo in listagrupos"
          v-bind:key="grupo._id"
		  v-bind:value="grupo._id"
		>{{grupo.nombre}}/{{grupo.escuela}}</option>
      </select>
    </div>
    <div class="form-group">
      <label for>Día</label>
      {{fechadmy}}
    </div>
	<pre v-if="isDebug">
		{{idgrupo}}
    
    {{lista_alumnos}}
	</pre>
  </div>
</template>


<script>
import libConfig from "../lib/libConfig";
import dataService from "../services/dataService";

export default {
  name: "asistencia",
  props: {},
  components: {},
  data() {
    return {
      listagrupos: [],
      idgrupo: "",
	  fechadmy: "",
	  lista_alumnos: [],
      isDebug: libConfig.isDebug
    };
  },
  methods: {
	  onChangeGrupo: function (){
      this.lista_alumnos= this.listagrupos
      .find (g => g._id === this.idgrupo)
      .lista_alumnos;
	  }
  },
  mounted() {
    dataService.getlistaGrupos();
    (this.fechadmy = "27/07/2019"),
      (this.listagrupos = [
        {
          _id: "g2a",
          nombre: "2a",
          escuela: "x",
          tag_escuela: "x",
          materia: "ma",
          tipo_ciclo: {
            tipo: "sep",
            ciclo: "2019-2020"
          },
          ymini: 201809,
          ymfin: 201907,
          comentarios: "",
          lista_alumnos: [
            {
              _id: "01",
              nombre: "Lesli Vanbrunt"
            },
            {
              _id: "02",
              nombre: "Latrina Govan"
            },
            {
              _id: "03",
              nombre: "Leeanna Rascon"
            },
            {
              _id: "04",
              nombre: "Nga Toney"
            },
            {
              _id: "05",
              nombre: "Debbra Hofmann"
            },
            {
              _id: "06",
              nombre: "Barrie Shanklin"
            },
            {
              _id: "07",
              nombre: "Floyd Sherrer"
            },
            {
              _id: "08",
              nombre: "Zofia Kinsman"
            },
            {
              _id: "09",
              nombre: "Azalee Lemos"
            },
            {
              _id: "10",
              nombre: "Columbus Nickel"
            },
            {
              _id: "11",
              nombre: "Deshawn Gurrola"
            },
            {
              _id: "12",
              nombre: "Erin Mingo"
            },
            {
              _id: "13",
              nombre: "Katelin Lovern"
            },
            {
              _id: "14",
              nombre: "Julio Chess"
            },
            {
              _id: "15",
              nombre: "Jarrod Bradway"
            },
            {
              _id: "16",
              nombre: "Tobie Newhart"
            },
            {
              _id: "17",
              nombre: "Griselda Roehr"
            },
            {
              _id: "18",
              nombre: "George Yarbro"
            },
            {
              _id: "19",
              nombre: "Otto Riffel"
            },
            {
              _id: "20",
              nombre: "Lorretta Derrico"
            },
            {
              _id: "21",
              nombre: "Epifania Lococo"
            },
            {
              _id: "22",
              nombre: "Toni Mckeithan"
            },
            {
              _id: "23",
              nombre: "Rocco Carmen"
            },
            {
              _id: "24",
              nombre: "Marget Dearman"
            },
            {
              _id: "25",
              nombre: "Celestina Greenhill"
            },
            {
              _id: "26",
              nombre: "Rosamaria Levesque"
            },
            {
              _id: "27",
              nombre: "Kim Beres"
            },
            {
              _id: "28",
              nombre: "Candida Prophet"
            },
            {
              _id: "29",
              nombre: "Lora Yarnall"
            },
            {
              _id: "30",
              nombre: "Windy Eisen"
            }
          ]
        },
        {
          _id: "g2b",
          nombre: "2b",
          escuela: "x",
          tag_escuela: "x",
          materia: "ma",
          tipo_ciclo: {
            tipo: "sep",
            ciclo: "2019-2020"
          },
          ymini: 201809,
          ymfin: 201907,
          comentarios: "",
          lista_alumnos: [
            {
              _id: "01",
              nombre: "Tonya Jerkins"
            },
            {
              _id: "02",
              nombre: "Kenny Lamers"
            },
            {
              _id: "03",
              nombre: "Hai Westbrooks"
            },
            {
              _id: "04",
              nombre: "Guy Greb"
            },
            {
              _id: "05",
              nombre: "Jacquelyn Zemke"
            },
            {
              _id: "06",
              nombre: "Suzann Gilstrap"
            },
            {
              _id: "07",
              nombre: "Yanira Valero"
            },
            {
              _id: "08",
              nombre: "Ernest Graddy"
            },
            {
              _id: "09",
              nombre: "Celena Casanova"
            },
            {
              _id: "10",
              nombre: "Ester Dionisio"
            },
            {
              _id: "11",
              nombre: "Lizzie Buell"
            },
            {
              _id: "12",
              nombre: "Consuelo Sandquist"
            },
            {
              _id: "13",
              nombre: "Belkis Schaper"
            },
            {
              _id: "14",
              nombre: "Cedrick Janicki"
            },
            {
              _id: "15",
              nombre: "Enola Gose"
            },
            {
              _id: "16",
              nombre: "Linsey Bement"
            },
            {
              _id: "17",
              nombre: "Fannie Levalley"
            },
            {
              _id: "18",
              nombre: "Kum Delman"
            },
            {
              _id: "19",
              nombre: "Sana Tondreau"
            },
            {
              _id: "20",
              nombre: "Shawnna Langdon"
            },
            {
              _id: "21",
              nombre: "Krista Janda"
            },
            {
              _id: "22",
              nombre: "Dalia Lowrance"
            },
            {
              _id: "23",
              nombre: "Jospeh Carter"
            },
            {
              _id: "24",
              nombre: "Josephina Monty"
            },
            {
              _id: "25",
              nombre: "Dulce Bealer"
            },
            {
              _id: "26",
              nombre: "Gerard Veliz"
            },
            {
              _id: "27",
              nombre: "Eleanor Konecny"
            },
            {
              _id: "28",
              nombre: "Carolyn Smyers"
            },
            {
              _id: "29",
              nombre: "Bryan Jacob"
            }
          ]
        },
        {
          _id: "g2c",
          nombre: "2c",
          escuela: "x",
          tag_escuela: "x",
          materia: "ma",
          tipo_ciclo: {
            tipo: "sep",
            ciclo: "2019-2020"
          },
          ymini: 201809,
          ymfin: 201907,
          comentarios: "",
          lista_alumnos: [
            {
              _id: "01",
              nombre: "Colby Istre"
            },
            {
              _id: "02",
              nombre: "Antwan Maxham"
            },
            {
              _id: "03",
              nombre: "Zora Weinberger"
            },
            {
              _id: "04",
              nombre: "Jaymie Mcpeters"
            },
            {
              _id: "05",
              nombre: "Sonny Korte"
            },
            {
              _id: "06",
              nombre: "Jenni Hodgin"
            },
            {
              _id: "07",
              nombre: "Torri Maass"
            },
            {
              _id: "08",
              nombre: "Jayne Lepe"
            },
            {
              _id: "09",
              nombre: "Madison Coco"
            },
            {
              _id: "10",
              nombre: "Nohemi Kehr"
            },
            {
              _id: "11",
              nombre: "Cameron Currence"
            },
            {
              _id: "12",
              nombre: "Tori Gunnells"
            },
            {
              _id: "13",
              nombre: "Jeni Borton"
            },
            {
              _id: "14",
              nombre: "Adolfo Streets"
            },
            {
              _id: "15",
              nombre: "Clark Bent"
            },
            {
              _id: "16",
              nombre: "Yael Jewell"
            },
            {
              _id: "17",
              nombre: "Rick Wilbanks"
            },
            {
              _id: "18",
              nombre: "Sherri Champney"
            },
            {
              _id: "19",
              nombre: "Christie Laver"
            },
            {
              _id: "20",
              nombre: "Ferdinand Macbeth"
            },
            {
              _id: "21",
              nombre: "Leon Noonkester"
            },
            {
              _id: "22",
              nombre: "Christin Scruton"
            },
            {
              _id: "23",
              nombre: "Brook Pellegrino"
            },
            {
              _id: "24",
              nombre: "Joleen Oleary"
            },
            {
              _id: "25",
              nombre: "Eusebio Barnum"
            },
            {
              _id: "26",
              nombre: "Pierre Worthy"
            },
            {
              _id: "27",
              nombre: "Pasquale Dubois"
            },
            {
              _id: "28",
              nombre: "Nan Segui"
            },
            {
              _id: "29",
              nombre: "Keva Rall"
            }
          ]
        }
      ]);
  }
};
</script>


<style scoped>
</style>
