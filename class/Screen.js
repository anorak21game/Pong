export class Screen {
    constructor(parentElement) {
        this.root = parentElement;

        this.format = this.createElement('div', 'screen');
        this.root.append(this.format);
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
        let formatWidth = this.format.clientWidth;
        let formatHeight = this.format.clientHeight;

        let ratioHeight = this.ruleOfThree(x, y, formatWidth);
        let ratioWidth = this.ruleOfThree(y, x, formatHeight);

        let ratioScaleFromWidth = formatWidth * ratioHeight;
        let ratioScaleFromHeight = formatHeight * ratioWidth;

        if (ratioScaleFromWidth < ratioScaleFromHeight) {
            let rest = (formatHeight - ratioHeight) / 2;
            let paddingSize = rest + "px";
            this.format.style.paddingTop = paddingSize;
            this.format.style.paddingBottom = paddingSize;
        } else {
            let rest = (formatWidth - ratioWidth) / 2;
            let paddingSize = rest + "px";
            this.format.style.paddingLeft = paddingSize;
            this.format.style.paddingRight = paddingSize;
        }
    }

    ruleOfThree(a, b, ratioA) {
        let ratioB = ratioA * ( b / a );
        return ratioB;
    }
}