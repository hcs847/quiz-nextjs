import headerStyles from '../styles/Header.module.css';
import Image from 'next/image';
import logo from '../public/quiz-transp.gif';

const Header = () => {
    return (
        <header className='flex'>
            <h1 className={headerStyles.title}
            ><span>Javascript</span><span> Interview</span><span> Prep</span></h1>
            <Image src={logo} width={249} height={150} />
        </header>
    )
}

export default Header
