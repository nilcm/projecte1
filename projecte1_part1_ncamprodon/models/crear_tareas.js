const tareaa = require("./tarea");

require("colors");
class crearTareas {
  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const tarea = this._llista[key];
      llistat.push(tarea);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearTarea(nom = "", fetes) {
    const tarea = new tareaa(nom, fetes);
    this._llista[tarea.id] = tarea;
  }
  carregarTareaFromArray(tarea = []) {
    tarea.forEach((tarea) => {
      this._llista[tarea.id] = tarea;
    });
  }
  llistarTareas() {
    console.log(); //Soc un salt de linia
    let conta = 0;
    this.llistatArr.forEach((tarea) => {
      const { nom } = tarea;
      conta += 1;
      console.log(`${(conta + ".").green}${(nom + "").yellow}`);
    });
  }

  llistarTareas_fetes() {
    console.log(); //Soc un salt de linia
    let conta = 0;
    this.llistatArr.forEach((tarea) => {
      const { nom, tareasFetes } = tarea;
      // const hores = `${horesFetes}.green`//>0 else lo demas

      // const prova = true ? 'hola' : 'adeu';//Condicional ternari

      //La condicio 'ternari' resolt

      conta += 1;

      if (tareasFetes == true) {
        console.log(
          `${(conta + ".").green} ${`Nom:`.yellow} ${nom.cyan} :: ${
            "Completa:".yellow
          } ${`${tareasFetes}`.green}`
        );
      } else {
        console.log(
          `${(conta + ".").green} ${`Nom:`.yellow} ${nom.cyan} :: ${
            "Completa:".yellow
          }  ${`${tareasFetes}`.red}`
        );
      }
    });
  }

  async completarTarea(ids = []) {
    ids.forEach((id) => {
      const tarea = this._llista[id];
      if (tarea.tareasFetes == false) {
        tarea.tareasFetes = true;
      } else {
        tarea.tareasFetes = false;
      }
    });
    // this._llista[ids].forEach((id) => {
    //   const tarea = this._llista[id];
    //   if (tarea.completada == true) {
    //     tarea.completada = false;
    //   }
    // });

    // ids.forEach((id) => {
    //   const tarea = this._llista[id];
    //   if (tarea.completada == true) {
    //     tarea.completada = false;
    //   }
    // });

    // this._llista.forEach((id) => {

    // });
    // const tarea = this._llista[id];
    // tarea.completada = true;
  }

  async eliminarTarea(id2) {
    const tarea = this._llista[id2];

    tarea.id = id2;
    delete this._llista[id2];
    return id2;
    console.log(tarea);
  }
}

//   async eliminarAlumne(id2){
//     const alumne = this._llista[id2]

//     alumne.id = id2;
//     delete this._llista[id2]
//     return id2;
//     console.log(alumne);
//   }

module.exports = crearTareas;
