function setupParticles() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = document.getElementById("particles");
    if (!t) return;
    const e = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                createParticles();
                e.disconnect();
            }
        });
    });
    e.observe(document.querySelector("body"));
}

function createParticles() {
    const e = document.getElementById("particles"),
        t = window.innerWidth < 768 ? 25 : 50;
    for (let s = 0; s < t; s++) {
        const n = document.createElement("div");
        n.classList.add("particle");
        n.style.left = Math.random() * 100 + "%";
        n.style.animationDelay = Math.random() * 6 + "s";
        n.style.animationDuration = Math.random() * 6 + 3 + "s";
        e.appendChild(n);
    }
}

setupParticles();
