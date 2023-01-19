//######## Variables #########

// Hamburger 
var hamburger = document.querySelector('.hamburger-btn');
var menu = document.querySelector('.category-menu');
// Show/Hide Category
var hideBtn = document.querySelector('.hide');
var category = document.querySelector('.category');

// Reverse Card
var checkbox=document.getElementsByClassName('rotate-card');
var cardPL=document.getElementsByClassName('pl');
var cardDE=document.getElementsByClassName('de');
// Prev/Next Card
var cards = document.querySelectorAll('.card');
var prevBtn = document.getElementsByClassName('prev-btn');
var nextBtn = document.getElementsByClassName('next-btn');
let currentCard = 0;

//######## Functions #########

// Hamburger Menu
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Show/Hide Category 
hideBtn.addEventListener('click', () => {
  category.classList.toggle('hidden');
});

// Reverse Card
for(let i=0; i < cardPL.length; i++){
  checkbox[i].addEventListener('change', () => {
  if (checkbox[i].checked) {
    cardPL[i].classList.add('noshow')
    cardDE[i].classList.remove('noshow');
  }
  else {
    cardPL[i].classList.remove('noshow')
    cardDE[i].classList.add('noshow')
  }
});}

// Prev/Next Card
function showCurrentCard() {
  cards.forEach((card) => {
    card.classList.remove('active');
  });
  cards[currentCard].classList.add('active');
}

for(let i = 0; i < prevBtn.length; i++) {
  prevBtn[i].addEventListener('click', () => {
    currentCard--;
    if (currentCard < 0) {
      currentCard = cards.length - 1;
    }
    showCurrentCard();
  });
}
for(let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener('click', () => {
    currentCard++;
    if (currentCard > cards.length - 1) {
      currentCard = 0;
    }
    showCurrentCard();
  });
}
