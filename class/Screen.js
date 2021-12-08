export class Screen {
    constructor(rootObject) {
        this.root = rootObject;

        this.monitorScreen = this.createElement('div', 'monitor-screen');
        this.playGround = this.createElement('div', 'play-ground');

        this.monitorScreen.append(this.playGround);
        this.root.append(this.monitorScreen);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);

        return element;
    }

    getElement(selector) {
        const element = document.querySelector(selector);

        return element;
    }

    scaleElement(scaleX, scaleY, element) {
        let top = '';
        let right = '';
        let bottom = '';
        let left = '';

        element.style.marginTop = top;
        element.style.marginRiight = right;
        element.style.marginBottom = bottom;
        element.style.marginLeft = left;
    }
}