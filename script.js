const prefix = ' cm²';

// ***************** Menghitung Luas Segitiga *****************

// ------------------ Versi Function ------------------

// const hitungLuasSegitiga = (alas, tinggi) => {
//   console.log(0.5 * alas * tinggi + prefix);
// };

// hitungLuasSegitiga(10, 12);

// ------------------ Versi Prompt ------------------

// const alas = prompt('Masukkan alas segitiga');

// const tinggi = prompt('Masukkan tinggi segitiga');

// const luas = 0.5 * parseInt(alas) * parseInt(tinggi);

// console.log(`${luas}${prefix}`);

// ***************** Menghitung Luas Lingkaran *****************

// ------------------ Versi Function ------------------

// const hitungLuasLingkaran = (r) => {
//   return Math.round(Math.PI * Math.pow(r, 2));
// };

// let luasLingkaran = hitungLuasLingkaran(7);

// console.log(`${luasLingkaran}${prefix}`);

// ------------------ Versi Prompt ------------------

// const PI = 3.14159;

// const jariJari = prompt('Masukkan jari jari lingkaran');

// console.log(Math.round(PI * parseInt(jariJari) ** 2) + prefix);

// ***************** Tampilkan Nilai Object *****************

// const obj = {
//   first: 'Erwin',
//   last: 'Hartanto',
//   age: 23,
//   isAlive: true,
//   girlFriend: null,
//   hobbies: ['Coding', 'Gaming', 'Drawing'],
//   address: {
//     fullAddress: 'Jl. Ini Adalah Jalan',
//     zipcode: '23307',
//     province: 'North Sumatra',
//   },
// };

// ------------------ Versi Destructuring ------------------

// const { first, age, isAlive, girlFriend: soulmate, hobbies, address } = obj;

// console.log(first);
// console.log(age);
// console.log(isAlive);
// console.log(soulmate);
// for (item of hobbies) {
//   console.log(`${first}'s hobbies are ${item}`);
// }
// console.log(address.zipcode);

// ------------------ Versi Tradisional ------------------

// console.log(obj.first);
// console.log(obj.age);
// console.log(obj.isAlive);
// console.log(obj.girlFriend);
// console.log(obj.hobbies[0]);
// console.log(obj.address.zipcode);

// ***************** Tampilkan Nilai Array *****************

// ------------------ Versi forEach ------------------

// const arr = [1, 'Erwin', null, true, undefined];

// arr.forEach((item) => {
//   console.log(item);
// });

// ------------------ Versi Destructuring ------------------

// const [nomor, nama, iniApa, betul, apaIni] = arr;

// console.log(nomor, nama, iniApa, betul, apaIni);

// ------------------ Versi Spread ------------------

// console.log(...arr);
