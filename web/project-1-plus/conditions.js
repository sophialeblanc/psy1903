
// Create an array of conditions

let conditions = [
    {
        title: 'uncertainBlock',
        instructions: `
        <h1>In this task series...</h1>
        <p>You’ll see a bag represented by a colored bar showing the proportions of blue and red chips it contains. Example:</p>
        <img src='img/unc/unc-75-5.png'>
        <p>You can choose to play the lottery (draw a random chip) or take a sure reward of $5.</p>
        <p>If a blue chip is drawn, you earn $0; if a red chip is drawn, you earn the amount shown for that round.</p>
        <p>For this series of decisions, you will see the exact proportions of blue and red chips in each bag.</p>
        <p>When you are ready, press <span class='key'>SPACE</span> to begin.</>
    `,
        stimuli: [
            { image: 'img/unc/unc-75-5.png' },
            { image: 'img/unc/unc-75-8.png' },
            { image: 'img/unc/unc-75-20.png' },
            { image: 'img/unc/unc-75-50.png' },
            { image: 'img/unc/unc-75-125.png' },
            { image: 'img/unc/unc-50-5.png' },
            { image: 'img/unc/unc-50-8.png' },
            { image: 'img/unc/unc-50-20.png' },
            { image: 'img/unc/unc-50-50.png' },
            { image: 'img/unc/unc-50-125.png' },
            { image: 'img/unc/unc-25-5.png' },
            { image: 'img/unc/unc-25-8.png' },
            { image: 'img/unc/unc-25-20.png' },
            { image: 'img/unc/unc-25-50.png' },
            { image: 'img/unc/unc-25-125.png' },
        ]
    },
    {
        title: 'ambiguousBlock',
        instructions: `
        <h1>In this task series...</h1>
        <p>You’ll see a bag represented by a colored bar showing the proportions of blue and red chips it contains.</p>
        <p>However, for this series of decisions, you will not see the exact proportions of blue and red chips.</p>
        <p>A gray bar will cover part of the colored bar to obscure some information about the bag’s contents. Example:</p>
        <img src='img/amb/amb-74-5.png'>
        <p>You can choose to play the lottery (draw a random chip) or take a sure reward of $5.</p>
        <p>If a blue chip is drawn, you earn $0; if a red chip is drawn, you earn the amount shown for that round.</p>
        <p>When you are ready, press <span class='key'>SPACE</span> to begin.</>
    `,
        stimuli: [
            { image: 'img/amb/amb-74-5.png' },
            { image: 'img/amb/amb-74-8.png' },
            { image: 'img/amb/amb-74-20.png' },
            { image: 'img/amb/amb-74-50.png' },
            { image: 'img/amb/amb-74-125.png' },
            { image: 'img/amb/amb-50-5.png' },
            { image: 'img/amb/amb-50-8.png' },
            { image: 'img/amb/amb-50-20.png' },
            { image: 'img/amb/amb-50-50.png' },
            { image: 'img/amb/amb-50-125.png' },
            { image: 'img/amb/amb-24-5.png' },
            { image: 'img/amb/amb-24-8.png' },
            { image: 'img/amb/amb-24-20.png' },
            { image: 'img/amb/amb-24-50.png' },
            { image: 'img/amb/amb-24-125.png' }
        ]
    }
];


