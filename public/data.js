export const quizes = [{

    subject: "javascript",
    questions: [
        {
            description: "What does DOM stand for? ",
            id: 1,
            answers: [{
                answerText: "Document Object Model",
                correct: true
            }, {
                answerText: "Document Objective Modeling",
                correct: false
            }, {
                answerText: "Domain Object Mail",
                correct: false
            }]
        },
        {

            description: "What is a Callback function? ",
            id: 2,
            answers: [{

                answerText: "A function that calls back the DOM",
                correct: false
            }, {
                answerText: "A function passed as an argument into another function",
                correct: true
            }, {
                answerText: "A function that calls back another file",
                correct: false
            }]
        },
        {

            description: "What is the difference between property and method setup",
            id: 3,
            answers: [{
                answerText: "Properties are set up without quatation marks",
                correct: false
            }, {
                answerText: "A property setup syntax is: .property = value, while for Methods it’s: method( )",
                correct: true
            }, {
                answerText: "Methods are setup with at the begining of the code",
                correct: false
            }]
        },
        {

            description: "How do you print “Hello World” to the console? ",
            id: 4,
            answers: [{
                answerText: 'console.log("Hello World")',
                correct: true
            }, {
                answerText: 'console.log.Hello World',
                correct: false
            }, {
                answerText: 'alert.Hello.World',
                correct: false
            }]
        },
        {

            description: "Which of the following are the Logical operators for Not, Or, And?",
            id: 5,
            answers: [{
                answerText: "x, ?, & ",
                correct: false
            }, {
                answerText: " ! , || , && ",
                correct: true
            }, {
                answerText: " !!, |, # ",
                correct: false
            }]
        },
        {

            description: "Which one of the values is NOT Falsy? ",
            id: 6,
            answers: [{
                answerText: "Null",
                correct: false
            }, {
                answerText: "’False’",
                correct: true
            }, {
                answerText: "0",
                correct: false
            }]
        },
        {

            description: "What is the correct syntax of For Loops? ",
            id: 7,
            answers: [{
                answerText: 'for (var i = 0 ; i < n ; i++ ) { };',
                correct: true
            }, {
                answerText: 'for (var i = 0 , i < n , i++ );',
                correct: false
            }, {
                answerText: 'for (var i = 0 &&i < n && i++ );',
                correct: false
            }]
        },
        {

            description: "What Method is used to extract the number of items in an array? ",
            id: 8,
            answers: [{
                answerText: "The extract function",
                correct: false
            }, {
                answerText: "The length property",
                correct: true
            }, {
                answerText: "The get method",
                correct: false
            }]
        },
        {

            description: "How do you return the nth item of a string? ",
            id: 9,
            answers: [{
                answerText: 'string.charAt(n)',
                correct: true
            }, {
                answerText: '"string.nth()"',
                correct: false
            }, {
                answerText: '"string(nth) ="',
                correct: false
            }]
        },

        {

            description: "How do you concatenate strings in JavaScript? ",
            id: 10,
            answers: [{
                answerText: " stringA && stringB && stringC",
                correct: false
            }, {
                answerText: "stringA + stringB + stringC ",
                correct: true
            }, {
                answerText: "stringA.stringB.sringC",
                correct: false
            }]
        },
    ]
},
{
    subject: "http",
    questions: [

        {
            description: "What are CRUD operations? ",
            id: 11,
            answers: [{
                answerText: "Create, Read, Update, Delete with their corresponding HTTP verbs: Post, Get, Put , Delete",
                correct: true
            },
            {
                answerText: "Create, React, Update, Derive",
                correct: false
            },
            {
                answerText: "Cut, Redo, Update, Delete",
                correct: false
            }
            ]
        },

        {
            description: "What is a 403 error? ",
            id: 12,
            answers: [{
                answerText: "Not found, the server cannot find the resource",
                correct: false
            },
            {
                answerText: "Invalid request",
                correct: false
            },
            {
                answerText: "forbidden, a user made a valid request but the server is refusing to serve due to lack of permission to access the resource.",
                correct: true
            }
            ]
        }
    ]

},
{
    subject: "react",
    questions: [
        {
            description: "Is React declarative or imperative",
            id: 13,
            answers: [{
                answerText: "React is imperative since it's working directly with the DOM API",
                correct: false
            },
            {
                answerText: "React is declarative since it's only defines what it wants to be done.",
                correct: true
            },
            {
                answerText: "React is neither declarative nor imperative",
                correct: false
            }]
        },
        {
            description: "What is the virtual DOM?",
            id: 14,
            answers: [{
                answerText: "It's another name for the DOM.",
                correct: false
            },
            {
                answerText: "It's a sloewer version of the DOM.",
                correct: false
            },
            {
                answerText: "A lightweight Javascript representation of the DOM. Updating it is faster than updating the actual DOM since nothing has to be rendered into the screen.",
                correct: true
            }]
        },
        {
            description: "What makes React different from other frameworks?",
            id: 15,
            answers: [{
                answerText: "JSX and prop drilling.",
                correct: true
            },
            {
                answerText: "JSX and rendering.",
                correct: false
            },
            {
                answerText: "Ability to use Redux",
                correct: false
            }]
        }
    ]
},
{
    subject: "nextjs",
    questions: [
        {
            description: "What is Next.js?",
            id: 16,
            answers: [{
                answerText: "A react framework for pre rendered websites of server side rendering or static site generation.",
                correct: true
            },
            {
                answerText: "A vue framwork of server side rendering.",
                correct: false
            },
            {
                answerText: "An angular framework of static site generation.",
                correct: false
            }
            ]
        },
        {
            description: "What is the layout component in Next JS?",
            id: 17,
            answers: [
                {
                    answerText: "The first component in the main page.",
                    correct: false
                },
                {
                    answerText: "A component that wraps all the pages in order to display the same upper lower content on every page by having access to the children.",
                    correct: true
                },
                {
                    answerText: "The navigation component of Next JS.",
                    correct: false
                }]
        },
        {
            description: "What is the difference between getServerSideProps and getStaticProps?",
            id: 18,
            answers: [{
                answerText: "The getServerSideProps method will fetch the data at the time of the request while getStaticProps will fetch the data at build time.",
                correct: true
            },
            {
                answerText: "There is no different between the two.",
                correct: false
            },
            {
                answerText: "The getServerSideProps method will fetch the data at build time while getStaticProps will fetch the data at the time of the request.",
                correct: false
            }]
        }
    ]
},
{
    subject: "node",
    questions: [
        {
            description: "",
            id: 19,
            answers: [{
                answerText: "",
                correct: ""
            }]
        }
    ]
},
{
    subject: "graphQl",
    questions: [
        {
            description: "",
            id: 20,
            answers: [{
                answerText: "",
                correct: ""
            }]
        }
    ]
},
{
    subject: "css",
    questions: [
        {
            description: "",
            id: 21,
            answers: [{
                answerText: "",
                correct: ""
            }]
        }
    ]
},
{
    subject: "html",
    questions: [
        {
            description: "",
            id: 22,
            answers: [{
                answerText: "",
                correct: ""
            }]
        }
    ]
}
];
