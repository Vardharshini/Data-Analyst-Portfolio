/* =========================================
   THEME TOGGLE
========================================= */

const themeButton = document.getElementById("themeButton");
const themeIcon = themeButton.querySelector("i");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

    } else {

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    }

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   PROJECT / ABOUT / CERTIFICATE
   3D MOUSE MOVEMENT
========================================= */

const interactiveCards =
    document.querySelectorAll(".interactive-card");


interactiveCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)
             scale(1.015)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   SKILLS MOUSE MOVEMENT
========================================= */

const skillPills =
    document.querySelectorAll(".interactive-pill");


skillPills.forEach(pill => {

    pill.addEventListener("mousemove", event => {

        const rect = pill.getBoundingClientRect();

        const x = event.clientX - rect.left;

        const center = rect.width / 2;

        const movement =
            ((x - center) / center) * 4;

        pill.style.transform =
            `translateY(-7px)
             translateX(${movement}px)
             scale(1.06)`;

    });


    pill.addEventListener("mouseleave", () => {

        pill.style.transform = "";

    });

});


/* =========================================
   HERO IMAGE MOVEMENT
========================================= */

const heroPhoto =
    document.querySelector(".hero-photo-card");


if (heroPhoto) {

    heroPhoto.addEventListener("mousemove", event => {

        const rect =
            heroPhoto.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        heroPhoto.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.025)`;

    });


    heroPhoto.addEventListener("mouseleave", () => {

        heroPhoto.style.transform = "";

    });

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .skill-pill, .project-card, .experience-item, .certificate-card, .contact-container"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();

            const name =
                contactForm.querySelector(
                    'input[name="name"]'
                ).value.trim();


            if (name) {

                alert(
                    `Thank you, ${name}! 🌸 Your message has been received.`
                );

            } else {

                alert(
                    "Thank you for reaching out! 🌸"
                );

            }


            contactForm.reset();

        }
    );

}


/* =========================================
   BUTTON CLICK ANIMATION
========================================= */

const buttons =
    document.querySelectorAll(
        ".hero-button, .project-button, .certificate-button, .contact-form button"
    );


buttons.forEach(button => {

    button.addEventListener("mousedown", () => {

        button.style.transform =
            "scale(0.95)";

    });


    button.addEventListener("mouseup", () => {

        button.style.transform = "";

    });

});
