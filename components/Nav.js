import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { getSubjects } from '../pages/api/quizes'

export default function Nav() {
    const subjects = getSubjects();

    return (
        <nav className={navStyles.nav}>
            <h3>Subjects</h3>
            <ul>
                {subjects.map(subject => (
                    <li key={subject}>
                        <Link href={`quizes/${subject}`}>{subject}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
