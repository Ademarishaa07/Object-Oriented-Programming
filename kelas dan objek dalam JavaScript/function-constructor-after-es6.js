// ES6 Class
export default function showFunctionConstructorAfterES6() {
  class Laptop {
    constructor(merek, tipe) {
      this.merek = merek;
      this.tipe = tipe;
    }
  
    info() {
      return `Laptop ini adalah ${this.merek} tipe ${this.tipe}.`;
    }
  }
  
  const thinkpad = new Laptop("Lenovo", "ThinkPad X1 Carbon");
  console.log(thinkpad.info());
}