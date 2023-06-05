// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form1=document.form1;
// console.log(form1);
// console.log(form1.name.value);
// console.log(form1.surname.value);
// console.log(form1.age.id);
console.log(form1);
form1.name.addEventListener('input',function (e){
    console.log(this.value);

});
form1.surname.addEventListener('input',function (e){
    console.log(this.value)
});
form1.age.addEventListener('input',function (e) {
    console.log(this.value)

});

// ==========================

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let target=document.getElementsByClassName('target')[0];
target.onclick=function (){
    console.log('Check');
}
// form1.onsubmit=function (e){
//     e.preventDefault();
//     console.log('check');
// };
// ==========================

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let json = localStorage.getItem('sessions');
let sessions = json ? JSON.parse(json) : [];

for (const session of sessions) {
    let wrapper = document.createElement('div');
    let date = document.createElement('div');
    let time = document.createElement('div');

    let dateObj = formatDate(session.date);

    console.log(dateObj)
    date.innerText = `Date: ${dateObj.YYYY} / ${dateObj.MM} / ${dateObj.DD}`;
    time.innerText = `Time: ${dateObj.hh}:${dateObj.mm}:${dateObj.ss}`;
    wrapper.append(date, time);
    document.body.appendChild(wrapper);
}
function formatDate(date){
    let dateObj = new Date(date);
    let YYYY  = dateObj.getFullYear().toString();
    let MM  = (dateObj.getMonth() + 1).toString();
    let DD  = dateObj.getDate().toString();
    let hh  = dateObj.getHours().toString();
    let mm  = dateObj.getMinutes().toString();
    let ss  = dateObj.getSeconds().toString();

    return {
        YYYY,
        MM: MM.length < 2 ? `0${MM}` : MM,
        DD: DD.length < 2 ? `0${DD}` : DD,
        hh: hh.length < 2 ? `0${hh}` : hh,
        mm: mm.length < 2 ? `0${mm}` : mm,
        ss: ss.length < 2 ? `0${ss}` : ss,
    }
}

let json1 = localStorage.getItem('sessions');
let sessions1
    = json1 ? JSON.parse(json) : [];

sessions1.push({
    date: new Date().toISOString(),
});
localStorage.setItem('sessions', JSON.stringify(sessions1));
// =========================


/
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається