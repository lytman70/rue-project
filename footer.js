document.addEventListener("DOMContentLoaded", async () => {
    const nav = document.getElementById("footer");
    if (!nav) return;

    const response = await fetch("/footer.html");

    if (response.ok) {
        nav.innerHTML = await response.text();

        const year = nav.querySelector("#year");
        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }
});