import fs from 'fs';
import path from 'path';
import ReactMarkdown from "react-markdown";
import matter from 'gray-matter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { xonokai } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = {
    code({ node, inline, className, children, ...props }) {
        const language = 'javascript'
        return !inline && language ? (
            <SyntaxHighlighter
                style={xonokai}
                language={language}
                PreTag="div" {...props}>
                {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>

        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    }
}

const Snippets = ({ htmlString }) => {
    return (
        <ReactMarkdown
            components={CodeBlock}>
            {htmlString}
        </ReactMarkdown>
    )
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('snippets');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', ''),
        },
    }));
    const cachedPaths = JSON.stringify(files.map((fileName) => (
        {
            snippet: fileName.replace('.md', '')
        }
    )
    ));

    fs.writeFile('public/snippets.js', 'export const snippets =' + cachedPaths, err => {
        if (err) return console.log(err);
        console.log('Posts cached');
    })
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