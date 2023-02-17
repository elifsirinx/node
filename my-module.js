
/* function topla(a,b){
    return a+b;
} */

// Yukarıdaki fonksiyon tanımını aşağıdaki gibi yazılabilir.
//Arrow function
/*const topla = (a,b) => {
    return a+b;
} */

// Hatta return yazmadan aşağıdaki gibi yazılabilir.
export default (a,b) => a+b;

const hello = () => {
    console.log("Hello")
};

const helloName =(name , message) => {
    console.log("Hello " + name , " " + message);
    console.log(`Hello ${name} ${message} `) // ES6 ile birlikte yeni kullanım `=>opt+, tuşu back-tick, $ => opt+4
}

const cikar = (a,b) => a-b;

const text = 'Text';

const user = {
    name: 'Elif',
    surname:'Sirin'
};

const users = [{
    name:'Ali',
    surname:'Yıldız'

},
{
    name:'Merve',
    surname:'Sak'
}];
export {hello, helloName, cikar,text, user, users};
