import Kendaraan from './kendaraan.js'; // Import Kendaraan

export default class Mobil extends Kendaraan {
  jalan() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}
