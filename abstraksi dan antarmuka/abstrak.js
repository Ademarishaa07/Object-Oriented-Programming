export default function showAbstrak() {
class Kendaraan {
    constructor(merk) {
    this.merk = merk;
    if (this.constructor === Kendaraan) { throw new Error("Kelas abstrak'Kendaraan' tidak bisa diinstansiasi langsung.");}
    }
    maju() {
    throw new Error("Method 'maju()' harus diimplementasikan!");
    }
    }
    
class Mobil extends Kendaraan {
    maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`; }
     }
    const avanza = new Mobil("Toyota Avanza");
    console.log(avanza.maju()); // Toyota Avanza melaju dengan kecepatan tinggi!
    // const kendaraanBaru = new Kendaraan("Generic"); // Error: Kelas abstrak tidak bisa diinstansiasi
 }