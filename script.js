// Project10. Buttons. При нажатии на кнопку менять цвет body.
// У вас должен быть слушатель для всех кнопок. По нажатию на каждую кнопку отображаете в консоли "клик"
// По нажатию на каждую кнопку, считывать атрибут id нажатой кнопки
// Менять фона body на считанный атрибут id.
// Добавить кнопку blue и orange. 



// let blue = document.querySelector(".Blue")
// let orange = document.querySelector(".Orange")
// let body = document.querySelector("body")

// blue.addEventListener("click", function(){
//  console.log("Click");
//  body.classList.add("blue")
// })

// orange.addEventListener("click", function(){
//     console.log("Click");
//     body.classList.add("orange")
//    })


//    Создать 5 тегов 

//  в html. Из массива let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
// для каждого тега p добавить соотв-ю текст. innerText

// let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
// let p = document.querySelectorAll("p")

// for (let i = 0; i < texts.length; i++) {

//  p[i].innerText = `${texts[i]}`
    
// }

// Есть массив arr = [
//     {
//         link : "https://google.com",
//         title : "Ссылка на гугл"
//     },
//     {
//         link : "https://instagram.com",
//         title : "Ссылка на инстаграм"
//     },
//     {
//         link : "https://facebook.com",
//         title : "Ссылка на фейсбук"
//     }
//     ]
//     В html создаем 3 тега a -  x3. Для каждого из трех, 
//         добавить link в href и title внутрь тега из массива arr


// arr = [
//         {
//             link : "https://google.com",
//             title : "Ссылка на гугл"
//         },
//         {
//             link : "https://instagram.com",
//             title : "Ссылка на инстаграм"
//         },
//         {
//             link : "https://facebook.com",
//             title : "Ссылка на фейсбук"
//         }
//         ]

//         let a = document.querySelectorAll("a")
//     for (let i = 0; i < arr.length; i++) {

//         a[i].innerHTML = `
//         <a href="${arr[i].link}">${arr[i].title}</a>`
//     }


// Создать две кнопки - PLUS, MINUS
// Создать тег p с начальным значением - 0. 
// При клике на buttonPlus увеличивать значение в теге p на 1
// При клике на buttonMinus уменьшать значение в теге p на 1
// addEventListener. innerText. 
// let p = document.querySelector("p")
// let plus = document.querySelector(".plus")
// let minus = document.querySelector(".minus")

// plus.addEventListener("click", function(){
// p.innerText ++

// })
// minus.addEventListener("click", function(){
// p.innerText --

// })