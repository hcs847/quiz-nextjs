import { useRouter } from "next/dist/client/router";

const Questions = () => {
    const router = useRouter();
    const { subject } = router.query;
    console.log(router.query.questions, "== questions");
    return (
        <>
            {subject} Quiz Questions
        </>
    );
}

export default Questions;