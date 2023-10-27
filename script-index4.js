var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot === 8) {
        console.log('Angkot no. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Anskot no. ' + noAngkot + ' sedang tidak beroperasi');
    }
}