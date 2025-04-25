export default function showPublic() {
class Buku {
    constructor(judul, penulis) {
      this.judul = judul; // Public
      this.penulis = penulis; // Public
    }
  }
  
  const buku1 = new Buku("Laskar Pelangi", "Andrea Hirata");
  
  console.log(buku1.judul);     // Output: Laskar Pelangi
  console.log(buku1.penulis);   // Output: Andrea Hirata
}