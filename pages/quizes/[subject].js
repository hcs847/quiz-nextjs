import { server } from "../../config";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getSubject } from "../api/quizes/[subject]";

const Subject = ({ quiz }) => {
    // const router = useRouter();
    // const { subject } = router.query;
    console.log(quiz, "== subject");
    return (
        <>
            {quiz} Quiz
        </>
    );
}

export const getStaticProps = async (context) => {
    // const res = await fetch(`${server}/api/quizes/${context.params.subject}`);
    // const quiz = await res.json();
    // console.log(context.params, '==context');
    const subject = getSubject(context.params.subject);
    console.log(subject, "staticprops")
    return {
        props: {
            subject: subject[0].questions[0]
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/quizes`);
    const quizes = await res.json();
    console.log(quizes.data, '===from getpath')

    const subjects = quizes.data.map((quiz) => quiz.subject);
    const paths = subjects.map((subject) => ({ params: subject }));

    return {
        paths,
        fallback: false,
    }
}

export default Subject;