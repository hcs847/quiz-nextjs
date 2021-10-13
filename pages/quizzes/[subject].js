import { useState, useEffect } from "react";
import { server } from "../../config";
import { useRouter } from 'next/router';
import { getSubject } from "../api/quizzes/[subject]";
import quizStyles from '../../styles/quiz.module.css'

const Subject = ({ quiz }) => {
    const router = useRouter();
    const { subject } = router.query;
    const [checked, setChecked] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [errorMessage, setErrorMessage] = useState('')
    const toggleAnswer = (answer) => {
        // setting state to dynamically created element
        setChecked({
            [answer.answerText]: !checked[answer.answerText],
            correct: answer.correct
        });
    }
    const handleSubmit = () => {
        if (checked.correct) setScore(score + 1);
        if (currentQuestion < quiz.length) setCurrentQuestion(currentQuestion + 1);
        setChecked({});
        setErrorMessage('');
    };

    // reset score and current question when changing subject
    useEffect(() => {
        setScore(0);
        setCurrentQuestion(0);
    }, [subject])

    return (
        <>
            <h2 className='title'><span>{subject}</span> quiz</h2>
            {currentQuestion < quiz.length ? (
                <div className={quizStyles.card_quiz}>
                    <div className={quizStyles.question}>{quiz[currentQuestion].question}</div>
                    {quiz[currentQuestion].answers.map(a => (
                        <div className={checked[a.answerText] ? quizStyles.answer__checked : quizStyles.answers} key={a.answerText}
                            onClick={() => toggleAnswer(a)}>
                            {a.answerText}
                        </div>
                    ))
                    }
                    <button type='button' className='btn'
                        // trigger submit action only if an answer was clicked
                        onClick={Object.keys(checked).length && (() => handleSubmit()) || (() => setErrorMessage('Please select an answer'))}>Submit</button>
                    {errorMessage && (<div className='errors'>{errorMessage}</div>)}
                </div>
            ) : (
                <div className={quizStyles.score}>You answered {score} questions correctly out of {quiz.length} in <span>{subject}.</span></div>
            )
            }
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
    const res = await fetch(`${server}api/quizzes`);
    const quizzes = await res.json();
    const subjects = quizzes.data.map((quiz) => quiz.subject);
    const paths = subjects.map((subject) => ({ params: { subject } }));

    return {
        paths,
        fallback: false,
    }
}

export default Subject;