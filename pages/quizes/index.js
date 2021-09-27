import { server } from '../../config'

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/questions`);
    const data = await res.json();

    return {
        props: { quizes: data }
    }

}
const Quizes = ({ quizes }) => {
    console.log(quizes)
    return (
        <>
            {quizes.map(quiz => (
                <div key={quiz.id}>
                    <p>{quiz.question}</p>
                </div>
            ))}
        </>
    );
}

export default Quizes;