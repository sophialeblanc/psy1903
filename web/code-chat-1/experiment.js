let jsPsych = initJsPsych();
let timeline = [];



// Welcome trial will go here




// Main trials will go here




// Debrief trial
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        // Filter and retrieve results as CSV data
        let results = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['stimulus', 'trial_type', 'plugin_version', 'collect'])
            .csv();
        console.log(results);
    }
}
timeline.push(debriefTrial);


jsPsych.run(timeline);