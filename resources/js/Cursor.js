export class Cursor {

    constructor() {
        document.body.insertAdjacentHTML('afterbegin', `<div class="cursor"></div>`);

        this.cursor = document.querySelector('.cursor');
        this.projectLinks = document.querySelectorAll('.projetcard__link');

        this.handleMouseMove();
        this.AddCursorStyle(this.projectLinks, 'link');
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