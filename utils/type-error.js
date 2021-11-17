function testTypeError(){
    try {
    //null.f()
    let num = 15;
    num.toUpperCase();
  } catch (e) {
    console.log(e instanceof TypeError)  // true
    console.log(e.message)               // "null has no properties"
    console.log(e.name)                  // "TypeError"
    console.log(e.fileName)              // "Scratchpad/1"
    console.log(e.stack);
    console.log(e.errors);
  }

}

module.exports = {
    testTypeError
}