export class Manusia {
  constructor(nama) {
    this._nama = nama;
  }

  perkenalan() {
    return `Halo, saya ${this._nama}.`;
  }
}
