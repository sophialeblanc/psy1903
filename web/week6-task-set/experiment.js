/* let jsPsych = initJsPsych();
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

for (let block of conditions) {

    let blockTrial = {
        type: jsPsychSurveyHtmlForm,
        preamble: `What is ${block.num1} + ${block.num2}?`,
        html: `<p><input type='text' name='answer' id='answer'></p>`,
        autofocus: 'answer',
        button_label: 'Submit Answer',
        data: {
            collect: true,
        },
        on_finish: function (data) {
            data.num1 = block.num1;
            data.num2 = block.num2;
            data.correctAnswer = block.correctAnswer;
            data.answer = data.response.answer;
            if (data.answer == block.correctAnswer) {
                data.correct = true;
            }
            else {
                data.correct = false;
            }
        }
    }
    timeline.push(blockTrial);
};

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
 */

/* let ageTrial = {
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
timeline.push(ageTrial); */


/* let jsPsych = initJsPsych();
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

for (let block of conditions) {

    let altAnswer;

    do {
        altAnswer = getRandomNumber(1, 20);
    } while (altAnswer === block.correctAnswer);
    // AI Usage: This is a while loop that will continue getting a random number using the previously defined function until it is not the same as the correct answer

    let choices = jsPsych.randomization.shuffle([block.correctAnswer, altAnswer]);
    // AI Usage: Define choices / shuffle in advance, can be referenced in on_finish later

    let blockTrial = {
        type: jsPsychHtmlButtonResponse,
        stimulus: `What is ${block.num1} + ${block.num2}?`,
        choices: choices.map(String), // AI Usage: turn into string data
        data: {
            collect: true,
            choices: choices,
            num1: block.num1,
            num2: block.num2,
            correctAnswer: block.correctAnswer,
            altAnswer: altAnswer,
        }, //  AI Usage: on_finish can now work with values through data, not dependent on block which could lead to using wrong item in conditions array
        on_finish: function (data) {
            data.answer = data.choices[data.response];
            // AI Usage: Reference stored choices string data through the response position 1 or 0
            data.correct = data.answer == data.correctAnswer;
        }
    }
    timeline.push(blockTrial);
};

// Debrief
let debriefTrial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `
    <h1>Thank you!</h1>
    <p>You can now close this tab.</p>
    `,
    choices: 'NO_KEYS',
    on_start: function () {
        let data = jsPsych.data
            .get()
            .filter({ collect: true })
            .ignore(['response', 'choices', 'stimulus', 'trial_type', 'trial_index', 'plugin_version', 'collect'])
            .csv()
        console.log(data);
    }
}
timeline.push(debriefTrial);

jsPsych.run(timeline); */



let jsPsych = initJsPsych();
let timeline = [];

// Welcome
// Define a welcome trial using jsPsych’s jsPsychHtmlKeyboardResponse plugin
let welcomeTrial = {
    // Indicate the plugin type we’re using
    type: jsPsychHtmlKeyboardResponse,

    // What stimulus to display on the screen
    stimulus: `
    <h1><span class='head'>Welcome to the Math Response Time Task!</span></h1> 

    <p>In this experiment, you will be shown a series of math questions.</p>
    <p>Please answer as quickly and accurately as possible.</p>
    <p>Press <span class='key'>SPACE</span> to begin.</p>
    `,

    // Listen for the SPACE key to be pressed to proceed
    choices: [' '],
};

timeline.push(welcomeTrial);

// Create an object, made of key - value pairs, make up parameters (ingredients) of plugin

for (let block of conditions) {

    let blockTrial = {
        type: jsPsychSurveyHtmlForm,
        preamble: `<span class='equation'>What is <span class='num'>${block.num1}</span> + <span class='num'>${block.num2}</span>?</span>`,
        html: `<p><input type='text' name='answer' id='answer'></p>`,
        autofocus: 'answer',
        button_label: 'Submit Answer',
        data: {
            collect: true,
        },
        on_finish: function (data) {
            data.num1 = block.num1;
            data.num2 = block.num2;
            data.correctAnswer = block.correctAnswer;

            console.log(data.response);
            data.answer = data.response.answer;
            data.correct = data.answer == block.correctAnswer;
        }
    };
    timeline.push(blockTrial);
};

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
            .csv()
        console.log(data);
    }
}
timeline.push(debriefTrial);

jsPsych.run(timeline);




