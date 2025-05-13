export default class Kendaraan {
    constructor(merk) {
      if (this.constructor === Kendaraan) {
        throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
      }
      this.merk = merk;
    }
  
    jalan() {
      throw new Error("Method 'jalan()' harus diimplementasikan!");
    }
  }
  