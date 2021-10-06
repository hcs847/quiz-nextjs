import Link from 'next/link';

const QuestionsList = ({ quiz }) => {
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