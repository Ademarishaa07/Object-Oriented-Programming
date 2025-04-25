export default function showProtected() {
class Hewan {
    constructor(nama) {
      this._nama = nama; // Konvensi protected
    }
  
    suara() {
      return `${this._nama} mengeluarkan suara...`;
    }
  }
  
  class Anjing extends Hewan {
    suara() {
      return `${this._nama} menggonggong!`;
    }
  }
  
  const rex = new Anjing("Rex");
  
  console.log(rex.suara());  // Rex menggonggong!
  console.log(rex._nama);    // Bisa diakses, tapi SEBAIKNYA tidak
    
}