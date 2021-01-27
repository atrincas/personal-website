import { githubLanguageUsage } from 'github-language-usage'

import Social from '../components/Social/Social'
import Technologies from '../components/Technologies'
import LanguageStats from '../components/LanguageStats'

import { Props } from '../types'

function Home({ data }: Props) {
  return (
    <>
      <header className="flex flex-col-reverse items-center md:flex-row md:justify-between ">
        <hgroup>
          <h1>Hi, I'm Adam</h1>
          <h2>Front_End_Developer</h2>
        </hgroup>
        <img src="/images/adam-trincas.jpeg" alt="Adam Trincas" className="w-32 h-32 rounded" />
      </header>
      <hr className="hidden md:block md:w-1/12" />
      <p className="w-full text-sm md:w-6/12 md:text-base mt-5">
        I am a self taught web developer, passionate about exploring and learning new things related
        to web technologies.
      </p>
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
              rel="noopener"
            >
              npm package
            </a>
            .
          </p>
        </article>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const data = await githubLanguageUsage(process.env.PAT_GITHUB || '', 'atrincas')

  return { props: { data } }
}

export default Home
