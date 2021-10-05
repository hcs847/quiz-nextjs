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

    console.log("questions===", questions, filteredSubject[0].questions, '==filtered [subject] questions');
    return questions;

}

export default function handler({ query: { subject } }, res) {
    console.log(subject, "==subject API")

    if (subject.length) {
        res.status(200).json(getSubject(subject));
    } else {
        res.status(404).json({ message: `subject ${getSubject()} is not found` })
    }

}