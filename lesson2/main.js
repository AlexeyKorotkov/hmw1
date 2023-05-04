                              // Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr=[1, 'hello', 123, true, false, 3, 'name', 8, 15, 25]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Bukvar',
    pageCount: 101,
    genre: 'training manual',
}
let book2={
    title: 'Metro2033',
    pageCount: 325,
    genre: 'postapocalyptic'
}
let book3= {
    title: 'Ognivo',
    pageCount: 180,
    genre: 'fairy tale'
}
console.log(book1,book2,book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book11 = {
    title: "Конёк Горбунок",
    pageCount: 230,
    genre: 'fairy tale',
    authors: [
        {name: 'П.Ершов', age: 62}
    ],
}

console.log(book11)

let book12= {
    title: 'Шерлок Холмс',
    pageCount: 350,
    genre: 'detective',
    authors: [
        {name: 'Artur', age: 55}
    ],
}

console.log(book12)

let book13={
    title:'Luntic',
    pageCount:133,
    genre:'child',
    authors: [
        {name:'Petya',age:33}
    ],
}
console.log(book13)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    {name:'petro', username:'petya',password:'h123'},
    {name:'bob', username:'marley',password:'rasta1'},
    {name:'che', username:'guуvara',password:'revolution2'},
    {name:'bart', username:'simpson',password:'cart3'},
    {name:'devid', username:'gueta',password:'club4'},
    {name:'paco', username:'raban',password:'perfum'},
    {name:'skoda', username:'oktavia',password:'auto'},
    {name:'bruce', username:'lee',password:'karate'},
    {name:'nikolai', username:'kolyan',password:'kol2'},
    {name:'ben', username:'aflek',password:'actor'},

]
console.log(users[0]["password"])
console.log(users[1]["password"])
console.log(users[2]["password"])
console.log(users[3]["password"])
console.log(users[4]["password"])
console.log(users[5]["password"])
console.log(users[6]["password"])
console.log(users[7]["password"])
console.log(users[8]["password"])
console.log(users[9]['password'])

                              //  Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x1=3;

  if (x1 !==0) {
      console.log('Вірно')


  }else(x1===0)
      console.log('Невірно')



     // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
     //                          (в першу, другу, третю или четверту частину години).

let time=+prompt('Розрахунок четверті години від 0 до 59')
     if (time<=15){
         console.log('Перша четверть');
     }else if (time>15&&time<=30) {
         console.log('Друга четверть');
     }else if (time>30&&time<=45) {
         console.log('Третя четверть');
     }else if (time>45&&time<=60) {
         console.log('Четверта четверть')
     }

     // У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=prompt('Введіть день')
      if (day<=10){
          console.log('Перша декада');
      }else if(day>10&&day<=20) {
          console.log('Друга декада')
      }else if(day>20&&day<=31){
          console.log('Третя декада')
      }

      // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let plan=prompt('Який план')
      switch (plan){
          case '1':
             console.log('sunday');
            break;
          case '2':
              console.log('monday');
              break;
          case '3':
              console.log('tuesday');
              break;
          case '4':
              console.log('wednesday');
              break;
          case '5':
              console.log('thursday');
              break;
          case '6':
              console.log('friday');
              break;
          case '7':
              console.log('saturday');
              break;


          // default:
          //     console.log('unknown')

      }

      // - Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.

 let number1= 3;
      let number2=7;
     if(number1<number2){
         console.log('второе больше',number2)
     }else if(number1>number2){
         console.log('первое больше',number1)
     }else{
         console.log('равные числа')
     }

     // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

 let x=-0;
     if(x==='' || x===null || x===undefined || x===-0){
         x='default';
     }
     console.log(x);

     // - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


                                  let coursesAndDurationArray = [
                                      {title: 'JavaScript Complex', monthDuration: 5},
                                      {title: 'Java Complex', monthDuration: 6},
                                      {title: 'Python Complex', monthDuration: 6},
                                      {title: 'QA Complex', monthDuration: 4},
                                      {title: 'FullStack', monthDuration: 7},
                                      {title: 'Frontend', monthDuration: 4}
                                      ]
                              if(coursesAndDurationArray[0].monthDuration>5){
                              console.log(coursesAndDurationArray[0].title,"Супер")
                              }if(coursesAndDurationArray[1].monthDuration>5){
                              console.log(coursesAndDurationArray[1].title,"Супер")
                              }if(coursesAndDurationArray[2].monthDuration>5){
                              console.log(coursesAndDurationArray[2].title,"Супер")
                              }if(coursesAndDurationArray[3].monthDuration>5){
                              console.log(coursesAndDurationArray[3].title,"Супер")
                              }if(coursesAndDurationArray[4].monthDuration>5){
                              console.log(coursesAndDurationArray[4].title,"Супер")
                              }if(coursesAndDurationArray[5].monthDuration>5){
                              console.log(coursesAndDurationArray[5].title,"Супер")
                              }