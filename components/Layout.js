import styles from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className={styles.grid}>
            <Header />
            <Nav />
            <div className={styles.main}>
                {children}
            </div>
        </div>
    )
}

export default Layout
