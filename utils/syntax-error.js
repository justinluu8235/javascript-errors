
function testSyntacError(){
    try {
        eval('hoo bar');
      } catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.log(e.stack);
        console.log(e.errors);
 
      }
}


module.exports = {
    testSyntacError
}