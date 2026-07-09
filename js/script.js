// ===== Modal =====

const modal = document.getElementById("projectModal");

document.getElementById("openModal").onclick = function (e) {
    e.preventDefault();
    modal.classList.add("active");
};

document.querySelector(".close-modal").onclick = function () {
    modal.classList.remove("active");
};

window.onclick = function (e) {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        modal.classList.remove("active");
    }
});

// ===== EmailJS =====

const form = document.getElementById("projectForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const submitBtn = form.querySelector("button");

    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    emailjs.sendForm(
        "service_yeh5rml",
        "template_3geessd",
        this
    )

    .then(function () {

        submitBtn.innerHTML = "✔ Sent";

       modal.classList.remove("active");

const popup = document.getElementById("successPopup");

popup.classList.add("show");

setTimeout(() => {

    popup.classList.remove("show");

    document.getElementById("projectForm").reset();

},3000);

        form.reset();

        setTimeout(function () {

            modal.classList.remove("active");

            submitBtn.innerHTML = originalText;

            submitBtn.disabled = false;

        }, 1000);

    })

    .catch(function (error) {

        console.error(error);

        alert("❌ Failed to send message. Please try again.");

        submitBtn.innerHTML = originalText;

        submitBtn.disabled = false;

    });

});

//Navbar//
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

function activeMenu() {

    let scrollY = window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                if(link.getAttribute("href") === "#" + sectionId){

                    link.classList.add("active");

                }

            });

        }

    });

}

window.addEventListener("scroll", activeMenu);

activeMenu();