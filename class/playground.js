export class Playground {
    constructor(obj) {
        this.obj = obj;
    }

    init() {
        let playground = document.createElement("div");
        playground.setAttribute("id", "playground");
        this.obj.appendChild(playground);
    }
}