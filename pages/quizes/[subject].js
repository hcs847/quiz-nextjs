import { server } from "../../config";
import { useRouter } from 'next/router';
import { getSubject } from "../api/quizes/[subject]";
import quizStyles from '../../styles/quiz.module.css'

const Subject = ({ quiz }) => {
    const router = useRouter();
    const { subject } = router.query;
    return (
        <>
            <h2 className={quizStyles.title}>{subject} Quiz</h2>
            {quiz.map(q => (
                <ul key={q.question}>
                    <li className={quizStyles.question}>{q.question}</li>

                    {q.answers.map(a => (
                        <div className={quizStyles.answers} key={a}>
                            <input type='checkbox' unchecked />
                            {a}
                        </div>
                    ))
                    }
                </ul>
            ))}
        </>
    );
}

export const getStaticProps = async (context) => {
    const quiz = getSubject(context.params.subject);
    return {
        props: {
            quiz
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}api/quizes`);
    const quizes = await res.json();
    const subjects = quizes.data.map((quiz) => quiz.subject);
    const paths = subjects.map((subject) => ({ params: { subject } }));

    return {
        paths,
        fallback: false,
    }
}

export default Subject;