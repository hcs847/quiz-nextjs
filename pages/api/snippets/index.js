import { snippets } from '../../../public/snippets.js';

export const getSnippets = () => {
    const snippetList = snippets.map(s => s.snippet);
    return snippetList;
}

export default function handler(req, res) {
    res.status(200).json(getSnippets());
}
