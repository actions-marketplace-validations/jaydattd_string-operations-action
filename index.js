const core = require('@actions/core');
const github = require('@actions/github');

try {
  
    const stringToConvert = core.getInput('string_to_process');
    const functionName = core.getInput('function_name');
    // stringToConvert = "Test"
    // functionName = "toLowerCase()"    
    
    eval("var result = '"+stringToConvert+"'."+functionName)
    console.log(result)
    

    const lowercase = stringToConvert.toLowerCase();    
    core.setOutput("result", result);
    
} catch (error) {
  core.setFailed(error.message);
}
