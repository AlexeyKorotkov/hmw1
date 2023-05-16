// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!

//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calc=(a,b)=> a+b;
console.log(calc(5,5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let circle=(r)=>Math.PI*r**2;
console.log(circle(3))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylinder=(h,ar)=>Math.PI*2*ar*h;
console.log(cylinder(7,8))

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 25, 'gold',true];
let printArray = (arr) => console.log(arr);
printArray(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createParagraph=(text)=>document.write(`<div><p>${text}</p></div>`)
   createParagraph('HELLO!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let createUl=(text)=>document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)
createUl('OKTEN');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUl1=(text,count)=>{
    document.write(`<ul>`);
    for(let i=0;i<count;i++)
        document.write(`<li>${text}</li>`)
    document.write(`</ul>`);


}

createUl1('SCHOOL',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array2=[3,5,'victory',false,'hdgfhj',true];
let writer3=(arr)=>{
    document.write(`<ul>`);
    for(let item of arr){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`);
}
writer3(array2);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users=[
    {id:1,name:'Petro',age:37},
    {id:2,name:'Pavlo',age:27},
    {id:3,name:'Roman',age:17},
    {id:4,name:'Gena',age:42},
    {id:5,name:'Shura',age:21},
];
let usersScanner=(arr)=>{
    for(let user of arr){
        document.write(`<div>id:${user.id}-name:${user.name}-age:${user.age}</div>`)
    }
}
usersScanner(users)

// - створити функцію яка повертає найменьше число з масиву

let arrayNum=[24,-12,515,0,-19,55];
let arrayMin=(arr)=>{
    let result=arr[0];
    for(let i=0;i<arr.length;i++){
        if(result>arr[i]){
            result=arr[i];
        }
    }
    return result;


}
console.log(arrayMin(arrayNum))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum=(arr)=>{
    let result=0;
    for(let number of arr){
        result+=number;
    }
    return result;

}
console.log(sum([1,2,10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap1=(arr,index1,index2)=>{
    let value1=arr[index1];
    let value2=arr[index2];
    arr[index1]=value2;
    arr[index2]=value1;
    return arr;
}
console.log( swap1([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let exchange =(sumUAH,currencyValues,exchangeCurrency)=>{
    for (let item of currencyValues){
        if(item.currency===exchangeCurrency){
            return sumUAH/ item.value;
        }
    }

}
let result=exchange(
    10000,
    [{currency:'USD',value:40},{currency:'EUR',value:42}],
    'USD'
);
console.log(result);