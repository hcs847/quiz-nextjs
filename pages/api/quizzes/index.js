import { quizzes } from '/public/data';

export const getSubjects = () => {
    const subjects = quizzes.map(q => q.subject);
    return subjects;
}

export default function handler(req, res) {
    res.status(200).json(quizzes);
}
