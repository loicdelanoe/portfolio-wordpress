import {Cursor} from "./Cursor";
import {Observer} from "./Observer";
import {Clipboard} from "./Clipboard";

class Main {

    constructor() {
        this.path = window.location.pathname;
        this.regex = /\/projets\/./;

        if (this.regex.test(this.path)) {
            this.clipboard = new Clipboard();
        }

        this.observer = new Observer();
        this.cursor = new Cursor();
    }
}

new Main();