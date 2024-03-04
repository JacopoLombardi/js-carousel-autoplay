
// Array con i percorsi delle immagini
const images = [
   'img/01.webp',
   'img/02.webp',
   'img/03.webp',
   'img/04.webp',
   'img/05.webp',
];

// variabili di Js collegate all'HTML
const boxImages = document.querySelector('.box_images');
const arrowUp = document.querySelector('.arrow_up');
const arrowDown = document.querySelector('.arrow_down');

// variabili Js
let counter = 0;


// creazione degli elementi HTML con classe 'd-none'
for( let i = 0; i < images.length; i++){
   boxImages.innerHTML += `<img class="d-none" src="${images[i]}" alt="">`;
}

// creo un Array con dentro i tag 'img' dell'HTML 
const HTMLCollection = document.getElementsByTagName('img');

// rimuovo dall'Array la classe 'd-none' al primo elemento, perche deve essere visibile appena si carica la pagina
HTMLCollection[0].classList.remove('d-none');





// nascondo arrowDown di default
arrowDown.classList.add('d-none');



// al click del pulsante Up...
arrowUp.addEventListener('click', function(){

   // mostro arrowDown
   arrowDown.classList.remove('d-none');


   HTMLCollection[counter].classList.add('d-none');    // nascondo l'immagine corrente
   counter++;
   HTMLCollection[counter].classList.remove('d-none');    // mostro l'immagine successiva


   // se il contatore ha raggiunto l'ultima immagine, nascondi ArrowUp
   if(counter === images.length - 1){
      arrowUp.classList.add('d-none');
   }
})



// al click del pulsante Down...
arrowDown.addEventListener('click', function(){

   // mostro ArrowUp
   arrowUp.classList.remove('d-none');


   HTMLCollection[counter].classList.add('d-none');    // nascondo l'immagine corrente
   counter--;
   HTMLCollection[counter].classList.remove('d-none');    // mostro l'immagine successiva


   // se il counter è uguale a 0 nascondi ArrowDown
   if(counter === 0){
      arrowDown.classList.add('d-none');
   }
})