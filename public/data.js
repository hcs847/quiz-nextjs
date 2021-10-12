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

            description: "What is the difference between property and method setup?",
            id: 3,
            answers: [{
                answerText: "Properties are set up without quotation marks",
                correct: false
            }, {
                answerText: "A property setup syntax is: .property = value, while for Methods it’s: method( )",
                correct: true
            }, {
                answerText: "Methods are setup with at the beginning of the code",
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
            description: "Is React declarative or imperative?",
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
                answerText: "It's a slower version of the DOM.",
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
            description: "What is Node.js?",
            id: 19,
            answers: [{
                answerText: "A virtual machine that uses javascript as its scripting language and runs Chrome's VS engine. Is an event driven architecture with asynchronous I/O.",
                correct: true
            }, {
                answerText: "A library used to improve javascript web apps.",
                correct: false
            }, {
                answerText: "A backend javascript framework that is needed to use react.",
                correct: false
            }]
        }, {
            description: "Is Node.js multi-threaded?",
            id: 20,
            answers: [{
                answerText: "Yes, it is.",
                correct: false
            }, {
                answerText: "No it isn't, threads are not relevant for Node.js.",
                correct: false
            }, {
                answerText: "No, it is single-threaded, was created to try the theory of doing async processing on a single thread.",
                correct: true
            }]
        }, {
            description: "What is the purpose of module.exports?",
            id: 21,
            answers: [{
                answerText: "It is used to expose function of a module or file in order to be used elsewhere in the project.",
                correct: true
            }, {
                answerText: "Is used to export the project to a version control repository.",
                correct: false
            }, {
                answerText: "Its purpose is to make the repo available online.",
                correct: false
            }]
        }
    ]
},
{
    subject: "graphQl",
    questions: [
        {
            description: "What is GraphQL?",
            id: 22,
            answers: [{
                answerText: "A library for graphs manipulation",
                correct: false
            }, {
                answerText: "An alternative to writing APIs using REST developed by facebook",
                correct: true
            }, {
                answerText: "A graph tool for React",
                correct: false
            }]
        },
        {
            description: "What are the benefits of GraphQL?",
            id: 23,
            answers: [{
                answerText: "Easy to learn with great documentation.",
                correct: false
            }, {
                answerText: "More compatible with javascript compared to REST.",
                correct: false
            }, {
                answerText: "It retrieves only the minimum amount of data required by the client and can be limited to specific fields.",
                correct: true
            }]
        },
        {
            description: "What is the difference between REST APIs and GraphQL?",
            id: 24,
            answers: [{
                answerText: "GraphQL is the de facto standard for companies deploying APIs and launching developer platforms.",
                correct: false
            }, {
                answerText: "In REST, the endpoint you call is seperate from how you fetch it.",
                correct: false
            }, {
                answerText: "While REST API is an architectural concept for network-based software, GraphQL is a query language and a set of tools that operates over a single endpoint using HTTP.",
                correct: true
            }]
        }
    ]
},
{
    subject: "css",
    questions: [
        {
            description: "What is the difference between absolute and relative positioning?",
            id: 25,
            answers: [{
                answerText: "An absulute position place an element at a specific layer while relative is in comparison to the screen size.",
                correct: false
            }, {
                answerText: "By default, all the elements have a position: static. An element with position: absolute is positioned relative to its nearest positioned ancestor.",
                correct: true
            }, {
                answerText: "Relative position is absolute and rarely used.",
                correct: false
            }]
        }, {
            description: "What is the difference between rem, em, and why do we need them?",
            id: 26,
            answers: [{
                answerText: "In simple terms, em is relative to its parent whereas rem is relative to root font size. To remember this simply remember r in rem stands for root.",
                correct: true
            }, {
                answerText: "2",
                correct: false
            }, {
                answerText: "3",
                correct: false
            }]
        }, {
            description: "What is the box model?",
            id: 27,
            answers: [{
                answerText: "1",
                correct: false
            }, {
                answerText: "2",
                correct: false
            }, {
                answerText: "The box-sizing property allows us to include the padding and border in an element’s total width and height.",
                correct: true
            }]
        }
    ]
},
{
    subject: "html",
    questions: [
        {
            description: "What is HTML?",
            id: 28,
            answers: [{
                answerText: "A Hypertext Markup Language. It is the typical documents’ markup language for developing web pages to display on the web browser.",
                correct: true
            }, {
                answerText: "A Hypertext Machine Learning used for developing web pages.",
                correct: false
            }, {
                answerText: "A Hyper Type Markup Library enabling web pages development in addition to javascript.",
                correct: false
            }]
        }, {
            description: "What is the key difference between HTML Elements and Tags?",
            id: 29,
            answers: [{
                answerText: "A tag can be used only on sub elements like list items",
                correct: false
            }, {
                answerText: "Elements are sections of the webpage, e.g:image while tags are used for elements to communicate with the browser on how to represent text, e.g.: <p>",
                correct: true
            }, {
                answerText: "Only elements are represented in the DOM.",
                correct: false
            }]
        }, {
            description: "What is the HTML Layout?",
            id: 30,
            answers: [{
                answerText: "An HTML web page is arranged in a specific layout (format) with primary sections of header, main and footer.",
                correct: true
            }, {
                answerText: "The combination of elements within a web page.",
                correct: false
            }, {
                answerText: "The order in which scripts are listed on an HTML page.",
                correct: false
            }]
        }
    ]
}
];
