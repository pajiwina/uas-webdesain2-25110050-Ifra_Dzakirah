/*==========================================
    DIMSUM YUMMY
    script.js
==========================================*/

// ==============================
// Navbar Shadow ketika Scroll
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        navbar.style.background = "rgba(255,255,255,.95)";
        navbar.style.boxShadow = "none";

    }

});


// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ==============================
// Back To Top
// ==============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 300) {

        backToTop.style.display = "flex";

    } else {

        backToTop.style.display = "none";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ==============================
// Active Menu
// ==============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// ==============================
// Auto Close Navbar Mobile
// ==============================

const navItems = document.querySelectorAll(".nav-link");

const menu = document.querySelector(".navbar-collapse");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        if (menu.classList.contains("show")) {

            bootstrap.Collapse.getInstance(menu).hide();

        }

    });

});


// ==============================
// Fade Up Animation
// ==============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".product-card").forEach(card => {

    observer.observe(card);

});

document.querySelectorAll(".feature-box").forEach(box => {

    observer.observe(box);

});

document.querySelectorAll(".contact-card").forEach(card => {

    observer.observe(card);

});

document.querySelectorAll(".gallery-item").forEach(img => {

    observer.observe(img);

});


// ==============================
// Hover Effect Product
// ==============================

const products = document.querySelectorAll(".product-card");

products.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// ==============================
// Loading Animation
// ==============================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".5s";
        document.body.style.opacity = "1";

    }, 100);

});


// ==============================
// Alert Tombol Pesan
// ==============================

const buttons = document.querySelectorAll(".btn-pink");

buttons.forEach(btn => {

    if (btn.innerText.includes("Pesan")) {

        btn.addEventListener("click", function () {

            console.log("Terima kasih telah memilih Dimsum Yummy.");

        });

    }

});


// ==============================
// Console
// ==============================

console.log("====================================");
console.log(" DIMSUM YUMMY WEBSITE ");
console.log(" Bootstrap 5 + JavaScript ");
console.log(" Developed for UMKM ");
console.log("====================================");