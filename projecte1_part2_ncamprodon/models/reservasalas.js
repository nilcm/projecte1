const Reserva = require("./reserva");
const sala = [
  [
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
  ],
  [
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
  ],
  [
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
  ],
  [
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
  ],
  [
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
  ],
  [
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
  ],
  [
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
    " U ".green,
  ],
];

class ReservaSalas {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const reserva = this._llista[key];
      llistat.push(reserva);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearReserva(fila, columna) {
    const reserva = new Reserva(fila, columna);
    this._llista[reserva.id] = reserva;
  }
  carregarCinemaFromArray(cinema = []) {
    cinema.forEach((cinema) => {
      this._llista[cinema.id] = cinema;
    });
  }

  recaudacio() {
    console.log(7.5 * this.llistatArr.length, "€");
  }

  eliminarReserva(id = "") {
    delete this._llista[id];
  }

  mostrarSala() {
    let result = "";
    console.log(
      `━━━━━`.black + `▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`.bgGrey + `━━━━━`.black
    );
    console.log();

    for (let i = 0; i < sala.length; ++i) {
      result += `|`.black;
      for (let j = 0; j < sala[i].length; ++j) {
        result += sala[i][j] + `|`.black;
        this.llistatArr.forEach((id) => {
          const { fila, columna, pos } = id;
          if (pos == " ♟ ") {
            sala[fila][columna] = ` ♟ `.red;
          }
        });
      }

      result += "\n";
    }

    console.log(result + `▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉▉`.black);
  }
}

module.exports = ReservaSalas;
