let b = 5;

function testRefError(){
  
    try{
        
        let a = c;
        
    }
    catch(e){
        console.log(e.message);
        console.log(e.name)     
   
    }
}

module.exports = {
    testRefError
}