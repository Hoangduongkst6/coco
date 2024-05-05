const productsApi = "http://localhost:3000/products";

// Get products Api
function getProducts(callback) {
    fetch(productsApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

// Render Products
function renderProducts(products) {
    const listProduces = $(".products-list");

    const htmls = products.map((product) => {
        return `
            <li class="hide">
                <a href="#!">${product.title}</a>
            </li>
        `;
    });
    listProduces.innerHTML = htmls.join("");
}

// Handle Search
function handleInputSlider() {
    const searchInput = $(".search-form input");
    const productsSilder = $(".products");
    const common = $(".common");

    // user search xong mới hiện thị
    function debounce(func, timeout) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    // Xử lý search
    searchInput.addEventListener(
        "input",
        debounce(function (e) {
            const itemsProduct = $$(".products-list li");

            itemsProduct.forEach((item) => {
                const txtSlider = e.target.value.trim().toLowerCase();

                // Ẩn / hiện products list
                if (item.innerText.toLowerCase().includes(txtSlider)) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }

                // Ẩn common khi products hiện thị
                common.classList.add("hide");

                // Hiện thị common khi input là trống
                if (e.target.value === "") {
                    item.classList.add("hide");

                    common.classList.remove("hide");
                }
            });
        }, 300)
    );

    // Ẩn / hiện products
    searchInput.onclick = function () {
        productsSilder.classList.remove("hide");
    };
    searchInput.onblur = function () {
        productsSilder.classList.add("hide");
    };
}

// Copy menu for navbar Mobile
function copyMenuNavbar() {
    // Copy navbar
    const navbar = $(".navbar");
    const mobileNavbar = $(".menu-mobile-navbar");
    const copyMenu = navbar.innerHTML;
    mobileNavbar.innerHTML = copyMenu;

    // Copy topbar
    const topBar = $(".top-bar");
    const mobileTopbar = $(".menu-mobile-topbar");
    const copyTopbar = topBar.innerHTML;
    mobileTopbar.innerHTML = copyTopbar;
}

// Copy menu hero
function copyMenuHero() {
    const subnav = $(".subnav");
    const subnavHero = $(".hero-subnav");
    subnavHero.innerHTML = subnav.innerHTML;

    const width = window.outerWidth;
    if (width < 1200) {
        subnavHero.innerHTML = "";
    }
}

// Handle Slider
function handleslider() {
    const slider = $(".slider");
    const nextSlider = $(".swiper-button-next");
    const prevSlider = $(".swiper-button-prev");

    // Xử lý Slider
    const swiper = new Swiper(".swiper", {
        loop: true,

        pagination: {
            el: ".swiper-pagination",
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // Tự động click sau 5s
    setInterval(() => {
        nextSlider.click();
    }, 5000);

    // Hiện thị next / prev
    slider.onmouseover = function () {
        nextSlider.style.display = "flex";
        prevSlider.style.display = "flex";
    };

    // Ẩn next / prev
    slider.onmouseout = function () {
        nextSlider.style.display = "none";
        prevSlider.style.display = "none";
    };
}

function start() {
    getProducts(renderProducts);

    handleInputSlider();

    copyMenuNavbar();

    copyMenuHero();

    handleslider();
}

start();
