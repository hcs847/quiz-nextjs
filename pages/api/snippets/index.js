import fs from 'fs';

export const getSnippets = () => {
    const files = fs.readdirSync('snippets');
    const snippets = files.map((fileName) => ({
        snippet: fileName.replace('.md', '')
    }))
    return snippets;
}

async function handler(req, res) {
    console.log(getSnippets());
    res.status(200).json(getSnippets());
}

export default handler;