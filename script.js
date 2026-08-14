/* ========================================
   PORTFOLIO INTERACTIONS
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ========================================
       THEME TOGGLE
    ======================================== */

    const themeButton = document.getElementById("themeButton");

    if (themeButton) {

        themeButton.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            const icon = themeButton.querySelector("i");

            if (document.body.classList.contains("dark-mode")) {

                icon.classList.remove("fa-sun");
                icon.classList.add("fa-moon");

            } else {

                icon.classList.remove("fa-moon");
                icon.classList.add("fa-sun");

            }

        });

    }


    /* ========================================
       SCROLL REVEAL
    ======================================== */

    const revealElements = document.querySelectorAll(
        ".about-card, .skill-pill, .project-card, .experience-item, .contact-info, .contact-form"
    );


    const revealObserver = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach((element) => {

        element.classList.add("reveal-element");

        revealObserver.observe(element);

    });


    /* ========================================
       SMOOTH NAVIGATION
    ======================================== */

    const navigationLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    navigationLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

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


    /* ========================================
       MOUSE MOVEMENT EFFECT
    ======================================== */

    const profileBox = document.querySelector(".profile-box");


    if (profileBox) {

        profileBox.addEventListener("mousemove", (event) => {

            const rect = profileBox.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -5;

            const rotateY =
                ((x - centerX) / centerX) * 5;


            profileBox.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.03)`;

        });


        profileBox.addEventListener("mouseleave", () => {

            profileBox.style.transform =
                "perspective(800px) rotateX(0) rotateY(0) scale(1)";

        });

    }


    /* ========================================
       PROJECT CARD TILT
    ======================================== */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

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
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(700px) rotateX(0) rotateY(0) translateY(0)";

        });

    });


    /* ========================================
       CONTACT FORM
    ======================================== */

    const contactForm =
        document.querySelector(".contact-form");


    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name =
                contactForm.querySelector(
                    'input[type="text"]'
                ).value;


            alert(
                `Thank you, ${name}! 🌸 Your message has been received.`
            );


            contactForm.reset();

        });

    }


    /* ========================================
       BUTTON CLICK ANIMATION
    ======================================== */

    const buttons =
        document.querySelectorAll("button, .hero-button, .project-button");


    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.classList.add("button-clicked");


            setTimeout(() => {

                button.classList.remove("button-clicked");

            }, 180);

        });

    });

});
