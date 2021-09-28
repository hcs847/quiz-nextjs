import { questions } from '/public/data';

export default function handler({ query: { subject } }, res) {
    // res.status(200).json(questions)
    const filtered = questions.filter(question => question.subject === subject);

    if (filtered.length) {
        res.status(200).json(filtered)
    } else {
        res.status(404).json({ message: `subject ${subject} is not found` })
    }

}