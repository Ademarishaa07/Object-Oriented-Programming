export default function ShowOverridingMethod() {
// Kelas induk (superclass)
class Hewan {
    constructor(nama, jenis) {
        this.nama = nama;
        this.jenis = jenis;
    }

    suara() {
        return `${this.nama} bersuara...`;
    }
}

// Kelas turunan pertama: Anjing
class Anjing extends Hewan {
    constructor(nama, warna) {
        super(nama, "Anjing");
        this.warna = warna;
    }

    // Overriding method suara()
    suara() {
        return `${this.nama} menggonggong: Woof woof!`;
    }
}

const doge = new Anjing("Doge", "Coklat");
console.log(doge.suara()); // Doge menggonggong: Woof woof!

// Kelas turunan kedua: Serigala
class Serigala extends Hewan {
    constructor(nama, warna) {
        super(nama, "Serigala");
        this.warna = warna;
    }

    // Overriding method suara() dengan tambahan suara dari superclass
    suara() {
        return super.suara() + " Auuuuu~";
    }
}

const alpha = new Serigala("Alpha", "Abu-abu");
console.log(alpha.suara()); // Alpha bersuara... Auuuuu~
}