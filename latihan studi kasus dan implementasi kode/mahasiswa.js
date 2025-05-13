import { Manusia } from './manusia.js';

export class Mahasiswa extends Manusia {
  constructor(nama, nim) {
    super(nama);
    this._nim = nim;
  }

  // Polymorphism: override method perkenalan()
  perkenalan() {
    return `Halo, saya ${this._nama} dengan NIM ${this._nim}.`;
  }
}
