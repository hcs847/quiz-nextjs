import { quizes } from '/public/data';

export const getSubject = (subject) => {
    const filtered = quizes.filter(question => question.subject === subject);

    return { data: filtered }

}

export default function handler({ query: { subject } }, res) {
    // const filtered = quizes.filter(question => question.subject === subject);

    if (filtered.length) {
        res.status(200).json(getSubject(subject));
    } else {
        res.status(404).json({ message: `subject ${getSubject()} is not found` })
    }

}