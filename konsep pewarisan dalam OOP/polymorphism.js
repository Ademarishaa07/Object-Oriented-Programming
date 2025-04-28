export default function showPolymorphism() {
   // Definisi kelas Hewan sebagai kelas induk
class Hewan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }

    suara() {
        return `${this.nama} mengeluarkan suara!`;
    }
}

// Kelas Kucing mewarisi kelas Hewan
class Kucing extends Hewan {
    constructor(nama, warna) {
        super(nama, "Kucing"); // Memanggil konstruktor dari kelas Hewan
        this.warna = warna;
    }

    suara() {
        return `${this.nama} mengeong: Meong!`;
    }
}

// Kelas Anjing mewarisi kelas Hewan
class Anjing extends Hewan {
    constructor(nama, warna) {
        super(nama, "Anjing"); // Memanggil konstruktor dari kelas Hewan
        this.warna = warna;
    }

    suara() {
        return `${this.nama} menggonggong: Guk guk!`;
    }
}

// Kelas Burung mewarisi kelas Hewan
class Burung extends Hewan {
    constructor(nama) {
        super(nama, "Burung"); // Memanggil konstruktor dari kelas Hewan
    }

    suara() {
        return `${this.nama} berkicau: Cip cip!`;
    }
}

// Membuat daftar objek Hewan
const hewanList = [
    new Kucing("Milo", "Putih"),
    new Anjing("Buddy", "Hitam"),
    new Burung("Tweety")
];

// Menampilkan suara dari setiap hewan
hewanList.forEach(hewan =>
    console.log(hewan.suara()));

        }        