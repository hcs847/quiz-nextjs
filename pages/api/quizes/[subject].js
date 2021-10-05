import { quizes } from '/public/data';

export const getSubject = (subject) => {
    const filteredSubject = quizes.filter(question => question.subject === subject);
    console.log(filteredSubject[0].questions[0], '==filtered [subject] questions', subject, "==subject from getsubject");
    return { subject: filteredSubject }

}

export default function handler({ query: { subject } }, res) {
    console.log(subject, "==subject API")

    if (subject.length) {
        res.status(200).json(getSubject(subject));
    } else {
        res.status(404).json({ message: `subject ${getSubject()} is not found` })
    }

}