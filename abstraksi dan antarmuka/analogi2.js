export default function showAnalogi2() {
// Kelas Sepeda yang mengimplementasikan metode maju()
class Sepeda {
    constructor(merk) {
      this.merk = merk;
    }
  
    maju() {
      return `${this.merk} melaju dengan tenaga manusia!`;
    }
  }
  
  // Menguji apakah Sepeda mengimplementasikan metode maju()
  const polygon = new Sepeda("Polygon");
  console.log(polygon.maju()); // Polygon melaju dengan tenaga manusia!
  
  // Cek apakah metode maju() ada di dalam kelas Sepeda
  if (typeof polygon.maju !== "function") {
    throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
  }
  
}