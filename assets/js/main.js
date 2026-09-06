/* ==========================================================
   DR. JACK DATING
   COMPLETE SITE-WIDE JAVASCRIPT
   ========================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ======================================================
       1. SITE-WIDE TOP IDENTITY BAR
       ====================================================== */

    const siteHeader =
        document.querySelector(".site-header");


    if (siteHeader) {

        const existingIdentityBar =
            siteHeader.querySelector(".identity-bar");


        if (!existingIdentityBar) {

            const identityBar =
                document.createElement("div");


            identityBar.className =
                "identity-bar";


            identityBar.innerHTML = `
                <p>
                    <span class="identity-name">
                        Rabbi Dr. Jack Cohen
                    </span>

                    <span class="identity-divider">
                        |
                    </span>

                    <span class="identity-role">
                        Jewish Matchmaking Coach
                    </span>
                </p>
            `;


            siteHeader.insertBefore(
                identityBar,
                siteHeader.firstChild
            );

        }

    }



    /* ======================================================
       2. MOBILE MENU
       ====================================================== */

    const mobileMenuButton =
        document.getElementById(
            "mobileMenuButton"
        );


    const mobileNavigation =
        document.getElementById(
            "mobileNavigation"
        );


    if (
        mobileMenuButton &&
        mobileNavigation
    ) {

        mobileMenuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileNavigation
                        .classList
                        .toggle("open");


                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    isOpen
                        ? "true"
                        : "false"
                );


                document.body.classList.toggle(
                    "menu-open",
                    isOpen
                );

            }
        );


        const mobileLinks =
            mobileNavigation
                .querySelectorAll("a");


        mobileLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        mobileNavigation
                            .classList
                            .remove("open");


                        mobileMenuButton
                            .setAttribute(
                                "aria-expanded",
                                "false"
                            );


                        document.body
                            .classList
                            .remove(
                                "menu-open"
                            );

                    }
                );

            }
        );

    }



    /* ======================================================
       3. MOBILE SERVICES MENU
       ====================================================== */

    const mobileServicesButton =
        document.getElementById(
            "mobileServicesButton"
        );


    const mobileServicesMenu =
        document.getElementById(
            "mobileServicesMenu"
        );


    if (
        mobileServicesButton &&
        mobileServicesMenu
    ) {

        mobileServicesButton.setAttribute(
            "aria-expanded",
            "false"
        );


        mobileServicesButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    mobileServicesMenu
                        .classList
                        .toggle("open");


                mobileServicesButton
                    .classList
                    .toggle(
                        "open",
                        isOpen
                    );


                mobileServicesButton
                    .setAttribute(
                        "aria-expanded",
                        isOpen
                            ? "true"
                            : "false"
                    );

            }
        );

    }



    /* ======================================================
       4. DESKTOP SERVICES DROPDOWN
       ====================================================== */

    const dropdownButtons =
        document.querySelectorAll(
            ".nav-dropdown-button"
        );


    dropdownButtons.forEach(
        function (button) {

            const dropdown =
                button.closest(
                    ".nav-dropdown"
                );


            if (!dropdown) {
                return;
            }


            button.setAttribute(
                "aria-expanded",
                "false"
            );


            button.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    const wasOpen =
                        dropdown
                            .classList
                            .contains(
                                "dropdown-open"
                            );


                    document
                        .querySelectorAll(
                            ".nav-dropdown.dropdown-open"
                        )
                        .forEach(
                            function (
                                openDropdown
                            ) {

                                openDropdown
                                    .classList
                                    .remove(
                                        "dropdown-open"
                                    );


                                const openButton =
                                    openDropdown
                                        .querySelector(
                                            ".nav-dropdown-button"
                                        );


                                if (openButton) {

                                    openButton
                                        .setAttribute(
                                            "aria-expanded",
                                            "false"
                                        );

                                }

                            }
                        );


                    if (!wasOpen) {

                        dropdown
                            .classList
                            .add(
                                "dropdown-open"
                            );


                        button.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                    }

                }
            );

        }
    );


    document.addEventListener(
        "click",
        function (event) {

            if (
                event.target.closest(
                    ".nav-dropdown"
                )
            ) {
                return;
            }


            document
                .querySelectorAll(
                    ".nav-dropdown.dropdown-open"
                )
                .forEach(
                    function (dropdown) {

                        dropdown
                            .classList
                            .remove(
                                "dropdown-open"
                            );


                        const button =
                            dropdown
                                .querySelector(
                                    ".nav-dropdown-button"
                                );


                        if (button) {

                            button
                                .setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                        }

                    }
                );

        }
    );



    /* ======================================================
       5. ACTIVE DESKTOP NAV LINK
       ====================================================== */

    const currentPath =
        window.location.pathname
            .replace(/\\/g, "/")
            .toLowerCase();


    const desktopNavLinks =
        document.querySelectorAll(
            ".desktop-nav .nav-link"
        );


    desktopNavLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            const href =
                (
                    link.getAttribute(
                        "href"
                    ) || ""
                )
                    .split("#")[0]
                    .toLowerCase();


            if (!href) {
                return;
            }


            const fileName =
                href.split("/").pop();


            if (
                fileName &&
                currentPath.endsWith(
                    fileName
                )
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );



    /* ======================================================
       6. HOME NAV ACTIVE STATE
       ====================================================== */

    const homeLink =
        document.querySelector(
            '.desktop-nav a[href="index.html"],' +
            '.desktop-nav a[href="../index.html"]'
        );


    if (
        homeLink &&
        (
            currentPath.endsWith(
                "/index.html"
            ) ||
            currentPath.endsWith("/")
        )
    ) {

        homeLink.classList.add(
            "active"
        );

    }



    /* ======================================================
       7. SERVICES NAV ACTIVE STATE
       ====================================================== */

    const servicesNavButton =
        document.querySelector(
            ".desktop-nav .nav-dropdown-button"
        );


    if (
        servicesNavButton &&
        currentPath.includes(
            "/services/"
        )
    ) {

        servicesNavButton
            .classList
            .add("active");

    }



    /* ======================================================
       8. TESTIMONIAL VIDEOS
       Only one plays at a time
       ====================================================== */

    const testimonialVideos =
        document.querySelectorAll(
            ".testimonial-video-card video"
        );


    testimonialVideos.forEach(
        function (video) {

            video.addEventListener(
                "play",
                function () {

                    testimonialVideos
                        .forEach(
                            function (
                                otherVideo
                            ) {

                                if (
                                    otherVideo !==
                                    video
                                ) {

                                    otherVideo.pause();

                                }

                            }
                        );

                }
            );

        }
    );



    /* ======================================================
       9. FREE GUIDE FORM
       ====================================================== */

    const guideForm =
        document.getElementById(
            "guideForm"
        );


    const guideStatus =
        document.getElementById(
            "guideStatus"
        );


    if (guideForm) {

        guideForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const formData =
                    new FormData(
                        guideForm
                    );


                const firstName =
                    formData.get(
                        "firstName"
                    ) ||
                    formData.get(
                        "name"
                    ) ||
                    "";


                const email =
                    formData.get(
                        "email"
                    ) ||
                    "";


                const lead = {

                    firstName:
                        String(
                            firstName
                        ).trim(),

                    email:
                        String(
                            email
                        ).trim(),

                    source:
                        "Free Guide",

                    createdAt:
                        new Date()
                            .toISOString()

                };


                try {

                    const currentLeads =
                        JSON.parse(
                            localStorage
                                .getItem(
                                    "drJackGuideLeads"
                                ) ||
                            "[]"
                        );


                    currentLeads.push(
                        lead
                    );


                    localStorage.setItem(
                        "drJackGuideLeads",
                        JSON.stringify(
                            currentLeads
                        )
                    );

                }
                catch (error) {

                    console.warn(
                        "Unable to save lead.",
                        error
                    );

                }


                if (guideStatus) {

                    guideStatus.textContent =
                        "Thank you. Your request has been received.";

                }


                guideForm.reset();

            }
        );

    }



    /* ======================================================
       10. CONSULTATION CLICK TRACKING
       ====================================================== */

    const consultationLinks =
        document.querySelectorAll(
            [
                "#consultationButton",
                ".header-cta",
                ".mobile-consultation",
                'a[href*="#consultation"]'
            ].join(",")
        );


    consultationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    try {

                        const records =
                            JSON.parse(
                                localStorage
                                    .getItem(
                                        "drJackConsultationClicks"
                                    ) ||
                                "[]"
                            );


                        records.push({

                            page:
                                window.location
                                    .pathname,

                            destination:
                                link.getAttribute(
                                    "href"
                                ) || "",

                            timestamp:
                                new Date()
                                    .toISOString()

                        });


                        localStorage.setItem(
                            "drJackConsultationClicks",
                            JSON.stringify(
                                records
                            )
                        );

                    }
                    catch (error) {

                        console.warn(
                            "Unable to record consultation click.",
                            error
                        );

                    }

                }
            );

        }
    );



    /* ======================================================
       11. ESCAPE KEY
       ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !==
                "Escape"
            ) {
                return;
            }


            if (mobileNavigation) {

                mobileNavigation
                    .classList
                    .remove("open");

            }


            if (mobileMenuButton) {

                mobileMenuButton
                    .setAttribute(
                        "aria-expanded",
                        "false"
                    );

            }


            if (mobileServicesMenu) {

                mobileServicesMenu
                    .classList
                    .remove("open");

            }


            if (mobileServicesButton) {

                mobileServicesButton
                    .setAttribute(
                        "aria-expanded",
                        "false"
                    );

            }


            document.body
                .classList
                .remove(
                    "menu-open"
                );


            document
                .querySelectorAll(
                    ".nav-dropdown.dropdown-open"
                )
                .forEach(
                    function (
                        dropdown
                    ) {

                        dropdown
                            .classList
                            .remove(
                                "dropdown-open"
                            );

                    }
                );

        }
    );

});