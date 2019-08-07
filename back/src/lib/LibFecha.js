const LibFecha = {
  getDateFromFechaYMD:(fymd)=>{
    let lista=fymd.toString().split('-');
  },
  getDateFromFechaDMY:(fdmy)=>{

    let lista=fdmy.toString().split('/');

    let mes= parseInt(lista[1])-1;
    let f=new Date( lista[2],mes,lista[0]);

    return f;
  }

};


module.exports = LibFecha;
