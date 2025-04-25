export default function showPolymorphism() {
    class Hewan {
      constructor(nama) {
        this.nama = nama;
      }
  
      bersuara() {
        return `${this.nama} bersuara...`;
      }
    }
  
    class Kucing extends Hewan {
      bersuara() {
        return `Suara Kucing (${this.nama}): Meong...meong...`;
      }
    }
  
    class Anjing extends Hewan {
      bersuara() {
        return `Suara Anjing (${this.nama}): Guk...guk...`;
      }
    }
  
    function dengarkanSuara(hewan) {
      console.log(hewan.bersuara());
    }
  
    const kucing = new Kucing("Oyen");
    const anjing = new Anjing("Doggo");
  
    dengarkanSuara(kucing);  // Output: Suara Kucing (Oyen): Meong...meong...
    dengarkanSuara(anjing);  // Output: Suara Anjing (Doggo): Guk...guk...
  }
  