export default function showAbstraction() {
    class Notification {
      constructor(penerima) {
        if (this.constructor === Notification) {
          throw new Error("Kelas abstrak 'Notification' tidak boleh diinstansiasi langsung.");
        }
        this.penerima = penerima;
      }
  
      kirimPesan(pesan) {
        throw new Error("Method 'kirimPesan()' harus dioverride di subclass.");
      }
    }
  
    class EmailNotification extends Notification {
      kirimPesan(pesan) {
        return `Mengirim email ke ${this.penerima}: "${pesan}"`;
      }
    }
  
    class SMSNotification extends Notification {
      kirimPesan(pesan) {
        return `Mengirim SMS ke ${this.penerima}: "${pesan}"`;
      }
    }
  
    const email = new EmailNotification("andi@example.com");
    const sms = new SMSNotification("08123456789");
  
    console.log(email.kirimPesan("Selamat datang!"));
    console.log(sms.kirimPesan("Kode OTP Anda: 123456"));
  }
  