import {Cursor} from "./Cursor";
import {Observer} from "./Observer";
import {Clipboard} from "./Clipboard";

class Main {

    constructor() {
        this.observer = new Observer();
        this.cursor = new Cursor();
        this.clipboard = new Clipboard();
    }
}

new Main();