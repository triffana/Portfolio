console.log("Portfolio Loaded Successfully");

// =====================================================
// MOBILE MENU
// =====================================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close menu after clicking a link
    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}


// =====================================================
// SMOOTH SCROLL
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        e.preventDefault();

        const navHeight = 80;

        window.scrollTo({
            top: target.offsetTop - navHeight,
            behavior: "smooth"
        });

    });

});


// =====================================================
// TRIFFANA AI CHATBOT
// =====================================================

const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatClose = document.getElementById("chat-close");
const chatInput = document.getElementById("chat-input");
const sendMessage = document.getElementById("send-message");
const chatBody = document.getElementById("chat-body");


// =====================================================
// OPEN / CLOSE CHAT
// =====================================================

if (chatToggle && chatWindow) {

    chatToggle.addEventListener("click", () => {
        chatWindow.classList.toggle("active");
        chatToggle.classList.toggle("active");
    });

}

if (chatClose && chatWindow && chatToggle) {

    chatClose.addEventListener("click", () => {
        chatWindow.classList.remove("active");
        chatToggle.classList.remove("active");
    });

}


// =====================================================
// BOT KNOWLEDGE
// =====================================================

const botKnowledge = {

    about: `
        <b>About Triffana</b><br><br>

        • B.Tech Artificial Intelligence & Data Science student<br>
        • Interested in Artificial Intelligence and Machine Learning<br>
        • Passionate about Data Analytics<br>
        • Interested in Frontend Development<br>
        • Focused on building innovative AI solutions
    `,

    skills: `
        <b>Technical Skills</b><br><br>

        • Python<br>
        • C++<br>
        • Java<br>
        • Data Analytics<br>
        • Machine Learning<br>
        • Power BI<br>
        • HTML & CSS<br>
        • JavaScript
    `,

    projects: `
        <b>Projects</b><br><br>

        • AI Mock Interview Analyzer<br>
        • Retail Sales Analysis Dashboard<br>
        • Frequency Healing Chatbot<br>
        • Maternal Mortality Global Dashboard<br>
        • Smart Attendance System<br>
        • Jarvis AI Assistant
    `,

    certifications: `
        <b>Certifications</b><br><br>

        • Data Analytics MasterClass – NoviTech R&D<br>
        • Full Stack Web Development with Java – Phoenix Softech<br>
        • Web Development Internship – ILIFE Technologies<br>
        • Web Development Internship – PORTALAM Learning Partner<br>
        • Programming in C, C++ & Python – CSC Academy<br>
        • Effective Public Speaking – JCI Madurai Meenakshi
    `,

    journey: `
        <b>My Journey</b><br><br>

        • <b>2024</b> – PORTALAM Internship<br>
        • <b>2025</b> – Phoenix Softech & Full Stack Java<br>
        • <b>2026</b> – ILIFE Technologies Internship<br>
        • <b>2026</b> – Data Analytics MasterClass<br>
        • <b>2026</b> – Power BI & AI/ML Projects<br>
        • <b>2026–2027</b> – B.Tech AI & Data Science Journey
    `,

    education: `
        <b>Education</b><br><br>

        • B.Tech – Artificial Intelligence & Data Science<br>
        • P.S.R. Engineering College<br>
        • Duration: 2023 – 2027<br>
        • CGPA: 8.02
    `,

    achievements: `
        <b>Achievements</b><br><br>

        • First Prize Winner – INTELLECT'24 Technical Event<br>
        • JCI Effective Public Speaking Training<br>
        • Certificate of Achievement – PORTALAM Volunteer Service<br>
        • Organized Ethical Hacking Workshop at P.S.R. Engineering College
    `,

    contact: `
        <b>Contact</b><br><br>

        • Email: triffanaantony@gmail.com<br>
        • GitHub: Triffana<br>
        • LinkedIn: Triffana Antony
    `

};


// =====================================================
// GET BOT RESPONSE
// =====================================================

function getBotResponse(message) {

    const text = message.toLowerCase().trim();


    // IMPORTANT:
    // Specific categories first
    // About should come later

    if (
        text.includes("skill") ||
        text.includes("technology") ||
        text.includes("tech stack")
    ) {
        return botKnowledge.skills;
    }


    if (
        text.includes("project") ||
        text.includes("built") ||
        text.includes("work")
    ) {
        return botKnowledge.projects;
    }


    if (
        text.includes("certificate") ||
        text.includes("certification") ||
        text.includes("course")
    ) {
        return botKnowledge.certifications;
    }


    if (
        text.includes("journey") ||
        text.includes("intern") ||
        text.includes("internship") ||
        text.includes("experience")
    ) {
        return botKnowledge.journey;
    }


    if (
        text.includes("education") ||
        text.includes("college") ||
        text.includes("study") ||
        text.includes("degree")
    ) {
        return botKnowledge.education;
    }


    if (
        text.includes("achievement") ||
        text.includes("award") ||
        text.includes("winner")
    ) {
        return botKnowledge.achievements;
    }


    if (
        text.includes("contact") ||
        text.includes("email") ||
        text.includes("github") ||
        text.includes("linkedin")
    ) {
        return botKnowledge.contact;
    }


    if (
        text.includes("about") ||
        text.includes("who is") ||
        text.includes("introduce")
    ) {
        return botKnowledge.about;
    }


    if (
        text.includes("hello") ||
        text.includes("hi") ||
        text.includes("hey")
    ) {
        return `
            Hello! 👋 I'm Triffana AI.<br><br>
            How can I help you explore her portfolio?
        `;
    }


    if (text.includes("thank")) {
        return `
            You're welcome! 😊<br><br>
            Feel free to explore the portfolio.
        `;
    }


    return `
        I'm Triffana's portfolio assistant 🤖.<br><br>

        You can ask me about her
        <b>skills, projects, certifications,
        journey, internships, achievements or education.</b>
    `;

}


// =====================================================
// ADD USER MESSAGE
// =====================================================

function addUserMessage(message) {

    if (!chatBody) return;

    const wrapper = document.createElement("div");

    wrapper.className = "user-message";

    wrapper.innerHTML = `
        <div class="message-content">
            <p>${escapeHTML(message)}</p>
        </div>
    `;

    chatBody.appendChild(wrapper);

    scrollChat();
}


// =====================================================
// ADD BOT MESSAGE
// =====================================================

function addBotMessage(message) {

    if (!chatBody) return;

    const wrapper = document.createElement("div");

    wrapper.className = "bot-message";

    wrapper.innerHTML = `
        <div class="message-avatar">
            ✦
        </div>

        <div class="message-content">
            <p>${message}</p>
        </div>
    `;

    chatBody.appendChild(wrapper);

    scrollChat();
}


// =====================================================
// TYPING INDICATOR
// =====================================================

function showTyping() {

    if (!chatBody) return;

    const typing = document.createElement("div");

    typing.className = "bot-message";

    typing.id = "typing-indicator";

    typing.innerHTML = `
        <div class="message-avatar">
            ✦
        </div>

        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;

    chatBody.appendChild(typing);

    scrollChat();
}


// =====================================================
// REMOVE TYPING
// =====================================================

function removeTyping() {

    const typing =
        document.getElementById("typing-indicator");

    if (typing) {
        typing.remove();
    }

}


// =====================================================
// SEND MESSAGE
// =====================================================

function sendChatMessage() {

    if (!chatInput) return;

    const message =
        chatInput.value.trim();

    if (!message) {
        return;
    }

    addUserMessage(message);

    chatInput.value = "";

    showTyping();

    setTimeout(() => {

        removeTyping();

        const response =
            getBotResponse(message);

        addBotMessage(response);

    }, 700);

}


// =====================================================
// SEND BUTTON
// =====================================================

if (sendMessage) {

    sendMessage.addEventListener(
        "click",
        sendChatMessage
    );

}


// =====================================================
// ENTER KEY
// =====================================================

if (chatInput) {

    chatInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                sendChatMessage();

            }

        }
    );

}


// =====================================================
// QUICK QUESTIONS
// =====================================================

document
    .querySelectorAll(".quick-questions button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const question =
                    button.dataset.question;

                if (chatInput) {
                    chatInput.value = question;
                    sendChatMessage();
                }

            }
        );

    });


// =====================================================
// AUTO SCROLL
// =====================================================

function scrollChat() {

    if (chatBody) {

        chatBody.scrollTop =
            chatBody.scrollHeight;

    }

}


// =====================================================
// SECURITY
// =====================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// =====================================================
// PREMIUM PORTFOLIO EFFECTS
// =====================================================


// =====================================================
// CUSTOM CURSOR
// =====================================================

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorOutline =
    document.querySelector(".cursor-outline");


if (cursorDot && cursorOutline) {

    document.addEventListener(
        "mousemove",
        (e) => {

            cursorDot.style.left =
                e.clientX + "px";

            cursorDot.style.top =
                e.clientY + "px";


            cursorOutline.animate(
                {
                    left: e.clientX + "px",
                    top: e.clientY + "px"
                },
                {
                    duration: 350,
                    fill: "forwards"
                }
            );

        }
    );


    document.querySelectorAll(
        "a, button, .card, .project-card, .cert-card"
    ).forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorOutline.style.width =
                    "55px";

                cursorOutline.style.height =
                    "55px";

                cursorOutline.style.borderColor =
                    "#38bdf8";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorOutline.style.width =
                    "35px";

                cursorOutline.style.height =
                    "35px";

                cursorOutline.style.borderColor =
                    "rgba(96,165,250,0.7)";

            }
        );

    });

}


// =====================================================
// BACKGROUND PARTICLES
// =====================================================

const particleContainer =
    document.getElementById("particles");


if (particleContainer) {

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 12) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particleContainer.appendChild(particle);

    }

}


// =====================================================
// SECTION SCROLL REVEAL
// =====================================================

const sections =
    document.querySelectorAll("section");


if ("IntersectionObserver" in window) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    sections.forEach(section => {

        sectionObserver.observe(section);

    });

}


// =====================================================
// 3D CARD EFFECT
// =====================================================

const cards =
    document.querySelectorAll(
        ".project-card, .cert-card, .experience-card, .education-card, .achievement-card, .card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;


            card.style.transform =
                `perspective(800px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";

        }
    );

});


// =====================================================
// PROJECT CARD CLICK NAVIGATION
// =====================================================

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.style.cursor = "pointer";


        card.addEventListener(
            "click",
            function(e) {

                // If user clicks the existing title link,
                // allow normal navigation
                if (e.target.closest("a")) {
                    return;
                }


                const link =
                    this.querySelector("a");


                if (
                    link &&
                    link.getAttribute("href")
                ) {

                    window.location.href =
                        link.getAttribute("href");

                }

            }
        );

    });