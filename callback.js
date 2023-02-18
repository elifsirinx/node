// setTimeout(() => {
//     console.log("Merhaba");
// }, 2000);

// setInterval(() => {
//     console.log("Merhaba ben her samiye calisacagim");
// },1000);

// const sayHello = (cb) => {
//     cb();
// } //Parametre olarak cb isimli bir fonksiyon yolladık.

// sayHello(()=> {//Fonksiyon parametresini burada verdik.
//     console.log("Hello");
// });

import fetch from "node-fetch";
// // FETCH : Js'de herhangi bir veri kaynağından end pointten veriyi çekerek bize gösteren fonksiyondur.
// //Bir tane fake api bularak deneme yapabiliriz.
// fetch("https://jsonplaceholder.typicode.com/users")//İlgili endpointi verdik.
// .then((data)=>data.json())
// .then(users => console.log(users));//Bana bir data gelsin ve o datayı loglayayım.
// //Eğer node fetch kurmadısanız hata alır.
// //npm i node-fetch diyerek bu kütüphaneyi kurmalıyız.

//1. ASENKRON İŞLEM GÖSTERİMİ

//Aşağıdaki iki işlem asenkron işlemler olduğu için çalışma sıralarını bilemeyiz.

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data) => data.json())
// .then((users)=>{
//     console.log("Users Yuklendi!", users);
// });

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((data) => data.json())
// .then((post)=>{
//     console.log("Post Yuklendi!", post);
// });

//2. SENKRON İŞLEM (İŞLEMLERİ SIRAYA KOYMAK İSTERSEK)

//2.1 KARMAŞIK KOD
//Undo comment shortcut Command+K+U
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users Yuklendi!", users);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((post) => {
//         console.log("Post1 Yuklendi!", post);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((post) => {
//             console.log("Post 2 Yuklendi!", post);
//           });
//       });
//   });

//2.2 ASYNC-AWAIT İLE YAZILAN KOD
//Eğer await cümlesini koymazsak oradan beklemez bir sonraki satıra devam eder.
// async function getData() {
//   const users = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//   ).json();

//   const post1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/Posts/1")
//   ).json();

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/Posts/2")
//   ).json();

//   console.log("Users", users);
//   console.log("Post 1", post1);
//   console.log("Post 2", post2);
// }
// getData();

//2.2.1 Eğer getData() diye fonksiyon yazmak istemezsek
//Anonim fonksiyon oluşturabiliriz.

(async () => {
  const users = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  const post1 = await (
    await fetch("https://jsonplaceholder.typicode.com/Posts/1")
  ).json();

  const post2 = await (
    await fetch("https://jsonplaceholder.typicode.com/Posts/2")
  ).json();

  console.log("Users", users);
  console.log("Post 1", post1);
  console.log("Post 2", post2);
})();
