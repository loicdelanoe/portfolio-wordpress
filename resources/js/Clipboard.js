import {settings} from './settings';

export class Clipboard {
    constructor() {
        this.clipboardElements = document.querySelectorAll('[data-clipboard]');

        this.clipboardElements.forEach((clipboardElement) => {
            clipboardElement.addEventListener('click', (e) => {
                navigator.clipboard.writeText(e.currentTarget.dataset.clipboard).then();
                e.currentTarget.animate(settings.feedback.display, {
                    duration: 800,
                    pseudoElement: '::after'
                })
            });
        })
    }
}