import fs from 'fs';
import path from 'path';
import ReactMarkdown from "react-markdown";
import matter from 'gray-matter';
import { PrismAsync as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Children } from 'react';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ value }) => {
    return (
        <SyntaxHighlighter style={dracula}>
            {value}
        </SyntaxHighlighter>
    )
}

const Snippets = ({ htmlString }) => {
    return (
        <ReactMarkdown
            object={CodeBlock}>
            {htmlString}
        </ReactMarkdown>
    )
}


export const getStaticPaths = async () => {
    const files = fs.readdirSync('snippets');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const fullPath = path.join('snippets', `${slug}.md`);
    const fileContents = fs
        .readFileSync(path.join(fullPath))
        .toString();

    const parsedMarkdown = matter(fileContents);

    return {
        props: {
            htmlString: parsedMarkdown.content,
            data: parsedMarkdown.data
        }
    };
}

export default Snippets