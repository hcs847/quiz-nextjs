import { quizes } from '/public/data';

export const getQuizes = () => {
    return { data: quizes };
}

export default function handler(req, res) {
    res.status(200).json(getQuizes());
}
