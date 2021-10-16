import fs from 'fs';

export const getSnippets = () => {
    const files = fs.readdirSync('snippets');
    const snippets = files.map((fileName) => ({
        snippet: fileName.replace('.md', '')
    }))
    return snippets;
}

export default function handler(req, res) {
    res.status(200).json(getSnippets());
}