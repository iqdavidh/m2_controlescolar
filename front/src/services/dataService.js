'use strict';


import libConfig from "../lib/libConfig";
import dataLocal from "./dataLocal";
import dataApli from "./dataApi";

const isDebug = libConfig.isDebug;

/**
 * Created by David on 23/07/2019.
 */

/* aqui vamos a implementar dos tipos de bases de datos, con mongo a traves de la api y con sqlite para electron*/

//const dataService =  dataLocal;
const dataService =  dataApli;



export default dataService;
