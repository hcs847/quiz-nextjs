import Link from 'next/link';

const QuestionsList = ({ quiz }) => {
    // console.log(quiz, 'from qustionList');
    return (
        <>
            {quiz.questions.map(q => (
                <div key={q.id}>

                    {q.question}
                </div>
            ))}
        </>
    );
}

export default QuestionsList;