import { server } from "../../config";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSubject } from "../api/quizes/[subject]";

const Subject = ({ quiz }) => {
    const router = useRouter();
    const { subject } = router.query;
    return (
        <>
            <p>{subject} Quiz</p>
            {quiz.map(q => (
                <ul key={q.question}>
                    <li>{q.question}</li>
                    {q.answers.map(a => (
                        <div style={{ color: 'rgb(25,101, 147)', fontFamily: 'Futura', background: 'rgba(255,255,255,0.7)', marginTop: '0.3rem', width: '75%' }} key={a}>{a}</div>
                    ))
                    }
                </ul>
            ))}
        </>
    );
}

export const getStaticProps = async (context) => {
    const quiz = getSubject(context.params.subject);
    // console.log("quiz.question from getStatic", quiz);
    return {
        props: {
            quiz
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/quizes`);
    const quizes = await res.json();
    // console.log(quizes.data, '===from getpath')

    const subjects = quizes.data.map((quiz) => quiz.subject);
    // console.log('subject paths', subjects);
    const paths = subjects.map((subject) => ({ params: { subject } }));

    return {
        paths,
        fallback: false,
    }
}

export default Subject;