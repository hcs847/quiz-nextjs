
import Link from 'next/link';

const NotFound = () => {
    return (
        <>
            <h1>Oooops...</h1>
            <h2>The page cannot be found</h2>
            <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
        </>
    );
}

export default NotFound;