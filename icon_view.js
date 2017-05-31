function hideDetails(event) {
   let cardDivs = document.getElementsByClassName('card');
   for (let card of cardDivs){
      card.querySelector('.info').style.display = 'none';
      card.querySelector('.image').style.width = '100%';
      card.style.maxWidth = '185px';
   }
}

function showDetails(event) {
   let cardDivs = document.getElementsByClassName('card');
   for (let card of cardDivs){
      card.querySelector('.info').style.display = 'inline-flex';
      card.querySelector('.image').style.width = '50%';
      card.style.maxWidth = '370px';
   }
}

function makeButton(id, innerHTML, listener) {
   var button = document.createElement('i');
   button.setAttribute('class', 'material-icons');
   button.setAttribute('id', id);
   button.innerHTML = innerHTML;

   var wrapper = document.createElement('a');
   wrapper.appendChild(button);
   wrapper.addEventListener('click', listener);

   return wrapper;
}

var navbar = document.getElementsByClassName('browse__nav');
var navLinks = navbar[0].getElementsByClassName('links');

//insert extension button to most left
var hideButton = makeButton('hide-info-button', 'compare_arrows', hideDetails);
var showButton = makeButton('show-info-button', 'swap_horiz', showDetails);
navLinks[0].appendChild(hideButton);
navLinks[0].appendChild(showButton);

