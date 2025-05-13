// main.js
import Mobil from './mobil.js';  // Import Mobil
import Sepeda from './sepeda.js'; // Import Sepeda

// Testing Mobil
const avanza = new Mobil("Toyota Avanza");
console.log(avanza.jalan()); // Toyota Avanza melaju dengan kecepatan tinggi!

// Testing Sepeda
const polygon = new Sepeda("Polygon");
console.log(polygon.jalan()); // Polygon melaju dengan tenaga manusia!

// Validasi interface (optional)
function implementsKendaraan(obj) {
  if (typeof obj.jalan !== "function") {
    throw new Error("Objek harus mengimplementasikan method 'jalan()'");
  }
}

implementsKendaraan(polygon); // Lolos
