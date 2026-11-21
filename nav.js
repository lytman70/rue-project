document.addEventListener("DOMContentLoaded", async () => {
    const nav = document.getElementById("nav");
    if (!nav) return;

    const response = await fetch("/nav.html");
    if (response.ok) {
        nav.innerHTML = await response.text();
    }
});

function openMenu() {
    document.getElementById("nav").style.display = "block";
}

function closeMenu() {
    document.getElementById("nav").style.display = "none";
}