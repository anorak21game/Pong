/* Load files function */
function loadJSFile(folder, ...jsFile) {
    for (let index = 0; index < jsFile.length; index++) {
        let script = document.createElement("script");
        let className = jsFile[index];
        let path = "../" + folder + "/" + className + ".js";
        script.src = path;
        document.getElementById("sourceCode").appendChild(script); 
    }
}

/* Load classes */
loadJSFile("class", "ball", "paddle");

/* Load source code */
loadJSFile("src", "framework", "main");