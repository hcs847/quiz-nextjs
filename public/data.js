export const quizes = [{

    subject: "javascript",
    questions: [
        {
            question: "What does DOM stand for? ",
            id: 1,
            answers: [{
                text: "Document Object Model",
                correct: true
            }, {
                text: "Document Objective Modeling",
                correct: false
            }, {
                text: "Domain Object Mail",
                correct: false
            }]
        },
        {

            question: "What is a Callback function? ",
            id: 2,
            answers: [{

                text: "A function that calls back the DOM",
                correct: false
            }, {
                text: "A function passed as an argument into another function",
                correct: true
            }, {
                text: "A function that calls back another file",
                correct: false
            }]
        },
        {

            question: "What is the difference between property and method setup",
            id: 3,
            answers: [{
                text: "Properties are set up without quatation marks",
                correct: false
            }, {
                text: "A property setup syntax is: .property = value, while for Methods it’s: method( )",
                correct: true
            }, {
                text: "Methods are setup with at the begining of the code",
                correct: false
            }]
        },
        {

            question: "How do you print “Hello World” to the console? ",
            id: 4,
            answers: [{
                text: 'console.log("Hello World")',
                correct: true
            }, {
                text: 'console.log.Hello World',
                correct: false
            }, {
                text: 'alert.Hello.World',
                correct: false
            }]
        },
        {

            question: "Which of the following are the Logical operators for Not, Or, And?",
            id: 5,
            answers: [{
                text: "x, ?, & ",
                correct: false
            }, {
                text: " ! , || , && ",
                correct: true
            }, {
                text: " !!, |, # ",
                correct: false
            }]
        },
        {

            question: "Which one of the values is NOT Falsy? ",
            id: 6,
            answers: [{
                text: "Null",
                correct: false
            }, {
                text: "’False’",
                correct: true
            }, {
                text: "0",
                correct: false
            }]
        },
        {

            question: "What is the correct syntax of For Loops? ",
            id: 7,
            answers: [{
                text: 'for (var i = 0 ; i < n ; i++ ) { };',
                correct: true
            }, {
                text: 'for (var i = 0 , i < n , i++ );',
                correct: false
            }, {
                text: 'for (var i = 0 &&i < n && i++ );',
                correct: false
            }]
        },
        {

            question: "What Method is used to extract the number of items in an array? ",
            id: 8,
            answers: [{
                text: "The extract function",
                correct: false
            }, {
                text: "The length property",
                correct: true
            }, {
                text: "The get method",
                correct: false
            }]
        },
        {

            question: "How do you return the nth item of a string? ",
            id: 9,
            answers: [{
                text: 'string.charAt(n)',
                correct: true
            }, {
                text: '"string.nth()"',
                correct: false
            }, {
                text: '"string(nth) ="',
                correct: false
            }]
        },

        {

            question: "How do you concatenate strings in JavaScript? ",
            id: 10,
            answers: [{
                text: " stringA && stringB && stringC",
                correct: false
            }, {
                text: "stringA + stringB + stringC ",
                correct: true
            }, {
                text: "stringA.stringB.sringC",
                correct: false
            }]
        },
    ]
},
{
    subject: "http",
    questions: [

        {
            question: "How do you concatenate strings in JavaScript? ",
            id: 11,
            answers: [{
                text: "Create, Read, Update, Delete with their corresponding HTTP verbs: Post, Get, Put , Delete",
                correct: true

            }]
        }
    ]

},
{
    subject: "react",
    questions: [
    ]
}
];
