import { githubLanguageUsage } from 'github-language-usage'

import Social from '../components/Social/Social'
import Technologies from '../components/Technologies'
import LanguageStats from '../components/LanguageStats'

import { Props } from '../types'

function Home({ data }: Props) {
  return (
    <main role="main" className="container-md max-w-screen-md mx-auto px-5 py-10">
      <header className="flex flex-col-reverse items-center md:flex-row md:justify-between ">
        <hgroup>
          <h1>Hi, I'm Adam</h1>
          <h2>Front_End_Developer</h2>
        </hgroup>
        <img src="/images/adam-trincas.jpeg" alt="Adam Trincas" className="w-32 h-32 rounded" />
      </header>
      <Social />
      <hr className="my-10" />
      <div className="flex flex-col md:flex-row md:justify-between">
        <Technologies />
        <article className="my-10 md:max-w-xs">
          <h3 className="mb-2 relative">My Github language usage</h3>
          <LanguageStats data={data} />
          <p className="mt-5 text-xs italic">
            Contribution to this{' '}
            <a
              className="text-dark-blue underline hover:no-underline"
              href="https://www.npmjs.com/package/github-language-usage"
              target="_blank"
            >
              npm package
            </a>
            .
          </p>
        </article>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const data = await githubLanguageUsage(process.env.PAT_GITHUB || '', 'atrincas')

  return { props: { data } }
}

export default Home
