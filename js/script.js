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
  showNext(gameCardsArray, gameThumbsArray);
});

prevBtn.addEventListener("click", () => {
  showPrev(gameCardsArray, gameThumbsArray);
});

// clickable game-thumb
for (let i = 0; i < gameThumbsArray.length; i++) {
  const thisThumbImg = gameThumbsArray[i];
  thisThumbImg.addEventListener("click", () => {
    showThisImg(gameCardsArray, gameThumbsArray, i);
  });
}

const startBtn = document.getElementById("start");
const pauseBTn = document.getElementById("pause");
const reverseBTn = document.getElementById("reverse");
const shuffleBtn = document.getElementById("shuffle");

let autoplayTime;
let reversePlayTime;
let shufflePlayTime;
let playState = false;

startBtn.addEventListener("click", function () {
  autoplayTime = setInterval(() => {
    playState = true;
    if (playState === true) {
      showNext(gameCardsArray, gameThumbsArray);
    }

    console.log(playState);
  }, 3000);
});

reverseBTn.addEventListener("click", function () {
  reversePlayTime = setInterval(() => {
    playState = true;
    if (playState === true) {
      showPrev(gameCardsArray, gameThumbsArray);
    }

    console.log(playState);
  }, 3000);
});

pauseBTn.addEventListener("click", function () {
  playState = false;
  clearInterval(autoplayTime);
  clearInterval(reversePlayTime);
  console.log(playState);
});

shuffleBtn.addEventListener("click", function () {
  playState = true;
  console.log(playState);
  showRnd(gameCardsArray, gameThumbsArray);
});

// FUNCTIONS
/**
 * Description: removes active class to the current element of arrays
 * at index sliderCurrentPosition and adds it to the next element of the arrays.
 * If sliderCurrentPosition is at the end of the arrays, goes back to the index 0 element.
 * @param {array} array1
 * @param {array} array2
 */
function showNext(array1, array2) {
  array1[sliderCurrentPosition].classList.remove("active");
  array2[sliderCurrentPosition].classList.remove("active-thumb");
  if (sliderCurrentPosition < array1.length - 1) {
    sliderCurrentPosition++;
  } else {
    sliderCurrentPosition = 0;
  }
  array1[sliderCurrentPosition].classList.add("active");
  array2[sliderCurrentPosition].classList.add("active-thumb");
}

/**
 * Description: removes active class to the current element of arrays
 * at index sliderCurrentPosition and adds it to the previous element of the arrays.
 * If sliderCurrentPosition is at the beginning of the arrays, goes back to the last index element.
 * @param {array} array1
 * @param {array} array2
 */
function showPrev(array1, array2) {
  array1[sliderCurrentPosition].classList.remove("active");
  array2[sliderCurrentPosition].classList.remove("active-thumb");
  if (sliderCurrentPosition > 0) {
    sliderCurrentPosition--;
  } else {
    sliderCurrentPosition = array1.length - 1;
  }
  array1[sliderCurrentPosition].classList.add("active");
  array2[sliderCurrentPosition].classList.add("active-thumb");
}

/**
 * Description: set the index to whatever thumb-img it's clicked, and
 * remove and add active/active-thumb accordingly to the
 * clicked thumb-img
 * @param {array} array1
 * @param {array} array2
 * @param {index} i
 */
function showThisImg(array1, array2, i) {
  array1[sliderCurrentPosition].classList.remove("active");
  array2[sliderCurrentPosition].classList.remove("active-thumb");
  // merge the index value
  sliderCurrentPosition = i;
  // add active
  array1[sliderCurrentPosition].classList.add("active");
  array2[sliderCurrentPosition].classList.add("active-thumb");
}

/**
 * Description: set the index to rnd integer in renge 0-4 inclusive;
 * removing and addding active/activw-thumb to the element
 *  at that rnd integer index
 * @param {array} array1
 * @param {array} array2
 */
function showRnd(array1, array2) {
  array1[sliderCurrentPosition].classList.remove("active");
  array2[sliderCurrentPosition].classList.remove("active-thumb");
  sliderCurrentPosition = Math.floor(Math.random() * (4 - 0 + 1) + 0);

  array1[sliderCurrentPosition].classList.add("active");
  array2[sliderCurrentPosition].classList.add("active-thumb");
}
