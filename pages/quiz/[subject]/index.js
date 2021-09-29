import { server } from "../../../config";
import Link from 'next/link';
import { useRouter } from 'next/router';


const quiz = ({ quiz }) => {
    return (
        <>
            <h1>{quiz.subject}</h1>
            <Link href='/'>Go Back</Link>
        </>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/quizes/${context.params.subject}`);
    const quiz = await res.json();

    return {
        props: {
            quiz
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/quizes`);
    const quizes = await res.json();

    const subjects = quizes.map((quiz) => quiz.subject);
    const paths = subjects.map((subject) => ({ params: subject }));

    return {
        paths,
        fallback: false,
    }
}

export default quiz;