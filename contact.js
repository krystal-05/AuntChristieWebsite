// contact button
document.getElementById("contact-form").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Button clicked!");

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const additionalInfo = document.getElementById("additional-info").value;

    const email = "kdaviso5@kent.edu";
    const subject = "Free Pressure Washing Quote Request";

    const body = `Hello,

I would like to request a free quote.

Name: ${name}
Phone Number: ${phone}
Job Site Address: ${address}

Additional Information:
${additionalInfo}

Thank you!`;

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

});