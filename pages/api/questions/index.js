import { questions } from '/public/data';

export default function handler(req, res) {
    res.status(200).json(questions)
}