/*--------------------------------------------*/
/*       Methods for Selecting Elements       */
/*--------------------------------------------*/

// 1. getElementById

// const heading = document.getElementById("heading")
// console.log(heading)

// 2. getElementsByTagName

// const headings = document.getElementsByTagName("h1");
// console.log(headings[0])

//3. getElementByClassName

// const heading2 = document.getElementsByClassName("heading")
// console.log(heading2)

// 4. querySelector

// const heading = document.querySelector('.heading')
// const headings = document.querySelector('#heading')
// console.log(heading)
// console.log(headings)

// 5. querySelectorAll

// const heading = document.querySelectorAll('.heading');
// console.log(heading)

/*--------------------------*/
/*       Traverse Dom       */
/*--------------------------*/

// 1 . Parent Node
// const heading = document.querySelector('.heading');
// const parent = heading.parentNode;
// console.log(parent)

// 2. Children Nodes
// const parent = document.querySelector(".parent");
// console.log(parent.childNodes);

// 3. nextElementSibling
// const heading = document.querySelector('.heading');
// console.log(heading.nextElementSibling)

// 4. previousElementSibling
// const heading = document.querySelector('h3');
// console.log(heading.previousElementSibling)

/*--------------------------*/
/*       Manipulation       */
/*--------------------------*/

// const heading = document.querySelector('.heading');
// heading.innerHTML = "JavaScript tutorial!"
// heading.style.color = "red";
// heading.style.fontSize = "4rem"
// heading.classList.add('title');
// heading.classList.remove('heading');

/*-----------------------------*/
/*       Create Elements       */
/*-----------------------------*/

// const heading = document.createElement('h1')
// heading.innerHTML = "JavaScript is Awesome!";
// heading.classList.add('title');
// const parent =  document.querySelector('.parent')
// parent.appendChild(heading);

// const subheading = document.createElement('h3');
// subheading.innerHTML = "Web dev is awesome!"
// heading.insertAdjacentElement('afterend',subheading);

// console.log(heading)

/*------------------------*/
/*       Dom Events       */
/*------------------------*/

// const button = document.querySelector('#btn');
// const heading= document.querySelector('#heading');

// button.addEventListener('click',function(event){
//     heading.style.color = "purple";
//     heading.style.fontSize = "2.5rem";
//     console.log('Button click',event)
// })

/*---------------------------------*/
/*       Project bulb on off       */
/*---------------------------------*/

// const bulbSwitch = document.querySelector("#bulbSwitch");
// const bulb = document.querySelector("#bulb");
// bulbSwitch.addEventListener("click", function () {
//   console.log(bulb.src);
//   if (bulb.src.match("off")) {
//     bulb.src = "./bulb-on.gif";
//     bulbSwitch.innerHTML="Trun Off"
//   } else {
//     bulb.src = "./bulb-off.gif";
//     bulbSwitch.innerHTML="Trun On"
//   }
// });

/*------------------------------*/
/*       Project Api Call       */
/*------------------------------*/

const root = document.querySelector("#root");
const button = document.querySelector("#imgbtn");

function createItem(items) {
  // card
  const card = document.createElement("div");
  card.classList.add("card");

  //photo
  const photo = document.createElement("img");
  photo.src = items.thumbnailUrl;

  // title
  const title = document.createElement("h4");
  title.innerHTML = items.title;

  card.appendChild(photo)
  card.appendChild(title);

  root.appendChild(card)
}

function displayImages(items) {
  items.forEach(function (items) {
    createItem(items);
  });
  console.log(items);
}

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => res.json())
    .then((items) => {
      displayImages(items);
    });
});
