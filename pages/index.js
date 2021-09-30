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
      <div >
        <h3>quizes list</h3>
        {quizes.map(quiz => (
          <>
            <div key={quiz.subject}>
              <button type='button'
                className='btn btn-modal'
                onClick={() => toggleQuestions(quiz.subject)}
              >{quiz.subject}</button>
            </div>
            <div className={showQuestions[quiz.subject] ? 'question' : 'hidden'}>
              <QuestionsList quiz={quiz} />
            </div>
          </>
        ))}
      </div>
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
