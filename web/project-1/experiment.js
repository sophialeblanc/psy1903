let jsPsych = initJsPsych({
    show_progress_bar: true
});
let timeline = [];

// Welcome & consent trial

let consentTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Welcome</h1> 

    <p>The experiment you are about to complete is an educational exercise designed for PSY 1903: Programming for Psychological Scientists</em>; it is not intended as a true scientific experiment.</p>
    <p>No identifying information will be collected, data will not be shared beyond our class, and your participation is completely voluntary.</p>
    <p>If you have any questions, please reach out to Dr. Garth Coombs (garthcoombs@fas.harvard.edu), one of the head instructors of PSY 1903.</p>
    <p>If you agree to participate, press [SPACE] to continue.</>
    `,

    // Listen for the SPACE key to be pressed to proceed
    choices: [' '],
};
timeline.push(consentTrial);

// Blocks; randomize block order AND order of stimuli within

let randomizedBlocks = jsPsych.randomization.shuffle(conditions);

for (let block of randomizedBlocks) {
    let instructionsTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: block.instructions
    };
    timeline.push(instructionsTrial);

    let randomizedStimuli = jsPsych.randomization.shuffle(block.stimuli);
    for (let stimulus of randomizedStimuli) {

        let fixationTrial = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: `+`,
            trial_duration: 500,
            choices: "NO_KEYS"
        };
        timeline.push(fixationTrial);
        let choices = jsPsych.randomization.shuffle(["Lottery: draw a chip", "$5"]);
        let conditionTrial = {
            type: jsPsychHtmlButtonResponse,
            stimulus: `<img src=${stimulus.image} width="600">`,
            choices: choices,
            data: {
                collect: true,
                condition: block.title,
                trial: stimulus.image.split('/').pop().replace('.png', ''),
            },
            on_finish: function (data) {
                data.choice = choices[data.response];
            }
        };

        timeline.push(conditionTrial);
    }

    let likert_scale = [
        "Strongly Disagree",
        "Disagree",
        "Neutral",
        "Agree",
        "Strongly Agree"
    ];

    let likertTrial = {
        type: jsPsychSurveyLikert,
        questions: [
            { prompt: "", name: '', labels: likert_scale },
            { prompt: "", name: '', labels: likert_scale },
        ],
        data: {
            collect: true,
        },
    }

    timeline.push(likertTrial);

    // Results Trial
    // NEED TO DO


    // Debrief

    let debriefTrial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
    <h1>Thank you!</h1>
    <p>The task you just completed is called an Uncertainty Tolerance Task. In this experiment, we are interested in how people make decisions when the outcome is uncertain.</p>
    <p>By observing your strategy in this task, we can learn more about how people relate to and cope with uncertainty in different contexts in their lives.</p>
    <p>Your responses will be combined with those of other participants to help us answer these questions. Individual data will remain confidential.</p>
    <p>Thank you again for your time and contribution.</p>
    `,
        choices: ['NO KEYS'],
        on_start: function () {
            jsPsych.progressBar.progress = 1;
            let data = jsPsych.data
                .get().
                filter({ collect: true })
                .ignore(['stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
                .csv();
            console.log(data);
        }
    }

    timeline.push(debriefTrial);

    jsPsych.run(timeline);

