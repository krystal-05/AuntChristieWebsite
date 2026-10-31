fetch("footer.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("footer").innerHTML = html;

        const year = document.getElementById("year");

        if (year) {
            year.textContent = new Date().getFullYear();
        }
    })
    .catch(error => {
        console.error("Footer error:", error);
    });