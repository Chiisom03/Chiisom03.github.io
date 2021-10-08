//  === BARBA ====

// import barba from '@barba/core'
// import barbaCss from 'barbaCss';

// // tell barba to use css plugins
// barba.use(barbaCss);

// // init barba
// barba.init({
//     transitions: [{
//         once(){}
//     }]
// })

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId, menuOverlay) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    const overlay = document.getElementById(menuOverlay)

    if (toggle && nav && overlay) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
            overlay.classList.toggle('on__active')
        })

        overlay.addEventListener('click', () => {
            nav.classList.remove('show')
            overlay.classList.remove('on__active')
        })
    }
}
showMenu('nav-toggle', 'nav-menu', 'menu-overlay')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    const bodyOverlay = document.getElementById('menu-overlay')
    navMenu.classList.remove('show')
    bodyOverlay.classList.remove('on__active')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== PROJECT =====*/
// var $cursor = $(".cursor"),
// $overlay = $(".project__overlay");

// function moveCircle(e) {
// TweenLite.to($cursor, 0.5, {
//   css: {
//     left: e.pageX,
//     top: e.pageY
//   },
//   delay: 0.03
// });
// }

// $(".p1").hover(function() {
// $(".cursor").css({ "background-image": "url(work6.jpg)" });
// });
// $(".p-2").hover(function() {
// $(".cursor").css({ "background-image": "url(../img/work2.jpg)" });
// });
// $(".p-3").hover(function() {
// $(".cursor").css({ "background-image": "url(../img/work3.jpg)" });
// });
// $(".p-4").hover(function() {
// $(".cursor").css({ "background-image": "url(../img/work4.jpg)" });
// });

// var flag = false;
// $($overlay).mousemove(function() {
// flag = true;
// TweenLite.to($cursor, 0.3, { scale: 1, autoAlpha: 1 });
// $($overlay).on("mousemove", moveCircle);
// });

// $($overlay).mouseout(function() {
// flag = false;
// TweenLite.to($cursor, 0.3, { scale: 0.1, autoAlpha: 0 });
// });

