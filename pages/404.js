import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

const FourOhFour = () => {
    const router = useRouter();

    useEffect(() => {
        // redirect users to homepage after 3 sec
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router]);

    return (
        <div className='not-found'>
            <h1>Oooops...</h1>
            <h3>The page cannot be found</h3>
            <p>Go back to <Link href='/'><a>Homepage</a></Link></p>
        </div>
    );
}

export default FourOhFour;