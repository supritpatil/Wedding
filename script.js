// Animation using GSAP
gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -50 });
gsap.from("nav ul", { opacity: 0, duration: 1, delay: 0.7, y: -50 });
gsap.from(".main-content", { opacity: 0, duration: 1, delay: 1, y: -50, stagger: 0.4 });

function submitForm() {
    var form = document.getElementById("rsvpForm");
    var confirmationMessage = document.getElementById("confirmationMessage");

    // You can perform additional validation here if needed

    confirmationMessage.innerHTML = "Thank you for your RSVP, " + form.elements["name"].value + "!";
    form.reset();
}
