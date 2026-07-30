// ===========================================
// Fade In Saat Halaman Selesai Dimuat
// ===========================================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});


// ===========================================
// Scroll Reveal Animation
// ===========================================

const reveals = document.querySelectorAll(".reveal");

function revealSection() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < trigger) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSection);
revealSection();


// ===========================================
// Data Project
// ===========================================

const projects = {

    manual: {

        title: "Portal Informasi Internal",

        image: "project/Portal Manual Book.png"

    },

    helpdesk: {

        title: "IT Helpdesk System",

        image: "project/IT Helpdesk.png"

    }

};


// ===========================================
// Project Modal
// ===========================================

function openModal(project) {

    document.getElementById("modalTitle").innerHTML =
        projects[project].title;

    document.getElementById("modalImage").src =
        projects[project].image;

    document.getElementById("projectModal").style.display = "block";

}

function closeModal() {

    document.getElementById("projectModal").style.display = "none";

}


// ===========================================
// Contact Modal
// ===========================================

function openContactModal() {

    document.getElementById("contactModal").style.display = "block";

}

function closeContactModal() {

    document.getElementById("contactModal").style.display = "none";

}


// ===========================================
// Klik di luar Modal untuk Menutup
// ===========================================

window.onclick = function (event) {

    const projectModal = document.getElementById("projectModal");
    const contactModal = document.getElementById("contactModal");

    if (event.target == projectModal) {

        closeModal();

    }

    if (event.target == contactModal) {

        closeContactModal();

    }

};


// ===========================================
// Back To Top
// ===========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


// ===========================================
// Dark Mode
// ===========================================

const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {

    document.body.classList.toggle("light");

};


// ===========================================
// Navbar Background
// ===========================================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 100) {

        nav.style.background = "#111827";

    } else {

        nav.style.background = "rgba(0,0,0,.25)";

    }

});
