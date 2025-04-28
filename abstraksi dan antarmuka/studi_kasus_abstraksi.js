export default function showStudiKasusAbstraksi() {
class Pembayaran {
    constructor(jumlah) {
    this.jumlah = jumlah;
    if (this.constructor === Pembayaran) {
    throw new Error("Kelas abstrak 'Pembayaran'tidak bisa diinstansiasi langsung.");
    }
    }
    prosesPembayaran() {
    throw new Error("Method 'prosesPembayaran()'harus diimplementasikan!");
    }
    }
    
class KartuKredit extends Pembayaran {
    prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui Kartu Kredit berhasil!`;
    } 
    }
class PayPal extends Pembayaran {
    prosesPembayaran() {
    return `Pembayaran ${this.jumlah} melalui PayPal berhasil!`;
    } 
    }

    // Implementasi
        const bayar1 = new KartuKredit(500000);
        console.log(bayar1.prosesPembayaran()); //Pembayaran 500000 melalui Kartu Kredit berhasil!
        const bayar2 = new PayPal(250000);
        console.log(bayar2.prosesPembayaran()); //Pembayaran 250000 melalui PayPal berhasil!
}