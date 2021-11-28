class Ball {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log('This is ' + this._name + ' !');
    }

    // A static method
    static saySomething() {
        console.log('Hello!');
    }
}