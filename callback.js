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

//import fetch from "node-fetch";
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

// (async () => {
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
// })();

//3 AXIOS KÜTÜPHANESİ
//Bize hep data isimli jsonlar döner. Bu kısımları yeniden isimlendirdik.
// import axios from "axios";
// (async () => {
//   const { data: users } = await axios(
//     "https://jsonplaceholder.typicode.com/users"
//   ); //data kısmını users olarak yeniden isimlendirmiş olduk.

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/Posts/1"
//   );

//   const { data: post2 } = await axios(
//     "https://jsonplaceholder.typicode.com/Posts/2"
//   );

//   console.log("Users", users);
//   console.log("Post 1", post1);
//   console.log("Post 2", post2);
// })();

//PROMISE
//.then li fonksiyon yazılmasını sağlar.
// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     //Resolve: İşlem başarılı çalıştığında çalışan kod. Daha sonra .then li kısım çalışır.
//     //Reject: İşlemde bir problem olduğunda .catch li kısma düşer
//     if (number == 1) {
//       resolve({ text: "Resolve" });
//     }
//     reject("Bir problem oluştu");
//   });
// };
// getComments(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

//PROMISE AXIOS
import axios from "axios";
const getUser = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    resolve(data);
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );
    resolve(data);
    //reject("Bir sorun oluştu");
  });
};

//Sıralı olması için async-await kullanarak anomim bir fonksiyon yazdık.
//KARMAŞIK KOD PARÇASI
// (async () => {
//   await getUser()
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));

//   await getPost(1)
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e));
// })();
//YUKARIDAKİ İŞİ YAPAN DÜZENLENMİŞ KOD PARÇASI
// (async () => {
//   try {
//     const users = await getUser();
//     const post1 = await getPost(1);

//     console.log(users);
//     console.log(post1);
//   } catch (e) {
//     console.log(e);
//   }
// })();

//PROMISE ALL
Promise.all([getUser(), getPost(1)])
  .then(console.log)
  .catch(console.log);
