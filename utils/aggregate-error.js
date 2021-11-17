function testAggregateError(){
  
    Promise.any([
        Promise.reject(new Error("some error")),
      ])
      .catch(e => {
        console.log(e instanceof AggregateError); // true
        console.log(e.message);                   // "All Promises rejected"
        console.log(e.name);                      // "AggregateError"
        console.log(e.stack);
        console.log(e.errors);
      
      })
}

module.exports = {
    testAggregateError
}