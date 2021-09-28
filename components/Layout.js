import styles from '../styles/Layout.module.css';
import Nav from './Nav';
// import Image from 'next/image';
// import logo from '../public/quiz-transp.gif';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className="flex">
                        <Header />
                        {/* <img src='/quiz-transp.gif' style={{ width: '498px', height: '300px' }} /> */}
                    </div>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
