import { useState } from "react";
import { server } from "../../config";
import { useRouter } from 'next/router';
import { getSubject } from "../api/quizes/[subject]";
import quizStyles from '../../styles/quiz.module.css'

const Subject = ({ quiz }) => {
    const router = useRouter();
    const { subject } = router.query;
    const [checked, setChecked] = useState(false);


    return (
        <>
            <h2 className={quizStyles.title}>{subject} Quiz</h2>
            <div className={quizStyles.card_quiz}>
                <div className={quizStyles.question}>{quiz[0].question}</div>
                {quiz[0].answers.map(a => (
                    <div className={quizStyles.answers} key={a}>
                        {a}
                    </div>
                ))
                }
                <button type='button' className='btn'>Submit</button>
            </div>
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