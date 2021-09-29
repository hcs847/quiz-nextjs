import { quizes } from '/public/data';

export default function handler({ query: { subject } }, res) {
    const filtered = quizes.filter(question => question.subject === subject);

    if (filtered.length) {
        res.status(200).json(filtered)
    } else {
        res.status(404).json({ message: `subject ${subject} is not found` })
    }

}