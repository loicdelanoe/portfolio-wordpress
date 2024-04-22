export class Cursor {

    constructor() {
        this.cursor = document.querySelector('.cursor');
        this.projectLinks = document.querySelectorAll('.projetcard__link');

        this.projectLinks.forEach((link) => {
            this.removePointer(link);
        });

        this.handleMouseMove();
        this.AddCursorStyle();
    }

    handleMouseMove() {
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.top = e.pageY + 'px';
            this.cursor.style.left = e.pageX + 'px';
        })
    }

    AddCursorStyle() {
        this.projectLinks.forEach((link) => {
            link.addEventListener('mouseover', () => {
                this.cursor.classList.add('link');
            });

            link.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('link');
            });
        })
    }

    removePointer(element) {
        element.classList.add('no-cursor');
    }
}