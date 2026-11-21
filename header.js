document.addEventListener("DOMContentLoaded", async () => {
    const nav = document.getElementById("header");
    if (!nav) return;

    const response = await fetch("/header.html");
    if (response.ok) nav.innerHTML = await response.text();
});