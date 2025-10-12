let jsPsych = initJsPsych();
let timeline = [];

// Set arrays for blocks to define outside of loop + later push to timeline

let uncertainBlock = [];
let ambigBlock = [];

// Shuffle images within respective blocks

let shuffledUncertain = jsPsych.randomization.shuffle(uncertainConditions);
let shuffledAmbig = jsPsych.randomization.shuffle(ambigConditions);

// Welcome & consent trial
// NEED TO DO - mention you will recieve two games/instructions

// UNCERTAIN Instructions trial
// Wording to be edited, CSS to be added

let uncertainInstructTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Instructions</h1> 

    <p>You will play a game in which you have to choose between a lottery and a sure payout. All decisions you make in the task could influence the amount of reward you get at the end of the study.</p>
    <p>We have multiple bags with different proportions of blue and red chips. The colored bars represent the shares of blue and red chips in the bag.</p>
    <p>At the end of the task, one trial will be randomly picked: for example, if on that trial, you chose the sure outcome of $5, you will receive the $5, if you chose the lottery, we will play the lottery and receive the payout based on the outcome.</p>
    <p>When you are ready, press [SPACE] to begin.</>
    `,

    // Listen for the SPACE key to be pressed to proceed
    choices: [' '],
};

// AMBIGUOUS Instructions trial
// Wording to be edited, CSS to be added

let ambigInstructTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Instructions</h1> 

    <p>You will play a game in which you have to choose between a lottery and a sure payout. All decisions you make in the task could influence the amount of reward you get at the end of the study.</p>
    <p>We have multiple bags with different proportions of blue and red chips. The colored bars represent the shares of blue and red chips in the bag.</p>
    <p>You will not be able to see what the exact shares of blue and red chips are.</p>
    <p>At the end of the task, one trial will be randomly picked: for example, if on that trial, you chose the sure outcome of $5, you will receive the $5, if you chose the lottery, we will play the lottery and receive the payout based on the outcome.</p>
    <p>When you are ready, press [SPACE] to begin.</>
    `,

    // Listen for the SPACE key to be pressed to proceed
    choices: [' '],
};

// UNCERTAIN Block

for (let condition of shuffledUncertain) {

    let choices = ['Lottery: Draw a chip', '$5'];
    choices = jsPsych.randomization.repeat(choices, 1);


    uncertainBlock.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: `<img src="${condition.image}">`,
        choices: choices,
        data: {
            collect: true,
        },
        on_finish: function (data) {
            console.log(data.response);
            data.answer = choices[data.response];
        }
    });
};


// AMBIGUOUS Block

for (let condition of shuffledAmbig) {

    let choices = ['Lottery: Draw a chip', '$5'];
    choices = jsPsych.randomization.repeat(choices, 1);


    ambigBlock.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: `<img src="${condition.image}">`,
        choices: choices,
        data: {
            collect: true,
        },
        on_finish: function (data) {
            console.log(data.response);
            data.answer = choices[data.response];
        },
    });
};

// determine if data.response / data collection is messed up bc named same for ambig and uncertain

// Setting timelines for Within Subjects

let blocks = ["Uncertain", "Ambiguous"];
let randomizedBlockOrder = jsPsych.randomization.shuffle(blocks);

randomizedBlockOrder.forEach(block => {
    if (block === "Uncertain") {
        timeline.push(uncertainInstructTrial);
        timeline.push(...uncertainBlock);
    } else if (block === "Ambiguous") {
        timeline.push(ambigInstructTrial);
        timeline.push(...ambigBlock);
    }
});

// EDIT TO COLLECT THIS DATA ^^ RANDOM ORDER

// Likert survey trial
// NEED TO DO

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

// snapshot