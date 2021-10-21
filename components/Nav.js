import Link from 'next/link';
import useSWR from "swr";
import navStyles from '../styles/Nav.module.css';
import { getSubjects } from '../pages/api/quizzes';
import { server } from "../config";

export default function Nav() {
    const subjects = getSubjects();

    const fetcher = url => fetch(url).then(res => res.json());
    const useGetSnippets = url => {
        const { data: snippets, error } = useSWR(url, fetcher);
        return { snippets, error }
    }

    const { snippets, error } = useGetSnippets(`${server}api/snippets`);
    console.log("error ===", error);
    if (error) return <h1>Something wnet wrong!</h1>
    if (!snippets) return <h1>Loading ...</h1>

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
                {snippets.map(s => (
                    <li key={s.snippet}>
                        <Link href={`/snippets/${s.snippet}`}>{s.snippet}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
