// var jumlahAngkot = 10;
// var angkotBeroperasi = 4;
// var noAngkot = 1;

// for (noAngkot; noAngkot <= 10; noAngkot++) {
//     if (noAngkot <= angkotBeroperasi) {
//         console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
//     } else if (noAngkot === 5) {
//         console.log('Angkot no. ' + noAngkot + ' sedang lembur');
//     } else if (noAngkot === 6) {
//         console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
//     } else if (noAngkot === 8 || noAngkot === 10) {
//         console.log('Angkot no. ' + noAngkot + ' sedang lembur');
//     } else {
//         console.log('Anskot no. ' + noAngkot + ' sedang tidak beroperasi');
//     }
// }

var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= 10; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
    } else if (noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot no. ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Anskot no. ' + noAngkot + ' sedang tidak beroperasi');
    }
}