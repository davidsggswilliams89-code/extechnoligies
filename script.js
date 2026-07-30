/* ==========================================================
THE E-X TECHNOLOGIES
SCRIPT.JS
========================================================== */


/* ==========================================================
MOBILE MENU
========================================================== */

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==========================================================
CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================== */

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==========================================================
STICKY HEADER EFFECT
========================================================== */

const header = document.querySelector("header");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================================
SCROLL REVEAL ANIMATION
========================================================== */

const revealElements = document.querySelectorAll(

    ".about, .stats, .why-us, .services, .projects, .technologies, .process, .testimonials, .contact"

);


const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;


        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==========================================================
ANIMATED STATISTICS
========================================================== */

const counters = document.querySelectorAll(".stat-card h2");

let countersStarted = false;


function startCounters() {

    if (countersStarted) return;

    countersStarted = true;


    counters.forEach(counter => {

        const target = parseInt(

            counter.innerText.replace("+", "")

        );


        let count = 0;


        const updateCounter = () => {

            const increment = Math.ceil(target / 100);


            if (count < target) {

                count += increment;

                counter.innerText = count + "+";

                setTimeout(updateCounter, 25);

            } else {

                counter.innerText = target + "+";

            }

        };


        updateCounter();

    });

}


window.addEventListener("scroll", () => {

    const statsSection = document.querySelector(".stats");

    const sectionTop = statsSection.getBoundingClientRect().top;


    if (sectionTop < window.innerHeight - 100) {

        startCounters();

    }

});


/* ==========================================================
CONTACT FORM
========================================================== */

const contactForm = document.querySelector(".contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    alert(

        "Thank you for contacting The E-X Technologies. We will get back to you soon."

    );


    contactForm.reset();

});


/* ==========================================
HERO CAROUSEL
========================================== */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 3000);

/* ==========================================
LIGHT / DARK MODE WITH MEMORY
========================================== */

const themeToggle =
document.getElementById("themeToggle");

/* Load saved theme */

if(localStorage.getItem("theme") === "light"){

document.body.classList.add("light-mode");

themeToggle.textContent = "☀️";

}else{

themeToggle.textContent = "🌙";

}

/* Toggle Theme */

themeToggle.onclick = () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

localStorage.setItem("theme","light");

themeToggle.textContent = "☀️";

}else{

localStorage.setItem("theme","dark");

themeToggle.textContent = "🌙";

}

};
