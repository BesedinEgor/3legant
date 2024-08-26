function mobileNav() {
  // Mobile nav button
  const navBtn = document.querySelector(".mobile-nav-btn");
  const nav = document.querySelector(".mobile-nav");
  const menuIcon = document.querySelector(".nav-icon");
  const closeMenu = document.querySelector(".mobile-nav__close");

  //   const listMenu = nav.querySelectorAll("li");
  const linkMenu = nav.querySelectorAll("#collection, #products, #footer");

  navBtn.onclick = function () {
    nav.classList.toggle("mobile-nav--open");
    menuIcon.classList.toggle("nav-icon--active");
    document.body.classList.toggle("no-scroll");
  };

  closeMenu.onclick = function () {
    nav.classList.remove("mobile-nav--open");
    menuIcon.classList.remove("nav-icon--active");
    document.body.classList.remove("no-scroll");
  };

  //проскролливание страницы к секции соответствующей пункту мобильного меню
  linkMenu.forEach((item) => {
    console.log(item.id);
    item.onclick = function () {
      nav.classList.remove("mobile-nav--open");
      document.body.classList.remove("no-scroll");

      if (item.id) {
        const section = document.querySelector("." + item.id);
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
  });
}
//   shop.onclick = function () {
//     nav.classList.remove("mobile-nav--open");
//     document.body.classList.remove("no-scroll");
//     section.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

export default mobileNav;
