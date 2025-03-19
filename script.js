// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// window.onscroll = () => {
//     menu.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }

// const typed = new Typed('.multiple_text', {
//     strings: [ 'Frontend Developer','Web Designer'],
//     typeSpeed: 50,
//     backSpeed:50,
//     backDelay:1000,
//     loop:true,
//   });

// const scriptURL = 'https://script.google.com/macros/s/AKfycbyIq1XGeUFBE6p2pU3vkotfE-fk4SGRoAhEp52vanhnOQe_NFBCITa5ZoS0FanEl-P2/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// 
// Existing navbar toggle code
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Close navbar when clicking on a link
document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    })
});

// Close navbar when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menu.contains(e.target) && navbar.classList.contains('active')) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
});

// Window resize handler
window.addEventListener('resize', () => {
    // If window width is greater than 767px, ensure navbar is visible on larger screens
    if (window.innerWidth > 767) {
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
});

// Existing onscroll code
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Existing Typed.js code
const typed = new Typed('.multiple_text', {
    strings: ['Frontend Developer', 'Web Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});

// Add active class to current section in navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission code remains the same