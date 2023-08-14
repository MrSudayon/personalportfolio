let header = document.getElementById('header');
let btn_explore = document.querySelector('.btn_explore');
let text = document.getElementById('text');

let bgImg = document.getElementById('bgImg');
let starsImg = document.getElementById('starsImg');
let cloudImg = document.getElementById('cloudImg');
let shadowImg = document.getElementById('shadowImg');
let lightImg = document.getElementById('lightImg');
let sunImg = document.getElementById('sunImg');
let mountainImg = document.getElementById('mountainImg');
let backtreesImg = document.getElementById('backtreesImg');
let fronttreesImg = document.getElementById('fronttreesImg');



window.addEventListener('scroll', function () {
    let value = window.scrollY;
        header.style.top = value * .5 + 'px';

        btn_explore.style.top = value * .30 + 350  + 'px';

        text.style.top = -value * .4 + 520 + 'px';

        bgImg.style.top = value + 'px';

        starsImg.style.left = -value * .25 + 'px';

        cloudImg.style.top = value * .1 + 'px';
        cloudImg.style.left = value * .25 + 'px';

        shadowImg.style.bottom = value * .25 + 'px';
        lightImg.style.bottom = value * .25 + 'px';
        sunImg.style.bottom = value * .25 + 'px';

        mountainImg.style.top = value * .25 + 'px';
        mountainImg.style.left = value * .1 + 'px';

        backtreesImg.style.top = value * .5 + 'px';
        backtreesImg.style.left = -value * .1 + 'px';

        fronttreesImg.style.bottom = value * .25 + 'px';
})