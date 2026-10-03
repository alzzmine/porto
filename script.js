// ========================================
// DEZEL PORTFOLIO — JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", () => {
    console.log(`${DEZEL.nickname} portfolio loaded.`);

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const target = document.querySelector(link.getAttribute("href"));

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
