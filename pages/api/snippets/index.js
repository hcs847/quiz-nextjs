import fs from 'fs';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD'],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export const getSnippets = () => {
    const files = fs.readdirSync('snippets');
    const snippets = files.map((fileName) => ({
        snippet: fileName.replace('.md', '')
    }))
    return snippets;
}

async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors);
    console.log(await runMiddleware(req, res, cors), "===result")
    res.status(200).json(getSnippets());
}

export default handler;