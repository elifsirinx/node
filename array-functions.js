const users = [
  { name: "Elif", age: 25 },
  { name: "Merve", age: 23 },
  { name: "Sirin", age: 17 },
  { name: "Elif", age: 15 },
  { name: "Elif", age: 18 },
];

/*
push
map
find
filter
some
every
includes
*/

//PUSH: Array sonuna yeni eleman eklemek
// users.push("Ayse");
// users.push("Ali");
// console.log(users);

//MAP: Array içinde tek tek dönüyor. For kullanmaya gerek kalmıyor.
// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }
//Yukarıdaki yerine
// users.map((item) => {
//   console.log(item.name);
// });

//FIND: Array içinde verilen koşullarda arama işlemi yapar.
//Eğer koşullara uyan bir item yokse undefined döner.
//Eğer koşullara uyan birden fazla eleman varsa bulduğu ilk elemanı döner.
// const findIt = users.find((item) => item.name === "Elif" && item.age < 20);
// console.log(findIt);

//FILTER: Array içinde filtreleme yapar.
//Filtreye uyan bütün elemanları döner.
//const filtered = users.filter((item) => item.name === "Elif" && item.age < 25);
// //Eğer item. sürekli yazmak istemezsek, aşağıdaki şekilde kodu düzenleyebiliriz.
// const filtered = users.filter(({ name, age }) => name === "Elif" && age < 25);
// console.log(filtered);

//SOME: Arrayın içindeki elemanlerın herhangi biri uyarsa true değilse false döner.
// const some = users.some((item) => item.age === 11);
// console.log(some);

//EVERY: Arrayın içindeki elemanların tümü şarta uyarsa true değilse fal döner.
// const every = users.every((item) => item.age < 21);
// console.log(every);

//INCLUDES: Arrayın içinde verilen sabit varsa true değilse false döner.

const meyveler = ["elma", "armut", "muz"];
const isIncluded = meyveler.includes("kivi");
console.log(isIncluded);
