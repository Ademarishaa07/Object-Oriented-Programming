export default function showInheritance() {
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
        return `${this.nama} mengeong.`;
      }
    }
  
    class Anjing extends Hewan {
      bersuara() {
        return `${this.nama} menggonggong.`;
      }
    }
  
    const milo = new Kucing("Milo");
    const bruno = new Anjing("Bruno");
  
    console.log(milo.bersuara());
    console.log(bruno.bersuara());
  }
  