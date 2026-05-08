//Contact form Validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) =>{
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!fullName || !email || !subject || !message) {
            alert("please fill in all fields.");
            return;
        }

        else {
            alert ("message sent sucessfully!");
        }
        console.log({fullName, email, subject, message})
        form.rest();
    });
})

