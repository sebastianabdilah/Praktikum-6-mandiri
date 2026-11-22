const namaMahasiswa = "Sebastian Abdilah";
const nilaiTugas = 80;
const nilaiUTS = 70;
const nilaiUAS = 90;

const nilaiAkhir = (nilaiTugas * 0.3) + (nilaiUTS * 0.3) + (nilaiUAS * 0.4);

let status;
if (nilaiAkhir >= 60) {
  status = "LULUS";
} else {
  status = "TIDAK LULUS";
}

console.log("Nama Mahasiswa : " + namaMahasiswa);
console.log("Nilai Akhir    : " + nilaiAkhir);
console.log("Status         : " + status);