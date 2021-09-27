import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
// import Image from 'next/image';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            {/* <Image src='/quiz-trans.gif' width={100} height={100} /> */}
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
