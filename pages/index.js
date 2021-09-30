import Head from 'next/head';
import { useState } from 'react';
import QuestionsList from '../components/QuestionsList';
import { server } from '../config';

import { getQuizes } from './api/quizes';

export default function Home({ quizes }) {
  const [showQuestions, setShowQuestions] = useState({});
  const toggleQuestions = (subject) => {
    setShowQuestions({ ...showQuestions, [subject]: !showQuestions[subject] });
    console.log(subject, showQuestions)
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
          <div key={quiz.subject}>
            <button type='button'
              className='btn btn-modal'
              onClick={() => toggleQuestions(quiz.subject)}
            >{quiz.subject}</button>
            <div className={showQuestions[quiz.subject] ? 'question' : 'hidden'}>
              <QuestionsList quiz={quiz} />
            </div>
          </div>
        ))}

      </div>
    </>
  )
}

export const getServerSideProps = async () => {

  // const res = await fetch(`${server}/api/quizes`);
  // const quizes = await res.json();

  const quizes = getQuizes();

  console.log('quizes from get props', quizes, typeof quizes);

  // getData();

  if (!quizes) {
    return {
      notFound: true
    }
  }
  return {
    props: { quizes: quizes.data }
  }
}
