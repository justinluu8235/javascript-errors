//Eval Error
let evalErrorModule = require('./utils/eval-error.js');
evalErrorModule.evalError();

//Range Error
let rangeErrorModule = require('./utils/range-error');
rangeErrorModule.checkAge(200);


//Reference Error
let referenceErrorModule = require('./utils/reference-error');
referenceErrorModule.testRefError();


//Syntax Error
let syntaxErrorModule = require('./utils/syntax-error');
syntaxErrorModule.testSyntacError();


//Type Error 
let typeErrorModule = require('./utils/type-error');
typeErrorModule.testTypeError();

//URI Error
let uriErrorModule = require('./utils/uri-error');
uriErrorModule.testURIError();

//Aggregate Error
let aggregateErrorModule = require('./utils/aggregate-error');
aggregateErrorModule.testAggregateError();

//Internal Error
let internalErrorModule = require('./utils/internal-error');
internalErrorModule.testInternalError();

