function testURIError(){
    try {
        decodeURIComponent('%')
      } catch (e) {
        console.log(e instanceof URIError)  
        console.log(e.message)            
        console.log(e.name)              
        console.log(e.fileName)        
        console.log(e.lineNumber)           
        console.log(e.columnNumber)       
        console.log(e.stack);
        console.log(e.errors);
      }
}

module.exports = {
    testURIError
}