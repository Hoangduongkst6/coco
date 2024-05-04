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
            const txtSlider = e.target.value.trim().toLowerCase();

            common.classList.add("hide");

            itemsProduct.forEach((item) => {
                // Hiện thi khi được tìm kiếm
                if (item.innerText.toLowerCase().includes(txtSlider)) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }

                // Ẩn đi khi được tìm kiếm
                if (e.target.value === "") {
                    item.classList.add("hide");

                    common.classList.remove("hide");
                }
            });
        }, 300)
    );

    searchInput.onclick = function () {
        productsSilder.classList.remove("hide");
    };
    searchInput.onblur = function () {
        productsSilder.classList.add("hide");
    };
}

// Copy menu for navbar Mobile
function copyMenu() {
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

function render() {
    getProducts(renderProducts);

    handleInputSlider();

    copyMenu();
}

// Render viewpoint
render();
