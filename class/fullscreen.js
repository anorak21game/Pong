class Fullscreen {
    constructor(object) {
        this._object = object;
    }

    init() {
        let fullscreen = document.createElement("section");
        fullscreen.setAttribute("id", "fullscreen");
        this.appendChild(fullscreen);
    }
}