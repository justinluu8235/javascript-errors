function ageRangeError(n)
{
    if( !(n >= 0 && n <= 150) )
    {
        throw new RangeError("Your age can not be less than 0 or older than 150.")
    }
}


function checkAge(age){
    try
    {
        ageRangeError(age);
    }
    catch(error)
    {
        if (error instanceof RangeError)
        { // Handle the error 
            console.log('Try putting in a valid age. You entered ' + age + ' as your age');
            console.log(error.stack);
            console.log(error.errors);
        }
    }
    
}


module.exports = {
    checkAge
}