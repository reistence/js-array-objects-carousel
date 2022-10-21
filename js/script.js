// data
const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

//grab html container into wich the element will be displayed
const row = document.querySelector(".row");
const thumbnail = document.querySelector(".thumbnail");

images.forEach((element) => {
  row.innerHTML += `
                     <div class="game-card">
                        <img src="${element.image}" alt="" />
                        <div class="info">
                        <p id="title">${element.title}</p>
                        <p id="text">${element.text}</p>
                        </div>
                    </div>`;

  thumbnail.innerHTML += `
                        <div class="game-thumb">
                                <img src="${element.image}" alt="" />
                        </div>
                        `;
});

//create arrays of created element of the dom
const gameCardsArray = document.getElementsByClassName("game-card");
console.log(gameCardsArray);
const gameThumbsArray = document.getElementsByClassName("game-thumb");
console.log(gameThumbsArray);

//set initial state
gameCardsArray[0].classList.add("active");
gameThumbsArray[0].classList.add("active-thumb");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
let sliderCurrentPosition = 0;

nextBtn.addEventListener("click", () => {
  showNext(gameCardsArray, gameThumbsArray, sliderCurrentPosition);
  console.log(sliderCurrentPosition);
});
// {
//   gameCardsArray[sliderCurrentPosition].classList.remove("active");
//   gameThumbsArray[sliderCurrentPosition].classList.remove("active-thumb");
//   if (sliderCurrentPosition < gameCardsArray.length - 1) {
//     sliderCurrentPosition++;
//   } else {
//     sliderCurrentPosition = 0;
//   }
//   gameCardsArray[sliderCurrentPosition].classList.add("active");
//   gameThumbsArray[sliderCurrentPosition].classList.add("active-thumb");
// });

// FUNCTIONS
function showNext(array1, array2, index) {
  array1[index].classList.remove("active");
  array2[index].classList.remove("active-thumb");
  if (index < array1.length - 1) {
    index++;
  } else {
    index = 0;
  }
  array1[index].classList.add("active");
  array2[index].classList.add("active-thumb");
}
