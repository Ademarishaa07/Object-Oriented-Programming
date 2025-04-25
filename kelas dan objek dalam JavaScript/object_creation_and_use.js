//membuat objek dengan menggunakan kata kunci new
export default function showObjectCreationAndUse() {
class Buku {
  constructor(judul, penulis, tahunTerbit) {
    this.judul = judul;
    this.penulis = penulis;
    this.tahunTerbit = tahunTerbit;
  }

  deskripsi() {
    return `Buku ini berjudul "${this.judul}" yang ditulis oleh ${this.penulis} dan diterbitkan pada tahun ${this.tahunTerbit}.`;
  }
}

// Membuat objek dari kelas Buku
const buku1 = new Buku("Clean Code", "Robert C. Martin", 2008);
console.log(buku1.deskripsi());
// Output: Buku ini berjudul "Clean Code" yang ditulis oleh Robert C. Martin dan diterbitkan pada tahun 2008.

const buku2 = new Buku("The Pragmatic Programmer", "Andrew Hunt & David Thomas", 1999);
console.log(buku2.deskripsi());
// Output: Buku ini berjudul "The Pragmatic Programmer" yang ditulis oleh Andrew Hunt & David Thomas dan diterbitkan pada tahun 1999.
}