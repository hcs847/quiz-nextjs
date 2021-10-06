import { quizes } from '/public/data';

export const getSubject = (subject) => {
    const filteredSubject = quizes.filter(question => question.subject === subject);
    const questions = filteredSubject[0].questions.map((q) => (
        {
            question: q.description,
            answers: q.answers.map(q => q.answerText)
        }
    )
    );
    return questions;
}

export default function handler({ query: { subject } }, res) {
    if (subject.length) {
        res.status(200).json(getSubject(subject));
    } else {
        res.status(404).json({ message: `subject is not found` })
    }
}