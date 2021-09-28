import Head from 'next/head';
import { server } from '../config';
// console.log(server);

export default function Home({ quizes }) {
  return (
    < >
      <Head>
        <title>Quiz Base | Home</title>
        <meta name='keywords' content='javascript quiz' />
      </Head>
      <div >
        <h3>Questions list</h3>
        {quizes.map(quiz => (
          <div key={quiz.id}>

            <p>{quiz.question}</p>
          </div>
        ))}

      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/questions`);
  console.log(await res, "res.data===");
  const quizes = await res.json();

  if (!quizes) {
    return {
      notFound: true
    }
  }
  return {
    props: { quizes: quizes }
  }
}

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }


// export default Quizes;