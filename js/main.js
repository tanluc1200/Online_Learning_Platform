// go to top header
function goToTop() {
    const body = document.querySelector("body");
    let scrollPosition;
    const go_to_top = document.querySelector(".go-to-top");
    window.addEventListener("scroll", () => {
        scrollPosition =
            window.pageYOffset || document.documentElement.scrollTop;
        // const go_to_top = document.querySelector(".go-to-top");
        if (scrollPosition >= 200) {
            go_to_top.classList.add("active");
        } else {
            go_to_top.classList.remove("active");
        }
    });
    go_to_top.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
}
// menu mobile tablet

function handleClickBtnMenuMobile() {
    const btn_icon = document.querySelector(".header-menu-mobile-icon");
    const btn_list = document.querySelector(".header-menu-mobile-list");
    btn_icon.addEventListener("click", () => {
        btn_list.classList.toggle("active");
        btn_icon.classList.toggle("fa-xmark");
    });
}
function scaleZoomIMG() {
    const listIMG = document.querySelectorAll("img");
    listIMG.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            console.log(item);
            item.classList.add("active");
        });
        item.addEventListener("mouseleave", () => {
            console.log(item);
            item.classList.remove("active");
        });
    });
}
// oncload
function onLoad() {
    goToTop();
    handleClickBtnMenuMobile();
    // scaleZoomIMG();
}
onLoad();
