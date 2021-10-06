import Head from 'next/head';
import { useState } from 'react';
import QuestionsList from '../components/QuestionsList';
import { getQuizes } from './api/quizes';

export default function Home({ quizes }) {
  const [showQuestions, setShowQuestions] = useState({});
  const toggleQuestions = (subject) => {
    setShowQuestions({ ...showQuestions, [subject]: !showQuestions[subject] });
  }

  return (
    < >
      <Head>
        <title>Quiz Base | Home</title>
        <meta name='keywords' content='javascript quiz' />
      </Head>
      <h1>
        Welcome to your javascript interview prep site.
      </h1>
    </>
  )
}

export const getServerSideProps = async () => {
  const quizes = getQuizes();
  if (!quizes) {
    return {
      notFound: true
    }
  }
  return {
    props: { quizes: quizes.data }
  }
}
