/*TASK 1 DONE
Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, 
що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), 
поточну робочу директорію і назву файлу сервера (використати модуль path). 

const http = require("http");
const os = require("os");
const path = require("path")

http.createServer(function (request, response) {
    // Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    const userName = os.userInfo().username;
    const typeOs = os.type(); //тип ос
    const workTime = os.uptime(); //час роботи ос в хв
    const directory = __dirname; //виведе назву папки з усім шляхом до неї
    const serverFileName = path.basename(__filename); //виведе просто назву файлу, без шляху
    
    // Send the response body with the user's name...
    response.end(`<h1>System information</h1> <br> Current user name: ${userName} <br> Type OS: ${typeOs} <br> System work time: ${workTime} minutes <br> 
    Current work directory: ${directory} <br> Server file name:  ${serverFileName}`);

}).listen(5000);

// Console will print the message
console.log('Server running at http://127.0.0.1:5000/');  */



/* TASK 2
Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом 
та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати 
об’єкт module.exports. 
Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку: 


const http = require("http");
const pm = require('./personalmodule'); 
const os = require('os')

http.createServer(function (request, response) {
    // Send the HTTP header with HTTP Status: 200=OK, Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/html'});
    const user = os.userInfo().username;
    response.end(pm(user));

}).listen(8000); */



/*TASK 3 
Створіть просту програму на Node.js, яка записує у файл текстову інформацію, яку користувач вводить з адресного рядка, а потім зчитує цей файл та виводить вміст на екран.
Кроки:
Створити змінну, яка зберігатиме шлях до файлу, у який буде записана інформація.
Використовуючи модуль fs (file system), створити функцію, яка дозволить записувати інформацію в файл.
Використовуючи модуль http, створити сервер, який буде прослуховувати запити з адресного рядка та передавати отриману інформацію функції writeToTextFile().
Для зчитування даних з файлу, використовуйте модуль fs та функцію readFile()
Для того, щоб вивести зчитану інформацію на екран, додайте відповідну логіку до серверу. 

const http = require("http");
const fs = require("fs");
const url = require("url");

const filePath = "test.txt";

function writeToTextFile(information) {
  fs.writeFile(filePath, information, (err) => {
    if (err) {
      console.log("EROR: " + err);
    } else console.log("Information was written to your file!");
  });
}

http
  .createServer(function (request, response) {
    const query = url.parse(request.url, true).query;
    const userInput = query.information;

    if (userInput) {
      writeToTextFile(userInput);
      response.writeHead(200, { "Content-Type": "text/html" });
      console.log("Information was written to your file!");
    } else {
      fs.readFile(filePath, "utf8", (err, information) => {
        if (err) {
          console.error("Error reading file:" + err);
          response.writeHead(500, { "Content-Type": "text/html" });
          response.end("Error reading file.");
        } else {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.end(`File content: ${information}`);
        }
      });
    }
  })

  .listen(8000);

console.log("Server running at http://127.0.0.1:8000/");  */
