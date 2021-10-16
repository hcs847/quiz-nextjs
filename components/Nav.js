import Link from 'next/link';
import { useEffect, useState } from 'react';
import navStyles from '../styles/Nav.module.css';
import { getSubjects } from '../pages/api/quizzes';
import { server } from "../config";

export default function Nav() {
    const subjects = getSubjects();
    const [snippetsList, setSnippetList] = useState([]);
    const getSnippets = async () => {
        const res = await fetch(`${server}api/snippets`);
        const snippets = await res.json();
        setSnippetList(...snippetsList, snippets);
    }

    useEffect(() => {
        getSnippets();
    }, [])

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
                {snippetsList.map(s => (
                    <li key={s.snippet}>
                        <Link href={`/snippets/${s.snippet}`}>{s.snippet}</Link>
                    </li>
                ))}
                {/* <li>
                    <Link href={`/snippets/counter`}>Counter</Link>
                </li> */}
            </ul>
        </nav>
    )
}
