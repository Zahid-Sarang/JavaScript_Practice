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

