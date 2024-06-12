export class Cursor {

    constructor() {
        document.body.insertAdjacentHTML('afterbegin', `<div class="cursor"></div>`);

        this.cursor = document.querySelector('.cursor');
        this.projectLinks = document.querySelectorAll('.projetcard__link');
        this.images = document.querySelectorAll('.overview__img');

        this.handleMouseMove();
        this.AddCursorStyle(this.projectLinks, 'link');
        this.AddCursorStyle(this.images, 'zoom');
    }

    handleMouseMove() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.top = e.pageY + 'px';
            this.cursor.style.left = e.pageX + 'px';
        })
    }

    AddCursorStyle(array, cssClass) {
        array.forEach((element) => {
            this.removePointer(element);

            element.addEventListener('mouseover', () => {
                this.cursor.classList.add(cssClass);
            });

            element.addEventListener('mouseleave', () => {
                this.cursor.classList.remove(cssClass);
            });
        })
    }

    removePointer(element) {
        element.classList.add('no-cursor');
    }
}