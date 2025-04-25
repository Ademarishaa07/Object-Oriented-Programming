export default function showFunctionConstructorBeforeES6() {
  function Laptop(merek, tipe) {
    this.merek = merek;
    this.tipe = tipe;
    this.info = function () {
      return `Laptop ini adalah ${this.merek} tipe ${this.tipe}.`;
    };
  }
  
  const thinkpad = new Laptop("Lenovo", "ThinkPad X1 Carbon");
  console.log(thinkpad.info());
}  