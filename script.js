document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section, .skill-card, .project-card, .experience-card, .education-card"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);
                }

            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".sidebar nav a");

    const navObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    navLinks.forEach((link) => {
                        link.classList.remove("active-nav");
                    });

                    const activeLink = document.querySelector(
                        `.sidebar nav a[href="#${entry.target.id}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active-nav");
                    }
                }

            });

        },
        {
            threshold: 0.45
        }
    );

    sections.forEach((section) => {
        navObserver.observe(section);
    });


    /* =========================================
       PROJECT CARD TILT EFFECT
    ========================================= */

    const cards = document.querySelectorAll(".project-card");

    cards.forEach((card) => {

        card.addEventListener("mousemove", (event) => {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -2;

            const rotateY =
                ((x - centerX) / centerX) * 2;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;
        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
        });

    });


    /* =========================================
       SMOOTH NAVIGATION
    ========================================= */

    navLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });

    });


    /* =========================================
       BUTTON RIPPLE EFFECT
    ========================================= */

    const buttons =
        document.querySelectorAll(".btn");

    buttons.forEach((button) => {

        button.addEventListener("click", (event) => {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                button.getBoundingClientRect();

            ripple.style.left =
                `${event.clientX - rect.left}px`;

            ripple.style.top =
                `${event.clientY - rect.top}px`;

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        });

    });


    /* =========================================
       PARALLAX HERO EFFECT
    ========================================= */

    const hero =
        document.querySelector(".hero");

    if (hero) {

        window.addEventListener(
            "scroll",
            () => {

                const scrollY =
                    window.scrollY;

                if (scrollY < window.innerHeight) {

                    hero.style.backgroundPosition =
                        `center ${scrollY * 0.15}px`;
                }

            }
        );

    }


    /* =========================================
       MOUSE FOLLOW GLOW
    ========================================= */

    document.addEventListener(
        "mousemove",
        (event) => {

            document.documentElement.style.setProperty(
                "--mouse-x",
                `${event.clientX}px`
            );

            document.documentElement.style.setProperty(
                "--mouse-y",
                `${event.clientY}px`
            );

        }
    );

});
