// Define a variable to hold our experiment name

let experiment = 'Stroop';
console.log(typeof experiment); // string
console.log(experiment.charAt(0)); // 'S'

/* let welcomeMessage = `Welcome to our ` + experiment + ` experiment. Please read the instructions carefully.
Welcome to our experiment. Please read the instructions carefully.
Welcome to our experiment. Please read the instructions carefully.
Welcome to our experiment. Please read the instructions carefully.`;
console.log(welcomeMessage) */

let trialCountMax = 20;
console.log(typeof trialCountMax); //number

// TODO: randomize colors
let colors = ['red', 'green', 'blue']

alert('Welcome to the ' + experiment + ' experiment!');

trialCountMax = 40;

// At the halfway point, we will display a pause screen
let halfWayCount = trialCountMax / 2;

console.log(halfWayCount); // Expected 20

/* Multi line comment
yup that's that */

let correct = true;
console.log(typeof correct);

console.log(10 > 15); // False