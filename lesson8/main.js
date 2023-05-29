// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;



}
let Users=[
    new User(1,'vasya','pupkin',1354,101),
    new User(2,'petya','pukin',1265,102),
    new User(3,'lena','poupa',6545,103),
    new User(4,'klava','koka',6946,104),
    new User(5,'pavlo','pen',6541,105),
    new User(6,'bruce','lee',6547,106),
    new User(7,'galya','faina',32148,107),
    new User(8,'alla','lun',65441,108),
    new User(9,'gena','na',44564,109),
    new User(10,'fredy','cruger',654548,110)

];
console.log(Users)


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;



}
let sipleUsers1=[
    new User(13,'vasya','pupkin',1354,101),
    new User(24,'petya','pukin',1265,102),
    new User(53,'lena','poupa',6545,103),
    new User(48,'klava','koka',6946,104),
    new User(15,'pavlo','pen',6541,105),
    new User(69,'bruce','lee',6547,106),
    new User(77,'galya','faina',32148,107),
    new User(8,'alla','lun',65441,108),
    new User(99,'gena','na',44564,109),
    new User(110,'fredy','cruger',654548,110)


];


let filteredUsers = sipleUsers1.filter(user => user.id % 2 === 0);

console.log(filteredUsers);

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname , email, phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;



}
let Users2=[
    new User(5,'vasya','pupkin',1354,101),
    new User(7,'petya','pukin',1265,102),
    new User(54,'lena','poupa',6545,103),
    new User(14,'klava','koka',6946,104),
    new User(53,'pavlo','pen',6541,105),
    new User(68,'bruce','lee',6547,106),
    new User(77,'galya','faina',32148,107),
    new User(28,'alla','lun',65441,108),
    new User(989,'gena','na',44564,109),
    new User(210,'fredy','cruger',654548,110)

];
console.log(Users2.sort((user1,user2)=>user1.id-user2.id));

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname , email, phone,order ) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order= order
    }
}
let clients=[
    new Client(1,'vasya','pupkin',1354,101,['milk', 'water']),
    new Client(2,'petya','pukin',1265,102,['tomato','tea','cola']),
    new Client(3,'lena','poupa',6545,103,['potato','beer']),
    new Client(14,'klava','koka',6946,104,['cheese','bread']),
    new Client(53,'pavlo','pen',6541,105,['apple','sandwich']),
    new Client(68,'bruce','lee',6547,106,['apple,','milk']),
    new Client(77,'galya','faina',32148,107,['bread','coffe']),
    new Client(28,'alla','lun',65441,108,['juice','ice']),
    new Client(989,'gena','na',44564,109,['cherry','potato']),
    new Client(210,'fredy','cruger',654548,110,['beer','milk'])

]
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//

class Client1{
    constructor(id, name, surname , email, phone,order ) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order= order
    }
}
let clients1=[
    new Client(1,'vasya','pupkin',1354,101,['milk', 'water']),
    new Client(2,'petya','pukin',1265,102,['tomato','tea','cola']),
    new Client(3,'lena','poupa',6545,103,['potato','beer']),
    new Client(14,'klava','koka',6946,104,['cheese','bread']),
    new Client(53,'pavlo','pen',6541,105,['apple','sandwich']),
    new Client(68,'bruce','lee',6547,106,['apple,','milk']),
    new Client(77,'galya','faina',32148,107,['bread','coffe']),
    new Client(28,'alla','lun',65441,108,['juice','ice']),
    new Client(989,'gena','na',44564,109,['cherry','potato']),
    new Client(210,'fredy','cruger',654548,110,['beer','milk'])

]
console.log(clients1.sort((client1,client2) => client1.order.length-client2.order.length));


//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car (model,manufacturer,year,maxSpeed,volumeEngine){
    this.model=model;
    this.manufacturer=manufacturer;
    this.year=year;
    this.maxSpeed=maxSpeed;
    this.volumeEngine=volumeEngine;
    this.drivers=[]
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {

        console.log(`model: ${this.model}`);
        console.log(`manufacturer: ${this.manufacturer}`);
        console.log(`year: ${this.year}`);
        console.log(`maxSpeed: ${this.maxSpeed}`)
        console.log(`volumeEngine: ${this.volumeEngine}`);
        console.log(`drivers: ${JSON.stringify(this.drivers)}`);

    }
    this.increaseMaxSpeed = function (newSpeed) {
        newSpeed = this.maxSpeed + newSpeed;
        this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (name, age) {
        this.drivers.push(new Driver(name, age));
    }
}
function Driver(name, age) {
    this.name = name;
    this.age = age;
}
let car = new Car('octavia', 'scoda', '2006', 180, 1.6);
car.drive()
car.info()
car.increaseMaxSpeed(260)
car.info()
car.changeYear(2023)
car.info()
car.addDriver('Andrey', 46 );
car.addDriver('Fillip', 36);
car.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car1 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info = function () {
        console.log(`------- INFO -------`);
        console.log(`model: ${this.model}`);
        console.log(`producer: ${this.producer}`);
        console.log(`year: ${this.year}`);
        console.log(`maxSpeed: ${this.maxSpeed}`)
        console.log(`volume: ${this.volume}`);
        console.log(`drivers: ${JSON.stringify(this.driver)}`);
        console.log(`------- INFO -------`);
    }

    increaseMaxSpeed(newSpeed) {
        newSpeed = this.maxSpeed + newSpeed;
        this.maxSpeed = newSpeed < 0 ? 0 : newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver = {name: 'Gena', age: 31}) {
        this.driver = driver;
    }
}

let car1 = new Car('octavia', 'scoda', '2006', 180, 1.6);
car1.drive()
car1.info()
car1.increaseMaxSpeed(260)
car1.info()
car1.changeYear(2023)
car1.info()
car1.addDriver({name: 'Andrey', age: 46});
car1.addDriver({name: 'Fillip', age: 36});
car1.info();

// 1-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class women {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


class Popelushka extends women {
    constructor(name, age, foot) {
        super(name, age);
        this.foot = foot;
    }
}

class Prince extends women {
    constructor(name, age, boot) {
        super(name, age);
        this.boot = boot;
    }
    findPrincess1(arr) {

        for (let princess of arr) {
            if (princess.foot === this.boot) {
                return princess;
            }
        }
    }
    findPrincess2(arr) {
        return arr
            .sort((a, b) => a.age - b.age)
            .find((princess) => princess.foot === this.boot);
    }
}

let popelArr = [
    new Popelushka('Sabrina', 57, 46),
    new Popelushka('Alina', 22, 36),
    new Popelushka('Tamara', 17, 45),
    new Popelushka('Anna', 17, 37),
    new Popelushka('Inna', 30, 38),
    new Popelushka('Rita', 30, 39),
    new Popelushka('Olga', 17, 39),
    new Popelushka('Irina', 18, 34),
    new Popelushka('Oksana', 25, 35),
    new Popelushka('Tanya', 29, 40),
];
let prince = new Prince('Taras', 21, 39);
console.log(prince.findPrincess1(popelArr));
console.log(prince.findPrincess2(popelArr));

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку