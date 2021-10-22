import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { getSubjects } from '../pages/api/quizzes';
import { getSnippets } from '../pages/api/snippets';

export default function Nav() {
    const subjects = getSubjects();
    const snippets = getSnippets();

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
