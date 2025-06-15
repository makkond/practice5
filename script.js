"use strict"; // Активує строгий режим
console.log("Підключено JavaScript для Практичної роботи №1");

// 1. Робота в DevTools
console.log("Hello from external file!");

// 2. Strict mode — помилка при неоголошеній змінній
// x = 10; // ❌ ReferenceError, бо x не оголошена

// 3. Змінні та область видимості
let age = 25;
const PI = 3.14;
var name = "John";

{
  let blockVar = "Я у блоці";
  console.log(blockVar); // Працює
}
// console.log(blockVar); // ❌ ReferenceError

// Зміна значення змінної
let counter = 10;
counter++;
console.log("Counter:", counter);

// 4. Типи даних і typeof
console.log(typeof 42); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (особливість JS)
console.log(typeof undefined); // undefined
console.log(typeof { name: "JS" }); // object
console.log(typeof Symbol("id")); // symbol
console.log(typeof 10n); // bigint

// 5. Перетворення типів
console.log(Number("123")); // 123
console.log(String(123)); // "123"
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true

// 6. Взаємодія з користувачем
alert("Ласкаво просимо до анкети!");

let userName = prompt("Введіть ваше ім'я:");
let userAge = Number(prompt("Введіть ваш вік:"));
let userCity = prompt("З якого ви міста?");
let userColor = prompt("Ваш улюблений колір?");
let isWorking = confirm("Ви зараз працюєте?");

let isAdult = userAge >= 18;

console.log("Ім'я:", userName, "| Тип:", typeof userName);
console.log("Вік:", userAge, "| Тип:", typeof userAge);
console.log("Місто:", userCity, "| Тип:", typeof userCity);
console.log("Колір:", userColor, "| Тип:", typeof userColor);
console.log("Працює:", isWorking, "| Тип:", typeof isWorking);
console.log("Повнолітній:", isAdult);

// 7. Виведення результату
const summary = `
АНКЕТА КОРИСТУВАЧА:
Ім'я: ${userName}
Вік: ${userAge}
Місто: ${userCity}
Улюблений колір: ${userColor}
Працює: ${isWorking ? "так" : "ні"}
Повнолітній: ${isAdult ? "так" : "ні"}
`;

alert(summary);
console.log(summary);
