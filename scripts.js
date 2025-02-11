document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dynamic Content Loading (Example for News Section)
    function loadNews() {
        fetch("news.json") // Fetch from a local JSON file or API endpoint
            .then(response => response.json())
            .then(data => {
                const newsContainer = document.querySelector(".news-container");
                newsContainer.innerHTML = "";
                data.forEach(news => {
                    const article = document.createElement("article");
                    article.innerHTML = `
                        <h3>${news.title}</h3>
                        <p>${news.description}</p>
                        <a href="${news.link}" target="_blank">Read More</a>
                    `;
                    newsContainer.appendChild(article);
                });
            })
            .catch(error => console.error("Error loading news:", error));
    }
    loadNews();

    // Language Toggle (EN/VN)
    const langToggle = document.querySelector("#language-toggle");
    langToggle.addEventListener("change", function () {
        document.documentElement.setAttribute("lang", this.value);
        alert("Language switched to: " + this.value.toUpperCase());
    });
});
