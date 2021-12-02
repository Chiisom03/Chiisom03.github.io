(function () {

    const link = document.querySelectorAll('ul > .nav__item');
    const cursor = document.querySelector('.cursor');

    const animateit = function (e) {
          const span = this.querySelector('li');
          const { offsetX: x, offsetY: y } = e,
          { offsetWidth: width, offsetHeight: height } = this,

          move = 5,
          xMove = x / width * (move * 2) - move,
          yMove = y / height * (move * 2) - move;

          span.style.transform = `translate(${xMove}px, ${yMove}px)`;

          if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = e => {
          const { clientX: x, clientY: y } = e;
          cursor.style.left = x + 'px';
          cursor.style.top = y + 'px';
    };

    const bigCursor = () => {
        cursor.style.transform.scale(5)
    }

    link.forEach(b => b.addEventListener('mousehover', bigCursor));
    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();


let $projectCursor = $('.project__cursor'),
    $projectOverlay = $('.project__overlay');
    $cursor = $('.cursor')

const moveCircle = (e) => {
    TweenLite.to($projectCursor, 0.5, {
        css: {
            left: e.pageX,
            top: e.pageY,
        },
        delay: 0.03,
    });
}

$(".one").hover(() => {
    $('.project__cursor').css({
        "background-image": "url(blue__sky.jpg)",
    });
});
$(".two").hover(() => {
    $('.project__cursor').css({
        "background-image": "url(breezy.jpg)"
    });
});
$(".three").hover(() => {
    $('.project__cursor').css({
        "background-image": "url(evening.jpg)"
    });
});
$(".four").hover(() => {
    $('.project__cursor').css({
        "background-image": "url(friends.jpg)"
    });
});

let flag = false;
$projectOverlay.mousemove(() => {
    flag = true;
    TweenLite.to($projectCursor, 0.3, {scale: 1, autoAlpha: 1});
    $projectOverlay.on('mousemove', moveCircle);
});

$projectOverlay.mouseout(() => {
    flag = false;
    TweenLite.to($projectCursor, 0.3, {scale: 0.1, autoAlpha: 0});
});