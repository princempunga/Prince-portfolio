/* ============================== Typing animation ============================ */
var typed = new Typed(".typing", {
    strings: ["", "Software Developer", "IT Support Specialist", "Systems Analyst", "Web Developer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* ============================== Helpers ============================ */
const nav            = document.querySelector(".nav"),
      navList        = nav.querySelectorAll("li"),
      totalNavList   = navList.length,
      allSection     = document.querySelectorAll(".section"),
      totalSection   = allSection.length,
      mainContent    = document.querySelector(".main-content"),
      navTogglerBtn  = document.querySelector(".nav-toggler"),
      aside          = document.querySelector(".aside");

function isMobile() {
    return window.innerWidth < 1200;
}

/* ============================== Desktop helpers ============================ */
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}
function addBackSection(num) {
    allSection[num].classList.add("back-section");
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

/* ============================== Nav link clicks ============================ */
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function (e) {

        if (isMobile()) {
            /* ---- MOBILE: smooth scroll to section ---- */
            e.preventDefault();
            const targetId = this.getAttribute("href").split("#")[1];
            const targetEl = document.querySelector("#" + targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
            /* Highlight clicked link */
            for (let j = 0; j < totalNavList; j++) {
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            /* Close nav drawer */
            closeMobileNav();

        } else {
            /* ---- DESKTOP: fixed section switching ---- */
            removeBackSection();
            for (let j = 0; j < totalNavList; j++) {
                if (navList[j].querySelector("a").classList.contains("active")) {
                    addBackSection(j);
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSection(this);
        }
    });
}

/* ============================== Hire Me button ============================ */
document.querySelector(".hire-me").addEventListener("click", function () {
    if (isMobile()) {
        const targetId = this.getAttribute("href").split("#")[1];
        const targetEl = document.querySelector("#" + targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        updateNav(this);
    } else {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
    }
});

/* ============================== Mobile nav toggler ============================ */
function closeMobileNav() {
    aside.classList.remove("open");
    navTogglerBtn.classList.remove("open");
    mainContent.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
}

navTogglerBtn.addEventListener("click", () => {
    if (isMobile()) {
        /* Toggle sidebar + slide main content + prevent background scroll */
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        mainContent.classList.toggle("open");
        document.body.classList.toggle("stop-scrolling");
    } else {
        asideSectionTogglerBtn();
    }
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

/* ============================== Mobile: highlight nav on scroll ============================ */
function highlightNavOnScroll() {
    if (!isMobile()) return;
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    allSection.forEach((section, idx) => {
        const top    = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
            for (let j = 0; j < totalNavList; j++) {
                navList[j].querySelector("a").classList.remove("active");
            }
            const id = section.getAttribute("id");
            const matching = nav.querySelector(`a[href="#${id}"]`);
            if (matching) matching.classList.add("active");
        }
    });
}

window.addEventListener("scroll", highlightNavOnScroll);

/* Re-check on resize (switching between mobile ↔ desktop) */
window.addEventListener("resize", () => {
    if (!isMobile()) {
        /* Restore desktop state */
        mainContent.classList.remove("open");
        mainContent.style.transform = "";
    }
});