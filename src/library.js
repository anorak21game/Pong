/* Load files function */
function loadJSFile(folder, ...jsFile) {
    for (let index = 0; index < jsFile.length; index++) {
        let script = document.createElement("script");
        let className = jsFile[index];
        let path = folder + "/" + className + ".js";
        script.src = path;
        document.body.appendChild(script);
    }
}

/* Add playground */
function playground() {
    const FULLSCREEN = document.getElementById("fullscreen");
    const PLAYGROUND = document.createElement("div");
    
    PLAYGROUND.setAttribute("id", "playground");

    let screenHeight = FULLSCREEN.offsetHeight;
    let screenWidth = FULLSCREEN.offsetWidth;

    FULLSCREEN.appendChild(PLAYGROUND);
}

/* Load classes and source code */
loadJSFile("class", "ball", "paddle");
loadJSFile("src", "main");