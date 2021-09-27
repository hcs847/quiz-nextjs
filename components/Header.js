import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div className='flex fx-center fx-col'>
            <h1 className={headerStyles.title}>Javascript Quiz Home</h1>
            <p className={headerStyles.description}>Try a quiz to test your Full Stack knowledge
                <br />Retake it until you Ace it!</p>
        </div>
    )
}

export default Header
