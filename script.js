// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     burger.addEventListener('click', () => {
//         // Toggle Nav
//         nav.classList.toggle('nav-active');
    
//     // Animate Links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else{
//                 link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s';
//             }
//         });
//         //Burger Animation
//         burger.classList.toggle('toggle');
//     });
// }

// navSlide();

// function val() {
//     var name = document.getElementById('name');
//     var email = document.getElementById('email');
//     var pNumber = document.getElementById('phone');

//     if (name.value.trim() == '' || email.value.trim() == '' || phone.value.trim() == '') {
//         alert('Fill out the empty fields.');
//         return false;
//     }
//     else{
//         true;
//     }
// }

// var slideIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none"; 
//   }
//   slideIndex++;
//   if (slideIndex > x.length) {slideIndex = 1} 
//   x[slideIndex-1].style.display = "block"; 
//   setTimeout(carousel, 1000); 
// }
