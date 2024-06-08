import {Cursor} from "./Cursor";
import {Observer} from "./Observer";

class Main {

    constructor() {
        this.observer = new Observer();
        this.cursor = new Cursor();
    }
}

new Main();