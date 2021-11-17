let b = 5;

function testRefError(){
  
    try{
        
        let a = c;
        
    }
    catch(e){
        console.log(e.message);
        console.log(e.name)   
        console.log(e.stack);
        console.log(e.errors);  
   
    }
}

module.exports = {
    testRefError
}