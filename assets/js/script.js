const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Get products Api
const products = [
    {
        id: 1,
        title: "In ảnh tràn viền đầy đủ các size không ép và có ép plastic",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 2,
        title: "In ảnh mini viền trắng  đầy đủ các size không ép và có ép plastic",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 3,
        title: "In ảnh viền trắng  đầy đủ các size không ép và có ép plastic",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 4,
        title: "In ảnh instagram  đầy đủ các size không ép và có ép plastic",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 5,
        title: "Kẹp gỗ",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 6,
        title: "Dây thừng",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 7,
        title: "Đèn nháy",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 8,
        title: "Lưới sắt",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 9,
        title: "Album 6x9(65 ảnh),…",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
    {
        id: 10,
        title: "Set khung ảnh 3D làm quà tặng, quà lưu niệm",
        price: "600đ - 24.000đ",
        image: "./assets/images/anh-tran-vien.jpg",
    },
];

// Render Products
function renderProducts(products) {
    const listProduces = $(".products-list");

    const htmls = products.map((product) => {
        return `
            <li class="hide">
                <a href="">${product.title}</a>
            </li>
        `;
    });
    listProduces.innerHTML = htmls.join("");
}

// Ẩn / hiển Navlist
function toggleNavList() {
    const button = $(".cheader-with-search-button button");
    const subnav = $(".subnav");

    const isNavlist = false;

    button.onclick = function () {
        subnav.classList.toggle("hide");
        !isNavlist;
    };
}

// Ẩn / hiển Menu Mobile
function toggleMenuMobile() {
    const bars = $(".bars");
    const menuMobile = $(".menu-mobile");
    const overlay = $(".overlay");
    const backoutMenu = $(".menu-mobile-backout img");

    const isMenuMobile = false;

    function toggleClick() {
        menuMobile.classList.toggle("hide");
        overlay.classList.toggle("hide");
        !isMenuMobile;
    }

    bars.onclick = function () {
        toggleClick();
    };

    overlay.onclick = function () {
        toggleClick();
    };

    backoutMenu.onclick = function () {
        toggleClick();
    };
}

// Handle Search
function handleInputSearch() {
    const searchInput = $(".search-form input");
    const productsSearch = $(".products");
    const search = $(".search");
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
            const txtSearch = e.target.value.trim().toLowerCase();

            itemsProduct.forEach((item) => {
                if (item.innerText.toLowerCase().includes(txtSearch)) {
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
        productsSearch.classList.remove("hide");
    };
    searchInput.onblur = function () {
        setTimeout(() => productsSearch.classList.add("hide"), 200)
    };
}

// Copy Search
function copySearchMobile() {
    const searchMobile = $(".search-mobile");
    const search = $(".search");

    const copySearch = search.innerHTML;
    searchMobile.innerHTML = copySearch;

    handleInputSearch();
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
    renderProducts(products);

    toggleNavList();

    toggleMenuMobile();

    handleInputSearch();

    copySearchMobile();

    copyMenuNavbar();

    copyMenuHero();

    handleslider();
}

start();
