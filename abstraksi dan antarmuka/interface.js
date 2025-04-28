export default function showInterface() {
// Interface sebagai objek blueprint
const kendaraanInterface = {
    maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
    }
    };

class Sepeda {
    constructor(merk) {
    this.merk = merk;
    }
    maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
    }
    }
}