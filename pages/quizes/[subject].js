import { useState, useEffect } from "react";
import { server } from "../../config";
import { useRouter } from 'next/router';
import { getSubject } from "../api/quizes/[subject]";
import quizStyles from '../../styles/quiz.module.css'

const Subject = ({ quiz }) => {
    const router = useRouter();
    const { subject } = router.query;
    const [checked, setChecked] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const toggleAnswer = (answer) => {
        // setting state to dynamically created element
        setChecked({
            [answer.answerText]: !checked[answer.answerText],
            correct: answer.correct
        });
    }
    const handleSubmit = () => {
        if (checked.correct) setScore(score + 1);
        console.log('score==', score, quiz);
        if (currentQuestion < quiz.length) setCurrentQuestion(currentQuestion + 1);
        console.log("currQustion==", currentQuestion);

    }

    return (
        <>
            <h2 className={quizStyles.title}>{subject} Quiz</h2>
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
                        onClick={() => handleSubmit()}>Submit</button>
                </div>
            ) : (
                <div>Your Score is {score / quiz.length * 100}%</div>
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