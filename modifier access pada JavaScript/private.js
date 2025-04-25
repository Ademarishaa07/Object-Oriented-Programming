export default function showPrivate() {
class KartuKredit {
  #nomorKartu; // Private field
  #limit; // Private field
  
  constructor(namaPemilik, nomorKartu, limitAwal) {
    this.namaPemilik = namaPemilik;
    this.#nomorKartu = nomorKartu;  // Menyimpan nomor kartu secara privat
    this.#limit = limitAwal;        // Menyimpan limit secara privat
  }

  // Metode untuk mengambil info kartu (public)
  getInfoKartu() {
    return `Kartu atas nama ${this.namaPemilik} dengan limit Rp${this.#limit}`;
  }

  // Metode untuk mengambil nomor kartu (public) dengan bagian akhir nomor kartu
  getNomorKartu() {
    return `Nomor kartu (privat): **** **** **** ${this.#nomorKartu.slice(-4)}`;
  }

  // Metode untuk menambah limit kartu
  tambahLimit(jumlah) {
    this.#limit += jumlah;
    return `Limit baru adalah Rp${this.#limit}`;
  }
}

const kartu = new KartuKredit("Budi", "1234567812345678", 10000000);

console.log(kartu.getInfoKartu());     // Mengakses info kartu
console.log(kartu.getNomorKartu());   // Menampilkan bagian akhir nomor kartu
console.log(kartu.tambahLimit(2000000)); // Menambahkan limit

// Kode berikut akan menghasilkan error, karena #nomorKartu adalah private
// console.log(kartu.#nomorKartu); // ERROR! Tidak bisa diakses langsung
}