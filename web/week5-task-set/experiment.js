let jsPsych = initJsPsych();
let timeline = [];

// Welcome
// Define a welcome trial using jsPsych’s jsPsychHtmlKeyboardResponse plugin
let welcomeTrial = {
    // Indicate the plugin type we’re using
    type: jsPsychHtmlKeyboardResponse,

    // What stimulus to display on the screen
    stimulus: `
    <h1>Welcome to the Math Response Time Task!</h1> 

    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press SPACE to begin.</p>
    `,

    // Listen for the SPACE key to be pressed to proceed
    choices: [' '],
};

timeline.push(welcomeTrial);

// Create an object, made of key - value pairs, make up parameters (ingredients) of plugin

let ageTrial = {
    type: jsPsychSurveyHtmlForm,
    preamble: '<p>How old are you?</p>',
    html: `<p><input type='text' name='age' id='age'></p>`,
    autofocus: 'age', // id of the field we want to auto-focus on when the trial starts
    button_label: 'Submit Answer',
    data: {
        collect: true,
    },
    on_finish: function (data) {
        data.age = data.response.age;
    }
}
timeline.push(ageTrial);

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: ['NO KEYS'],
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv();
        console.log(data);
    }
}
timeline.push(debriefTrial);

jsPsych.run(timeline);

