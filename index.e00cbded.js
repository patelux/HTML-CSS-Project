!function(){!function(){var e={openModalBtn:document.querySelector("[data-locations-open]"),closeModalBtn:document.querySelector("[data-locations-close]"),modal:document.querySelector("[data-locations]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}(),function(){var e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body"),menuList:document.querySelector(".mob-menu__list")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),e.body.classList.remove("no-scroll")}))}();new Swiper(".gallery__swiper",{autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},loop:!0}),new Swiper(".review__swiper",{pagination:{el:".swiper-pagination",clickable:!0}});!function(){var e={openModalBtn1:document.querySelector("[data-buy-open1]"),openModalBtn2:document.querySelector("[data-buy-open2]"),closeModalBtn:document.querySelector("[data-buy-close]"),modal:document.querySelector("[data-buy]"),body:document.querySelector("body")};function n(){e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn1.addEventListener("click",n),e.openModalBtn2.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}()}();
//# sourceMappingURL=index.e00cbded.js.map
