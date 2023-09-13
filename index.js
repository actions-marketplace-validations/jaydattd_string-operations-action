const core = require('@actions/core');
const github = require('@actions/github');

try {
  
    const stringToConvert = core.getInput('string_to_process');
    // console.log(`String to process ${stringToConvert}!`);
    
    
    const lowercase = stringToConvert.toLowerCase();
    // console.log(`toLowerCase: ${lowercase}`);
    core.setOutput("toLowerCase", lowercase);

    const uppercase = stringToConvert.toUpperCase();
    // console.log(`toUperCase: ${uppercase}`);
    core.setOutput("toUperCase", uppercase);
    
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2)
    // console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
