export class Playground {
    constructor(rootElement) {
        this.root = rootElement;

        this.screen = this.createElement('div', 'playground');
        this.root.append(this.screen);
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

    aspectRatio(x, y) {
        let screenWidth = this.screen.clientWidth;
        let screenHeight = this.screen.clientHeight;

        let ratioHeight = this.ruleOfThree(x, y, screenWidth);
        let ratioWidth = this.ruleOfThree(y, x, screenHeight);

        let ratioScaleFromWidth = screenWidth * ratioHeight;
        let ratioScaleFromHeight = screenHeight * ratioWidth;

        if (ratioScaleFromWidth < ratioScaleFromHeight) {
            let rest = (screenHeight - ratioHeight) / 2;
            let paddingSize = rest + "px";
            this.screen.style.paddingTop = paddingSize;
            this.screen.style.paddingBottom = paddingSize;
        } else {
            let rest = (screenWidth - ratioWidth) / 2;
            let paddingSize = rest + "px";
            this.screen.style.paddingLeft = paddingSize;
            this.screen.style.paddingRight = paddingSize;
        }
    }

    ruleOfThree(a, b, ratioA) {
        let ratioB = ratioA * ( b / a );
        return ratioB;
    }
}