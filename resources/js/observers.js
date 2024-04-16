import {settings} from './settings';

export const observers = {
    init() {
        this.showUpElements = document.querySelectorAll(`[data-animation="${settings.showUpClass}"]`);
        this.showUpElements.forEach((showUpElement) => {
            showUpElement.classList.add(settings.NoOpacityClass);
        });
        this.showUpObserver = new IntersectionObserver(this.showUpAnimation.bind(this));
        this.observeAction();
        this.delay = 0;
        this.test = 0;
        console.log(this.test);
    },
    showUpAnimation(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add(settings.showUpClass);
                    entry.target.classList.remove(settings.NoOpacityClass);
                }, this.delay);

                this.delay += 100;
            }
        });

        this.delay = 0;
    },
    observeAction() {
        this.showUpElements.forEach((element) => {
            this.showUpObserver.observe(element);
        });
    },
};
