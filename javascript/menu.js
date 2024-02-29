// menu
const menu = document.querySelector("#menu");
const siteMap = document.querySelector(".sitemap");
const siteMap_menu = document.querySelector(".sitemap-menu");
const line = document.querySelector(".line");
const sns = document.querySelector(".sns");
const link_menu = document.querySelector(".link-menu");
menu.addEventListener("click",
    () => {
        if (!menu.classList.contains("on")) {
            siteMap.classList.add("on");
            menu.classList.add("on");
            siteMap_menu.classList.add("on");
            line.classList.add("on");
            sns.classList.add("on");
            link_menu.classList.add("on");
            body.classList.add("fixed");
        } else {
            siteMap.classList.remove("on");
            menu.classList.remove("on");
            siteMap_menu.classList.remove("on");
            line.classList.remove("on");
            sns.classList.remove("on");
            for (let i = 0; i < subMenu.length; i++) {
                subMenu[
                    i
                ].classList.remove("on");
            }
            link_menu.classList.remove("on");
            body.classList.remove("fixed");
        }
    });
// sub menu
const subMenu = document.querySelectorAll(".sub_menu li> span");
const nav_img = document.querySelectorAll(".site_img_list li");
subMenu.forEach((el,
    i) => {
    el.addEventListener("mouseover",
        () => {
            subMenu[
                i
            ].classList.add("on");
            nav_img[
                i
            ].classList.add("on");
        })
});
subMenu.forEach((el,
    i) => {
    el.addEventListener("mouseout",
        () => {
            subMenu[
                i
            ].classList.remove("on");
            nav_img[
                i
            ].classList.remove("on");
        })
});
// sub menu END
// search
const search = document.querySelector(".search");
const search_content = document.querySelector(".search_contents");
const search_close = document.querySelector(".search_close");
const body = document.querySelector("body");
search.addEventListener("click",
    (e) => {
        e.stopImmediatePropagation();
        search_content.classList.add("active");
        body.classList.add("on");
    });
search_close.addEventListener("click",
    (e) => {
        e.stopImmediatePropagation();
        search_content.classList.remove("active");
        body.classList.remove("on");
    });
// search END