
let tes = document.querySelectorAll('#header a')


let menu = document.querySelector('.icon-menu');
let close = document.querySelector('.close');
let showMenu = document.querySelector('.non-nav');

let section = document.querySelectorAll('section')

let scroll = window.addEventListener('scroll', (e) => {
  for (let i = 0; i < section.length; i++) {
    
      // console.log(section[i].id)
  }
})

menu.addEventListener('click', () => {
    showMenu.className = "list-nav"
    menu.className = "active"
})

close.addEventListener('click', () => {
    showMenu.className = "non-nav";
    menu.className = "icon-menu"
})


// slide image
// let swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//   });

  function reveal() {
    let reveals = document.querySelectorAll("section");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        
      } else {
        reveals[i].classList.remove("active");
        // activity.classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);