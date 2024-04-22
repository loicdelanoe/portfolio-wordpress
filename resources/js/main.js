// import {observers} from "./observers";

// FOR PARALLAX EFFECT
// const heroContainer = document.querySelector('.hero__container');
// const imgElements = document.querySelectorAll('.img__placeholder');
// const block = document.querySelector('.bg');
//
// heroContainer.style.position = 'relative';
// block.style.width = '60%';
// block.style.borderRadius = '50px';
// imgElements.forEach((element) => {
//     element.style.position = 'relative';
// });
// window.addEventListener('scroll', () => {
//     let {scrollY} = window;
//
//     block.style.width = 60 + (0.1 * scrollY) + '%';
//     block.style.borderRadius = 50 + (-0.1 * scrollY) + 'px';
//
//     if (parseInt(block.style.width) >= 100) {
//         block.style.width = '100%';
//         block.style.borderRadius = '0px'
//     }
//
//     imgElements.forEach((element) => {
//         element.style.top = -0.1 * scrollY + 'px';
//     });
//
//     heroContainer.style.top = 0.1 * scrollY + 'px';
// });

// observers.init();

import {Cursor} from "./Cursor";

class Main {

    constructor() {
        this.cursor = new Cursor();
    }
}

window.addEventListener('load', () => {
    window.main = new Main();
});