import { quizes } from '/public/data';

export const getQuizes = () => {
    return { data: quizes };
}

export const getSubjects = () => {
    const subjects = quizes.map(q => q.subject);
    return subjects;
}

export default function handler(req, res) {
    res.status(200).json(getQuizes());
}
