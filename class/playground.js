class Playground {
    constructor(object) {
        this._object = object;
    }

    init() {
        let playground = document.createElement("div");
        playground.setAttribute("id", "playground");
        this.appendChild(playground);
    }
}