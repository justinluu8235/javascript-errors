function testInternalError(){
    try{
    function loop(x) {
        if (x >= 1000000000000)
          return;
        // do stuff
        loop(x + 1);
      }
      loop(0);
    }
    catch(e){
        console.log(e.name);
        console.log(e.message);
    }
}

module.exports = {
    testInternalError
}