import Link from 'next/link';
import useSWR from "swr";
import navStyles from '../styles/Nav.module.css';
import { getSubjects } from '../pages/api/quizzes';
import { getSnippets } from '../pages/api/snippets';
// import { server } from "../config";
// import { snippetJson } from '/public/snippets.js';

export default function Nav() {
    const subjects = getSubjects();
    const snippets = getSnippets();

    // console.log(snippetJson, "==snippet json");

    // const fetcher = url => fetch(url).then(res => res.json());
    // const useGetSnippets = url => {
    //     const { data: snippets, error } = useSWR(url, fetcher);
    //     return { snippets, error }
    // }

    // const { snippets, error } = useGetSnippets(`${server}api/snippets`);
    // console.log("error ===", error);
    // if (error) return <h1>Something wnet wrong!</h1>
    // if (!snippets) return <h1>Loading ...</h1>

    // const snippets = [
    //     {
    //         "snippet": "counter"
    //     },
    //     {
    //         "snippet": "dropdown"
    //     },
    //     {
    //         "snippet": "fetch"
    //     }
    // ];

    return (
        <nav className={navStyles.nav}>
            <h3 className='title'>Quizzes</h3>
            <ul>
                {subjects.map(subject => (
                    <li key={subject}>
                        <Link href={`/quizzes/${subject}`}>{subject}</Link>
                    </li>
                ))}
            </ul>
            <h3 className='title'>Code Snippets</h3>
            <ul>
                {snippets.map(snippet => (
                    <li key={snippet}>
                        <Link href={`/snippets/${snippet}`}>{snippet}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
