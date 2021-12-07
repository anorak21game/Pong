export class Screen {
    constructor(obj) {
        this.obj = obj;
    }

    get element() {
        return window.document.getElementById("screen");
    }

    init() {
        this.screen = document.createElement("section");  
        this.screen.setAttribute("id", "screen");       
        this.obj.appendChild(this.screen);
    }
}