function evalError() {
    try {
        throw new EvalError('Hello', '../index.js', 10);
        
    }
    catch (e) {
        console.log(e instanceof EvalError);
        console.log(e.message);
        console.log(e.name);
        console.log(e.fileName);
        console.log(e.lineNumber);
        console.log(e.columnNumber);
    }
}



module.exports = {
    evalError
}