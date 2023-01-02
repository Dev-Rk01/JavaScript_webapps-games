'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
//console.log(btnsOpenModal);
const openModel = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
 }; 
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};


for(let i=0;i<btnsOpenModal.length;i++)
    btnsOpenModal[i].addEventListener('click', openModel);


  btnClosemodal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {

      if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        
              closeModal();
         }
});