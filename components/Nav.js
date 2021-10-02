import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { useState } from 'react';
import { getQuizes } from '../pages/api/quizes';

export default function Nav() {

    return (
        <nav className={navStyles.nav}>

            <h3>Subjects</h3>
            <ul>
                <li>
                    <Link href='quizes/javascript'>Javascript</Link>
                </li>
                <li>
                    <Link href='quizes/react'>ReactJS</Link>
                </li>
                <li>
                    <Link href='quizes/nextjs'>NextJS</Link>
                </li>
                <li>
                    <Link href='quizes/node'>Node</Link>
                </li>
                <li>
                    <Link href='quizes/algorithms'>Algorithms</Link>
                </li>
            </ul>
        </nav>
    )
}
