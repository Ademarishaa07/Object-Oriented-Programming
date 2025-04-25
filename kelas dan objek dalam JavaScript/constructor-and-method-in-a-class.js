export default function showConstructorAndMethodInAClass() {
class Mobil {
    // Constructor untuk inisialisasi properti
    constructor(merk, tahun, warna) {
      this.merk = merk;
      this.tahun = tahun;
      this.warna = warna;
    }
  
    // Method untuk menampilkan informasi mobil
    info() {
      return `Mobil ini adalah ${this.merk} tahun ${this.tahun} dengan warna ${this.warna}.`;
    }
  
    // Method untuk menghitung usia mobil berdasarkan tahun
    hitungUsia() {
      const tahunSekarang = new Date().getFullYear(); // Mendapatkan tahun saat ini
      return tahunSekarang - this.tahun;
    }
  }
  
  // Membuat objek dari kelas Mobil
  const mobil1 = new Mobil("Toyota Avanza", 2018, "Hitam");
  console.log(mobil1.info());
  // Output: Mobil ini adalah Toyota Avanza tahun 2018 dengan warna Hitam.
  
  console.log(`Usia mobil: ${mobil1.hitungUsia()} tahun`);
  // Output: Usia mobil: 7 tahun (tergantung tahun saat ini)
  
  const mobil2 = new Mobil("Honda Civic", 2020, "Merah");
  console.log(mobil2.info());
  // Output: Mobil ini adalah Honda Civic tahun 2020 dengan warna Merah.
  
  console.log(`Usia mobil: ${mobil2.hitungUsia()} tahun`);
  // Output: Usia mobil: 5 tahun (tergantung tahun saat ini)
} 