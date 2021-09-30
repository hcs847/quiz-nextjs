import { quizes } from '/public/data';

// import { server } from '../../../config';

export const getQuizes = () => {
    console.log('quizes api===', quizes)
    return { data: quizes };
}

export default function handler(req, res) {
    res.status(200).json(getQuizes());
}
// export const getData = async () => {
//     const res = await fetch(`${server}/api/quizes`);
//     const quizes = await res.json();
//     return quizes;
// }