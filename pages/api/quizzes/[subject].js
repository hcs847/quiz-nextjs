import { quizzes } from '../../../public/data';

export const getSubject = (subject) => {
    const filteredSubject = quizzes.filter(question => question.subject === subject);
    const questions = filteredSubject[0].questions.map((q) => (
        {
            question: q.description,
            answers: q.answers
        }
    )
    );
    return questions;
}

export default function handler({ query: { subject } }, res) {
    if (subject.length) {
        res.status(200).json(getSubject(subject));
    } else {
        res.status(404).json({ message: `${subject} not found.` })
    }
}