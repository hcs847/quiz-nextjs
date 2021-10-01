import headerStyles from '../styles/Header.module.css';
import Image from 'next/image';
import logo from '../public/quiz-trans.gif';

const Header = () => {
    return (
        <header className='flex'>
            <div className={headerStyles.img}>
                <Image src={logo} width={200} height={200} />
            </div>
            <div className={headerStyles.title}>
                <div className='flex fx-col'>
                    <span className={headerStyles.js}>javascript</span>
                    <span className={headerStyles.int}> interview</span>
                </div>
                <div>
                    <span className={headerStyles.prep}> Prep</span>
                </div>
            </div>
        </header>
    )
}

export default Header
