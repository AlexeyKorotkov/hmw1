// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str1='hello world'
console.log(str1.length);
let str11='lorem ipsum'
console.log(str11.length);
let str12='javascript is cool'
console.log(str12.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let str2='hello world';
console.log(str2.toLocaleUpperCase());
let str21='lorem ipsum';
console.log(str21.toLocaleUpperCase());
let str22='javascript is cool';
console.log(str22.toLocaleUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let str3='HELLO WORLD';
console.log(str3.toLocaleLowerCase());
let str31='LOREM IPSUM';
console.log(str31.toLocaleLowerCase());
let str32='JAVASCRIPT IS COOL';
console.log(str32.toLocaleLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str4 = 'Ревуть воли як ясла повні';
let split=str4.split(' ');
console.log(split);

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arr =[10,8,-7,55,987,-1011,0,1050,0];
let strArr=arr.map(String);
console.log(arr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

let nums = [11,21,3];
let sortNums=(nums, direction)=>{
    switch (direction){
        case'ascending':
            return nums.sort((a,b)=>a-b)
        case 'descending':
            return nums.sort((a,b)=>b-a)
    }
}
console.log(sortNums(nums,'ascending'))
console.log(sortNums(nums,'descending'))
// ==========================
// - є масив

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let arr1=coursesAndDurationArray.sort((a1,b1)=>a1.monthDuration-b1.monthDuration);
console.log(arr1)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let arr2=coursesAndDurationArray.filter((item)=>item.monthDuration>5);
console.log(arr2);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let arr3=coursesAndDurationArray.map((item,index)=>({...item,id:index+1}));
console.log(arr3);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)

let cards = [
    { cardSuit: 'spade', value: '6', color: 'black' },
    { cardSuit: 'diamond', value: '6', color: 'red' },
    { cardSuit: 'heart', value: '6', color: 'red' },
    { cardSuit: 'clubs', value: '6', color: 'black' },
    { cardSuit: 'spade', value: '7', color: 'black' },
    { cardSuit: 'diamond', value: '7', color: 'red' },
    { cardSuit: 'heart', value: '7', color: 'red' },
    { cardSuit: 'clubs', value: '7', color: 'black' },
    { cardSuit: 'spade', value: '8', color: 'black' },
    { cardSuit: 'diamond', value: '8', color: 'red' },
    { cardSuit: 'heart', value: '8', color: 'red' },
    { cardSuit: 'clubs', value: '8', color: 'black' },
    { cardSuit: 'spade', value: '9', color: 'black' },
    { cardSuit: 'diamond', value: '9', color: 'red' },
    { cardSuit: 'heart', value: '9', color: 'red' },
    { cardSuit: 'clubs', value: '9', color: 'black' },
    { cardSuit: 'spade', value: '10', color: 'black' },
    { cardSuit: 'diamond', value: '10', color: 'red' },
    { cardSuit: 'heart', value: '10', color: 'red' },
    { cardSuit: 'clubs', value: '10', color: 'black' },
    { cardSuit: 'spade', value: 'jack', color: 'black' },
    { cardSuit: 'diamond', value: 'jack', color: 'red' },
    { cardSuit: 'heart', value: 'jack', color: 'red' },
    { cardSuit: 'clubs', value: 'jack', color: 'black' },
    { cardSuit: 'spade', value: 'queen', color: 'black' },
    { cardSuit: 'diamond', value: 'queen', color: 'red' },
    { cardSuit: 'heart', value: 'queen', color: 'red' },
    { cardSuit: 'clubs', value: 'queen', color: 'black' },
    { cardSuit: 'spade', value: 'king', color: 'black' },
    { cardSuit: 'diamond', value: 'king', color: 'red' },
    { cardSuit: 'heart', value: 'king', color: 'red' },
    { cardSuit: 'clubs', value: 'king', color: 'black' },
    { cardSuit: 'spade', value: 'ace', color: 'black' },
    { cardSuit: 'diamond', value: 'ace', color: 'red' },
    { cardSuit: 'heart', value: 'ace', color: 'red' },
    { cardSuit: 'clubs', value: 'ace', color: 'black' },
];

// - знайти піковий туз
let card=cards.find((card)=>card.cardSuit==='spade'&& card.value==='ace');
console.log(card)
// - всі шістки
let arr4=cards.filter((card)=>card.value==='6');
console.log(arr4)
// - всі червоні карти
let arr5=cards.filter((card)=>card.color==='red');
console.log(arr5)
// - всі буби
let arr6=cards.filter((card)=>card.cardSuit==='diamond');
console.log(arr6)
// - всі трефи від 9 та більше
let arr7=cards.filter((card)=>['9','10','jack','queen','king','ace'].includes(card.value)&& card.cardSuit==='clubs');
console.log(arr7)

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let arr8=cards.reduce((accumulator,cu)=>{
    switch (cu.cardSuit) {
        case'spade':
            accumulator.spades.push(cu);
            break;
        case'diamond':
            accumulator.diamonds.push(cu);
            break;
        case'heart':
            accumulator.hearts.push(cu);
            break;
        case'clubs':
            accumulator.clubs.push(cu);
            break;


    }
    return accumulator;
},{spades:[],diamonds:[],hearts:[],clubs:[]})
console.log(arr8)


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


// --написати пошук всіх об'єктів, в який в modules є sass

let arr9 = coursesArray.filter((item) => item.modules.includes('sass'));
console.log(arr9);

// --написати пошук всіх об'єктів, в який в modules є docker

let arr10 = coursesArray.filter((item) => item.modules.includes('docker')
);
console.log(arr10);
