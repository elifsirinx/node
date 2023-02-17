
//Artık terminale npm start yazdığımız zaman packege.json script kısmına eklediğimiz start scripti calisacak

//var slugify = require("slugify");//Normalde package.json kısmına "type":"module" eklemediğimiz zaman doğru çalışıyor.

//Ancak ES6 ile birlikte artık aşağıdaki şekilde import etmeliyiz. "type":"module"

import slugify from "slugify"; //ES6 kullanımı
import Toplama, { cikar, hello, helloName , text,user, users} from "./my-module.js";

const title = slugify("some string lorem ipsum","*");
const toplaConsole = Toplama(3,4);
const cikarConsole = cikar(4,3);
const textConsole = text;


console.log("Slugify = " + title);
console.log("Toplam = " + toplaConsole);
console.log("Çıkar = " + cikarConsole);
hello();
helloName("elif" , "hosgeldin");
console.log("Text = " + textConsole);
console.log(user);
console.log(users);


