// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calc(a,b){
    let result=a + b;
    return result;

}
let r1=calc(3, 5);

console.log(r1)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circle (sr) {
    let result1=Math.PI*sr**2;
    return result1;

}
let sr=circle(8)
console.log(sr)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinder(h,r){
    let result2=Math.PI*2*r*h;
    return result2;

}
let r=cylinder(5,2)
console.log(r)

// - створити функцію яка приймає масив та виводить кожен його елемент

let array=[3,5,'victory',false];
function arrScanner(arr){
    for(const item of arr){
        console.log(`item:${item}`)
    }


}
arrScanner(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function writer (textContent){
    document.write('<div>');
    document.write(`<p>${textContent}</p>`);
    document.write('</div>');


}
writer ('Simple word');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function writer1(textContent){
    document.write('<ul class="items">');
    document.write(`<li>${textContent}</li>`)
    document.write(`<li>${textContent}</li>`)
    document.write(`<li>${textContent}</li>`)
    document.write('</ul>');
}
writer1('Names')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function writer2(text,count){
    document.write(`<ul>`);
    for(let i=0;i<count;i++)
    document.write(`<li>${text}</li>`)
    document.write(`</ul>`);
}
writer2('Super',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array2=[3,5,'victory',false,'hdgfhj',true];
function writer3(arr){
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
]
function usersScanner(arr){
    for(let user of arr){
        document.write(`<div>id:${user.id}-name:${user.name}-age:${user.age}</div>`)
    }
}
usersScanner(users)

// - створити функцію яка повертає найменьше число з масиву

let arrayNum=[24,-12,515,0,-19,55];
function arrayMin(arr){
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

function sum(arr){
    let result=0;
    for(let number of arr){
        result+=number;
    }
    return result;

}
console.log(sum([1,2,10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap1(arr,index1,index2){
    let value1=arr[index1];
    let value2=arr[index2];
    arr[index1]=value2;
    arr[index2]=value1;
    return arr;
}
console.log( swap1([11,22,33,44],0,1));
// function swap2(arr,index1,index2){
//   [arr[index1],arr[index2]]=[arr[index2],arr[index1]]
//     return arr;
// }
// swap2([11,22,33,44],0,1);


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange (sumUAH,currencyValues,exchangeCurrency){
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
